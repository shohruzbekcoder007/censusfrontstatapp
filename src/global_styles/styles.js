import styled from 'styled-components';

export const PanelWrapper = styled.div`
    padding: 20px 75px 48px 30px;
`;

export const MainWrapperAllPages = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    font-size: 8px;
    @media (max-width: 1920px) {
        width: 100%;
        padding: 0 15px;
    }
`;

export const PublicPageContainer = styled.div`
    width: 1140px;
    margin: 0 auto;
    @media (max-width: 1140px) {
        width: 100%;
        padding: 0 15px;
    }
`;

export const PublicPageTitle = styled.div`
  padding: 38px 0;
`

export const PublicPageParagraph = styled.p`
    color: #0D0745;
    // font-family: ${props =>  props.theme.text.font_family};
    font-style: ${props =>  props.theme.text.font_style};
    line-height: ${props =>  props.theme.text.line_height};
    font-weight: ${props =>  props.theme.text.big_text.font_weight};
    font-size: ${props =>  props.theme.text.big_text.font_size};
    padding-bottom: ${props =>  props.paddingBottom || 0}
`