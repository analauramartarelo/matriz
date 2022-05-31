

var tamanholinhas = prompt("Insira uma quantidade de linhas para a matriz");
var tamanhocolunas = prompt("Insira uma quantidade de colunas para a matriz");

var matriz1 = [];

for (var i = 0; i < tamanholinhas; i++){ 
    matriz1.push([]);
}
for (var i = 0; i < tamanholinhas; i++){ 
    
    for (var x = 0 ; x < tamanhocolunas ; x++){

        matriz1[i][x] = Math.floor(Math.random() * 100)

    }

}

document.write( "<table border=1>");
for (i = 0; i < matriz1.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz1[i].length; x++) {
linha = linha + "<td>" + matriz1[i][x] + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table>");

var matriz2 = [];

for (var i = 0; i < matriz1[0].length; i++){ 
    matriz2.push([]);
}

for (var i = 0; i < matriz1[0].length; i++){ 
    for (var x = 0 ; x < matriz1.length ; x++){
        matriz2[i][x] = matriz1[x][i];
    }
}

document.write( "<table border=1>");
for (i = 0; i < matriz2.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz2[i].length; x++) {
linha = linha + "<td>" + matriz2[i][x] + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table>");



 