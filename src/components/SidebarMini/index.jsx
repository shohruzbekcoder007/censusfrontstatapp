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

export default function SidebarMini() {

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
                    <CustomLink to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none">
                            <path d="M5.78 0H1.1C.5 0 0 .5 0 1.1v2.8C0 4.5.5 5 1.1 5h4.68c.6 0 1.1-.5 1.1-1.1V1.1c0-.6-.5-1.1-1.1-1.1zM5.78 6.25H1.1c-.6 0-1.09.5-1.09 1.1v6.56C0 14.5.5 15 1.1 15h4.68c.6 0 1.1-.5 1.1-1.1V7.35c0-.6-.5-1.09-1.1-1.09zM13.9 10H9.23c-.6 0-1.1.5-1.1 1.1v2.8c0 .6.5 1.1 1.1 1.1h4.69c.6 0 1.09-.5 1.09-1.1v-2.8c0-.6-.5-1.1-1.1-1.1zM13.9 0H9.23c-.6 0-1.1.5-1.1 1.1v6.56c0 .6.5 1.09 1.1 1.09h4.69c.6 0 1.09-.5 1.09-1.1V1.1C15 .5 14.5 0 13.9 0z" fill="#115E8C"/>
                        </svg>
                        <span>Panel</span>
                    </CustomLink>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <CustomLink to="/surovnoma">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none"><g fill="#115E8C"><path d="M10.03 1.6L9.6.38a.54.54 0 00-.5-.37H5.89a.54.54 0 00-.5.37L4.96 1.6h-.15v2.14h5.36V1.61h-.15zm-2 1.08a.54.54 0 11-1.07 0v-.54a.54.54 0 011.08 0v.54z"/><path d="M12.86 1.6h-1.61V4.3c0 .3-.24.53-.54.53H4.3a.54.54 0 01-.54-.53V1.6h-1.6c-.3 0-.54.24-.54.53v12.32c0 .3.24.54.53.54h10.72c.3 0 .53-.24.53-.54V2.14c0-.3-.24-.53-.53-.53zM10.7 11.8H4.3a.54.54 0 010-1.08h6.42a.54.54 0 010 1.08zm0-2.15H4.3a.54.54 0 010-1.07h6.42a.54.54 0 110 1.07zm0-2.14H4.3a.54.54 0 010-1.07h6.42a.54.54 0 110 1.07z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h15v15H0z"/></clipPath></defs></svg>
                        <span>So'rovnoma</span>
                    </CustomLink>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <CustomLink to="/sozlamalar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none"><g fill="#115E8C"><path d="M7.83.33C6.3.33 4.85.8 3.63 1.69c-.15.1-.19.3-.1.45L4.7 4a.33.33 0 00.48.1 4.2 4.2 0 110 6.8.33.33 0 00-.48.08l-1.16 1.87c-.09.15-.05.35.1.45A7.18 7.18 0 107.82.33z"/><path d="M4.57 10.19a.33.33 0 00-.02-.34l-.78-1.17h4.72a1.18 1.18 0 000-2.36H3.77l.78-1.17a.33.33 0 00-.28-.52H2.02a.33.33 0 00-.28.15L.06 7.32a.33.33 0 000 .36l1.68 2.54c.07.09.17.15.28.15h2.25c.13 0 .24-.07.3-.18z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h15v15H0z"/></clipPath></defs></svg>
                        <span>Sozlamalar</span>
                    </CustomLink>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarWrapper>
    )
}
