import * as React from 'react';
import  logo  from './../../images/logo.png'
import {
    useMatch,
    useResolvedPath,
} from "react-router-dom";
import { 
    SidebarWrapper, 
    SidebarLogo, 
    SidebarMenu,
    ActiveLink,
    UnActiveLink,
    SidebarMenuItem
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

export default function Sidebar() {

    return (
        <SidebarWrapper
            component="nav"
            aria-label="mailbox folders"
        >
            <SidebarLogo>
                <img src={logo} alt="logo"/>
            </SidebarLogo>
            <SidebarMenu>
                <SidebarMenuItem>
                    <CustomLink to="/">Panel</CustomLink>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <CustomLink to="/surovnoma">So'rovnoma</CustomLink>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <CustomLink to="/sozlamalar">Sozlamalar</CustomLink>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarWrapper>
    )
}
