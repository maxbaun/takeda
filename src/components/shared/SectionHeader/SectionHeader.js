import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';

const SectionHeader = styled.div`
  line-height: 1.42;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.8rem;
    line-height: 1.42;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.6rem;
    line-height: 1.625;
  }

  h2 {
    font-size: 1.7em;
    line-height: 1.1;
    margin: 0 0 3rem;

    ${mediaBreakpointUp('md')} {
      font-size: 1.7em;
      margin: 0 0 4rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 2.25em;
      margin: 0 0 3rem;
    }
  }

  p {
    margin: 0 0 4rem;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 5.3rem;
    }
  }

  p.lead {
    font-weight: 700;
    margin: 0 0 2.4rem;
  }
`;

export default SectionHeader;
