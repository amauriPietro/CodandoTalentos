function autoCNPJ(){
    let algarismos = [];
    let cnpj = document.getElementById('CNPJ');
    for(let i of cnpj.value){
        if(i >= '0' && i <= '9'){
            algarismos.push(i);
        }
    }
    console.log(algarismos);
    let cnpjFinal = "", algCont = 0;
    for(let i = 0; 18 > i; i++){
        if(algCont >= algarismos.length){
            cnpj.value = cnpjFinal;
            return;
        }
        if(i === 2 || i === 6){
            cnpjFinal += '.';
        }
        else if(i === 10){
            cnpjFinal += '/'
        }
        else if(i === 15){
            cnpjFinal += '-';
        }
        else{
            cnpjFinal += algarismos[algCont];
            algCont++;
        }
    }
    cnpj.value = cnpjFinal;
}

function autoEAN(){
    let ean = document.getElementById('EAN'), eanFinal="";
    let cont = 0;
    for(let i of ean.value){
        if(i >= '0' && i <= '9' && cont < 13){
            cont++;
            eanFinal += i;
        }
        else if(cont >= 13)
            break;
    }
    ean.value = eanFinal;
}

function verificaPadrao(){
    const textos = document.getElementsByClassName('textInput');
    var isFilled = true;
    for(var i of textos){
        if(i.value === ""){
            isFilled = false;
            console.log("falhei:" + i);
        }
    }
    if(document.getElementById('EAN').value.length !== 13 || document.getElementById('CNPJ').value.length !== 18){
        console.log(document.getElementById('EAN').value.length);
        isFilled = false;
    }
    return isFilled;
}

document.getElementById('medForm').onsubmit = function() {
    return verificaPadrao();
};
