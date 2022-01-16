import React from 'react';
import { render } from '@testing-library/react'
import { shallow } from 'enzyme';
import toJSON from "enzyme-to-json"

import UserDetailsFormTwo from "./userDetailsFormTwo"
import { BrowserRouter } from 'react-router-dom';

test("has the userDetailsFormTwo container loaded", () => {
    const getCustomErrorMessage = jest.fn()
    const processForm = jest.fn()
    const userDetailsFormTwo = shallow(
        <BrowserRouter>
            <UserDetailsFormTwo formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />
        </BrowserRouter>
    );
    expect(toJSON(userDetailsFormTwo)).toMatchSnapshot()
});


test("has the userDetailsFormTwo title loaded", () => {
    const getCustomErrorMessage = jest.fn()
    const processForm = jest.fn()
    const userDetailsFormTwo = render(
        <BrowserRouter>
            <UserDetailsFormTwo formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />
        </BrowserRouter>
    );
    console.log(userDetailsFormTwo.getAllByText("A little about you.."))
});

test("has the InputElement loaded", () => {
    const getCustomErrorMessage = jest.fn()
    const processForm = jest.fn()
    const userDetailsFormTwo = render(
        <BrowserRouter>
            <UserDetailsFormTwo formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />
        </BrowserRouter>
    );
    expect(userDetailsFormTwo.getAllByRole('textbox').length).toEqual(3)
});

test("has the Select controllers loaded", () => {
    const getCustomErrorMessage = jest.fn()
    const processForm = jest.fn()
    const userDetailsFormTwo = render(
        <BrowserRouter>
            <UserDetailsFormTwo formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />
        </BrowserRouter>
    );
    expect(userDetailsFormTwo.getAllByRole('combobox').length).toEqual(5)
});

test("has the checkbox controllers loaded", () => {
    const getCustomErrorMessage = jest.fn()
    const processForm = jest.fn()
    const userDetailsFormTwo = render(
        <BrowserRouter>
            <UserDetailsFormTwo formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />
        </BrowserRouter>
    );
    expect(userDetailsFormTwo.getAllByRole('checkbox').length).toEqual(1)
});

test("has the Button loaded", () => {
    const getCustomErrorMessage = jest.fn()
    const processForm = jest.fn()
    const userDetailsFormTwo = render(
        <BrowserRouter>
            <UserDetailsFormTwo formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />
        </BrowserRouter>
    );
    expect(userDetailsFormTwo.getAllByRole('button').length).toEqual(2)
});