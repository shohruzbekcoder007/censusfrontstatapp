import styled from "styled-components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const StepperWrapper = styled(Box)`
    flex-grow: 1;
    padding: 30px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 12px;
`

export const Step = styled(Grid)`
    padding: 0 5px;
`

export const StepperBody = styled.div`
    position: relative;
    padding-bottom: 8px;
    p {
        color: ${props => props.active?props.theme.color.black:props.theme.color.grey_icon};
        /* font-family: ${props => props.theme.text.font_family}; */
        font-style: ${props => props.theme.text.font_style};
        line-height: ${props => props.theme.text.line_height};
        /* font-weight: ${props => props.theme.text.heading2.font_weight}; */
        font-weight: normal;
        /* font-size: ${props => props.theme.text.heading2.font_size}; */
        font-size: 2em;
        padding-left: 5px;
        span {
            color: ${props => props.active?props.theme.color.main_color:props.theme.color.grey_icon};
            font-weight: 900;
        }
    }
    ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        border-radius: 10px;
        background-color: ${props => props.active?props.theme.color.main_color:props.theme.color.grey_icon};
        bottom: 0;
        left: 0;
    }
`