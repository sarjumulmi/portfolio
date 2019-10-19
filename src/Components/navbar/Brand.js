import React from 'react'
import styled from 'styled-components'

import unicorn from '../../images/unicorn.svg'

const Brand = () => {
  return(
    <BrandWrapper href="/portfolio">
      <Image src={unicorn} alt="Brand" />
    </BrandWrapper>
  )
}

export default Brand

const BrandWrapper = styled.a`
  display: block;
  display: flex;
  align-item: center;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.1)
  }
`

const Image = styled.img`
  height: 7rem;
  margin: auto 0;
`