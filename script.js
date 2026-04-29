window.onload = () => {
  document.getElementById("codex").classList.add("hidden");
};

function startGame() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
}

function openCodex(name) {
  const codex = document.getElementById("codex");
  const title = document.getElementById("codex-title");
  const text = document.getElementById("codex-text");       

  const data = {

    zeus: [
      "Zeus ⚡",
      `
      <p>Rei dos deuses do Olimpo e senhor dos céus. Zeus governa com autoridade absoluta, sendo o responsável por manter a ordem entre deuses e mortais. Seu símbolo é o raio, representando poder e justiça.</p>
      <p><b>Filhos:</b></p>
      <ul>
        <li>Atena — deusa da sabedoria</li>
        <li>Apolo — deus do sol e música</li>
        <li>Ártemis — deusa da caça</li>
        <li>Hermes — mensageiro dos deuses</li>
        <li>Ares — deus da guerra</li>
      </ul>
      `
    ],

    hera: [
      "Hera 👑",
      `
      <p>Rainha do Olimpo e deusa do casamento. Hera protege as uniões e a família, mas também é conhecida por seu temperamento forte e ciúmes.</p>
      <p><b>Filhos:</b></p>
      <ul>
        <li>Ares — guerra</li>
        <li>Hefesto — forja e fogo</li>
      </ul>
      `
    ],

    poseidon: [
      "Poseidon 🌊",
      `
      <p>Deus dos mares, terremotos e cavalos. Seu tridente controla os oceanos e pode causar tempestades e destruição.</p>
      <p><b>Filhos:</b></p>
      <ul>
        <li>Tritão — mensageiro do mar</li>
        <li>Teseu — herói lendário</li>
      </ul>
      `
    ],

    hades: [
      "Hades 💀",
      `
      <p>Senhor do submundo, governa os mortos com firmeza. Diferente do que muitos pensam, não é mal, apenas justo e implacável.</p>
      <p><b>Filhos:</b></p>
      <ul>
        <li>Melinoe — ligada aos espíritos</li>
        <li>Macária — morte tranquila</li>
      </ul>
      `
    ],

    demeter: [
      "Deméter 🌾",
      `
      <p>Deusa da agricultura e das colheitas. Controla o ciclo da vida na terra e as estações do ano.</p>
      <p><b>Filha:</b></p>
      <ul>
        <li>Perséfone — rainha do submundo</li>
      </ul>
      `
    ],

    athena: [
      "Atena 🦉",
      `
      <p>Deusa da sabedoria, estratégia e guerra justa. Nasceu da cabeça de Zeus totalmente armada.</p>
      <p><b>Filhos:</b> Não possui</p>
      `
    ],

    apollo: [
      "Apolo ☀️",
      `
      <p>Deus do sol, música, poesia e profecia. Representa harmonia, beleza e perfeição.</p>
      <p><b>Filhos:</b></p>
      <ul>
        <li>Orfeu — músico lendário</li>
        <li>Asclépio — deus da medicina</li>
      </ul>
      `
    ],

    artemis: [
      "Ártemis 🌙",
      `
      <p>Deusa da caça, da lua e da natureza selvagem. Protetora dos animais e da liberdade.</p>
      <p><b>Filhos:</b> Não possui</p>
      `
    ],

    ares: [
      "Ares ⚔️",
      `
      <p>Deus da guerra e do caos das batalhas. Representa violência e força bruta.</p>
      <p><b>Filhos:</b></p>
      <ul>
        <li>Fobos — medo</li>
        <li>Deimos — terror</li>
      </ul>
      `
    ],

    hephaestus: [
      "Hefesto 🔥",
      `
      <p>Deus do fogo e da forja. Criador das armas e armaduras dos deuses.</p>
      <p><b>Filhos:</b></p>
      <ul>
        <li>Erictônio — rei lendário</li>
      </ul>
      `
    ],

    aphrodite: [
      "Afrodite 💕",
      `
      <p>Deusa do amor, beleza e desejo. Influencia emoções e relações entre deuses e mortais.</p>
      <p><b>Filhos:</b></p>
      <ul>
        <li>Eros — amor</li>
        <li>Harmonia — equilíbrio</li>
      </ul>
      `
    ],

    hermes: [
      "Hermes 🪽",
      `
      <p>Mensageiro dos deuses, veloz e astuto. Guia das almas até o submundo.</p>
      <p><b>Filhos:</b></p>
      <ul>
        <li>Pan — natureza e florestas</li>
        <li>Hermafrodito — dualidade</li>
      </ul>
      `
    ],

    dionysus: [
      "Dionísio 🍷",
      `
      <p>Deus do vinho, festas e êxtase. Representa prazer, loucura e celebração.</p>
      <p><b>Filhos:</b></p>
      <ul>
        <li>Príapo — fertilidade</li>
      </ul>
      `
    ],

    hercules: [
      "Hércules 💪",
      `
      <p>Maior herói da mitologia grega. Conhecido por sua força e pelos 12 trabalhos impossíveis que realizou.</p>
      `
    ],

    zagreus: [
      "Zagreus 🔥",
      `
      <p>Príncipe do submundo, filho de Hades. Conhecido por desafiar o destino e tentar escapar do reino dos mortos.</p>
      `
    ]

  };

  title.innerText = data[name][0];
  text.innerHTML = data[name][1];

  codex.classList.remove("hidden");
}

function closeCodex() {
  document.getElementById("codex").classList.add("hidden");
}   