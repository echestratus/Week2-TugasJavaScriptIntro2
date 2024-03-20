//1. sort() berguna untuk mengurutkan data secara ascending atau descending
console.log(`1. Contoh built-in function sort()`);
let myArr = [1,9,2,8,3,7,4,6,5];
console.log(`${myArr.sort()}
`);
//2. toLowerCase() berguna untuk mengubah semua karakter dalam string menjadi huruf non-kapital
console.log(`2. Contoh built-in function toLowerCase()`);
let lowerString = "I Love Mesopotamia";
console.log(`${lowerString.toLowerCase()}
`);
//3. toUpperCase() berguna untuk mengubah semua karakter dalam string menjadi huruf kapital
console.log(`3. Contoh built-in function toUpperCase()`);
let upperString = "I Love Mesopotamia";
console.log(`${upperString.toUpperCase()}
`);
//4. slice(start, finish) berguna untuk mengambil elemen array dari indeks tertentu sampai indeks tertentu
console.log(`4. Contoh built-in function slice(start, finish)`);
let mySlice = ["I", "Love", "JavaScript", "as", "A", "Programming", "Language"];
console.log(`${mySlice.slice(4,)}
`);
//5. push(elemen) berguna untuk menambahkan elemen ke dalam array
console.log(`5. Contoh built-in function push(elemen)`);
let myPush = ["I", "Love", "JavaScript", "as", "A", "Programming"];
console.log(`${myPush}`);
myPush.push("Language");
console.log(`${myPush}
`);
//6. parseInt(value) berguna untuk mengubah value ke tipe data integer
console.log(`6. Contoh built-in function parseInt(value)`);
let myParse = "123";
console.log(`${myParse} ${typeof myParse}
${parseInt(myParse)} ${typeof parseInt(myParse)}
`);
//7. isNaN(value) berguna untuk mengetahui apakah sebuah value bukan merupakan tipe data number
console.log(`7. Contoh built-in function isNaN(value)`);
console.log(`"None" Not a Number? ${isNaN("None")}
99 Not a Number? ${isNaN(99)}
`);
//8. Object.keys() berguna untuk mengambil keys dari sebuah objek dan return dalam bentuk array
console.log(`8. Contoh built-in function keys() untuk Object`);
let listNilai = {indo:0,ing:0,mtk:0,ipa:0};
console.log(`${Object.keys(listNilai)}
`);
//9. concat() berguna untuk menggabungkan 2 buah string atau bisa juga 2 buah array
console.log(`9. Contoh built-in function concat()`);
let string1 = "Gun";
let string2 = "Ship";
console.log(`${string1.concat(string2)}
`);
//10. pop() berguna untuk menghilangkan elemen terakhir di dalam array
console.log(`10. Contoh built-in function pop()`);
let myPop = ['a', 'b', 'c', 'd', 'e'];
console.log(myPop);
console.log(myPop.pop());
console.log(myPop);