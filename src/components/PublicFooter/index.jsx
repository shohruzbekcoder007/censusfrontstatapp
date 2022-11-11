import React from 'react'
import { PublicPageContainer } from '../../global_styles/styles'
import { PublicFooterWrapper, PublicFooterContainer, PublicFooterBox, PublicFooterLink } from './styles'
import logo_white from '../../images/logo_white.png'

export default function PublicFooter() {
  return (
    <PublicFooterWrapper>
        <PublicPageContainer>
            <PublicFooterContainer>
                <img src={logo_white} alt="logo_white"/>
                <PublicFooterBox>
                    <PublicFooterLink to='/'>
                        Savol-javoblar
                    </PublicFooterLink>
                    <PublicFooterLink to='/'>
                        Kelishuv shartlari
                    </PublicFooterLink>
                    <PublicFooterLink to='/'>
                        Qo’llanma
                    </PublicFooterLink>
                    <PublicFooterLink to='/'>
                        Aloqa
                    </PublicFooterLink>
                </PublicFooterBox>
                <PublicFooterBox>
                    <p style={{color: "#fff"}}>salom olam</p>
                </PublicFooterBox>
                <PublicFooterBox>
                    <p style={{color: "#fff"}}>salom olam</p>
                </PublicFooterBox>
                <PublicFooterBox>
                    <p style={{color: "#fff"}}>salom olam</p>
                </PublicFooterBox>
            </PublicFooterContainer>
        </PublicPageContainer>
    </PublicFooterWrapper>
  )
}
