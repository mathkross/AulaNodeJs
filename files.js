 const  fs = require('fs');

fs => file sistem, sistema de arquivos, poder manipular, ler, buscar,etc.

fs.writeFile('myfile.txt', 'Hello world from Matheus', (err) =>{

   if(err){   // validar o erro no callback
       throw err;
   }

});//primeiro parametro o nome odo arquivo, depois a mensagem, terceiro a função // err (erro pra saber se tem ou nao erros)

//COMO LER O ARQUIVO

 fs.readFile('myfile.txt', (err, data) => console.log(data.toString('utf8'))); // primeiro parametro da função o erro e depois o dado do arquivon

//COMO BUSCAR ARQUIVOS DENTRO DE UM DIRETÓRIO

fs.readdir('.', (err, files) => {   // utilizamos '.' para ver TODOS os arquivos
  if (err) {
        throw err;
    }
    for (var file in files) {
       console.log(files[file]);
    }
});

//COMO LER SOMENTE UM ARQUIVO ou SÓ ARQUIVOS JS POR EXEMPLO

fs.readdirSync('.')
.filter((file) => {
    return(file.endsWith('.js'))
})
.forEach((file) => {
    console.log(file)
)