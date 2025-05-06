vamos fazer uma pagina com um contador para o inicio do evento

primeiro vamos configurar o npm  e para isso no terminal vamos usar o seguinte pronpt npm init --yes.

Precisamos também instalar o pacote do parcel em nosso projeto e para isso usamos o seguinte pronpt no terminal "npm install --save-dev parcel"

isse criou a pasta node_modules, package-lock.sjson e packge.jon e agora vamos fazer a configuração.

Vamos criar a pasta "src" dentro dela vamos colocar o nosso index.html, ainda dentro de src vamos colocar  a pasta scripts com o arquivo main.js dentro.

Vamos criar também uma pasta chamada styles e dentro dela o arquivo main.scss.
Obs: para criar a pasta e o arquivo que vai dentro dela usando apenas um comando podemos colocar o nome da pasta junto de / mais o nome do arquivo ex: styles/main.scss.

no arquivo main.scss vamos colocar a tag body e vamos definir um background-color como red.

Agora vamos configurar o nosso arquivo packge.json para que ele execulte o parcel, na seção de scripts vamos adicionar mais uma tag, vamos usar "dev": "parcel src/index.html src/styles/main.scss src/scripts/main.js". Depois vamos executar o comando npm run dev para ver se está funcionando. se a confuguração estiver correta será gerada uma pasta chamada .parcel-cache e uma outra pasta chamada dist.

Agora vamos colocar a extrutura basica do index.html.

Precisamos também pegar a pasta de imgens que está na primeira aula de desenvolvimento da landing page e colocar em nosso projeto dentro da pasta src.

Agora precisamos fazer a configuração para que o parcel mimifique as images e para isso dentro da pasta do nosso projeto vamos criar um arquivo chamado sharp.config.jafon

dentro do arquivo vamos usar a seguinte configuração;

{ 
    "png": {
        "quality": 75
    }
}

agora vamos iniciar o parcel, no terminal usamos npm run dev.
Obs: O parcel trabalha sob demanda ou seja ele só mimitiza as imagens que forem coladadas no projeto.

Vamos colocar uma imagem no projeto para fazer o texte, desta forma o parcel vai gerar a imagem mimitizada dentro de styles de dist.

Agora vamos fazer a importação do sass através do parcel, em nosso HTML precisamos usar a tag link e importar o nosso arquivo main.scss.

No final do body vamos chamar o nosso javascript.

Agora vamos criar um repositorio no github com o nome ebac_tech_talks.

Precisamos criar o arquivo .gitignore e vamos colocar algumas arquivos nele;
.parcel-cache
dist
node_modules