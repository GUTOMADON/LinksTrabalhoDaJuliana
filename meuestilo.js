function setStyles() {
    const body = document.body;
    const header = document.querySelector('header');
    const titulo = document.querySelector('h1');
    const nomes = document.querySelectorAll('.nome');
    const fotos = document.querySelectorAll('.foto');
    const sections = document.querySelectorAll('section');
    const h2Elements = document.querySelectorAll('h2');
    const ulElements = document.querySelectorAll('ul');
    const aElements = document.querySelectorAll('a');

    body.style.fontFamily = 'Georgia, "Times New Roman", Times, serif'; 

    header.style.textAlign = 'center';
    header.style.padding = '20px';
    header.style.backgroundColor = '#4a745c'; 
    header.style.color = 'white'; 

    titulo.style.fontWeight = 'bold';
    titulo.style.fontSize = '3.5rem'; 
    titulo.style.color = '#c3a78e'; 
    nomes.forEach((nome) => {
        nome.style.fontSize = '1.5rem'; 
    });

    fotos.forEach((foto) => {
        foto.style.width = '150px';
    });

    sections.forEach((section, index) => {
        section.style.backgroundColor =  '#e0e0e0'; 
        section.style.margin = '20px';
        section.style.padding = '20px';
    });

    h2Elements.forEach((h2) => {
        h2.style.fontSize = '1.8rem';
        h2.style.marginBottom = '20px';
        h2.style.color = '#4a745c'; 
    });


    const h3Elements = document.querySelectorAll('.product h3');

    h3Elements.forEach((h3) => {
        h3.style.color = '#8B4513'; 
        h3.style.fontSize = '1.2rem'; 
    });

    ulElements.forEach((ul) => {
        ul.style.marginLeft = '20px';
        ul.style.fontSize = '1.2rem';
    });

    aElements.forEach((a) => {
        a.style.textDecoration = 'none';
        a.style.color = '#4a745c';
        a.style.transition = 'color 0.3s'; 

        a.addEventListener('mouseover', () => {
            a.style.color = 'black'; 
        });

        a.addEventListener('mouseout', () => {
            a.style.color = '#4a745c'; 
        });
    });

    function setSectionColors() {
        const sobreSec = document.getElementById('sobre');
        const exemplosSec = document.getElementById('exemplos');
        const catalogoSec = document.getElementById('catalogo');
        const localizacaoSec = document.getElementById('localizacao');
        const contatosSec = document.getElementById('contatos');

        sobreSec.style.backgroundColor = '#c3a78e'; 
        exemplosSec.style.backgroundColor = '#c3a78e'; 
        catalogoSec.style.backgroundColor = '#c3a78e'; 
        localizacaoSec.style.backgroundColor = '#c3a78e'; 
        contatosSec.style.backgroundColor = '#c3a78e'; 
    }
    var products = document.querySelectorAll('.product');

       
        products.forEach(function(product) {
           
            var img = product.querySelector('img');

           
            img.style.width = '200px'; 
            img.style.height = 'auto';
            img.style.display = 'inline-block'; 
            img.style.margin = '0';
        });
        
    setSectionColors();
}

setStyles();
