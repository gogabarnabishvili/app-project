import {
    StyleBgImg,
    StyleLogo,
    StyleMineConteiner,
} from "../sign-in/StyleSignIn";
import { StyleLabelCategoryBox, StyleSelect } from "../filter/StyleFilter";
import LabelInput from "../label-input/LabelInput";
import Button from "../button/Button";
import { Link, useParams } from "react-router-dom";
import Option from "../option/Option";
const category = ["income", "expense"];
const AddExpense = () => {
    return (
        <StyleMineConteiner>
            <StyleBgImg>
                <StyleLogo>G.B</StyleLogo>
                <LabelInput text="date :" type="date" id="date" />
                <LabelInput text="money :" type="number" id="number" />
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
                <Button value="add expens" />
                <Link to={"/Filter"}>
                    <Button value="posts list" />
                </Link>
            </StyleBgImg>
        </StyleMineConteiner>
    );
};
export default AddExpense;
