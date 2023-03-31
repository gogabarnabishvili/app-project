import {
    StyleBgImg,
    StyleLogo,
    StyleMineConteiner,
} from "../sign-in/StyleSignIn";
import { StyleLabelCategoryBox } from "../filter/StyleFilter";
import LabelInput from "../label-input/LabelInput";
import Button from "../button/Button";
import { Link, useParams } from "react-router-dom";
import Option from "../option/Option";
import { useState } from "react";
const incomeOption = ["income", "bonus"];
const expenseOption = ["expense", "food"];
const AddExpense = () => {
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("income");
    const [money, setMoney] = useState("");

    const onChangeDate = (e) => setDate(e.target.value);
    const onChangeCategory = (e) => setCategory(e.target.value);
    const onChangeType = (e) => setType(e.target.value);
    const onChangeMoney = (e) => setMoney(e.target.value);

    const sendPostLocal = () => {
        const sendpost = [];
        if (date !== "" && category !== "" && money !== "") {
            sendpost.push({
                date: date,
                type: type.id,
                category: category,
                money: money,
                id: sendpost.length + 1,
            });
        } else {
        }
    };

    return (
        <StyleMineConteiner>
            <StyleBgImg>
                <StyleLogo>G.B</StyleLogo>
                <LabelInput
                    text="date :"
                    type="date"
                    id="date"
                    onChange={onChangeDate}
                />
                <LabelInput
                    text="money :"
                    type="number"
                    id="number"
                    onChange={onChangeMoney}
                />
                <StyleLabelCategoryBox>
                    <LabelInput
                        text="income"
                        name="type"
                        id="income"
                        type="radio"
                        onChange={onChangeType}
                    />
                    <LabelInput
                        text="expense"
                        name="type"
                        id="expense"
                        type="radio"
                        onChange={onChangeType}
                    />
                </StyleLabelCategoryBox>

                <Option
                    text="category"
                    onChange={onChangeCategory}
                    value={type === "expense" ? incomeOption : expenseOption}
                />

                <Button value="add expens" onClick={sendPostLocal} />
                <Link to={"/Filter"}>
                    <Button value="posts list" />
                </Link>
            </StyleBgImg>
        </StyleMineConteiner>
    );
};
export default AddExpense;
