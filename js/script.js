const DarkModeButton = document.getElementById('DarkMode');
    DarkModeButton.addEventListener('click', function() {
    if(DarkModeButton.textContent == "Modo Escuro"){
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#fff';
        DarkModeButton.textContent = "Modo Claro"
    }else{
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#222';
        DarkModeButton.textContent = "Modo Escuro";
    }
       });

const frases = [
        'Não seja vítima das dificuldades, tente ultrapassá-las!',
        'Quando você começa o dia com o coração grato, luz emana de dentro de você. ',
        'Hoje é um ótimo dia para espalhar felicidade.',
        'A cada manhã nós renascemos. O que fazemos hoje é o que mais importa!',
        'Erros são as provas de que estamos tentando.',
        'A vida é muito curta para começar o dia com pedaços partidos de ontem.',
        'Um novo dia sempre revela uma nova força e um novo pensamento.',
        'O dia de hoje nunca mais vai se repetir. Faça o melhor dele.',
        'No dia de hoje, plante memórias e colha histórias.',
        'O mundo é perfeito para quem já acorda bem disposto.',
        'Eu te amo, mesmo antes de você tomar a sua primeira xícara de café.',
        'Cerque-se de pessoas que acreditam e lutam por você.',
        'Os limites que impomos sobre nós podem se tornar verdadeiras prisões.',
        'Esteja presente em cada momento da sua vida, antes que estes momentos se tornem apenas lembranças.',
      ];
      
const fraseElement = document.getElementById("frases");
      
function mudaFrase() {
    const randomIndex = Math.floor(Math.random() * frases.length);
    const randomFrase = frases[randomIndex];
    fraseElement.textContent = randomFrase;
}
setInterval(mudaFrase, 4000);       

const usuario = {
    nome: document.querySelector('#c-nome'),
    sobrenome: document.querySelector('#c-sobrenome'),
    email: document.querySelector('#c-email'),
    senha: document.querySelector('#c-senha'),
    confirmasenha: document.querySelector('#c-confirmasenha'),
  };
 const label = {
   nome: document.querySelector('#l-nome'),
   sobrenome: document.querySelector('#l-sobre'),
   email: document.querySelector('#l-email'),
   senha: document.querySelector('#l-senha'),
   confirmasenha: document.querySelector('#l-confirmasenha'),
 };
