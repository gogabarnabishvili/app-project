import { StyleButton } from "./StyleButton";

const Button = (props) => {
    return (
        <StyleButton onClick={props.onClick} type={props.type}>
            {props.value}
        </StyleButton>
    );
};

export default Button;
