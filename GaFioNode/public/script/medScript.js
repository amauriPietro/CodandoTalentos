//janela modal
var modal = document.getElementById("modal");
let idMod;

function openModal(cdg, princ) {
  modal.style.display = "block";
  idMod = cdg;
  document.getElementById("EAN").innerHTML = "EAN: " + cdg;
  console.log(cdg);
  document.getElementById("Princ").innerHTML = "Princípio ativo: " + princ;
}

function closeModal(){
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal2() {
  modal2.style.display = "block";
  document.getElementById("ctzEAN").innerHTML = "Tem certeza que deseja excluir o medicamento de EAN: " + idMod + "?";

}

function closeModal2(){
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//botão delete
function deletarRegistro(){
    window.location.href='/registrations/medicine/delete/' + idMod;
}

function atualizarRegistro(){
  window.location.href='/registrations/medicine/update/' + idMod;
}

var statusSearch = 0;
function gerencMenu(){
  var search = document.getElementById('searchDiv');
  if(statusSearch === 0){
    search.style.display = "block";
    document.getElementById('buscaMed').innerHTML = "Fechar Busca";
    statusSearch = 1;
  }
  else{
    search.style.display = "none";
    document.getElementById('buscaMed').innerHTML = "Buscar medicamento";
    statusSearch = 0;
  }
  
}

function procura(){
  const atr = document.getElementById('atributos').value;
  const inpt = document.getElementById('inptBusca').value;
  if(inpt === '')
    return;
  window.location.href=`/registrations/medicine/search/${atr}/${inpt}`
}
//botão busca 
    //abre busca
    //abre filtro
    //limpa busca
    //busca de fato