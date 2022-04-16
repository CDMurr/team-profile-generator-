const Employee = require('./Employee');
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
         
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
}   

// get role()
// class Manager 

// { 
//     constructor(name, email, officeNumber) {
        
//         this.officeNumber = officeNumber;  
//     }
// }

module.exports = Manager;