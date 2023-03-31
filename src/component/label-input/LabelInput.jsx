import { StyleLabel, StyleInput } from "./StyleLabelInput";

const LabelInput = (props) => {
    return (
        <StyleLabel name={props.name} id={props.id}>
            {props.text}
            <StyleInput
                name={props.name}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onclick={props.onclick}
                value={props.value}
            ></StyleInput>
        </StyleLabel>
    );
};
export default LabelInput;
