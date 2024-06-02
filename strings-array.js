//todo Strings Methodlari immutable / degismez,sabit


const s4 = "merhaba ben ayca kübra"
const s5 = "soruklu"
const s6 = "haLlo"

console.log(s4.concat(" ", s5)); //merhaba ben ayca kübra soruklu

console.log(s4.charAt(s4.length-6)); // k

console.log(s4.includes("a") ? "evet var" : "yok"); // evet var

console.log(s6.search(/[A-Z]/)); //2 index döndürüyor. s6 nin icinde büyük harf nerde diye sordum.

const cümle = "salina salina!";
console.log(cümle.startsWith("sa")); //true // case sensitive var.
console.log(cümle.startsWith("sa", 8)); //false 8. indexten itibaren sa ile basliyor mu?
console.log(cümle.endsWith("!")); //true
console.log(cümle.endsWith("salina",13)); // 13 ile biten yerde salina ile bitis var mi? true 

let oku = "Oku Johny gibi saf olma saf olma"
console.log(oku.replace("saf olma", "akilli ol"));//Oku Johny gibi akilli ol saf olma

//oku = oku.replace("saf olma", "akilli ol"); // yeni degiskene atadik let oku artik degisti buyüzden kalici oldu. Normalde kalici degildi.
//console.log(oku);//Oku Johny gibi akilli ol saf olma 

console.log(oku.replaceAll("saf olma","zeki ol")); //Oku Johny gibi zeki ol zeki ol. All ile tamamini degistirdik.

console.log(oku.slice(10)); // 10. indexten sonrasini keser alir. gibi saf olma saf olma
console.log(oku.slice(10,20)); // 10. indexten 20. indexe kadar olan yeri keser alir. 20. index dahil degil.  gibi saf o
console.log(oku.substring(10,20)); // ayni görevi yapiyor slice ile .gibi saf o

console.log(oku.split(" ")); // bosluklardan ayirarak stringi arraye cevirir. (7) ['Oku', 'Johny', 'gibi', 'saf', 'olma', 'saf', 'olma']
console.log(oku.split("a")); // a lari siler ve a larin oldugu yerden ayirarak array yapar.
console.log(oku.split("a",3)); // a lari siler ve a lardan ayirarak array yapar ve o arrayin ilk 3 elemanini getirir.

const ramazan = "           Hos geldin ya Sehri Ramazan      ";
console.log(ramazan.trim()); // bastaki ve sondaki bosluklari siliyor ve bosluksuz yazdiriyor. Hos geldin ya Sehri Ramazan.

let abc = "             Clarusway Full Stack"
abc = abc.trim().slice(0,9).toUpperCase()
console.log(abc); //CLARUSWAY 

//todo Arrays

const yaslar = [20,50,73,80];

yaslar[0]=15; // Bu sekilde tek tek icerigi degistirebiliriz. const degiskeni olarak atanmis olmasina ragmen.
console.log(yaslar); //(4) [15, 50, 73, 80]

//yaslar=[12,20,78] // Bu sekilde toplu degistiremeyiz const degiskeni oldugu icin.
//console.log(yaslar); //Assignment to constant variable.

const isimler = ["ayca","ömer",25,yaslar]
console.log(isimler[3][1]); //50
console.log(--isimler[3][1]); //49 
console.log(isimler); // kalici olarak 49 oldu.

isimler[2]=28
console.log(isimler); //(4) ['ayca', 'ömer', 28, Array(4)]

meyveler=["elma","erik","kivi"]
console.log(meyveler.pop()); //kivi dizinin son elemanini siler

meyveler.pop() // erikte gitti
console.log(meyveler); // elimizde bir elma kaldi.

console.log(meyveler.shift());// elma dizinin ilk elemanini siler.

console.log(meyveler.push("seftali","mango"));
console.log(meyveler);  //(2) ['seftali', 'mango'] dizi öncesinde bos kalmisti push ile dizinin sonuna yeni meyveler eklendi.

console.log(meyveler.unshift("kiraz"));
console.log(meyveler); //(3) ['kiraz', 'seftali', 'mango'] dizinin basina unshift ile eklemek yaptik.

console.log(meyveler.reverse()); //(3) ['mango', 'seftali', 'kiraz'] diziyi döndürür. reverse sadece dizilerde calisir.

console.log(meyveler[2].split("").reverse().join()); // z,a,r,i,k
console.log(meyveler);

console.log(meyveler.sort()); //(3) ['kiraz', 'mango', 'seftali'] ASCII ye göre alfabetik siraliyor.

const number =[8,7,9,6,5];
console.log(number.sort((a,b)=>a-b)); //(5) [5, 6, 7, 8, 9] kücükten büyüge siraladi.