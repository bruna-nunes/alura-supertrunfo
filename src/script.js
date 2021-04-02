var exibirCartaMaquina = false;
var exibirCartaJogador = true;
/*modo light-dark*/
$("#toggleDarkMode").bootstrapToggle({
  on: '<i class="fas fa-sun light-mode-toggle"></i>',
  off: '<i class="fas fa-moon dark-mode-toggle"></i>'
});
$(document).ready(function () {
  if ($("#toggleDarkMode").is(":checked")) {
    $("html").toggleClass("light-mode");
  } else {
    $("html").toggleClass("dark-mode");
  }
});
$("#toggleDarkMode").on("change", function () {
  if ($("#toggleDarkMode").is(":checked")) {
    $("html").removeClass("dark-mode");
    $("html").toggleClass("light-mode");
  } else {
    $("html").removeClass("light-mode");
    $("html").toggleClass("dark-mode");
  }
  if (exibirCartaJogador) {
    exibeCartaJogador();
  }

  if (exibirCartaMaquina) {
    exibeCartaMaquina();
  }
});

document.getElementById("btnProximaRodada").style.visibility = "hidden";

var cartaHarry = {
  nome: "Harry Potter",
  imagemLight: "https://i.ibb.co/NKrcT2q/card-Harry.png",
  imagemDark: "https://i.ibb.co/55Gk6cf/card-Harry-Dark.png",
  atributos: {
    bombarda: 60,
    estupefaca: 85,
    expelliarmus: 85,
    expectoPatronum: 90
  }
};
var cartaHermione = {
  nome: "Hermione Granger",
  imagemLight: "https://i.ibb.co/3vRpvSp/card-Hermione.png",
  imagemDark: "https://i.ibb.co/bBRyhNj/card-Hermione-Dark.png",
  atributos: {
    bombarda: 70,
    estupefaca: 80,
    expelliarmus: 75,
    expectoPatronum: 60
  }
};
var cartaRony = {
  nome: "Rony Weasley",
  imagemLight: "https://i.ibb.co/6mjfKgf/cardRony.png",
  imagemDark: "https://i.ibb.co/8DFtx8K/card-Rony-Dark.png",
  atributos: {
    bombarda: 50,
    estupefaca: 60,
    expelliarmus: 75,
    expectoPatronum: 85
  }
};
var cartaLuna = {
  nome: "Luna Lovegood",
  imagemLight: "https://i.ibb.co/3sVmz95/cardLuna.png",
  imagemDark: "https://i.ibb.co/n0bxN6V/card-Luna-Dark.png",
  atributos: {
    bombarda: 55,
    estupefaca: 65,
    expelliarmus: 80,
    expectoPatronum: 75
  }
};
var cartaDraco = {
  nome: "Draco Malfoy",
  imagemLight: "https://i.ibb.co/1RQVnR3/card-Draco.png",
  imagemDark: "https://i.ibb.co/7bBw4vX/card-Draco-Dark.png",
  atributos: {
    bombarda: 60,
    estupefaca: 80,
    expelliarmus: 90,
    expectoPatronum: 40
  }
};
var cartaCedrico = {
  nome: "Cedrico Diggory",
  imagemLight: "https://i.ibb.co/h2X10d8/card-Cedrico.png",
  imagemDark: "https://i.ibb.co/rpmD9s0/card-Cedrico-Dark.png",
  atributos: {
    bombarda: 75,
    estupefaca: 80,
    expelliarmus: 65,
    expectoPatronum: 75
  }
};
var cartaGina = {
  nome: "Gina Weasley",
  imagemLight: "https://i.ibb.co/1GdNGDq/cardGina.png",
  imagemDark: "https://i.ibb.co/tbYLp5k/card-Gina-Dark.png",
  atributos: {
    bombarda: 85,
    estupefaca: 75,
    expelliarmus: 60,
    expectoPatronum: 80
  }
};
var cartaNeville = {
  nome: "Neville Longbottom",
  imagemLight: "https://i.ibb.co/HCzvybD/card-Neville.png",
  imagemDark: "https://i.ibb.co/BcRcbDS/card-Neville-Dark.png",
  atributos: {
    bombarda: 70,
    estupefaca: 65,
    expelliarmus: 90,
    expectoPatronum: 60
  }
};

var cartas = [
  cartaHarry,
  cartaHermione,
  cartaRony,
  cartaLuna,
  cartaDraco,
  cartaCedrico,
  cartaGina,
  cartaNeville
];

var pontosJogador = 0;
var pontosMaquina = 0;

atualizaPlacar();
atualizaQtdCartas();

function atualizaPlacar() {
  var divPlacar = document.getElementById("placar");
  var html = "Jogador " + pontosJogador + " x " + pontosMaquina + " Máquina";

  divPlacar.innerHTML = html;
}
function atualizaQtdCartas() {
  var divQtdCartas = document.getElementById("quantidade-cartas");
  var html = "Quantidade de cartas no jogo: " + cartas.length;

  divQtdCartas.innerHTML = html;
}

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];
  cartas.splice(numeroCartaMaquina, 1);

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  cartaJogador = cartas[numeroCartaJogador];
  cartas.splice(numeroCartaJogador, 1);

  document.getElementById("btnSortear").disabled = true;
  // document.getElementById("btnJogar").disabled = false;
  document.getElementById("opcoes-carta").style.visibility = "visible";
  exibeCartaJogador();
  exibeVersoCartaMaquina();
  //exibirOpcoes();
}

function exibeCartaJogador() {
  exibirCartaJogador = true;
  var divCartaJogador = document.getElementById("carta-jogador");
  var divOpcoesCarta = document.getElementById("opcoes-carta");
  if (document.getElementById("toggleDarkMode").checked) {
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagemLight})`;
  } else {
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagemDark})`;
  }

  var textoBotoes = "<h2>Escolha o feitiço para atacar</h2>";
  var opcoesBotoes = "<div id='botoes-inline'>";

  for (var atributo in cartaJogador.atributos) {
    if (atributo == "bombarda") {
      labelFeitico = "Bombarda";
    } else if (atributo == "estupefaca") {
      labelFeitico = "Estupefaça";
    } else if (atributo == "expelliarmus") {
      labelFeitico = "Expelliarmus";
    } else {
      labelFeitico = "Expecto Patronum";
    }
    opcoesBotoes +=
      "<button type='button' class='btnAtributo' name='atributo' onclick='jogar(this.value)' value='" +
      atributo +
      "'>" +
      labelFeitico /*cartaJogador.atributos[atributo]*/ +
      "</button><br>";
  }
  opcoesBotoes += "</div>";

  divOpcoesCarta.innerHTML = textoBotoes + opcoesBotoes;
}

function exibeVersoCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage =
    "url(https://i.ibb.co/4PHJdG8/verso-Cartas.png)";
}

function jogar(atributoP) {
  var divResultado = document.getElementById("resultado");
  var atributoSelecionado = atributoP;

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = '<p class="resultado-final">Você ganhou essa rodada!</p>';
    pontosJogador++;
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = '<p class="resultado-final">Você perdeu essa rodada!</p>';
    pontosMaquina++;
  } else {
    htmlResultado =
      '<p class="resultado-final">Nessa rodada houve um empate</p>';
  }

  if (cartas.length == 0) {
    htmlResultado = '<p class="resultado-final-frase">FIM DE JOGO!</p>';
    if (pontosJogador > pontosMaquina) {
      htmlResultado += '<p class="resultado-final">Você venceu!</p>';
    } else if (pontosJogador < pontosMaquina) {
      htmlResultado += '<p class="resultado-final">Você perdeu...</p>';
    } else {
      htmlResultado += '<p class="resultado-final">Deu empate!</p>';
    }
  } else {
    document.getElementById("btnProximaRodada").style.visibility = "visible";
    document.getElementById("btnProximaRodada").disabled = false;
  }
  divResultado.innerHTML = htmlResultado;
  //document.getElementById("btnJogar").disabled = true;
  document.getElementById("opcoes-carta").style.visibility = "hidden";

  exibirCartaMaquina = true;
  atualizaPlacar();
  exibeCartaMaquina();
  atualizaQtdCartas();
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  if (document.getElementById("toggleDarkMode").checked) {
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagemLight})`;
  } else {
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagemDark})`;
  }

  var html = "<div id='opcoes' class='carta-status --spacing'>";

  divCartaMaquina.innerHTML = html + "</div>";
}

function proximaRodada() {
  exibirCartaMaquina = false;
  exibirCartaJogador = false;
  var divCartas = document.getElementById("cartas");
  divCartas.innerHTML = `<div><div id="carta-jogador" class="carta"></div><div id="opcoes-carta"></div></div><div id="carta-maquina" class="carta"></div>`;
  document.getElementById("btnSortear").disabled = false;
  //document.getElementById("btnJogar").disabled = true;
  document.getElementById("opcoes-carta").style.visibility = "hidden";
  document.getElementById("btnProximaRodada").style.visibility = "hidden";
  document.getElementById("btnProximaRodada").disabled = true;
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "";
}
