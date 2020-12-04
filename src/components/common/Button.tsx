import React from 'react'
import styled from 'styled-components'
import { em } from 'polished'

interface Props {
  children?: any
  icon?: () => JSX.Element
}

export const Button = ({ children, icon: Icon, ...rest }: Props) => {
  return (
    <Wrapper>
      {Icon && (
        <IconWrapper aria-hidden="true">
          <Icon />
        </IconWrapper>
      )}
      <ButtonWrapper {...rest}>{children}</ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: ${em(12)};
  pointer-events: none; // Allow click through to button;
`

const ButtonWrapper = styled.button`
  border: none;
  text-decoration: none;
  appearance: none;
  border-radius: 0;
  color: ${(props) => props.theme.colors.neutral[300]};
  background: ${(props) => props.theme.colors.primary[100]};
  padding: ${em(10)} ${em(16)};
  padding-right: ${em(36)};
  white-space: nowrap;
  font-weight: 700;
  :hover,
  :focus {
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary[200]};
  }
  :active {
    background: ${(props) => props.theme.colors.primary[300]};
  }
  :disabled {
    background: ${(props) => props.theme.colors.neutral[200]};
    cursor: not-allowed;
  }
`
