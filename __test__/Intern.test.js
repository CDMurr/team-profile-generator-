const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');


test('creates a intern profile', () => {
     const intern = new Intern('dillon', 1212, 'email@email.com', 'UTSA')

     expect(intern.name).toBe('dillon');
     expect(intern.id).toBe(1212);
     expect(intern.email).toBe("email@email.com")
     expect(intern.school).toBe('UTSA')
});

// test for school name 
test('gets student role', () => {
    const intern = new Intern('Intern')

    expect(intern.getRole()).toBe('Intern')
});