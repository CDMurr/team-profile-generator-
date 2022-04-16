const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test("creates a engineer profile", () => {
    const engineer = new engineer('dillon', 1212, 'email@email.com', '979-265-7052')

    expect(engineer.name).toBe('dillon');
    expect(engineer.id).toBe(1212);
    expect(engineer.email).toBe("email@email.com")
    expect(engineer.officeNumber).toBe('979-265-7052')
});

// test for github username 