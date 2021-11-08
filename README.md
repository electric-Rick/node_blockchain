# Sobre
 
 Neste repositório está um exemplo de como utilizar o NodeJs para gerar um blockchain e armazená-lo em um banco de dados.
A finalidade deste repositório também é para testar as threads e threads pools do NodeJs, a fim de demonstrar como threads e processos funcionam.


# Resultados adquiridos
  Através de alguns testes e modificações no código, foi possível notar que o NodeJS realmente é um multi-thread, pois ao realizar requisições através de diferentes abas, testes automatizados através de tunneling e alguns outros elementos do puppeteer, foi notável que o NodeJS atenderia a demanda do projeto em questão. Durante a análise, este código foi criado a princípio para fins de testes, ou seja, alguns elementos de segurança precisam ser revisados, iniclusive os critérios de dificuldade na hora de emitir o hash para o block chain gerado. 

# Requisições
  Através das requisições via navegador, é possível notar que novas threads são geradas a partir de cada requisição. 
# Respostas
