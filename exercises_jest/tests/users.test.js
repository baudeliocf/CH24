// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


test('Id is number', () => {
    let data = getUsers();
    for (let i = 0; i < data.length; i++){
        expect(typeof(data[i].id)).toBe('number')
    }
})

test('No null', () => {
    let data = getUsers();
    for (let i = 0; i < data.length; i++){
        expect(data[i].username).not.toBeNull();
        expect(data[i].email).not.toBeNull();
        expect(data[i].password).not.toBeNull();
    }
})


test('No empty', () => {
    let data = getUsers();
    for (let i = 0; i < data.length; i++){
        expect(data[i].username).not.toBe('');
        expect(data[i].email).not.toBe('');
        expect(data[i].password).not.toBe('');
    }
})

test('Has @', () => {
    let data = getUsers();
    for (let i = 0; i < data.length; i++){
        expect(data[i].email).toMatch(/@/)
    }
})