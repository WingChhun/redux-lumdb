import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import MovieDetail from "./MovieDetail.jsx";

Enzyme.configure({adapter: new Adapter()})

describe("MovieDetail", () => {

    const props = {

        getMovie: jest.fn(),
        resetMovie: jest.fn(),
        movie: {
            id: 1234,
            title: "Hello",
            poster_path: "hello world",
            backdrop_path: "/dude",
            release_date: "yo",
            overview: "Boy meets world"

        },
        backdrop: "/backdrop",
        match: {
            params: {
                id: 1234
            }
        }

    }

    it("Renders properly if given movies", () => {
        const wrapper = shallow(<MovieDetail {...props}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("componentWillReceiveProps shoul;d update movies State", () => {

        const newProps = {
            ...props,
            movie: {
                id: 1234,
                title: "This should work"
            }
        }
        const wrapper = shallow(<MovieDetail {...props}/>);
        const instance = wrapper.instance();

        instance.componentWillReceiveProps(newProps);

        expect(instance.state.movie).toBe(newProps.movie);

    });

    it("componentWillMount() will call getMovie", () => {

        const wrapper = shallow(<MovieDetail {...props}/>);
        const instance = wrapper.instance();

        instance.componentWillMount();

        expect(props.getMovie).toHaveBeenCalled()

    });

    it("componentWIllUnmount() will call resetMovie", () => {

        const wrapper = shallow(<MovieDetail {...props}/>);
        const instance = wrapper.instance();

        instance.componentWillUnmount();

        expect(props.resetMovie).toHaveBeenCalled();

    });
});