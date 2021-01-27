import * as PIXI from 'pixi.js';

const loadResources = async () => {
  const loader = new PIXI.Loader();
  loader
    .add('eyer', '/maps/old/EyeR_extracted2.png')
    .add('eyel', '/maps/old/EyeL_extracted2.png')
    .add('jaw', '/maps/new/jawl3.png')
    .add('jawr', '/maps/new/jawr2.png')
    .add('eyel2', '/maps/new/eyel2.png')
    .add('eyer2', '/maps/new/eyer2.png')
    .add('eyer3', '/maps/new/eyer3.png')
    .add('eyer4', '/maps/new/eyer4.png')
    .add('eyer5', '/maps/new/eyer5.png')
    .add('eyer6', '/maps/new/eyer6.png')
    .add('mouth', '/maps/new/mouth.png')
    .add('mouthl', '/maps/new/mouthl.png')
    .add('mouthr', '/maps/new/mouthr.png')
    .add('mouth3', '/maps/new/mouth3.png')
    .add('mouth4', '/maps/new/mouth4.png')
    .add('mouth5', '/maps/new/mouth5.png')
    .add('chinfull', '/maps/new/chinfull.png')
    .add('chinfull2', '/maps/new/chinfull2.png')
    .add('chinfull3', '/maps/new/chinfull3.png')
    .add('chinfull4', '/maps/new/chinfull4.png');

  const {resources} = await new Promise(resolve => {
    loader.load((l, r) => {
      resolve({resources: r});
    });
  });

  return resources;
};

export default loadResources;
