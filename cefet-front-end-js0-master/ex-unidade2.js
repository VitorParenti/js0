function contandoElementosDoVetor(elementos, elementoSendoProcurado) {
    let quantidade = 0;
    for (let elemento of elementos) {
        if (elemento===elementoSendoProcurado) quantidade++;
    }
    return quantidade;
}

function obtemNomeDoMes(numero) {
    if (numero < 1 || numero > 12) {
        escrevaMensagem(0.5, 'Mês inválido: ' + numero);
        return null;
    }
    
    let meses = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ];

    return meses[numero-1];
}

function calculaVelocidadeAlturaBola (velocidadeInicial,gravidade,n) {
    for (let tempo = 1; tempo <= n; tempo++) {
        escreva("3",`h(${tempo})`,calculaAlturaBola(tempo, velocidadeInicial, gravidade));
        escreva("3",`v(${tempo})`,calculaVelocidadeBola(tempo, velocidadeInicial, gravidade))
    }
}

function somatorio(n) {
    var soma=0;
    for (let i = 2; i <=n ;i=i+2) {
        soma=soma+1/i;
    }
    return soma;
}

function obtemPosicaoDoElemento(array,elemento) {
    var retorno=null;
    array.forEach((element,i) => {
        if(element==elemento){
            console.log(i,element)
            retorno=i;
        }
    });
    return retorno;
}
var digitosDePi=[3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6]
var pos=obtemPosicaoDoElemento(digitosDePi,4);
escreva("5","Index",pos);

function calculaMediaEntreExtremos(v){
    var maiorElemento=menorElemento=v[0];
    v.forEach((elemento,i) => {
        if(elemento>maiorElemento){
            maiorElemento=elemento;
        }
    });
    v.forEach((elemento,i) => {
        if(elemento<menorElemento){
            menorElemento=elemento;
        }
    });
    return (maiorElemento+menorElemento)/2;
}

function fibonacci(n) {
    var sequencia=[0,1];
    switch (n) {
        case 0:
            return [];
            break;
        case 1:
            return [0];
            break;
        default:
            break;
    }
    for (let i = 2; i < n; i++) {
        sequencia.push(sequencia[i-2]+sequencia[i-1]);
    }
    return sequencia
}