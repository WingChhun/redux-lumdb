import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Toggle from "./Toggle.jsx";

Enzyme.configure({adapter: new Adapter()})

describe("Toggle", () => {

    const props = {

        messageVisibility: false,
        toggleVisibility: jest.fn()

    }

    it("Renders properly", () => {
        const wrapper = shallow(<Toggle {...props}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("should update MessageVisibility when receive props", () => {
        const wrapper = shallow(<Toggle {...props}/>);
        const instance = wrapper.instance();
        const newProps = {
            ...props,
            messageVisibility: true
        }

        instance.componentWillReceiveProps(newProps);

        expect(instance.state.messageVisibility).toBeTruthy();

    })

    // it("Should call messageVisibility on CLick", () => {

    //     const wrapper = shallow(<Toggle {...props}/>);

    //     const bvtton = wrapper.find("#btn");

    //     button.simulate("click");

    //     expect(props.toggleVisibility).toHaveBeenCalled();

    // })

});