import { StyleOption, StyleSelect } from "./StyleOption";

const Option = (props) => {
    const value = props.value;

    return (
        <StyleSelect>
            {props.value.map((e, index) => (
                <StyleOption
                    key={index}
                    onChange={props.onChange}
                    value={e.value}
                >
                    {e}
                </StyleOption>
            ))}
        </StyleSelect>
    );
};
export default Option;
