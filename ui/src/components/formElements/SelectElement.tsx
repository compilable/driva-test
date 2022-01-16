import React from 'react';
import { useState, ChangeEvent } from 'react';
import { Form, Label } from 'semantic-ui-react'
import { SelectOption } from './SelectOption';


type Params = {
    formField: string,
    lableText: string,
    placeholderText: string,
    options: Array<SelectOption>
    validationHook: any | undefined,
    formErrors?: any,
    showCustomError?: Function
}

const SelectElement: React.FC<Params> = ({ formField, lableText, placeholderText, options, formErrors, showCustomError, validationHook }) => {

    const [selection, setSelection] = useState("");

    function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        setSelection(event.target.value);
    }

    return (
        <Form.Field>
            {lableText.toString().trim().length === 0 ? <label>&nbsp;</label> : <label>{lableText}</label>}
            <select {...validationHook} name={formField} value={selection} onChange={handleSelectChange}>
                {<option value="" selected disabled hidden>{placeholderText}</option>}
                {options.map((option: SelectOption) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}

            </select>
            {showCustomError ?
                formErrors[formField] && formErrors[formField].type === "required" && <Label basic color='red' pointing>{showCustomError(formField)}</Label>
                : null}
            {/* TODO: Below msg. is hard-coded, needs to be configurable */}
            {showCustomError ? formErrors[formField] && formErrors[formField].type === "validate" &&
                <Label basic color='red' pointing>Period of occupation should be at least a month.</Label> : null}
        </Form.Field>
    );
}

export default SelectElement;
