//! 1-
// const sayi1 = +prompt ("Lütfen ilk sayiyi giriniz.");
// const sayi2 =  +prompt ("Lütfen ikinci sayiyi giriniz.");
// const islem = prompt ("Lütfen islemlerden yalniz birini seciniz. *,+,-,/");
// let sonuc;

// if(islem == "+"){
//   sonuc = sayi1 + sayi2 
 
// }
// else if (islem == "-"){
//   sonuc = sayi1 - sayi2 
 
// }
// else if (islem == "/" && sayi2 !=0){
//   sonuc = sayi1 / sayi2 
 
// }
// else if (islem == "*"){
//   sonuc = sayi1 * sayi2
 
// } 
// else {
//   alert("Yanlis islem girdiniz, tekrar deneyiniz.")
// } 
// console.log(sonuc); 

// if (sonuc != 0){
//   console.log("Tebrikler bir deger elde ettiniz 😊");
// }

// if (sonuc){
//      console.log("Tebrikler bir deger elde ettiniz"); 
//     }

//! 2-
// const age = 20;
// const gender = "erkek";
// const health = true;

// if ( age >=18 && gender == "erkek" && health == true){
//   console.log("Askere gidebilir");
// }
// else {console.log("Askere gidemez!");
// }
  
// const message = (age >=18 && gender == "erkek" && health == true) ? "Askerlik yapabilir" : "Askerlik yapamaz";
// console.log(message);

// age >=18 && gender == "erkek" && health == true
// ? console.log("Askerlik yapabilir")
// : console.log("Askerlik yapamaz");


//! 3- Kullanıcıdan not isteyelim 50 ve üstüyse başarılı, altıysa başarısız olsun.

// const not = prompt ("Lütfen notunuzu giriniz");


// if(not >=50){
//   console.log("Tebrikler, basardiniz");
// }
// else console.log("Basarisiz oldunuz.");

// not >=50 ? console.log("Tebrikler, basardiniz" ) : console.log("Basarisiz oldunuz.");

// const speed = 150;

// // speed > 120 
// // ? console.log("speedy")
// // :  speed >= 90 
// // ? console.log("normal") 
// // : console.log("slowly");

// if(speed > 120){
//   console.log("speedy");
// }
// else if (speed >=90){
//   console.log("normal");
// }
// else console.log("slowly");

// const num1 = +prompt("Birinci sayiyi giriniz");
// const num2 = +prompt ("Ikinci sayiyi giriniz");
// const islem = prompt ("Islemlerden birini seciniz. *,/,+,-");

// let sonuc;

// switch (islem) {
//   case "+":
//   sonuc = num1 + num2

//     break;

//     case  "*":
//   sonuc = num1 * num2
//     break;

//     case "/" :
//     if(num2 !=0){
//       sonuc = num1 / num2
//     }
//     else alert ("payda 0 olamaz")
//     break;

//     case "-":
//       sonuc = num1 - num2
//     break;

//   default: alert ("Yanlis islem girdiniz.")
//     break;
// }

// // console.log(sonuc);
// console.log(`${num1} ${islem} ${num2} eder`);


//! 4-  Maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın. Ternary ile cözünüz.

// const mindestLohn = 17000;
// const gehalt = +prompt("Geben Sie Ihrem Gehalt ein");
// let erhöhtesGehalt;

// if(gehalt <= mindestLohn){
//   erhöhtesGehalt = gehalt * 1.25
// }
// else {
//   erhöhtesGehalt = gehalt * 1.10
// }
// console.log(erhöhtesGehalt);

// erhöhtesGehalt = gehalt <= mindestLohn ? gehalt * 1.25 : gehalt * 1.10
// console.log(erhöhtesGehalt);



//! 5- 10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız.

// let gehalt = +prompt ("Geben Sie Ihrem Gehalt ein");
// let schuld = 30000
// let resultat;

// resultat = (gehalt * 10) - schuld >= 5000 ?  console.log("Sie können einen Kredit aufnehmen") : console.log("Sie können einen Kredit nicht aufnehmen");



//! 6- Console'dan 3 tamsayi alarak bunlarin en buyugunu yazdiriniz.

// const num1 = prompt ("Geben Sie erste Zahl ein");
// const num2 = prompt ("Geben Sie zweite Zahl ein");
// const num3 = prompt ("Geben Sie dritte Zahl ein");
// let derGrößte;

// if(num1 > num2 && num1 > num3) {
//   derGrößte = num1

// }
// else if (num2 > num3) {
//   derGrößte = num2
// }
// else { derGrößte = num3}
// console.log(derGrößte);


//! 7- Ekrana 10 kez merhaba yazdirin.



// for (let i=1; i<=10; i++ ){
 
//   console.log(`${i} Hallo`);
//   console.error("yanlis");
// }

//! 8- 1 den N e kadar sayilarin toplami?

// let N = +prompt ("Lütfen bir sayi giriniz")
// let toplam = 0;
// for (let i = 1 ; i <= N; i++){
//   toplam += i
//   console.log(toplam);
// }

//! 9- Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// let num = +prompt ("Geben Sie ein Zahl ein.");
// let primeNumber = true;

// for(i=2; i< num; i++){
//   if(num % i == 0){
//     primeNumber = false
   
//   }
  
// }

// console.log(primeNumber ? "asaldir" : "asal degildir.");


//! 10-   0-100 Arasinda 7 adet rastgele tam sayi üreten kodu for döngüsü ile yaziniz.

// for (let i = 1; i<= 7; i++){
//    let rastgele = Math.round(Math.random()*100);
//    console.log(rastgele);
// }

//****************** */ WHİLE*************/

//! 11- While için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz.

// let num = prompt ("Geben Sie ein Zahl ein.")
// while (num<1 || num >100){
//   console.error("Der Zahl muss zwischen 1 und 100 liegen");
//   num = prompt("Geben Sie ein Zahl zwischen 1 und 100 ein.");
// }
// console.log("Herzlichen Glückwunsch, die Zahl liegt zwischen 1 und 100.");


//****************** */ DO-WHİLE*************
//! 12-  do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz.

// let num;
// do {
//    num = prompt ("Geben Sie ein Zahl zwischen 1 und 100 ein");
  
// } while (num<1 || num >100);

// console.log("Herzlichen Glückwunsch, die Zahl liegt zwischen 1 und 100.");

//! 13- Kullanicidan  Vize ve Final notlarini isteyen ve
//! vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not isteyecek ve islemleri tekrar edecektir.

// let weiter;
// do {
//   let zwischenprüfung = +prompt("Geben Sie Ihre Note für die Zwischenprüfung ein.");
//   let abschlussprüfung = +prompt ("Geben Sie Ihre Note für die Abschlussprüfung ein");
//   let grenznote = zwischenprüfung * 0.4 + abschlussprüfung * 0.6;
//   console.log(grenznote > 50 ? "Herzlichen Glückwunsch" : "nicht bestanden");

//   weiter = prompt ("Wenn Sie fortfahren möchten, drücken Sie die Taste „e“.")
  
// } while (weiter.toLowerCase() == "e");


//! 14- Klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.

// let num;
// let bis;
// do {
//   num = prompt("Geben Sie ein Zahl ein.");


  
// } while (num != "q");
// console.log("Du bist nicht auf der Schleife.");


//! 15- GUESS NUMBER

//! 15- Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

// const rastgele = Math.ceil(Math.random()*20);
// console.log(rastgele);
// let hak = 5;

// while (hak > 0){
//   let guess = prompt ("Sayi tahmin ediniz.");
  

// if(rastgele ==guess){
//  console.log("Tebrikler dogru tahmin ettiniz.");4
 
//  break;
// }
// else if(rastgele > guess){
//   console.log("Arttiriniz");
//   hak--
// }
// else  {
//   console.log("Azaltiniz ");
//   hak--
// }
// }

// if(hak == 0){
  
// console.log("5 Hakkinizda da dogru tahmin edemediniz.");
// }

// let summe = 0;
// let zaehler = 0;

// while(true){
//   let number = +prompt ("Geben Sie Ihre Note ein");
  
//   if(!isNaN(number)){
//     summe += number
//     zaehler++
//   }
//   else{
//     let end = prompt ("Keine Nummer gegeben! Zum Beenden drücken Sie q oder Q");
//     if(isNaN(number) && end.toLowerCase() == "q"){
//       break;
//     }
//     // else {
//     //   prompt ("Falsche Information wurde gegeben.");
//     //   break;
//     // }
//   }

// }
// console.log(summe / zaehler);


//! 16- Ücgenin Alanini hesaplayin.

// let breite = prompt ("Geben Sie breite ein");
// let höhe = prompt("Geben Sie höhe ein.");

// function dreieck (breite,höhe) {
//   let ergebnis = (breite * höhe) / 2 
//  }

// console.log(dreieck (breite, höhe));

//! 17- Tek mi cift mi hesaplayiniz.

//  console.log(isEvenOdd (6)); 

// function isEvenOdd (sayi) {

//  const sonuc = sayi % 2 == 0 ? "cifttir" : "tektir" ;
//  return sonuc

// }


//! 18- 
// function summAll () {

// console.log(arguments);
// console.log(arguments[1]);
// console.log(arguments.length);

// }

// summAll (24, 34,56,35,12,89,23,45,78,98)

//! 19- Kare,Küp ve Üs aliniz.

// const kareAl = (a) => a*a;
// console.log(kareAl(6));

// const küpAl = (b) => b**3;
// console.log(küpAl(4));

// const üsAl = (c) => c**5;
// console.log(üsAl(2));

//! 20- Artik yil hesabi yapiniz. 

// const schaltJahr = function (jahr) {

//   if(jahr % 4 == 0 && jahr % 100 != 0 || jahr % 400 == 0 ){
//     console.log(`${jahr} artik yildir. 🌸`);
//   }
//   else {
//     console.log(`${jahr} artik yil degildir.🤗`);

//   }

// }

// schaltJahr(2005); 

//! 21- Bir dairenin alanini ve cevresini bulan fonksiyonu yaziniz. Cevre (perimeter) 2*pi*r / alan (area) pi*r**2

// function areaPerimeter (r) {


// let area = Math.PI * r ** 2  ;
// let perimeter = 2 * Math.PI * r;

// return (`${area.toFixed(2)} area, ${perimeter.toFixed(2)} perimeter`);

// }


// console.log( areaPerimeter(5));


//! 22- Bir dizedeki belirli bir harfin sayisini bulan bir fonksiyon yazin.


// function harfSayisiBul(metin, harf) {
//   let sayac = 0;
//   for (let i = 0; i < metin.length; i++) {
//       if (metin[i] === harf) {
//           sayac++;
//       }
//   }
//   return sayac;
// }

// console.log(harfSayisiBul("merhaba dünya", "e"));  
// console.log(harfSayisiBul("JavaScript", "a"));  

//! 23- Bir dizeden belirli sayıda karakteri çıkarmak için bir fonksiyon yazın.

// function kisaltma (str){

//   let result = str.substr (5,5)

//  return result
// }

//  console.log(kisaltma("Ayca Kübra")); // Kübra


// let str = "Once a day";
// let index = str.indexOf("a");
// console.log(index);
// let index2 = str.lastIndexOf("a");
// console.log(index2);

// console.log(str.indexOf("a", index + 1) === index2);



//! 24- let string="alti,bir,iki,dört,beş,üç,yedi,sekiz,dokuz" >  bu hale 612453789  dönüştüren programi yaziniz.

let string = "alti,bir,iki,dört,beş,üç,yedi,sekiz,dokuz";

const numberMap = {
  "bir": "1",
  "iki": "2",
  "üç": "3",
  "dört": "4",
  "beş": "5",
  "alti": "6",
  "yedi": "7",
  "sekiz": "8",
  "dokuz": "9"
};

const wordsArray = string.split(",");

let numbersArray = wordsArray.map(word => numberMap[word]);

let result = numbersArray.join("");
console.log(result); // 612453789


//! 25- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program yazin.


const array = [1, 2, 3, 2, 2, 4, 3, 5];

function entfernenDuplikate (array) {
    let neuArray = [];

    for (let element of array) {
        if (!neuArray.includes(element)) {
            neuArray.push(element);
        }
    }

    return neuArray;
}

console.log(entfernenDuplikate(array)); //(5) [1, 2, 3, 4, 5]


const pen = {}

pen.ink ="blue";

if(pen["ink"]) {
    console.log(`Color is ${pen["ink"]}`)
}
else {
    console.log("Color is undefined");
}

























//! 13- Size bir dizi kelime verildi. "Nemo" kelimesini bulmanız ve şuna benzer bir dize döndürmeniz gerekir: 
//? "[Nemo'yu bulduğunuz kelimenin sırası] 'nda Nemo'yu buldum!"

//? Nemo'yu bulamıyorsanız, "I can't find Nemo :(" yazın.

//? findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

//? findNemo("Nemo is me") ➞ "I found Nemo at 1!"

//? findNemo("I Nemo am") ➞ "I found Nemo at 2!"






















const fiyatlar = [100,250,50,89];

const zamliFiyatlar = fiyatlar.map((a)=>Math.ceil(a*1.1));
console.log(zamliFiyatlar); //(4) [111, 275, 56, 98]

fiyatlar.filter((a)=> a>90).forEach((a)=>console.log(a)) // 100,250

fiyatlar.filter((a)=>a<110).map((a)=>Math.ceil(a*1.1)).forEach((a)=>console.log(a)); // 111,56,98



const maaslar= [3000,5000,4000,6000,6500];

const zamliMaas = maaslar.filter((a)=>a<4000).map((a)=>a*1.5);
console.log(zamliMaas); // [4500]

const zamliMaas2 = maaslar.filter((a)=>a>4000).map((a)=>a*1.25);
console.log(zamliMaas2); //(3) [6250, 7500, 8125]







 

