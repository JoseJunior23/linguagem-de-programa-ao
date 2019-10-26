let estacoes = [];
estacoes.push('Santa Terezinha ', ' Estação', ' Centro', ' Jardim Lima', ' Aeroporto I');
for (let elem_estacoes of estacoes) {
    document.write(elem_estacoes + '<br>');
}
document.write('<hr>');
estacoes.unshift('City Petropolis');
estacoes.push('Aeroporto IV');
for (let elem_estacoes of estacoes) {
    document.write(elem_estacoes + '<br>');
}
document.write('<hr>');
estacoes.splice(2, 0, 'Vila Imperador');
estacoes.splice(6, 0, 'Jardim Alvorada');
for (let elem_estacoes of estacoes) {
    document.write(elem_estacoes + '<br>');
}
document.write('<hr>');
estacoes.splice(4, 1, '9 de Julho', 'Champagnat');
for (let elem_estacoes of estacoes) {
    document.write(elem_estacoes + '<br>');
}
document.write('<hr>');
estacoes.splice(8, 1);
estacoes.pop();
for (let elem_estacoes of estacoes) {
    document.write(elem_estacoes + '<br>');
}
document.write('<hr>');