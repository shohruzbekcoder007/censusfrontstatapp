import styled from 'styled-components';

export const HeaderSettingsButton = styled.div`
    width: 204px;
    height: 51px;
    border-radius: 50px;
    background-color: ${props => props.theme.color.light_blue};
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const HeaderSettingsImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51px;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.theme.color.light_blue2};
    top: 0;
    leight: 0;
`;

export const HeaderSettingsText = styled.span`
    padding-left: 15px;
    color: ${props => props.theme.color.main_color};
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
`;
