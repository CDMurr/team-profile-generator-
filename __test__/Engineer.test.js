const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


test("creates a engineer profile", () => {
    const engineer = new Engineer('dillon', 1212, 'email@email.com', 'CDMurr')

    expect(engineer.name).toBe('dillon');
    expect(engineer.id).toBe(1212);
    expect(engineer.email).toBe("email@email.com")
    expect(engineer.gitHub).toBe('CDMurr')
});

// test for github username 
test('gets employee role', () => {
    const engineer = new Engineer('Engineer')

    expect(engineer.getRole()).toBe('Engineer')
});