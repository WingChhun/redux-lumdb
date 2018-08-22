import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import MoviesList from "./MoviesList.js";

Enzyme.configure({adapter: new Adapter()})

describe("MoviesList", () => {

    const props = {

        movies: [],
        getMovies: jest.fn()

    }

    it("Renders properly", () => {
        const wrapper = shallow(<MoviesList {...props}/>);

        expect(wrapper).toMatchSnapshot();
    });

    // it("Should call messageVisibility on CLick", () => {     const wrapper =
    // shallow(<MoviesList {...props}/>);     const bvtton = wrapper.find("#btn");
    // button.simulate("click");
    // expect(props.MoviesListVisibility).toHaveBeenCalled(); })

});