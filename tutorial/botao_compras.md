Nessa nova aula vamos entender como funciona os dados de tempo para definirmos um timer em nossa pagina que fara uma contagem regressiva.
primeiro vamos no html e no local que colocamos a data vamos subistituir por um span com o id contador

Agora em nosso main.js vamos criar a data do evento

primeiro vamos criar uma constante com o nome dataDoEvento que vai recever new date()

const dataDoEvento = new date("Dec 12, 2028 17:00") obs: dentro dos () colocamos o mês porem de forma abreveada em inglês seguido do dia depois virgula e colocamos o ano e horario ("Dec 12, 2028 17:00:00")

Agora vamos criar uma nova constante chamada timeStampDoEvento  ela vai receber a constante dataDoEvento jundo do metodo getTime(), esse metodo é ultiilzado para obter o valor numérico correspondente a um objeto Date, representando o número de milissegundos decorridos

const dataDoEvento = new data ("dec 12, 2022 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

Agora vamos criar uma const para repetir varias vezes um determinado comando, no nosso caso queremos que ela conte as horas

Vamos definir uma const com o nome contaAsHoras  ela vai receber o atributo setInterval e dentro dele a função com o argumento vazio e  entre chaves a vamos definir uma constante chamada agora rececendo new date() e logo abaixo vamos criar mais uma constante recebendo timeStampAtula recebendo agora.getTime()},1000

const contaAsHoras = setInterval(function(){

}, 1000);

Dentro da função que está dentro da variavel contaAsHoras vamos definir mais uma variavel para receber as horas atuais com o nome de "agora"
e logo abaixo vamos colocar a nossa variavel timeStempDoEvento revebendo a variavel agora junto do atributo getTime

const agora = new Date();
const timeStampAtual = agora.getTime();

const contaAsHoras = setInterval(dunction(){
    const agora = new Date();
    const timeStaampAtual = agora.getTimme();

    const distanciaAteOevento = timeStampDoEvento - timeStampAtual;

     const diasAteOEvento = math.floor(distanciaAteOEvento / (1000*60*60*24));
     console.log(diasAteOEvento);
},1000);

Agora vamos criar uma função do javaScript para arredondar o nosso numero para baixo

const diasAteOEvento = Math.foor(distanciaAteOEvento / (1000*60 *60 * 24));
const horasAteOEvento = math.foor (distanciaAteOevento % (1000*60*60*24)) / (1000*60*60);
console.log(diasAteOEvento);

com o projeto finalizado vamos fazer a comfiguração do nosso packjason para depois subir o arquivo la na versel.
