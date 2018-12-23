import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

it('renders to correct text when no enthusiasm level is given', () => {
    const hello = shallow(<Hello name="D" />);
    expect(hello.find(".greeting").text()).toEqual("Hello D!");
});