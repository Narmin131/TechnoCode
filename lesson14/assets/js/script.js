// OPERATORS
// Assingment operators - Menimsetme operatorları
// =
// +=
// -=
// *=
// /=
// %=
// **=

var a = 5;
// a += 3
// console.log(a);

// a = a + 3

a *= 2;
console.log(a);
a = a * 2;

// Arithmetic operators - Riyazi opertorlar
// +
// -
// *
// /
// %
// **
// ++
// --

var b = 10;
var c = 12;

// console.log(b + c);

// Comparison operators - Müqayisə(Qarşılaşdırma) opertorları
// ==
// ===
// <
// >
// <=
// >=
// !=
// !==

console.log(10 == "10");
console.log(10 === "10");

console.log(7 != 10);

// Logical operators - Məntiqi operatorlar
// && - AND - ve
// || - OR - ve ya
// ! - NOT - inkar

console.log(5 == 5 && 1 > 3);
console.log(12 == 12 || 2 > 5);

// Other (Special) Operators (Xüsusi operatorlar) Start
// , (vergül)(kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// (5>10) ? console.log(true):console.log(false);;
// \  (tərs slash)(Qaçındırma operatorudur)

// console.log(void(aJ));

// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)
console.log(typeof true);

// ?:           (sual üst-üstə qoşa nöqtə)((şərt) ? ifadə1 : ifadə2)(ternary)
// 5>10 ? console.log(true): console.log(false);
// (5 >= 10) ? document.write("Hi") : document.write("Bye");
// şərt            ? true                 : false

// void         (dəyişkənin dəyərini undefined etmək üçündür)
// delete       (objectin dəyərini silmək üçündür)
// new          (yeni dəyər yaratməq üçündür)
// this         (mövcud dəyəri işarələmək üçündür)
// in           (dəyişkənin(object) daxilində dəyərin olub olmamasını yoxlamaq üçündür)
// instanceof   (dəyişkənin(objectin xüsusiyyətinin) içində xüsusiyyət olub olmamasını yoxlamaq üçündür)

// If, else if, else
// eger, deyilse eger, deyilse

let price = 120;

if (90 > price) {
  console.log("90 pricedan boyukdur");
} else if (90 == price) {
  console.log("90 price beraberdir");
} else {
  console.log("90 priceden kickdir");
}

// const age = 18;

// if (age >= 18) {
//   console.log("Nick is an adult.");
// } else {
//   console.log("Nick is a child.");
// }

const age = 18;

if (age < 18) {
  console.log("Alice is under 18 years old.");
} else if (age >= 18 && age <= 21) {
  console.log("Alice is between the ages of 18 and 21.");
} else {
  console.log("Alice is over 21 years old.");
}

const pet = "dog";

if (pet === "lizard") {
  console.log("I own a lizard");
} else if (pet === "dog") {
  console.log("I own a dog");
} else if (pet === "cat") {
  console.log("I own a cat");
} else if (pet === "snake") {
  console.log("I own a snake");
} else if (pet === "parrot") {
  console.log("I own a parrot");
} else {
  console.log("I don't own a pet");
}