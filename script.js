var textoTela = document.getElementById("textoTela");

function verificaDigitosVerif(inputCPF, firstDigit, secDigit){
    let penultimoNum = inputCPF[9];
    let ultimoNum = inputCPF[10];
    if(inputCPF == "00000000000" || 
        inputCPF == "11111111111" ||
        inputCPF == "22222222222" ||
        inputCPF == "33333333333" ||
        inputCPF == "44444444444" ||
        inputCPF == "55555555555" ||
        inputCPF == "66666666666" ||
        inputCPF == "77777777777" ||
        inputCPF == "88888888888" ||
        inputCPF == "99999999999")
        {
        textoTela.style.color='red';
        textoTela.innerHTML = "CPF Inválido!";
    }else if(penultimoNum == firstDigit && ultimoNum == secDigit){
        textoTela.style.color='green';
        textoTela.innerHTML = "CPF Válido!";
    }else{
        textoTela.style.color='red';
        textoTela.innerHTML = "CPF Inválido!";
    }
}

/*Funcao que retorna o Segundo Digito Final*/
function calcSegundoDigito(caracteres){
    var armSoma = 0;
    for(var i=0; i<10; i++){
        var multCaractere = Number.parseInt(caracteres[i]);
        var multNum = multCaractere * i;
        armSoma = multNum + armSoma;
    }
    var valorBruto = armSoma%11;
    var transfBrutoString = valorBruto.toString();
    var segDigitoFinal = transfBrutoString[transfBrutoString.length-1];
    return segDigitoFinal;
}

/*Funcao que retorna o Primeiro Digito Final*/
function calcPrimeiroDigito(caracteres){
    var armSoma = 0;
    for(var i=0; i<9; i++){
        var multCaractere = Number.parseInt(caracteres[i]);
        var multNum = multCaractere * (i+1);
        armSoma = multNum + armSoma;
    }
    var valorBruto = armSoma%11;
    var transfBrutoString = valorBruto.toString();
    var primDigitoFinal = transfBrutoString[transfBrutoString.length-1];
    return primDigitoFinal;
}

/*Funcao que armazena cada digito da String CPF em um array e chama a Funcao calcPrimeiroDigito*/
function armCaracterVetor2(inputCPF){
    var caracteres = [];
    for(var i=0; i<10; i++){
        caracteres[i] = inputCPF[i];
    }
    return calcSegundoDigito(caracteres);
    
}

/*Funcao que armazena cada digito da String CPF em um array e chama a Funcao calcPrimeiroDigito*/
function armCaracterVetor1(inputCPF){
    var caracteres = [];
    for(var i=0; i<9; i++){
        caracteres[i] = inputCPF[i];
    }
    return calcPrimeiroDigito(caracteres);
    
}

/*Principal*/
var btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();

    var campoCPF = document.getElementById("inputCPF");
    var inputCPF = campoCPF.value;

    var primeiroDigitoVerificador = armCaracterVetor1(inputCPF);

    var segundoDigitoVerificador = armCaracterVetor2(inputCPF);

    var verificaCPF = verificaDigitosVerif(inputCPF, primeiroDigitoVerificador, segundoDigitoVerificador);
});
