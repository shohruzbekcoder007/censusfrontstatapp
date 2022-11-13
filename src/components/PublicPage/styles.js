import styled from "styled-components"
import flag from '../../images/vector-dotted.png'

export const PublicPageWrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    height: 100vh;
    background-color: #ffffff;
    overflow: auto;
    background-image: url(${flag});
    background-position: 0 0;
    background-repeat: no-repeat;
    font-size: 8px;
    @media (max-width: 1920px) {
        width: 100%;
        /* padding: 0 15px; */
      }
`