document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#myForm').addEventListener('submit', function (e) {
        e.preventDefault();
        estilo();
        Obrigado();
    });

    function estilo() {
        const nome = document.getElementById('nome').value;
        const genero = document.querySelector('input[name="genero"]:checked');
        const interesse = document.querySelector('input[name="interesses_checkbox[]"]:checked');

        let classes = 'basic-bg basic-text-color';

        if (nome !== '') {
            classes = 'orange-bg basic-text-color';
        }

        if (genero && genero.value === 'masculino') {
            classes = 'yellow-green-bg basic-text-color';
            document.querySelector('h1').style.color = 'white';
        } else if (genero && genero.value === 'feminino') {
            classes = 'pink-white-bg basic-text-color';
            document.querySelector('h1').style.color = 'pink';
        } else if (genero && genero.value === 'outro') {
            classes = 'brown-bg basic-text-color';
            document.querySelector('h1').style.color = 'purple';
        }

        document.body.className = classes;

        if (interesse && interesse.value === 'gato') {
            setBodyBackground('url("https://img.quizur.com/f/img648efbd5b00b28.10275519.jpg?lastEdited=1687092187")');
        } else if (interesse && interesse.value === 'tecnologia') {
            setBodyBackground('url("https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2014/04/windowsxpdune-550x320.jpg?resize=500,290&key=d0ff6193")');
        } else if (interesse && interesse.value === 'cachorro') {
            setBodyBackground('url("https://i.pinimg.com/736x/27/ce/de/27cede11f3b1dd70e5ba7120851aaca2.jpg")');
        } else if (interesse && interesse.value === 'comida') {
            setBodyBackground('url("https://i0.wp.com/ymeet.com.br/wp-content/uploads/2021/10/miojo-gourmet.jpg?fit=1280%2C720&ssl=1")');
        } else if (interesse && interesse.value === 'musica') {
            setBodyBackground('url("https://i.pinimg.com/originals/a8/26/b2/a826b2f8a3239290356d020d49a6c7b4.gif")');
        } else {
            document.body.style.backgroundImage = 'none';
        }

        const allCenteredElements = document.querySelectorAll('.centered');
        allCenteredElements.forEach(element => {
            element.style.textAlign = 'center';
            element.style.margin = 'auto';
            element.style.width = '50%'; 
        });
    }

    function setBodyBackground(backgroundUrl) {
        document.body.style.backgroundImage = backgroundUrl;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }

    const titulo = document.getElementById('titulo');

    titulo.addEventListener('mouseover', function () {
        titulo.style.fontSize = '3.5rem';
        titulo.style.color = '#cc0000'; 
    });

    function Obrigado() {
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const idade = document.getElementById('idade').value;
        const salario = document.getElementById('salario').value;

        if (nome !== '') {
            alert(`OBRIGADO POR TESTAR MEU SITE INTERATIVO, ${nome} ${sobrenome}! Você tem ${idade} anos e seu salário é R$ ${salario}. A intenção é ser divertido com imagens e interações aleatórias.`);
        }
    }

    titulo.addEventListener('mouseout', function () {
        titulo.style.fontSize = '1.8rem';
        titulo.style.color = '#ff6600'; 
    });
});