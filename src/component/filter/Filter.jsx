import {
    StyleBgImg,
    StyleLogo,
    StyleMineConteiner,
} from "../sign-in/StyleSignIn";
import LabelInput from "../label-input/LabelInput";
import { StyleLabelCategoryBox, StyleSelect } from "./StyleFilter";
import Option from "../option/Option";
import ExportRender from "../expense-render/ExpenseRender";
import TotalRender from "../total-render/TotalRender";
import Button from "../button/Button";
import { Link, useParams } from "react-router-dom";
const category = ["income", "expense"];
const posts = [
    { id: 1, date: "20-10-20", category: "income", type: "bonus", money: 20 },
    { id: 2, date: "20-10-20", category: "income", type: "bonus", money: 20 },
];
const Filter = () => {
    return (
        <StyleMineConteiner>
            <StyleBgImg>
                <StyleLogo>G.B</StyleLogo>
                <LabelInput text="date :" type="date" id="date" />
                <StyleLabelCategoryBox>
                    <LabelInput
                        text="income"
                        name="category"
                        id="category"
                        type="radio"
                    />
                    <LabelInput
                        text="expense"
                        name="category"
                        id="category"
                        type="radio"
                    />
                </StyleLabelCategoryBox>

                <StyleSelect>
                    <Option value={category} />
                </StyleSelect>
                <StyleLabelCategoryBox>
                    <LabelInput
                        text="minamount"
                        name="category"
                        id="category"
                        type="number"
                    />
                    <LabelInput
                        text="maxamount"
                        name="category"
                        id="category"
                        type="number"
                    />
                </StyleLabelCategoryBox>

                <ExportRender posts={posts} />
                <TotalRender money="30" />
                <Link to={"/add-expense"}>
                    <Button value="add expenses" />
                </Link>
            </StyleBgImg>
        </StyleMineConteiner>
    );
};

export default Filter;
