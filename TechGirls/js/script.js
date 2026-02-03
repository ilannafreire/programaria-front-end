const mulheres = [
    {
        nome: "Ada Lovelace",
        area: "Programação",
        descricao: "Considerada a primeira programadora de computador do mundo.",
        imagem: "../images/ada.jpg"
    },
    {
        nome: "Grace Hopper",
        area: "Desenvolvimento de Linguagens",
        descricao: "Criadora do primeiro compilador e inventora do COBOL.",
        imagem: "../images/"
    },
    {
        nome: "Hedy Lamarr",
        area: "Engenharia Eletrônica",
        descricao: "Inventora da tecnologia spread spectrum, base do Wi-Fi e Bluetooth.",
        imagem: "../images/"
    },
    {
        nome: "Barbara Liskov",
        area: "Ciência da Computação",
        descricao: "Ganhadora do Prêmio Turing por suas contribuições em programação.",
        imagem: "../images/"
    },
    {
        nome: "Sheryl Sandberg",
        area: "Tecnologia e Negócios",
        descricao: "COO do Facebook, líder em diversidade na tecnologia.",
        imagem: "../images/"
    },
    {
        nome: "Satya Nadella",
        area: "Liderança Tecnológica",
        descricao: "CEO da Microsoft, promotor de inclusão na indústria tech.",
        imagem: "../images/"
    }
];

function loadMulheres() {
    const mulheresGrid = document.getElementById('mulheresGrid');
    
    mulheres.forEach((mulher, index) => {
        const card = document.createElement('div');
        card.className = 'mulher-card';
        card.innerHTML = `
            <div class="mulher-image">
                ${mulher.imagem ? `<img src="${mulher.imagem}" alt="${mulher.nome}">` : `<span>${index + 1}</span>`}
            </div>
            <div class="mulher-info">
                <h3>${mulher.nome}</h3>
                <p class="area">${mulher.area}</p>
                <p>${mulher.descricao}</p>
            </div>
        `;
        mulheresGrid.appendChild(card);
    });
}

function scroll_to(section) {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado! Sua mensagem foi recebida.');
            contactForm.reset();
        });
    }
});