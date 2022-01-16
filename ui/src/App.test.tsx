import React from 'react';
import { render } from '@testing-library/react'
import { shallow, mount, ReactWrapper } from 'enzyme';
import toJSON from "enzyme-to-json"


import { App, AppWrapper } from "./App"
import { BrowserRouter } from 'react-router-dom';

test("has the main container loaded", () => {
    const app = shallow(<App />);
    expect(toJSON(app)).toMatchSnapshot()
});


test("has the wrapper loaded", () => {
    const wrapper = shallow(
        <BrowserRouter>
            <AppWrapper />
        </BrowserRouter>
    );
    expect(toJSON(wrapper)).toMatchSnapshot()
});