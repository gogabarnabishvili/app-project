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
import { useState } from "react";
const category1 = ["income", "expense", "more"];
const posts = [
    { id: 1, date: "20-10-20", category: "income", type: "bonus", money: 20 },
    { id: 2, date: "20-10-20", category: "income", type: "bonus", money: 20 },
];
const Filter = () => {
    const [date, setDate] = useState("");
    const [type, setType] = useState(false);
    const [category, setCategory] = useState("");
    const [minamount, setMinAmount] = useState("");
    const [maxamount, setMaxAmount] = useState("");

    const onChangeDate = (e) => setDate(e.target.value);
    const onChangeCategory = (e) => setCategory(e.target.value);
    const onChangeType = (e) => setType(e.target.value);
    const onChangeMinAmount = (e) => setMinAmount(e.target.value);
    const onChangeMaxAmount = (e) => setMaxAmount(e.target.value);

    // სერჩის ინფუთს ინახავას დროებით
    const saveFilterInfo = () => {
        const filterinformation = [];

        filterinformation.push({
            date: date,
            type: type,
            category: category,
            minamount: minamount,
            maxamount: maxamount,
        });
        console.log(filterinformation);
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
                <StyleLabelCategoryBox>
                    <LabelInput
                        text="income"
                        name="category"
                        id="category"
                        type="radio"
                        onChange={onChangeType}
                    />

                    <LabelInput
                        text="expense"
                        name="category"
                        id="category"
                        type="radio"
                        onChange={onChangeType}
                    />
                </StyleLabelCategoryBox>

                <Option value={category1} onChange={onChangeCategory} />

                <StyleLabelCategoryBox>
                    <LabelInput
                        text="minamount"
                        name="category"
                        id="category"
                        type="number"
                        onChange={onChangeMinAmount}
                    />
                    <LabelInput
                        text="maxamount"
                        name="category"
                        id="category"
                        type="number"
                        onChange={onChangeMaxAmount}
                    />
                </StyleLabelCategoryBox>
                <Button value="serch" onClick={saveFilterInfo} />
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
