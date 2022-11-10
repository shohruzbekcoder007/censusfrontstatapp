import React from 'react'
import logo from '../../images/logo.png'
import logo_stat from '../../images/logotip-stat.png'
import {
    useMatch,
    useResolvedPath
} from "react-router-dom"
import { 
    Header,
    HeaderLogos,
    HeaderLogo,
    HeaderNavLinks,
    ActiveLink,
    UnActiveLink
} from './styles'

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    if(match){
        return <ActiveLink to={to} {...props}>{children}</ActiveLink>
    }else{
        return <UnActiveLink to={to} {...props}>{children}</UnActiveLink>
    }
}

export default function PublicHeader() {
  return (
    <>
        <Header>
            <HeaderLogos>
                <HeaderLogo>
                    <a href="/public">
                        <img src={logo} alt="logo ro'yxatga olish"/>
                    </a>
                </HeaderLogo>
                <HeaderLogo>
                    <a href="https://stat.uz/uz/" target="_blank" rel="noopener noreferrer">
                        <img src={logo_stat} alt="logo ro'yxatga olish"/>
                    </a>
                </HeaderLogo>
            </HeaderLogos>
            <HeaderNavLinks>
                <CustomLink to="/public/about">
                    Aholini ro'yxatga olish
                </CustomLink>
                <CustomLink to="/public/request">
                    Savol-javoblar
                </CustomLink>
                <CustomLink to="/public/agreement">
                    Kelishuv shartlari
                </CustomLink>
                <CustomLink to="/public/faq">
                    Qo'llanma
                </CustomLink>
                <CustomLink to="/public/contact">
                    Aloqa
                </CustomLink>
            </HeaderNavLinks>
        </Header>
    </>
  )
}