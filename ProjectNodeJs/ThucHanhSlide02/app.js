// console.log("Welcome to Dong A!")

// var a = "Lớp a"; // khai báo có var

// b = "Lớp b"; // khai báo không có var

// console.log("bien a = " + a);
// console.log("bien b = " + b);

// const a = "Welcom to ĐH Đông Á";
// // kiểu dữ liệu String
// const b = 10000;
// // kiểu số nguyên (int)
// const c = 10.6;
// // kiểu số thực (float)
// const d = true;
// // kiểu logic boolean

// var name = "Nguyễn Văn Sơn";
// gán

// var a = 10;
// var a++;

// var a = 10;
// var a--;

// var a = 10;
// var b = 15;
// var a+=b; a + b

// var a = 20;
// var b = 15;
// var a+-b; a - b

// var a = 30;
// var b = 15;
// var a/=b; a / b

// function hello(name){
//     console.log("hello world " + name);
// }

// hello("return name");

// var diemthi = 5

// if(diemthi < 10){
//     console.log("Đúng Rồi");
// }else{
//     console.log("Phép Toán Sai");
// }

// var diemthi = 6.5;

// if(diemthi < 4){
//     console.log("Yếu");
// }else if(diemthi >= 5 && diemthi < 6.5){
//     console.log("TB");
// }else if(diemthi >= 6.5 && diemthi < 8){
//     console.log("Khá");
// }else{
//     console.log("Giỏi");
// }

// var diemthi = 1

// diemthi < 5 ? console.log("Thua") : console.log("Thắng");

// var now = 1;

// switch (now) {
//   case 2:
//     console.log("Thứ 2");
//     break;
//   case 3:
//     console.log("Thứ 3");
//     break;
//   case 4:
//     console.log("Thứ 4");
//     break;
//   case 5:
//     console.log("Thứ 5");
//     break;
//   case 6:
//     console.log("Thứ 6");
//     break;
//   case 7:
//     console.log("Thứ 7");
//     break;
//   case 8:
//     console.log("CN");
//     break;
//   default:
//     console.log("Sai rồi");
//     break;
// }


// var Students = new Object();

// var Students = {}

// var students = new Object();
// students.name = "Nguyen Van Son";
// students.age = "20";
// students.clas = "ST19A1A";
// students.from = "Quang Ngai"

// var Students = {
//     name: "Nguyen Van Son",
//     age: "20",
//     clas: "ST19A1A",
//     from: "Quang Ngai"
// }

// var Students = {};
// Students.name = "Nguyen Van Son";
// Students.age = "20";
// Students.clas = "ST19A1A";
// Students.from = "Quang Ngai"

// var Students = new Object();
// Students.AddStudents = function(name, age, clas, from) {
//     this.name = name;
//     this.age = age;
//     this.clas = clas;
//     this.from = from;
// }

// var Students = {
//     AddStudents:  function(name, age, clas, from) {
//         this.name = name;
//         this.age = age;
//         this.clas = clas;
//         this.from = from;
//     }
// };

// var Students = {};
// Students. AddStudents =  function(name, age, clas, from) {
//     this.name = name;
//     this.age = age;
//     this.clas = clas;
//     this.from = from;
// }


var Person = {
    name: {
        firstName: "Son",
        lastName: "Nguyen"
    },
    birthDate: {
        day: "12",
        month: "10",
        year: "2001"
    }

}

var arr = [Person];

console.log(arr[0].name.firstName);
console.log(arr[0].birthDate.day);


// var http = require('http');

// http.createServer((req, res) => {
//     // res.writeHead(200, {'content': 'text/html'});
//     res.write('<html>');
//     res.write('<head>');
//     res.write('<title>Hello Nguyen Van Son</title>');
//     res.write('<head/>');
//     res.write('<body><h1 style="color: green;">Hello world</h1></body>')
//     res.write('<html/>');
//     console.log("Bạn đã Kết nối");
//     res.end();
// }).listen(5000);

// var http = require('html');

// http.createServer(function (req, res) {
//     var params = req.url;
//     res.write("node ");
//     res.end();
// }).listen(6000);