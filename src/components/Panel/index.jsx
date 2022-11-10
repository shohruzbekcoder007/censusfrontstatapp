import React from 'react'
import { PanelWrapper } from '../../global_styles/styles'
import RegistrationList from '../RegistrationList'
import PanelSlide from '../PanelSlide'


export default function Panel() {
  return (
    <PanelWrapper>
      <RegistrationList/>
      <PanelSlide/>
    </PanelWrapper>
  )
}
