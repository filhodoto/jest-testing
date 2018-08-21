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