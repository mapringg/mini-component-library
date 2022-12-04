/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: '8px',
    padding: 0,
  },
  medium: {
    height: '12px',
    padding: 0
  },
  large: {
    height: '16px',
    padding: '4px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]
  return (
    <div>
      <VisuallyHidden>
        <span id="loadinglabel">Loading:</span>
      </VisuallyHidden>
      <span role="progressbar" aria-labelledby="loadinglabel" aria-valuenow={value}>
        <Wrapper style={{ '--padding': styles.padding }} >
          <BarWrapper>
            <Bar style={{
              '--height': styles.height,
              '--width': `${value}%`,
            }} />
          </BarWrapper>
        </Wrapper>
      </span>
    </div>
  )
};

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
`

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
`

const Wrapper = styled.div`
  width: 100px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  padding: var(--padding);
`

export default ProgressBar;
