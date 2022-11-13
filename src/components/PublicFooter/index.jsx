import React from 'react'
import { PublicPageContainer } from '../../global_styles/styles'
import { PublicFooterWrapper, PublicFooterContainer, PublicFooterBox, PublicFooterLink, PublicFooterAddress, PublicFooterMessengerHeader, PublicFooterMessengers, PublicFooterMessengerFooter, PublicFooterNumber, PublicFooterLogo } from './styles'
import logo_white from '../../images/logo_white.png'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function PublicFooter() {
  return (
    <PublicFooterWrapper>
        <PublicPageContainer>
            <PublicFooterContainer>
                <PublicFooterLogo>
                    <img src={logo_white} alt="logo_white"/>
                </PublicFooterLogo>
                <PublicFooterBox>
                    <PublicFooterLink to='/public/request'>
                        Savol-javoblar
                    </PublicFooterLink>
                    <PublicFooterLink to='/public/agreement'>
                        Kelishuv shartlari
                    </PublicFooterLink>
                    <PublicFooterLink to='/public/faq'>
                        Qo’llanma
                    </PublicFooterLink>
                    <PublicFooterLink to='/public/contact'>
                        Aloqa
                    </PublicFooterLink>
                </PublicFooterBox>
                <PublicFooterBox>
                    <PublicFooterAddress>
                        <img src={require('../../images/icons/icon/emailwithcolor.png')} alt="emailwithcolor" />
                        <a href="/">info@stat.uz</a>
                    </PublicFooterAddress>
                    <PublicFooterAddress>
                        <img src={require('../../images/icons/icon/telefon.png')} alt="tel" />
                        <a href="/">info@stat.uz</a>
                    </PublicFooterAddress>
                    <PublicFooterAddress>
                        <img src={require('../../images/icons/icon/address.png')} alt="email with color" />
                        <a href="/">100170, Toshkent sh.,<br/>Mustаqillik shoh ko‘chаsi, 63</a>
                    </PublicFooterAddress>
                </PublicFooterBox>
                <PublicFooterBox>
                    <Link to="/public/contact">
                        <Button 
                            variant="contained" 
                            color="primary"
                            sx={{
                                borderRadius: "10px",
                                padding: "14px 36px",
                                fontWeight: "700",
                                fontSize: "14px",
                                lineHeight: "16px",
                                width: "100%",
                                marginBottom: "30px"
                            }}
                            >
                            Bog’lanish
                        </Button>
                    </Link>
                    <a href="tel:+998 (71) 202 81 80">
                        <PublicFooterNumber>
                            +998 (71) 202-80-05
                        </PublicFooterNumber>
                    </a>
                </PublicFooterBox>
                <PublicFooterBox>
                    <PublicFooterMessengerHeader>
                        Biz ijtimoiy tarmoqlardamiz
                    </PublicFooterMessengerHeader>
                    <PublicFooterMessengers>
                        <a href="/">
                            <img src={require('../../images/icons/icon/messengers/f_white.png')} alt="f" />
                        </a>
                        <a href="/">
                            <img src={require('../../images/icons/icon/messengers/i_white.png')} alt="i" />
                        </a>
                        <a href="/">
                            <img src={require('../../images/icons/icon/messengers/t_white.png')} alt="t" />
                        </a>
                    </PublicFooterMessengers>
                    <PublicFooterMessengerFooter>
                        Aholini ro’yxatga olish © 2022.
                    </PublicFooterMessengerFooter>
                </PublicFooterBox>
            </PublicFooterContainer>
        </PublicPageContainer>
    </PublicFooterWrapper>
  )
}