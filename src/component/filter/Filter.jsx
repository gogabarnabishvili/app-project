import {
    StyleBgImg,
    StyleLogo,
    StyleMineConteiner,
} from "../sign-in/StyleSignIn";
import LabelInput from "../label-input/LabelInput";
import { StyleLabelCategoryBox, StyleSelect } from "./StyleFilter";
import Option from "../option/Option";
const category = ["income", "expense"];
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
            </StyleBgImg>
        </StyleMineConteiner>
    );
};

export default Filter;
