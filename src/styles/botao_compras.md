Nessa nova aula vamos entender como funciona os dados de tempo para definirmos um timer em nossa pagina que fara uma contagem regressiva.
primeiro vamos no html e no local que colocamos a data vamos subistituir por um span com o id contador

Agora em nosso main.js vamos criar a data do evento

primeiro vamos criar uma constante com o nome dataDoEvento que vai recever new date()

const dataDoEvento = new date("Dec 12, 2028 17:00") obs: dentro dos () colocamos o mês porem de forma abreveada em inglês seguido do dia depois virgula e colocamos o ano e horario ("Dec 12, 2028 17:00:00")