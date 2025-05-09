Agora antes que começarmos a nova seção vamos criar organizar o nosso codigo, primeiro vamos criar um arquivo para armazenar as nossas variaveis em styles vamos criar o arquivo _variables.scss

vamos definir as cores em variaveis

$blue1: #1b6ca7;
$blue2: #442bdb;
$textColor: #fff;
$secondatyTextColor: #000;
$pink: #89223b;
$yellow: #9c791d;

agora vamos fazer a importação desse arquivo nos arquivos styles que usamos as cores

no stylo do event vamos usar dentro da classe eventos vamos criar um modificador para definir o nosso gradient

&--frontend{
    background-image: linear-gradient(variable.$blue1, variables.$blue2);
}

vamos copiar essa classe mais 3 vezes para cada seção teremos uma classe de gradiente diferente

.event{
    padding: 80px 0;

    &--frondend{
        background-image: linear-gradient(variables.$blue1, variables.$blue2);
    }
    &--ux-ui{
        background-image: linear-gradient(variables.$blue2, variables.$pink);
    }
    &--data-science{
        background-image: linear-gradient(variables.$pink, variables.$yellow);
    }
    &--backend{
        background-image: linear-gradient(variables.$yellow, variables.$pink);
    }

    agora vamos colocar a classe do modificador em nossa seção e vamos criar mais 3 seções seguindo o mesmo padrão da primeira seção então vamos copiar e colar a primeira seção mais 3 vezes e fazer a alteração das informações

    no html 

    <section class="event event--ui-ux">
        <div class="container">
            <div class="event__details">
                <h2 class="event__details__title">UX-UI</h2>
                <p class="event__details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati eligendi ab! Eaque facere eveniet neque possimus minus tempora inventore ut quo. Voluptas quibusdam, ea reiciendis veritatis molestiae inventore et!</p>
            </div>
            <img class="event__image" src="./images/frontend.png" alt="frontend">
        </div>
    </section>
    <section class="event event--data-science">
        <div class="container">
            <div class="event__details">
                <h2 class="event__details__title">Data Science</h2>
                <p class="event__details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati eligendi ab! Eaque facere eveniet neque possimus minus tempora inventore ut quo. Voluptas quibusdam, ea reiciendis veritatis molestiae inventore et!</p>
            </div>
            <img class="event__image" src="./images/frontend.png" alt="frontend">
        </div>
    </section>
    <section class="event event--backend">
        <div class="container">
            <div class="event__details">
                <h2 class="event__details__title">Back-End</h2>
                <p class="event__details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati eligendi ab! Eaque facere eveniet neque possimus minus tempora inventore ut quo. Voluptas quibusdam, ea reiciendis veritatis molestiae inventore et!</p>
            </div>
            <img class="event__image" src="./images/frontend.png" alt="frontend">
        </div>
    </section>

    agora vamos criar mais um modificador para inveter as imagens da segunda e quarta seção, no arquivo de stylos do events logo abaixo do modificador do bakend iremos criar um novo modificador

    &--image-left{
        .container{
            flex-direction:row-reverse;
        }
    }

    ainda em event precisamos remover o margin right de 40px que colocamos em details e no .container vamos colocar um gap de 40px

    agora vamos colocar esse modificador na seção event ux e em backend

    Agora vamos adicionar algumas animações em nosso projeto e para isso iremos utilizar a biblioteca AOS animate On Scroll e para isso precisamos acessar https://michalsnik.github.io/aos/ e no canto superior direito iremos clicamos no gato do github, rolando a pagina iremos encontrar um tutorial de instal com um link   <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    temos que adicionar esse link em nosso projeto no header
    voltando ao github teremos o link do javascript e temos que adiciona-lo também no final de nosso body  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

    voltando ao github logo abaixo do arquivo de importação do javascript tem um outro script que temos que colocar em nosso arquivo main.js

    agora para conseguirmos usar as animações precisamos colocar um atributo em nossa classe html  em nossa primeira seção no container "front-end" iremos usar o atributo
    data-aos="fade-right"

    na seção do UX vamos colocar o atributo 

    data-aos="fade-left"

    vamos adicionar a animação também para data-scienci
    data-aos="fade-right"
    
    vamos adicionar a animação para backend

    data-aos="fade-left"