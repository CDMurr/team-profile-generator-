const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("creates a manager profile", () => {
    const manager = new Manager('dillon', 1212, 'email@email.com', '979-265-7052')

    expect(manager.name).toBe('dillon');
    expect(manager.id).toBe(1212);
    expect(manager.email).toBe("email@email.com")
    expect(manager.officeNumber).toBe('979-265-7052')
});
// test for get role()
test("gets employees role", () => {
    const manager = new Manager('dillon', 1212, 'email@email.com', '979265-7052')

    expect(manager.getRole()).toBe('Manager')
});


// what are we asking for first? give it a name id ad email 