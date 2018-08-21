import {
    hello,
    sum,
    removeJackNames
} from "./App";

/**
 * Test a string
 */
describe('hello text', () => {
    // It functions are where we describe what the test should dow
    // 1. define name of test
    // 2. Define what test should expect inside a function
    it('Text should output hello', () => {
        // Run function and tell jest what to expect
        expect(hello()).toBe('Hey!');
    })
});

/**
 * Test sum of two number
 * Using several test cases
 */
describe('sum numbers', () => {
    it('Should sum two numbers', ()=> {
        // Add several test cases
        expect(sum(1,3)).toBe(4);
        expect(sum(200,3)).toBe(203);
        expect(sum(-1,1)).toBe(0);
    });
    // Check if there's an object
    it('should not add strings', ()=> {
        expect(sum(1,'3')).toBe(null);
    });
    // Check if there's an object
    it('should not add array', ()=> {
        expect(sum(1,[])).toBe(null);
    })
});

/**
 * Test 'Jack' names removed from array
 */
describe('remove Jack names', () => {

    // Check if it didn't remove uncessary names
    it('Should remove only Jack name', () => {
        const names = ['Nicholson, Jack', 'Irons, Jeremy'];
        expect(removeJackNames(names)).toContain('Irons, Jeremy');

    });
    // Check if it's case sensitive
    it('Should be case sensitive', ()=>{
        const names = ['Nicholson, Jack', 'Nicholson, jack', 'Irons, Jeremy'];

        expect(removeJackNames(names)).toContain('Irons, Jeremy');
        expect(removeJackNames(names)).not.toContain('Nicholson, jack');
        expect(removeJackNames(names)).not.toContain('Nicholson, Jack');
    });
});