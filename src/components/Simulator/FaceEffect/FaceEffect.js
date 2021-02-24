import * as faceapi from 'face-api.js';
import * as PIXI from 'pixi.js';
import PropTypes from 'prop-types';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

import createChinDisplacement2 from './createChinDisplacement2';
import createLeftEyeDisplacement from './createLeftEyeDisplacement';
import createMouthDisplacement from './createMouthDisplacement';
import createRightEyeDisplacement2 from './createRightEyeDisplacement2';
import loadResources from './loadResources';

const Wrapper = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;

  canvas {
    max-width: 100%;
  }
`;

const FaceEffect = ({height, onComplete: handleComplete, snapshot, version, width, ...props}) => {
  const canvas = useRef();
  const pixiCanvas = useRef();

  useEffect(() => {
    if (!snapshot) {
      return;
    }

    const image = new window.Image();

    image.onload = async () => {
      const {height: imageHeight, width: imageWidth} = image;

      console.log(imageHeight, imageWidth);

      canvas.current.width = width;
      canvas.current.height = height;

      pixiCanvas.current.width = width;
      pixiCanvas.current.height = height;

      const context = canvas.current.getContext('2d');

      context.drawImage(image, 0, 0, width, height);

      const detection = await faceapi.detectSingleFace(canvas.current).withFaceLandmarks();

      const resizedDetections = faceapi.resizeResults(detection, {height, width});

      faceapi.draw.drawFaceLandmarks(canvas.current, resizedDetections);

      const mouthOutline = resizedDetections.landmarks.getMouth();
      const leftEyeOutliine = resizedDetections.landmarks.getLeftEye();
      const jawOutline = resizedDetections.landmarks.getJawOutline();
      const rightEyeOutliine = resizedDetections.landmarks.getRightEye();

      const pixiApp = new PIXI.Application({
        height,
        width,
        view: pixiCanvas.current,
        transparent: true
      });

      var bg = PIXI.Sprite.from(image);
      bg.width = pixiApp.view.width;
      bg.height = pixiApp.view.height;
      bg.position.set(0, 0);
      pixiApp.stage.addChild(bg);

      const resources = await loadResources();

      const shouldShowEyes = version === 0 || version === 1;
      const shouldShowMouth = version === 0 || version === 2;
      const shouldShowChin = version === 0 || version === 3;

      const brt = new PIXI.BaseRenderTexture({
        width: pixiApp.view.width,
        height: pixiApp.view.height,
        resolution: 1,
        scaleMode: PIXI.SCALE_MODES.LINEAR
      });

      const rt = new PIXI.RenderTexture(brt);

      const sprite = new PIXI.Sprite(rt);

      const blur = new PIXI.filters.BlurFilter(8, 2);
      blur.blendMode = PIXI.BLEND_MODES.HARD_LIGHT;
      sprite.filters = [blur];

      pixiApp.stage.addChild(sprite);

      const {filterFull: mouthFilterFull, spriteFull: mouthSpriteFull} = createMouthDisplacement(
        resources,
        mouthOutline
      );

      const {filterFull: chinFilterFull2, spriteFull: chinSpriteFull2} = createChinDisplacement2(
        resources,
        jawOutline,
        rightEyeOutliine,
        leftEyeOutliine,
        mouthOutline
      );

      const {filter: leftEyeFilter, sprite: leftEyeSprite} = createLeftEyeDisplacement(
        resources,
        leftEyeOutliine,
        jawOutline
      );

      const {filter: rightEyeFilter2, sprite: rightEyeSprite2} = createRightEyeDisplacement2(
        resources,
        rightEyeOutliine,
        jawOutline
      );

      if (shouldShowMouth) {
        pixiApp.stage.addChild(mouthSpriteFull);
      }

      if (shouldShowEyes) {
        pixiApp.stage.addChild(leftEyeSprite, rightEyeSprite2);
      }

      if (shouldShowChin) {
        pixiApp.stage.addChild(chinSpriteFull2);
      }

      pixiApp.stage.filters = [
        shouldShowEyes ? leftEyeFilter : null,
        shouldShowEyes ? rightEyeFilter2 : null,
        shouldShowChin ? chinFilterFull2 : null,
        shouldShowMouth ? mouthFilterFull : null
      ].filter(f => f);

      if (typeof handleComplete === 'function') {
        const renderTexture = PIXI.RenderTexture.create(width, height);
        const extract = pixiApp.renderer.extract.canvas(pixiApp.stage, renderTexture);

        extract.toBlob(blob => {
          var url = URL.createObjectURL(blob);

          handleComplete(url);
        });
      }
    };

    image.src = snapshot;
  }, [snapshot]);

  return (
    <Wrapper {...props}>
      <canvas ref={canvas} style={{display: 'none'}} />
      <canvas id="resultCanvas" ref={pixiCanvas} />
    </Wrapper>
  );
};

FaceEffect.propTypes = {
  height: PropTypes.number,
  onComplete: PropTypes.func,
  snapshot: PropTypes.string,
  version: PropTypes.number,
  width: PropTypes.number
};

export default FaceEffect;
