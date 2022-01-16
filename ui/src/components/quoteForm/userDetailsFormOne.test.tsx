import React from 'react';
import { render } from '@testing-library/react'
import { shallow} from 'enzyme';
import toJSON from "enzyme-to-json"

import UserDetailsFormOne from "./userDetailsFormOne"

test("has the userDetailsFormOne container loaded", () => {
    const getCustomErrorMessage = jest.fn()
    const processForm = jest.fn()
    const userDetailsFormOne = shallow(<UserDetailsFormOne formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />);
    expect(toJSON(userDetailsFormOne)).toMatchSnapshot()
});

test("has the userDetailsFormOne title loaded", () => {
    const getCustomErrorMessage = jest.fn()
    const processForm = jest.fn()
    const userDetailsFormOne = render(<UserDetailsFormOne formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />);
    expect(userDetailsFormOne.getAllByText("Tell us about yourself"))
});

test("has the InputElement loaded", () => {
    const getCustomErrorMessage = jest.fn()
    const processForm = jest.fn()
    const userDetailsFormOne = render(<UserDetailsFormOne formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />);
    expect(userDetailsFormOne.getAllByRole('textbox').length).toEqual(5)
});

test("has the Button loaded", () => {
    const getCustomErrorMessage = jest.fn()
    const processForm = jest.fn()
    const userDetailsFormOne = render(<UserDetailsFormOne formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />);
    expect(userDetailsFormOne.getAllByRole('button').length).toEqual(1)
});