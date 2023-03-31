import { StyleMineConteiner, StyleLogo, StyleBgImg } from "./StyleSignIn";
import LabelInput from "../label-input/LabelInput";
import Button from "../button/Button";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

// import SaveExpenses from "../../functions/save-local/SaveExpense";

// console.log(SaveExpenses);
const SignIn = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onNameChange = (e) => setName(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const card = false;

    if (name !== "" && password !== "") {
        console.log(name, password);
    } else {
        console.log("h,");
    }

    return (
        <StyleMineConteiner>
            <StyleBgImg>
                <StyleLogo>G.B</StyleLogo>
                <LabelInput
                    type={"name"}
                    text="name"
                    placeholder="name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onNameChange}
                />

                <LabelInput
                    type="password"
                    text="password"
                    id="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={onPasswordChange}
                />
                <LabelInput
                    type="radio"
                    text="fast join"
                    id="fastjoin"
                    placeholder="password"
                    name="fastJoin"
                />

                <Link to={"/signup"}>
                    <Button value="join" />
                </Link>
            </StyleBgImg>
        </StyleMineConteiner>
    );
};
export default SignIn;
