import styled from "styled-components";

export const StyleExpenseListWraper = styled.div`
width: 85%;
height: 40vh;
overflow-y: scroll;
color: rgb(232, 223, 206);
border: 1px solid rgb(232, 223, 206);
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
padding: 20px;

}
`;
export const StyleExpenseBox = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(232, 223, 206);
    border-radius: 12px;
`;
export const StyleExpenseRenderParagrap = styled.p`
    margin: 7px;
`;
export const StyleExpenseRenderSpan = styled.span`
    color: red;
    margin-left: 8px;
`;
