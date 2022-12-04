import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>
        {displayedValue}
        <IconWrapper style={{
          '--size': `24px`,
        }}>
          <Icon id='chevron-down' size={24} strokeWidth={2} />
        </IconWrapper>
      </CustomSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
  -webkit-appearance: none;
`

const CustomSelect = styled.div`
  color: ${COLORS.gray700};
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: 1rem;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: black;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
  /* remove interaction */
  pointer-events: none;
`

export default Select;
