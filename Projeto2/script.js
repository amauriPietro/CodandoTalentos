function gerenciaDivs(){
    if(document.getElementById('optCompare').checked === true){
        document.getElementById('Compare').hidden = false;
        document.getElementById('Check').hidden = true;
        document.getElementById('hasOutput').disabled = true;
        document.getElementById('ignoreCase').disabled = false;
    }
    else if(document.getElementById('optCheck').checked === true){
        document.getElementById('ignoreCase').disabled = true;
        document.getElementById('hasOutput').disabled = false;
        document.getElementById('Compare').hidden = true;
        document.getElementById('Check').hidden = false;
        if(document.getElementById('hasOutput').checked === true)
            document.getElementById('Output').hidden = false;
        else
            document.getElementById('Output').hidden = true;
    }
}

function transformaTexto(){
    var texto = document.getElementById('input3').value;
        output = document.getElementById('outputText');
    if(document.getElementById('outOpt1').checked === true)
        output.value = "";
    else if(document.getElementById('outOpt2').checked === true)
        output.value = texto.toUpperCase();
    else if(document.getElementById('outOpt3').checked === true)
        output.value = texto.toLowerCase();
    else{
        var novoTexto = "";
        for(const i of texto){
            if(novoTexto.charAt(novoTexto.length - 1) === ' '){
                novoTexto += i.toUpperCase();
            }
            else
                novoTexto += i.toLowerCase();
        }
        output.value = novoTexto.substring(0, novoTexto.length);
    }
        
}

function retornaTamanho(){
    var len = document.getElementById('input3').value;
        cnt = 0;
    document.getElementById('totalLength').innerHTML = 'Tamanho do texto: ' + len.length + ' caracteres';
    for(var i = 0; len.length > i; i++){
        if(len[i] !== ' ')
            cnt++;
    }
    document.getElementById('spacelessLength').innerHTML = 'Tamanho do texto sem espaços: ' + cnt + ' caracteres';
    transformaTexto();
    statusLength();
}

function statusTamanho(){

}

function statusComparar(){
    var txt1 = document.getElementById('input1').value;
        txt2 = document.getElementById('input2').value;
    
    if(document.getElementById('ignoreCase').checked){
        txt1 = txt1.toLowerCase();
        txt2 = txt2.toLowerCase();
    }
    if(txt1 == txt2){
        document.getElementById('statusCompare').innerHTML = "Iguais";
        document.getElementById("statusCompare").style.color = "Green";
    }
    else{
        document.getElementById('statusCompare').innerHTML = "Diferentes";
        document.getElementById("statusCompare").style.color = "Red";
        //fazer ficar vermelho
    }
}

function statusLength(){
    var str = document.getElementById('input3').value;
        tamanhoMaximo = document.getElementById('inputNumber').value;
    if(str.length > tamanhoMaximo){
        document.getElementById('statusLength').innerHTML = "Status: Fora do permitido";
        document.getElementById("statusLength").style.color = "Red";
    }
    else{
        document.getElementById('statusLength').innerHTML = "Status: Dentro do permitido";
        document.getElementById("statusLength").style.color = "Green";
    }

}

function limpar1(){
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('statusCompare').innerHTML = "";
}
function limpar2(){
    document.getElementById('input3').value = "";
    //document.getElementById('inputNumber').value = "";
    retornaTamanho();
}

function maxTamanho() {
    numero = document.getElementById('inputNumber');
    console.log(numero.value);
    if(numero.value == 1000000){
        numero.value = 100000;
    }
    else if (numero.value > 100000) {
        numero.value = numero.value.slice(0,5); 
    }
    /*
    if(numero.value < 0){
        numero.value = "";
    }
    */
    statusLength();
}
/*
var dark = false;
function changeTheme(){
    var pag = document.getElementById('pagina');
    var texts = document.getElementsByTagName('textarea');
    var buttons = document.getElementsByTagName('button');
    var number = document.getElementById('inputNumber');
    if(!dark){
        document.getElementById('theme').style.backgroundImage = 'url(sun.png)';
        dark = true;
        pag.style.color = 'white';
        pag.style.backgroundColor = '#333333D0';
        number.style.backgroundColor = 'black';
        number.style.color = '#DF00FE';
        for(var i of texts){
            i.style.backgroundColor = 'black';
            i.style.color = '#DF00FE';
        }
    }
    else{
        document.getElementById('theme').style.backgroundImage = 'url(moon.png)';
        dark = false;
        pag.style.color = 'black';
        pag.style.backgroundColor = '#DDDDDDD0';
        number.style.backgroundColor = 'white';
        number.style.color = 'black';
        for(var i of texts){
            i.style.backgroundColor = 'white';
            i.style.color = 'black';
        }
    }
}
*/