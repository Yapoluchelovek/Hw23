console.log( "1-ое задание");

for (let i = 0; i <= 100; i++){
    if (i % 2 == 0) console.log(i);
}

console.log( "2-ое задание");




for (let j = 0; j <= 100; j++){
    if (j % 3 == 0) console.log(j);
    if (j % 5 == 0) console.log(j);
}

console.log( "3-ое задание"); 

let k;

do {
  k = prompt("Введите число больше 100");
} while (k <= 100 && k);

console.log("4-ое задание");

let b = 56;

for (let a = 1; a <= 10; a++) {
    console.log( `${a} * ${b} = {${a} * ${b}}` ); 
}