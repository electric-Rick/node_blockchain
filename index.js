const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const process = require('process')
var childProcess = require('child_process');

console.log('(PAI)Meu PID é: ' + process.pid);
 function runScript(scriptPath, callback) { 
 // keep track of whether callback has been invoked to prevent multiple invocations
 var invoked = false;
 var process = childProcess.fork(scriptPath);
  // listen for errors as they may prevent the exit event from firing

 process.on('error', function (err) { 
 	if (invoked) return;
 	invoked = true;
 	callback(err); });

  // execute the callback once the process has finished running 
  process.on('exit', function (code) { 
  	if (invoked) return;
  	 invoked = true;
  	  var err = code === 0 ? null : new Error('exit code ' + code);
  	   callback(err); });
  	    }

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
 	res.send('<h1>Teste de blocos</h1><br><a href="./block_chain">Requisitar blocos</a>');

});




app.get('/block_chain', function (req, res) {
 	res.send('Carregando block_chain...')
   runScript('./index_chain.js', function (err) { 
   	if (err) throw err;
      res.send('Carregado!')
   	 console.log('Blocos carregados e salvos.');
   	  });

});




console.log('Rodando servidor na porta: 3000')
app.listen(3000);


