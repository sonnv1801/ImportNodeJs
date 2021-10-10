
// hello = () => {
//     console.log('hello');
// }

// hello = name => {
//     console.log('hello', name);
// }
// hello('Van Son');

// double = x => x * 2 

// const numbers = [1, 2, 3, 4]
// const newArray = numbers.map(item => item * 2);
// console.log(newArray);

// const person = {
//     name_person: 'Van Son',
//     getNamePerson: function(){
//         return this.name
//     }
// }


// const name_person = 'Van Son';

// function getNamePerson(){
//     return this.name_person
// }

// window.getPerson()
// getNamePerson()

const person = {
    name_person: 'Nguyen Van Son',
    getNamePerson: function(){
        console.log(this.name_person);
    }
};

person.getNamePerson();

// $('button').click(person.getNamePerson.bind(person));

  
 var button = document.getElementById('button'); 
 button.click(person.getNamePerson.bind(person)) 