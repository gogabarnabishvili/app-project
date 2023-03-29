import {
    StyleTotalWraper,
    StyleTotalParagrap,
    StyleTotalSpam,
} from "./StyleTotalRender";

const TotalRender = (props) => {
    return (
        <StyleTotalWraper>
            <StyleTotalParagrap>
                income :<StyleTotalSpam>{props.money}</StyleTotalSpam>
            </StyleTotalParagrap>
            <StyleTotalParagrap>
                total :<StyleTotalSpam>{props.money}</StyleTotalSpam>
            </StyleTotalParagrap>
            <StyleTotalParagrap>
                expense :<StyleTotalSpam>{props.money}</StyleTotalSpam>
            </StyleTotalParagrap>
        </StyleTotalWraper>
    );
};
export default TotalRender;
