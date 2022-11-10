import React from 'react'
import { PublicPageContainer } from '../../global_styles/styles'
import Heading1 from '../../helper_components/Heading1'
import PublicLoginTabs from './PublicLoginTabs'
import { PublicLoginWrapper, PublicLoginParagraph, PublicLoginForm } from './styles'

export default function PublicLogin() {
  return (
    <PublicLoginWrapper>
      <PublicPageContainer>
        <Heading1 color="black">Aholini Ro’yxatha olishda</Heading1>
        <Heading1 color="blue">faol ishtirok eting!</Heading1>
        <PublicLoginParagraph>Yangi O’zbekistonning bir qismi bo’l!</PublicLoginParagraph>
        <PublicLoginForm>
            <PublicLoginTabs/>
        </PublicLoginForm>
      </PublicPageContainer>
    </PublicLoginWrapper>
  )
}
