import { StyleButton } from "./StyleButton";

const Button = (props) => {
    return <StyleButton type={props.type}>{props.value}</StyleButton>;
};

export default Button;
