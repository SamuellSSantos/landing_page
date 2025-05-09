Dentro do container do header vamos criar uma div logo abaixo do  paragrafo, essa div vai ter o nome de infos-bar, dentro dela teremos uma listagem das informações com ul com a classe "infor-bar__infos" 
dentro dela teremos alguns lis com a classe infos-bar-infor__item

O primeiro vai ter um b com a mensagem "Localização"
fora do b teremos a fraze "Allianz Parque -Barra Funda- São Paulo

o proximo li vai ter um b com "Preço" e fora do b teremos a mensagem " A partir de R$ 120,00

O proximo li vai ter um b com "quando" e fora teremos 12/12/2022 ás 19hrs.

agora vamos criar um arquivo de stylos para esse cabeçalho com o nome de _infos_bar.scss 

vamos usar a nossa tag de stylos .infos-bar
dentro dela vamos colocar um padding: de 16px 24px, background-color:#fff;

.infos-bar{
    padding: 16px 24px;
    background-color: #fff;
}
 e dentro dele vamos estilizar a lista com &_infos vamos adicionar display flex, vamos colocar um gap de 40px
 &_infos{
    display: flex;
    gap: 40px
 }

 Agora vamos estilizar os itens dentro do li com: font-size: 14px; e uma cor de #000;
 e o b dentro dele vai ter uma font-size de 18px com um display: block e color #000;

 &_item{
    font-size:14px;
    color: #000;

        b{
            color: #000;
            font-size: 18px;
            display: block;
        }
 }

 precisamos retirar os pontos dos li's e vamos fazer isso em nosso reset do main.scss usando list-style: none;

Agora vamos criar um arquivo de estilos  para  os botões com o nome de "_buttons.scss" no arquivo vamos criar a classe .button com as seguintes propriedades; padding: 12px; font-size: 18px; font-weight: bold e text-decoration: none.

dentro da classe vamos colocar um modificador com &--primary com as seguintes proprieadades: Color:#fff; background-color: #4fwac3;

vamos criar uma pasta de dentro de stylos para centralizar alguns estilos do nosso cabeçalho ele vai ter o nome components e dentro dele teremos os arquivos _buttons.scss e _infos_bar.scss precisamos fazer a alteração em nossa importação no main.scss

@use 'components/infos_bar';
@use 'components/buttons';

agora em nosso html vamos criar um link usando "a"  com a class button button--primary, logo abaixo da nossa "ul" com a frase "Garanta sua vaga"

precisamos colocar um display flex em nosso infos_bar.scss para colocarmos o botão do lado direito do nosso container e vamos atribuir space-between.

Agora dentro de _infos_bar.scss vamos fazer a estilização da pagina para celular e para isso vamos usar um @media dentro de infos_bar.

@media (max-width: 640px){
    display:block

    &__infos{
        display: block;

        &__item{
            margin-bottom: 24px
        }
    }
}

Agora vamos estilizar os botões do nosso arquivo de estilos _buttons.scss para telas de celular, dentro de button vamos colocar o text-aline: center e dentro da tag button vamos definir um media query

@media(max-widht:640px){
    display:block;
    width: 100%

}

O nosso projeto em telas de tablet ficou com um problema no estylo do button pois o texto caiu para a linha de baixo e para corrigir isso vamos usar a propriedade white-space: nowrap em nossa classe .button

Agora o botão ficou desalinhado e para corrigir vamos subistituir o nosso display: block por display: flex, vamos colocar um aline-itens: center para fazer o alinhamento.

Agora vamos criar uma nova media query para paginas de tablet

@media (max-width: 1024px){
    display: flex;
    align-items: center;
}

Agora em infos bar vamos criar mais uma media query para telas de tablet

@media (max-width: 1024px){
    &__infos{
        gap: 16px
    }
}