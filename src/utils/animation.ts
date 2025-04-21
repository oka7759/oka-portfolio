export const OPACITY_0 = { opacity: 0 }
export const OPACITY_1 = { opacity: 1 }

export const Y_0 = { y: 0 }
export const Y_M10 = { y: -10 }
export const Y_P10 = { y: 10 }
export const Y_M20 = { y: -20 }
export const Y_P20 = { y: 20 }

export const ANI_Y_OFF = { opacity: 0, y: -10 }
export const ANI_Y_ON = { opacity: 1, y: 0 }

export const ANI_TRANSITION = { ease: 'easeOut', duration: 0.8 }

import { styled } from 'styled-components'

type PropsT = {
  delay?: string
  width?: string
}

export const ScrollAni = styled.div<PropsT>`
  width: ${(props) => (props.width ? props.width : '')};
  height: auto;
  transition: 0.5s;

  &.fadeIn {
    opacity: 1;
  }

  &.fadeOut {
    opacity: 0;
  }

  &.fadeAn {
    animation-name: scroll;
    animation-duration: 1s;
    animation-delay: ${(props) => props.delay && props.delay};
    transform: translateY(0);
  }

  &.mdH {
    @media not all and (min-width: 1280px) {
      height: 100vh;
    }
    @media not all and (min-width: 1024px) {
      height: auto;
    }
  }

  @keyframes scroll {
    0% {
      opacity: 0;
      transform: translateY(-80px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
