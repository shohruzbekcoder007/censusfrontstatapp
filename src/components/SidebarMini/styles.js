import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

export const SidebarWrapper = styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #FFFFFF;
    box-shadow: ${props => props.theme.effect.left_shadow};
    border: none;
    height: 100vh;
    width: 120px;
    display: block;
    padding-top: 60px;
    z-index: 2;
    overflow: auto;
`;

export const SidebarLogo = styled.div`
    width: 100%;
    text-align: center;
    img{
        width: 93px;
    }
`;

export const SidebarMenu = styled.ul`
    padding-top: 47px;
    padding-left: 5px;
`;

export const SidebarMenuItem = styled.li`
    padding-bottom: 10px;
`;

export const ActiveLink = styled(Link)`
    display: block;
    width: 100%;
    background: #F6F9FF;
    border-radius: 5px 0px 0px 5px;
    padding: 13px 0;
    font-weight: 700;
    font-size: 2em;
    line-height: 24px;
    text-decoration: none;
    color: ${props => props.theme.color.main_color};
    /* padding-left: 14px; */
    position: relative;
    text-align: center;
    svg {
        display: inline-block;
        margin-right: 10px;
        transform: translateY(1px);
    }
    span {
        display: block;
    }
    ::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background-color: ${props => props.theme.color.main_color};
        border-radius: 5px 0px 0px 5px;
    }
`;

export const UnActiveLink = styled(Link)`
    display: block;
    width: 100%;
    padding: 13px 0;
    font-weight: 700;
    font-size: 2em;
    line-height: 24px;
    text-decoration: none;
    color: ${props => props.theme.color.main_color};
    /* padding-left: 14px; */
    text-align: center;
    svg {
        display: inline-block;
        margin-right: 10px;
        transform: translateY(1px);
    }
    span {
        display: block;
    }
`;