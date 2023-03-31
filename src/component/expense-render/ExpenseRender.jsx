import {
    StyleExpenseBox,
    StyleExpenseRenderParagrap,
    StyleExpenseRenderSpan,
    StyleExpenseListWraper,
} from "./StyleExpenseRender";

const ExportRender = (props) => {
    return (
        <StyleExpenseListWraper>
            {props.posts.map((e, index) => (
                <StyleExpenseBox key={index}>
                    <StyleExpenseRenderParagrap>
                        date :
                        <StyleExpenseRenderSpan>
                            {e.date}
                        </StyleExpenseRenderSpan>
                    </StyleExpenseRenderParagrap>
                    <StyleExpenseRenderParagrap>
                        type :
                        <StyleExpenseRenderSpan>
                            {e.type}
                        </StyleExpenseRenderSpan>
                    </StyleExpenseRenderParagrap>
                    <StyleExpenseRenderParagrap>
                        category :
                        <StyleExpenseRenderSpan>
                            {e.category}
                        </StyleExpenseRenderSpan>
                    </StyleExpenseRenderParagrap>
                    <StyleExpenseRenderParagrap>
                        total :
                        <StyleExpenseRenderSpan>
                            {e.money}
                        </StyleExpenseRenderSpan>
                    </StyleExpenseRenderParagrap>
                </StyleExpenseBox>
            ))}
        </StyleExpenseListWraper>
    );
};
export default ExportRender;
