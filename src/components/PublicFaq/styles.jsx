import styled from 'styled-components'

export const PublicAgreementFaqWrapper= styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    padding-bottom: 100px;
`

export const PublicAgreementFaqBox = styled.div`
    padding: 28px 52px;
    width: 358px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #CFDBFF;
    align-self: stretch;
    transition: all .3s;
    :hover {
        box-shadow: ${props =>  props.theme.effect.shadow};;
    }
`

export const PublicAgreementFaqBoxImage = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PublicAgreementFaqBoxText = styled.div`
    width: 100%;
    padding-top: 30px;
    padding-bottom: 11px;
    text-align: center;
    position: relative;
    ::before {
        content: "";
        position: absolute;
        top: 14px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #CFDBFF;
    }
`