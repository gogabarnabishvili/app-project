import {
    StyleBgImg,
    StyleLogo,
    StyleMineConteiner,
} from "../sign-in/StyleSignIn";
import Button from "../button/Button";
import LabelInput from "../label-input/LabelInput";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const SignUp = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const onNameChange = (e) => setName(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const onEmail = (e) => setEmail(e.target.value);
    const newUserSave = [];
    const senedlocal = (e) => {
        console.log(newUserSave);
        if (name !== "" && email !== "" && password !== "") {
            newUserSave.push({
                name: name,
                password: password,
                email: email,
                id: newUserSave.length + 1,
            });
        } else {
            alert("sheavse");
        }
    };

    return (
        <StyleMineConteiner>
            <StyleBgImg>
                <StyleLogo>G.B</StyleLogo>
                <LabelInput
                    type={"name"}
                    text="name :"
                    placeholder="name"
                    id="name"
                    name="name"
                    onChange={onNameChange}
                />

                <LabelInput
                    type="password"
                    text="password :"
                    id="password"
                    placeholder="password"
                    name="password"
                    onChange={onPasswordChange}
                />
                <LabelInput
                    type="email"
                    text="email :"
                    id="email"
                    placeholder="email"
                    name="email"
                    onChange={onEmail}
                />
                <LabelInput
                    type="checkbox"
                    text="i agree"
                    id="agree"
                    placeholder="agree"
                    name="agree"
                />

                <Link to={"/Filter"}>
                    <Button value="send" onClick={senedlocal} />
                </Link>
            </StyleBgImg>
        </StyleMineConteiner>
    );
};
export default SignUp;
