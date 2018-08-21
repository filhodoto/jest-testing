import 'babel-polyfill';
import axios from 'axios';

/**
 * Return a string
 * @returns {string}
 */
export const hello = () => 'Hey!';

/**
 * Sum elements
 * @param a
 * @param b
 * @returns {*}
 */
export const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number' ) {
        return null
    }
    return a + b;
};

/**
 * Remove names with "Jack"
 * @param names
 * @returns {null}
 */
export const removeJackNames = names => {
    // Filter array for names including Upper and Lower case
    return names.filter(name => !name.toLowerCase().includes('jack'));
};

/**
 * Functions that returns simple object with values
 * @returns {{name: string, surname: string}}
 */
export const createPerson = () => {
    return {
        name: 'Chuck',
        surname: 'Norris'
    }
};

export const fetchUser = async () => {
    const movies = {
        deapool: '293660',
        deapool2: '383498'
    }
    const res = await axios(`https://api.themoviedb.org/3/movie/${movies.deapool2}?api_key=b01d116084668e4b15d36351e4941996&language=en-US`);
    const movie = await res.data;
    return movie;
};