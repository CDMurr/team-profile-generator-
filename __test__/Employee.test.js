// for each class, which will start with the employee class
const Employee = require('../lib/Employee')
// right test for constructor for the employee class 
test('creates a employee badge', () => {
    const employee = new Employee('dillon', 899, 'email@email.com')
   
    expect(employee.name).toBe('dillon');
    expect(employee.id).toBe(899);
    expect(employee.email).toBe("email@email.com");
});

// test for consructor to fail
// right code to make constructor pass
// refactor code 


// then follow same structure,
//  write constructor for manager, enginer, student class
