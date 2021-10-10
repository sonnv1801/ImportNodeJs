// $('#test').click(function(){
//     alert('đây là callback')
// })

// function tangQua(qua){
//     return console.log("Đã Tặng" + qua)
// }

// tangQua(" Bánh ")

// function oNho(vo, tangQua){
//     var qua = 'Quà đã nhận';
//     tangQua(qua)
// }


// function sayhello(name, callback){
//     var myName = name.toUpperCase() + ", Hello";
//     return callback(myName);
// }

// var result = sayhello("Văn Sơn", function(arg){
//     return arg;
// });

// console.log(result);


// var keywords = ["Van Son", "codelearn", "Học lập trình", "codelearn.io"];

// keywords.forEach(function(eachName, index){
//     console.log(index + 1 + ". " + eachName);
// })

// function doSomething(){
//     console.log("vào");
// }

// function something(doCallback){
//     doCallback();
// }

// something(doSomething);

// function showPopup(callback){
//     if(typeof callback !== 'function'){
//         alert('Bạn phải truyền vào là một function')
//         return false;
//     }
// }


// var personInfo = {
//     name: "Van Son",
//     setName: function(name){
//         this.name = name;
//     }
// }


// var personInfo = {
//     name: "Van Son",
//     setName: function(name){
//         this.name= name;
//     }
// };

// function test(callback, callbackOject) {
//     callback('Nguyen Van Son');
//     callback.apply(callbackOject, [name]);
// }

// test(personInfo.setName, personInfo);

// document.write(personInfo.name, personInfo);

// document.write('<br/>');

// document.write(personInfo.name);

// p_client.open(function(err, p_client){
//     p_client.dropDatabase(function(err, done){
//         p_client.createConnection('test_custom_key', function(err, collection){
//             collection.insert({'a': 1}, function(err, docs){

//             });
//         });
//     });
// });

//Tinh doc goi

// class Student{
//     private String name;
//     private int age;
//     private double gpa;

//     public String getName(){
//         return name;
//     }

//     public void setName(String name){
//         this.name = name ;
//     }

//     public int getAge(){
//         return age;
//     }

//     public void setAge(int age){
//         this.age = age
//     }

//     public double getgpa(){
//         return age;
//     }

//     public void setGpa(double gpa){
//         this.gpa = gpa;
//     }
// }

// class Person{
//     public String name;
//     private int age;

//     public void setName(String name){
//         this.name = name;
//     }

//     public String getName(){
//         return name;
//     }

//     public void setAge(String age){
//         this.age = age;
//     }

//     public int getAge(){
//         return age;
//     }
// }

// class Student extends Person {
//     private double gpa;

//     public void setGpa(double gpa){
//         this.gpa = gpa;
//     }
//     public double getGpa(){
//         return gpa;
//     }
// }

// class Entry {
//     public static void main(String[] args){
//         Student s = new Student();
//         s.setName("Van Son");
//         s.setAge(19);
//         s.setGpa(10);

//         System.out.println('Name: ' + s.setName());
//         System.out.println('Age: ' + s.setAge());
//         System.out.println('GPA: ' + s.setGpa());
//     }
// }


// package OOP;

// class Calculator {
//     public int add(int a, int b) {
//         return a + b;
//     }

//     public double add(double a, double b) {
//         return a + b;
//     }

//     public int add(int a, int b, int c) {
//         return a + b + c;
//     }
// }


// public class Entry{
//     public static void main(String[] args) {
//         Calculator s = new Calculator();

//         System.out.println(s.add(1,2));
//         System.out.println(s.add(2.1,2.4));
//         System.out.println(s.add(1, 2, 3));
//     }
// }

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.showName = function(){
//         console.log(this.firstName + " " + this.lastName);
//     };
// }

// var psn1 = new Person("Son", "Nguyen");

// psn1.firstName ='changed';
// console.log(psn1.firstName);

// function Person(firstName, lastName){
//     var fstName = firstName;
//     var lstName = lastName;

//     this.setFirstName = function(firstName){
//         fstName = firstName;
//     }
//     this.getFirstName = function(){
//         return fstName;
//     }
//     this.setLastName = function(lastName){
//         lstName = lastName;
//     }
//     this.getLastName = function() {
//         return lstName;
//     };
// }

// var person1 = new Person('Son', 'Nguyen');
// console.log(person1.fstName);

// console.log(person1.getFirstName())

function Person(){
    this.firstName = "Son";
    this.lastName = "Nguyen"
    this.sayName = function() {
        return this.firstName + " " + this.lastName;
    }
}

function SuperMan(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

SuperMan.prototype = new Person();

var sm = new SuperMan('Khoa', 'Nguyen');

sm.sayName();

function Bread(){};

let brownBread = new Bread();
let sodaBread = new Bread();

Bread.prototype.toast = function(){
    console.log('I am toasting');
};

brownBread.toast();
sodaBread.toast();