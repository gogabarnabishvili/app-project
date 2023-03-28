import styled from "styled-components";
import bg from "./bgimage.jpg";

export const StyleMineConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const StyleLogo = styled.h1`
    width: 24px;
    color: red;
`;

export const StyleBgImg = styled.div`
    background: url(${bg}), no-repeat center;
    background-size: cover;
    width: 365px;
    height: 100vh;
`;
