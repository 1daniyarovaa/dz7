class User{
    constructor( name, surname,year){
        this.name = name ;
        this.surname = surname;
        this.year = year;
    }
    getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User{
    constructor( name, surname, year){
    super(name, surname, year)   
    }
    // getFullName(){
    //     console.log(`${this.name}\n${this.surname}`);
    // }
}
const newstudent = new Student('Sasha' , 'Ivanova' , 2023)
console.log(newstudent);
newstudent.getFullName()


// function fullname() {

//     var firstName, surname;
  
//     this.setFirstName = function(newFirstName) {
//       firstName = newFirstName;
//     };
  
//     this.setSurname = function(newSurname) {
//       surname = newSurname;
//     };
  
//     this.getFullName = function() {
//       return firstName + ' ' + surname;
//     }
//   }
  
//   var user = new fullname();
//   user.setFirstName("Sasha");
//   user.setSurname("Ivanova");
  
// console.log( user.getFullName() );



// class fullName extends User {
//     firstName: 'John';
//     lastName: 'Doe';
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }

// }

// class FullName extends User{
//     constructor(name,surname,year){
    
//     }
//     getFullName(){
//         firstName:'Alex';
//         lastName:'Main'
//     }
// }
//  const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
//   const FullName = user.getFullName(user);
//   function setFullName(FullName) {
//     return `${(this.firstName = 'Bob')} ${(this.lastName = 'Marley')}`
//   }

// console.log(getFullName());