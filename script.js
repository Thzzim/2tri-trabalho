const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Imagine: você acabou de sair da escola e encontra uma ferramenta revolucionária. Ela responde a todas as perguntas que você possa imaginar e também produz imagens e áudios incrivelmente reais. O que você pensa primeiro?",
        alternativas: [
            {
                texto: "Isso é impossivel!",
                afirmacao: "No início ficou com assustado com o poder dessa tecnologia. "
            },
            {
                texto: "Isso é bom!",
                afirmacao: "Quis saber como usar IA melhor."
            }
        ]
    },
    {
        enunciado: "Com a chegada da Inteligência Artificial, uma professora de tecnologia na escola propôs uma sequência de aulas para explorar essa inovação. Ao término de uma dessas aulas, você é convidado a refletir e escrever um trabalho sobre o uso da IA em ambientes escolares. Qual seria sua postura diante desse desafio?",
        alternativas: [
            {
                texto: "Utilize uma ferramenta de pesquisa baseada em IA para obter informações úteis para seu trabalho e apresente essas informações em uma linguagem fácil de compreender.",
                afirmacao: "A IA foi empregada para buscar conteúdos importantes com sucesso."
            },
            {
                texto: "Faça o trabalho com apoio nas trocas de ideias com os colegas, em pesquisas na web e no que você já sabe sobre o assunto.",
                afirmacao: "Notou que ficou mais fácil criar o trabalho valendo-se dos seus próprios conhecimentos."
            }
        ]
    },
    {
        enunciado: "Após entregar o trabalho escrito, a professora propôs um debate para que a turma explicasse como foi feita a pesquisa e a elaboração do texto. No meio da discussão, apareceu uma questão crucial: qual o efeito da IA nos empregos do futuro? Qual é a sua opinião?",
        alternativas: [
            {
                texto: "Argumenta que a inteligência artificial cria oportunidades profissionais e potencializa as capacidades humanas.",
                afirmacao: "Contribui para a inovação em inteligência artificial e luta para expandir as possibilidades de trabalho ligadas à IA."
            },
            {
                texto: "Me preocupo com os trabalhadores que correm o risco de perder seus postos para a automação e defendo medidas de proteção para eles.",
                afirmacao: "A preocupação com os trabalhadores motivou a organização de um grupo para refletir sobre o uso ético da inteligência artificial."
            }
        ]
    },
    {
        enunciado: "Quando a conversa chegou ao fim, foi proposto que você elaborasse, digitalmente, uma imagem que refletisse o que pensa a respeito da IA. Qual seria sua abordagem?",
        alternativas: [
            {
                texto: "Criar um desenho utilizando uma plataforma de criação gráfica, por exemplo, o Paint.",
                afirmacao: "Observou que muitas pessoas desconhecem o uso das ferramentas tradicionais e optou por compartilhar seu aprendizado em design utilizando plataformas de pintura digital voltadas para iniciantes."
            },
            {
                texto: "Gerar uma imagem utilizando um programa de criação automática por IA.",
                afirmacao: "Com a ajuda dos geradores de imagem, você aumentou a velocidade na criação de trabalhos e passou a orientar quem enfrenta desafios no desenho manual."
            }
        ]
    },
    {
        enunciado: "O prazo para o trabalho de biologia em grupo está se aproximando, mas vocês estão atrasados. Um integrante opta por recorrer à IA. O resultado? Um trabalho completamente igual ao que a ferramenta produziu. O que você faria nessa situação?",
        alternativas: [
            {
                texto: "Fornecer comandos ao chat é uma forma válida de colaboração, por isso não há problema em usar o texto integralmente.",
                afirmacao: "Acabou adotando a IA para executar todas as suas tarefas e, como consequência, se tornou dependente dela."
            },
            {
                texto: "Mesmo sendo uma tecnologia de ponta, o chat pode errar, então é vital revisar o trabalho e somar suas próprias ideias para garantir qualidade.",
                afirmacao: "Observou que a IA opera conforme as instruções da empresa que a criou, e que muitas vezes o que o chat escrevia não expressava seu ponto de vista, por isso reconhece que os textos da IA são ferramentas auxiliares, não respostas finais."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2051...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
