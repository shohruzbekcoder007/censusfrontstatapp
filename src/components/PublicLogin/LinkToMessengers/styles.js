import styled from "styled-components";

export const MessangerWrapper = styled.div`
    width: 100%;
    padding: 21px 0;
    display: flex;
    justify-content: center;
    gap: 15px;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        width: 163.36px;
        height: 1px;
        right: 0;
        top: 50%;
        transform: rotateY(-50%);
        background: #EAEFFF;
    }
    ::before {
        content: '';
        position: absolute;
        width: 163.36px;
        height: 1px;
        left: 0;
        top: 50%;
        transform: rotateY(-50%);
        background: #EAEFFF;
    }
`;

export const Messanger = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 5px 5px 10px rgba(0, 32, 134, 0.15);
    transition: all .3s;
    :hover {
        background-color: #1976d230;
    };
    cursor: pointer;
    img: {
        height: 33px
    }
`