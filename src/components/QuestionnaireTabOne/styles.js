import styled from 'styled-components'

export const QuestionnaireTabBoxs = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 30px;
`

export const QuestionnaireTabBox = styled.div`
    width: 50%;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
`

export const QuestionnaireTabBoxUl = styled.ul`
    width: 100%;
    padding-top: 20px;
`

export const QuestionnaireTabBoxLI = styled.li`
    width: 100%;
    padding-bottom: 28px;
    display: flex;
    align-items: center;
    img {
        display: inline-block;
        padding-right: 15px;
    }
    span {
        display: inline-block;
        color: ${props =>  props.theme.color.black};
        // font-family: ${props =>  props.theme.text.font_family};
        font-style: ${props =>  props.theme.text.font_style};
        line-height: ${props =>  props.theme.text.line_height};
        font-weight: ${props =>  props.theme.text.small_text.font_weight};
        font-size: 2em;
    }
`