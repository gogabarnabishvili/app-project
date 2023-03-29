import styled from "styled-components";

import { StyleInput } from "../label-input/StyleLabelInput";

export const StyleLabelCategoryBox = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    ${StyleInput} {
        width: 40px;
    }
`;
export const StyleSelect = styled.select`
    background-color: initial;
    color: rgb(232, 223, 206);
    border: none;
    outline: none;
`;
