// Autor: Erick Augusto de Almeida
// Última atualização: 04/12/2021 03:55 AM
/*****************************************************************************************************/
// Observações: Ainda é preciso aumentar a funcionalidade deste código por ser apenas um demosntativo /
// Versão: 0.0.2v                                                                                 /
/*****************************************************************************************************/

//Dependências neste arquivo: express, path, body-parser
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

/*- Função Para executar o script de blocos, verificando se há falhas ao executar os script.
      Sem que nenhum valor errado seja enviado de volta. 
   -*/

 function executar_script(scriptPath, callback) {  

 // Inicialmente ela não é invocada
 var invoked = false;

 // aqui é eu dou um fork no arquivo 
 var process = childProcess.fork(scriptPath);

 process.on('error', function (err) { // Caso dê erro, retorne o erro. 

 	if (invoked) return;

 	invoked = true; 

 	callback(err); // Retorna o erro através do callback

   });  

  process.on('exit', function (code) { 

  	if (invoked) return; // Caso já tenha sido chamada, retorne nada.

  	 invoked = true; //Troca o valor para  verdadeiro.

  	  var err = code === 0 ? null : new Error('exit code ' + code); // Identifica o tipo de código, caos for zero, não retorne nada.

  	   callback(err); }); // Caso tenha algum erro, chame-o através do callback com o parâmetro do erro que aconteceu.

  	    };

app.use(bodyParser.json()); // Aqui ajustamos o bodyparser no middleware

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', require('ejs').renderFile); // Através deste comando escolhemos a engine, neste caso escolhi o EJS

app.set('view engine', 'ejs'); // Engine modificada para o EJS

app.set('views', __dirname); // Aqui identificamos qual seria a pasta "views", mas por se tratar de um exemplo, inseri o diretório raiz do app;

app.get('/', function (req, res, next) { // Aqui eu escolho qual será a terminal da url e em seguida  o callback para executar as requisições e respostas do Node.js

res.send('Blocos carregando...')   // Neste caso, não executei nenhum arquivo EJS, apenas enviei ao usuário que o blockchain estará carregando

 	executar_script('./index_chain.js', function (err) { // Nesta linha chamo a função executar_script para rodar o arquivo index_chain.js e ainda tratando os erros em seguida.

      if (err) throw err;      // Caso aconteça alguma coisa de errado, a função dirá qual foi o erro que ocorreu.

        });
   });

console.log('Rodando servidor na porta: 3000')

app.listen(3000); // Neste caso, eu poderia colocar um callback, mas como foi para fins demonstrativos, utilizei diretamente o listen e inseri a porta nesta função diretamente, mas ela aceita callbacks e nisso também é possível tratar erros caso aconteçam. 


