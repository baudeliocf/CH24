const { default: expect } = require('expect');

const dna = require("../dna");

test('check', () => {
     expect(dna('FCHAGKCSJGFBQWAELCJGDHAFKTLJCGDRKGJFHA')).toBe('CAGCGACGATCGGA');
})
