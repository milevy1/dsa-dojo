const { validate } = require('../lib/wellFormedStringValidator')

describe('wellFormedStringValidator - validate', () => {
    it.each([
        '()',
        '(())',
        '(()()())()'
    ])('returns true if parentheses are properly nested, test case: %s', (validString) => {
        expect(validate(validString)).toEqual(true)
    })

    it.each([
        '(',
        ')',
        '())',
        '()(('
    ])('returns false if parentheses are NOT properly nested, test case: %s', (invalidString) => {
        expect(validate(invalidString)).toEqual(false)
    })
})
