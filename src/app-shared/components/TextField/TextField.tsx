import React, { FC } from "react";
import "./TextField.scss";

type TextFieldProps = React.InputHTMLAttributes<any> & {
    error?: any;
};

export const TextField: FC<TextFieldProps> = React.forwardRef((props, ref) => {
    const hasError = !!props.error;
    return (
        <div className={`text-field ${hasError && "text-field--error"}`}>
            <div className="text-field__control">
                <input {...props} />
            </div>
            <small className="text-field__error">{props.error}</small>
        </div>
    );
});

export default TextField;
