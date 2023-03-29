import styled from "styled-components";
import bg from "./bgimage.jpg";
export const StyleMineConteiner = styled.div`
    display: flex;

    justify-content: center;
`;

export const StyleLogo = styled.h1`
    width: 24px;
    color: red;
`;

export const StyleBgImg = styled.div`
    background: url(${bg}), no-repeat center;s
    background-size: cover;
    width: 365px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;
