import React from 'react';

import { Rotate, SvgMask, BgMoving, ReactLogo } from '../componets/animation.js';
import { Title, Flex } from '../componets/general.js';

import ReactLogoSvg from '../logo.svg';

export default function Animation (){
  return (
        <>
          <Title>Animation</Title>
          <Flex>
              <Rotate back><ReactLogo width="300"/></Rotate>
              <BgMoving><SvgMask svg={ReactLogoSvg}/></BgMoving>
              <Rotate><Rotate><ReactLogo width="300"/></Rotate></Rotate>
              <BgMoving><SvgMask deg={'90deg'} svg={ReactLogoSvg}><SvgMask svg={ReactLogoSvg}/></SvgMask></BgMoving>
          </Flex>
        </>
  )
}