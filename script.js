const tagLi1 = document.getElementById('objeto1');
const tagLi2 = document.getElementById('objeto2');
const tagLi3 = document.getElementById('objeto3');
const tagLi4 = document.getElementById('objeto4');
const tagLi5 = document.getElementById('objeto5');
const tagLi6 = document.getElementById('objeto6');
const tagLi7 = document.getElementById('objeto7');
const tagLi8 = document.getElementById('objeto8');
const tagLi9 = document.getElementById('objeto9');
const tagLi10 = document.getElementById('objeto10');
const tagInput = document.getElementById('input');


let material1 = {
    material: "AÇO AISI 304".toUpperCase(),
    imagem: './assets/304.jpg',
    numeroClassificação: 304,
    tipoDeMicroestrutura: 'austenítico',
    disponibilidade: true,
    temperabilidade: false,
    densidade: 8.06,
    caracteristicas: ['Vida útil longa', ' alta resistência mecânica', ' resistência a temperaturas diversas.']
}

let material2 = {
    material: "AÇO AISI 316".toUpperCase(),
    imagem: './assets/316.jpg',
    numeroClassificação: 316,
    tipoDeMicroestrutura: 'austenítico',
    disponibilidade: true,
    temperabilidade: false,
    densidade: 8.07,
    caracteristicas: ['Resistência a corrosão', ' alta resistência mecânica', ' propriedades não magnéticas.']
}

let material3 = {
    material: "Aço AISI 446".toUpperCase(),
    imagem: './assets/446.png',
    numeroClassificação: 446,
    tipoDeMicroestrutura: 'ferrítico',
    disponibilidade: true,
    temperabilidade: false,
    densidade: 7.4,
    caracteristicas: ['Baixa resistência ao impacto',' alta usinabilidade',' baixa soldabilidade.']
}

let material4 = {
    material: "Aço AISI 502".toUpperCase(),
    imagem: './assets/502.png',
    numeroClassificação: 502,
    tipoDeMicroestrutura: 'ferrítico',
    disponibilidade: true,
    temperabilidade: false,
    densidade: 7.6,
    caracteristicas: ['Alta estabilidade estrutural',' alta usinabilidade',' alta resistência a oxidação.']
}

let material5 = {
    material: "Aço AISI 430".toUpperCase(),
    imagem: './assets/430.jpg',
    numeroClassificação: 430,
    tipoDeMicroestrutura: 'ferrítico',
    disponibilidade: true,
    temperabilidade: false,
    densidade: 7.9,
    caracteristicas: ['Resistência a altas temperaturas mediana',' única liga que tolera cobre e latão fundidos',' ótimo custo-benefício.']
}

let material6 = {
    material: "Aço AISI 410".toUpperCase(),
    imagem: './assets/410.jpg',
    numeroClassificação: 410,
    tipoDeMicroestrutura: 'martensítico',
    disponibilidade: true,
    temperabilidade: true,
    densidade: 7.8,
    caracteristicas: ['Propriedades magnéticas',' alta resistência ao desgaste',' utilizado como revestimento de alta dureza.']
}

let material7 = {
    material: "Aço AISI 416".toUpperCase(),
    imagem: './assets/416.jpeg',
    numeroClassificação: 416,
    tipoDeMicroestrutura: 'martensítico',
    disponibilidade: true,
    temperabilidade: true,
    densidade: 7.7,
    caracteristicas: ['Alta maleabilidade',' resistência a oxidação mediana',' alta dureza.']
}

let material8 = {
    material: "Aço AISI 420".toUpperCase(),
    imagem: './assets/420.jpg',
    numeroClassificação: 420,
    tipoDeMicroestrutura: 'martensítico',
    disponibilidade: true,
    temperabilidade: true,
    densidade: 7.8,
    caracteristicas: ['Importante aplicabilidade em moldes de injeção',' alta resistência ao desgaste',' baixa soldabilidade.']
}

let material9 = {
    material: "Aço AISI 202".toUpperCase(),
    imagem: './assets/202.png',
    numeroClassificação: 202,
    tipoDeMicroestrutura: 'austenítico',
    disponibilidade: true,
    temperabilidade: false,
    densidade: 7.9,
    caracteristicas: ['Alta plasticidade e soldabilidade',' alta resistência a altas temperaturas',' alta resistência à oxidação.']
}

let material10 = {
    material: "Aço AISI 309".toUpperCase(),
    imagem: './assets/309.jpg',
    numeroClassificação: 309,
    tipoDeMicroestrutura: 'austenítico',
    disponibilidade: true,
    temperabilidade: false,
    densidade: 8,
    caracteristicas: ['Alta resistência a altas temperaturas',' alta resistência mecânica',' alta resistência a água do mar.']
}


function home() {
	tagLi1.innerHTML = `<section>
	<img src="${material1.imagem}">
	<p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${material1.material}</a><br>
	Número de Classificação: ${material1.numeroClassificação}<br>
	Microestrutura: ${material1.tipoDeMicroestrutura}<br>
	Disponível: ${material1.disponibilidade? "Sim": "Não"}<br>
	Temperável: ${material1.temperabilidade? "Sim": "Não"}<br>
	Características: ${material1.caracteristicas}<br></p></section>`
	
	tagLi2.innerHTML = `<section><img src="${material2.imagem}">
	<p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${material2.material}</a><br>
	Número de Classificação: ${material2.numeroClassificação}<br>
	Microestrutura: ${material2.tipoDeMicroestrutura}<br>
	Disponível: ${material2.disponibilidade? "Sim": "Não"}<br>
	Temperável: ${material2.temperabilidade? "Sim": "Não"}<br>
	Características: ${material2.caracteristicas}<br></p></section>`
	
	tagLi3.innerHTML = `<section><img src="${material3.imagem}">
	<p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${material3.material}</a><br>
	Número de Classificação: ${material3.numeroClassificação}<br>
	Microestrutura: ${material3.tipoDeMicroestrutura}<br>
	Disponível: ${material3.disponibilidade? "Sim": "Não"}<br>
	Temperável: ${material3.temperabilidade? "Sim": "Não"}<br>
	Características: ${material3.caracteristicas}<br></p></section>`
	
	tagLi4.innerHTML = `<section><img src="${material4.imagem}">
	<p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${material4.material}</a><br>
	Número de Classificação: ${material4.numeroClassificação}<br>
	Microestrutura: ${material4.tipoDeMicroestrutura}<br>
	Disponível: ${material4.disponibilidade? "Sim": "Não"}<br>
	Temperável: ${material4.temperabilidade? "Sim": "Não"}<br>
	Características: ${material4.caracteristicas}<br></p></section>`
	
	tagLi5.innerHTML = `<section><img src="${material5.imagem}">
	<p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${material5.material}</a><br>
	Número de Classificação: ${material5.numeroClassificação}<br>
	Microestrutura: ${material5.tipoDeMicroestrutura}<br>
	Disponível: ${material5.disponibilidade? "Sim": "Não"}<br>
	Temperável: ${material5.temperabilidade? "Sim": "Não"}<br>
	Características: ${material5.caracteristicas}<br></p></section>`
	
	tagLi6.innerHTML = `<section><img src="${material6.imagem}">
	<p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${material6.material}</a><br>
	Número de Classificação: ${material6.numeroClassificação}<br>
	Microestrutura: ${material6.tipoDeMicroestrutura}<br>
	Disponível: ${material6.disponibilidade? "Sim": "Não"}<br>
	Temperável: ${material6.temperabilidade? "Sim": "Não"}<br>
	Características: ${material6.caracteristicas}<br></p></section>`
	
	tagLi7.innerHTML = `<section><img src="${material7.imagem}">
	<p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${material7.material}</a><br>
	Número de Classificação: ${material7.numeroClassificação}<br>
	Microestrutura: ${material7.tipoDeMicroestrutura}<br>
	Disponível: ${material7.disponibilidade? "Sim": "Não"}<br>
	Temperável: ${material7.temperabilidade? "Sim": "Não"}<br>
	Características: ${material7.caracteristicas}<br></p></section>`
	
	tagLi8.innerHTML = `<section><img src="${material8.imagem}">
	<p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${material8.material}</a><br>
	Número de Classificação: ${material8.numeroClassificação}<br>
	Microestrutura: ${material8.tipoDeMicroestrutura}<br>
	Disponível: ${material8.disponibilidade? "Sim": "Não"}<br>
	Temperável: ${material8.temperabilidade? "Sim": "Não"}<br>
	Características: ${material8.caracteristicas}<br></p></section>`
	
	tagLi9.innerHTML = `<section><img src="${material9.imagem}">
	<p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${material9.material}</a><br>
	Número de Classificação: ${material9.numeroClassificação}<br>
	Microestrutura: ${material9.tipoDeMicroestrutura}<br>
	Disponível: ${material9.disponibilidade? "Sim": "Não"}<br>
	Temperável: ${material9.temperabilidade? "Sim": "Não"}<br>
	Características: ${material9.caracteristicas}<br></p></section>`
	
	tagLi10.innerHTML = `<section><img src="${material10.imagem}">
	<p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${material10.material}</a><br>
	Número de Classificação: ${material10.numeroClassificação}<br>
	Microestrutura: ${material10.tipoDeMicroestrutura}<br>
	Disponível: ${material10.disponibilidade? "Sim": "Não"}<br>
	Temperável: ${material10.temperabilidade? "Sim": "Não"}<br>
	Características: ${material10.caracteristicas}<br></p></section>`
}

const materiais = [material1, material2, material3, material4, material5, material6, material7, material8, material9, material10];
const dados = [];

for (const material of materiais) {
    if (material.disponibilidade === true) {
        dados.push(material)
    }else{
        console.log("**ALERT** \n ITEM NÃO FOI ADICIONADO");
    }
}

const relatorio = dados.map((item) => {
    return {
        material: item.material,
        numeroClassificação: item.numeroClassificação,
        tipoDeMicroestrutura: item.tipoDeMicroestrutura,
        disponibilidade: item.disponibilidade,
        temperabilidade: item.temperabilidade,
        densidade: item.densidade,
        caracteristicas: item.caracteristicas.toString().toUpperCase()
    }
})

console.log(relatorio);

let valores = 0;
for (const material of dados) {
    valores += material.densidade;
}
const media = valores / dados.length;
console.log(media);

const disponibilidade = material1.disponibilidade && material2.disponibilidade && material3.disponibilidade && material4.disponibilidade && material5.disponibilidade && material6.disponibilidade && material7.disponibilidade && material8.disponibilidade && material9.disponibilidade && material10.disponibilidade;
console.log(disponibilidade);

function buscador() {
let filtered = dados.filter((item) => item.material === tagInput.value.toUpperCase())
if (filtered.length >= 1) {
    return tagLi1.innerHTML = `<section id='objeto1'>
        <img src="${filtered[0].imagem}">
        <p> <a href="https://www.tiscosteel.com/p1/5daceac8-d1ee-c878-d8da-e14c6d51c3ca.shtml">${filtered[0].material}</a><br>
        Número de Classificação: ${filtered[0].numeroClassificação}<br>
        Microestrutura: ${filtered[0].tipoDeMicroestrutura}<br>
        Disponível: ${filtered[0].disponibilidade? "Sim": "Não"}<br>
        Temperável: ${filtered[0].temperabilidade? "Sim": "Não"}<br>
        Características: ${filtered[0].caracteristicas}<br></p></section>`,
        tagInput.value = "",
        tagLi2.innerHTML = '',
        tagLi3.innerHTML = '',
        tagLi4.innerHTML = '',
        tagLi5.innerHTML = '',
        tagLi6.innerHTML = '',
        tagLi7.innerHTML = '',
        tagLi8.innerHTML = '',
        tagLi9.innerHTML = '',
        tagLi10.innerHTML = ''
} else {
    alert('Não encontrado')
}
}
