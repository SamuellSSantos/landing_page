Vamos criar a nossa seção de conteudos e para isso no index.html vamos criar uma nova seção com a classe "event" logo abaixo do nosso hero dentro dela teremos um container e esse container teremos uma div com a classe "event__details" com 1 h2 com a classe "event__detail__title" com a frase "Front-end" e um paragrafo com a classe event__detail__description" com lorem saindo da div mas logo abaixo dela ainda no container teremos uma img ./images/frontend.png

Depois disso vamos criar o nosso arquivo de estilos para a seção com o nome event, vamos usar a classe .event e dentro dela vamos colocar um container. display: flex;

Agora em nossa imagem vamos definir ela com um max-width de 360px.
Agora vamos estylizar o titulo e ele vai ter um font-size de 18px e um font-weigh: bold;

Em description detemos um font-size de 16px e um line-heigh de 22px.

vamos definir um padding de 80px para o a nossa classe event 
"padding: 80px 0"

em details vamos adicionar um margin-right de 40px

Agora vamos adicionar uma margem entre o titulo e o paragrafo  no tatle vamos adicionar um margin bottom de 16px;

Agora em nosso arquivo _event.scss  na classe event vamos adicionar a cor de fundo com linear-gradient

background-image: linear-gradient(#1b6ca7, #442bdb)