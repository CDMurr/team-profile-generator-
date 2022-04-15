// for each class, which will start with the employee class
const Employee = require('../lib/Employee')
// right test for constructor for the employee class 
test('creates a employee badge', () => {
    const employee = new Employee('dillon', 1212, 'email@email.com')
   
    expect(employee.name).toBe('dillon');
    expect(employee.id).toBe(1212);
    expect(employee.email).toBe("email@email.com");
});

test('gets the employee name', () => {
    const employee = new Employee('dillon', 1212, 'email@email.com')
     
    expect(employee.getName()).toBe('dillon');
}); 

test('gets employee id', () => {
    const employee = new Employee('dillon', 1212, 'email@email.com')
    
    expect(employee.getId()).toBe(1212)
});

test('gets employee email', () => {
    const employee = new Employee('dillon', 1212, 'email@email.com')   

    expect(employee.getEmail()).toBe("email@email.com")
});



// test('gets employee email', () => {
//     const employee = new Employee('code@email.com');
    
//     expect(employee.getEmail()).toBe('code@email.com')
// })





// test for consructor to fail
// right code to make constructor pass
// refactor code 


// then follow same structure,
//  write constructor for manager, enginer, student class
