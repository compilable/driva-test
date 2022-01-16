import React from 'react';
import { Form, Label } from 'semantic-ui-react'


type Params = {
    formField: string,
    lableText: string,
    placeholderText: string,
    required: boolean,
    validationHook: any | undefined,
    formErrors?: any,
    showCustomError?: Function
}

const InputElement: React.FC<Params> = ({ formField, lableText, placeholderText, required, validationHook, formErrors, showCustomError }) => {

    return (
        <Form.Field>
            <label>{lableText}</label>
            <input
                required={required}
                placeholder={placeholderText}
                type="text"
                name={formField}
                {...validationHook}
            />
            {showCustomError ?
                formErrors[formField] && <Label basic color='red' pointing>{showCustomError(formField)}</Label>
                : null}
        </Form.Field>
    )
}


export default InputElement
