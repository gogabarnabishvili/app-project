import {
    StyleBgImg,
    StyleLogo,
    StyleMineConteiner,
} from "../sign-in/StyleSignIn";
import Button from "../button/Button";
import LabelInput from "../label-input/LabelInput";
import { Link, useParams } from "react-router-dom";

const SignUp = (props) => {
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
                    // value={name}
                    // onChange={onNameChange}
                />

                <LabelInput
                    type="password"
                    text="password :"
                    id="password"
                    placeholder="password"
                    name="password"
                    // value={password}
                    // onChange={onPasswordChange}
                />
                <LabelInput
                    type="email"
                    text="email :"
                    id="email"
                    placeholder="email"
                    name="email"
                    // value={password}
                    // onChange={onPasswordChange}
                />
                <LabelInput
                    type="checkbox"
                    text="i agree"
                    id="agree"
                    placeholder="agree"
                    name="agree"
                />

                <Link to={"/Filter"}>
                    <Button value="send" />
                </Link>
            </StyleBgImg>
        </StyleMineConteiner>
    );
};
export default SignUp;
