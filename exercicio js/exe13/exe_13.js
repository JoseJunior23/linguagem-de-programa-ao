'use strict'; // Modo "chato" do Javascript

let vetor = [];

const elem_valor = document.querySelector('#valor');
const elem_inserir = document.querySelector('#inserir');
const elem_resultado = document.querySelector('#resultado');

function inserir() {
    let valor = Number(elem_valor.value);

    if (isNaN(valor)) {
        alert('O valor digitado não é um numero valido!');
        elem_valor.focus();
        return;
    }

    let i;
    for (i = 0; i < vetor.length; i++) {
        if(valor == vetor[i]){
            break;
        }

        else if (valor < vetor[i]) {
            vetor.splice(i, 0, valor);
            break;
        }
    }
    if (i == vetor.length) {
        vetor.push(valor);
    }

    elem_resultado.innerHTML = '';

    let p;
    for (let num of vetor) {
        p = document.createElement('p');
        p.innerHTML = num;
        elem_resultado.appendChild(p);
    }

}
elem_inserir.addEventListener('click', inserir);