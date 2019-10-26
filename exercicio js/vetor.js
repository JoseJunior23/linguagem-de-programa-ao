var primos = Array(2,3,5,7,11);

//Modo Moderno
let pares = [0,2,4,6,8,10];

//Vetor vazio
let vazio1 = Array();
let vazio2 =[];

//Acrescentando novos elementos no final do vetor 
primos.push(13);
pares.push(12);
vazio1.push('Ingles');
//Acrescentando novos elementos no inicio do vetor
primos.unshift(1);
pares.unshift(-2);
vazio1.unshift('portugues');
vazio2.unshift('Fusca');
//retirar o 1º elemento do vetor
let num1 = primos.pop()
let num2 = pares.pop()
//retirar o 2ª elemento do vetor
let num3 = primos.shift();
let num4 = pares.shift()

console.log(primos);
console.log(pares);
console.log(vazio1);
console.log(vazio2);

console.log(`O valor retirado foi ${num1}`)
console.log(`O valor retirado foi ${num2}`)
console.log(`O valor retirado foi ${num3}`)
console.log(`O valor retirado foi ${num4}`)

console.log(`O numero de elementos de primos é ${primos.length}`)
console.log(`O numero de elementos de primos é ${pares.length}`)
console.log(`O numero de elementos de primos é ${vazio1.length}`)
console.log(`O numero de elementos de primos é ${vazio2.length}`)

//Acessando o segundo elemento do vetor vazio1
console.log(vazio1[1]); //A posição é sempre uma casa a menos 

//Trocando o conteudo do Primeiro elemento do vetor
vazio1[0 ] = 'espanhol'
console.log(vazio1);

// percurso de vetor
//em um for tradicional o contador deve iniciar em 0
//e terminar antes de atingir a volor de lengh
for(let i = 0; i < primos.length; i++){
    console.log(primos[i]);
}
console.log('////////////////////////////////////////////')
// PERCURSO INVERSO DO VETOR
// o conntador deve iniciar em lengh -1 e vai ate zero inclivive
for(let x = pares.length -1; x >= 0 ; x--){
    console.log(pares[x]);
}
console.log('////////////////////////////////////////////')
//PERCURSO ASCENDENTE COM for ...of
for(let primo of primos){
    console.log(`${primo}`);
}

// consultando se um valor existe dentro de um vetor : indexof
console.log(vazio1.indexOf('ingles'));
console.log(vazio1.indexOf('espanhol'));
console.log(vazio1.indexOf('francês'));

//Outra forma de consultar um elemento existe: includes
// so funciona em navegadores apos 2016
console.log(vazio1.includes('espanhol'));
console.log(vazio1.includes('francês'))

// ACRESECENTANDO ELEMENTOS NO MEIO DO VETOR;splice
// Argumentos
// 1º posição em que o novo elemento será inserido
// 2º quantos elementos serão apagados 
// 3º o novo elemento
primos.splice(2,0,17);
vazio1.splice(1,0,'alemão');

console.log(primos);
console.log(vazio1);

// retirando um elemento do meio do vetor:sĺice() de novo
//argumentos
// 1ª a posição da qual o elemento será retirado
// 2ª quantos elementos serão apagados
// OBS : SEMPRE retornará um vetor
let num5 = primos.splice(4,1);
let num6 = pares.splice(2,2);

console.log(num5[0]);
console.log(num6[1]);
console.log(primos);
console.log(pares);

