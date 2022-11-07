import styled from 'styled-components';

export const Button = styled.button`
    padding: 13px;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${props =>  props.disabled? "#A5A5A5": props.theme.color.main_color};
    // font-family: ${props => props.theme.text.font_family};
    font-style: ${props => props.theme.text.font_style};
    line-height: ${props => props.theme.text.line_height}; 
    font-weight: ${props => props.theme.text.small_text_caption.font_weight};
    font-size: ${props => props.theme.text.small_text_caption.font_size}; 
`;