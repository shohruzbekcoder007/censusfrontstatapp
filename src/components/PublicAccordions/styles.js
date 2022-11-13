import styled from 'styled-components'

export const AccordionTitle = styled.span`
    color: ${props =>  props.theme.color.black};
    // font-family: ${props =>  props.theme.text.font_family};
    font-style: ${props =>  props.theme.text.font_style};
    line-height: 140%;
    font-weight: 800;
    font-size: 2.25em;
    padding-bottom: ${props =>  props.paddingBottom || 0}
`

export const AccordionWrapper = styled.div`
    padding-bottom: 30px;
`

export const AccordionTitleImg = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${props =>  props.theme.color.main_color};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
`

export const AccordionBodyText = styled.p`
    color: #676767;
    /* font-family: ${props =>  props.theme.text.font_family}; */
    font-style: ${props =>  props.theme.text.font_style};
    line-height: 170%;
    font-weight: ${props =>  props.theme.text.big_text.font_weight};
    font-size: ${props =>  props.theme.text.big_text.font_size};
    padding-left: 25px;
    text-align: justify;
    margin-bottom: 16px;
    text-indent: 45px;
`