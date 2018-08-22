import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import MoviesList from "./MoviesList.jsx";

Enzyme.configure({adapter: new Adapter()})

describe("MoviesList", () => {

    const props = {

        movies: [
            {
                id: 1,
                poster_path: 'hello',
                title: "Yo"
            }, {
                id: 2,
                poster_path: 'hello',
                title: "Yo"
            }, {
                id: 3,
                poster_path: 'hello',
                title: "Yo"
            }
        ],
        getMovies: jest.fn()

    }

    it("Renders properly if given movies", () => {
        const wrapper = shallow(<MoviesList {...props}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("componentWillReceiveProps shoul;d update movies State", () => {

        const newProps = {
            ...props,
            movies: [
                {
                    id: 2,
                    title: "dude",
                    poster_path: '/path'
                }
            ]
        }
        const wrapper = shallow(<MoviesList {...props}/>);
        const instance = wrapper.instance();

        instance.componentWillReceiveProps(newProps);
    
        expect(instance.state.movies).toBe(newProps.movies);
    });



});