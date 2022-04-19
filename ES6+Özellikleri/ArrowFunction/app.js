// const merhaba = function(){
//     console.log("merhaba");
// }

// merhaba();


//Arrow function

// const merhaba = () => {

//     console.log("merhaba");
// }

// merhaba();

// const merhaba = firstName => console.log("merhaba", firstName);

// merhaba("murat");

// const cube = x * x* x;

// console.log(cube(4));

// const names = ['Seda', 'Eda' , 'Sultan' , 'Umit'] 


// // for(var i=0; i < names.length; i++){
// //  console.log(names[i] + ' Kara')
// // }




// // names.forEach(isim => {
// //     console.log( isim + " Kara")
// // });

// let deneme

// deneme=names.map(isim => {
//     return isim + " Kara"
// });
// console.log(names)


// console.log(deneme)

// {
//     let seda = 2;
//   }


// // Desructing

// let number1,number2;

// arr = [100,200,300,400];

// // number1 = [0];
// // number2 = [1];

// [number1,number2] = arr;

// console.log(number1,number2);

// Obje Destructing
// const numbers = {
//   a:10,
//   b:20,
//   c:30,
//   d:40,
//   e:50,
// };

// const {a:number1, c:number2, e:number3} = numbers;

// console.log(number1,number2,number3);

// Function Destructing =>  yalnızca gerekli olan malzemeyi çıkarmayı kolaylaştırır.
// const getLangs = () => ["python", "java" , "C++"];

// const [lang1,lang2,lang3] = getLangs();
// console.log(lang1,lang2,lang3);

// Spread Operator


// const langs = ["python", "java" , "C++" ,"php"];

// // console.log(langs[0],langs[1],langs[2],langs[3]);

// // spread operatorü sayesinde yukardaki fomksiyonumuzu şu şekilde yazdırırsakta aynı sonucu görürüz.
// console.log(...langs);

// const person = {
//     name : "Mustafa Murat" , 
//     age : 25,
//     salary:3000

// };

// const langs = ["python", "java" , "C++" ,"php"];
// const name = "mustafa";

// // For In  döngüsü ile objelerin üzerinde gezinebiliriz...
// // object

// for(let prop in person){
//     console.log(prop,person[prop]);
// }

// //Array
// for (let index in langs){
//     console.log(index,langs[index]);
// }

// // String

// for (let index in name){
//     console.log(index);
// }

// for of döngüsü ile değerlerimizin üzerinde gezinemeyiz 

// for (let value of langs){
//     console.log(value);
// }

// //string 
// for (let character of name){
//     console.log(character);
// }



// Mapler - Key(Anahtar) - Value(Değer)

// let myMap = new Map(); // Oluşturma

// // console.log(myMap);

// const key1 = "mustafa";
// const key2 = {a:10,b:20};
// const key3 = () => 2;

// // Set 
// myMap.set(key1,"string değer");
// myMap.set(key2,"object literal değer");
// myMap.set(key3,"function değer");

// //get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));


// console.log(myMap);

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);


// // for each

// cities.forEach(function(value,key){
//     console.log(key,value);
// })


// let a = "mustafa";
// let b = "mustafa";

// if (a === b) {
//     console.log("Eşit");
// }

// basit bir obje oluşturma

// const emp1 = {
//     name: "Mustafa",
//     age:25,
//     showInfos: function() {console.log("Bilgiler Gösteriliyor");}
// };

// const emp2 = {
//     name: "Seda",
//     age:30
// }

// emp1.salary = 4000;
// emp1.showInfos();

// console.log(emp1);
// console.log(emp2);


function Employee(){   // Yapıcı Fonksiyon - Constructor
    this.name = "mustafa";
}

const emp1 = new Employee();
const emp2 = new Employee();

console.log(emp1);
console.log(emp2);
