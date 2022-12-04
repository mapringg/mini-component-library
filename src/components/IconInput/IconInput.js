import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24,
    iconSize: 16,
    fontSize: 14,
    borderThickness: 1
  },
  large: {
    height: 36,
    iconSize: 24,
    fontSize: 18,
    borderThickness: 2
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size]

  if (!styles) {
    throw new Error('invalid size')
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} strokeWidth={2} size={styles.iconSize} />
      </IconWrapper>
      <Input
        type="text"
        id="name"
        name="name"
        required
        placeholder={placeholder}
        style={{
          '--height': styles.height + 'px',
          '--font-size': styles.fontSize + 'px',
          '--width': width + 'px',
          '--border-thickness': styles.borderThickness + 'px'
        }}
      />
    </Wrapper>
  )
};


const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
`

const Input = styled.input`
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  font-weight: 700;
  font-size: var(--font-size);
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black}
  }
`

export default IconInput;
