COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init ou npm init -y

Gerencia as requisicoes, rotas, e URLs, entre outras funcionalidades
### npm install express

Rodar o projeto
### node app.js

Acessar o projeto no navegador
### http://localhost:8080

Instalar o modulo para reiniciar o servidor sempre que houver alteracao no codigo fonte, g significa globalmente
### npm install -g nodemon

Rodar o projeto com o nodemon
### nodemon app.js

Instalar o banco de dados MySQL

Verificar o banco de dados MySQL no prompt de comando
### mysql -h localhost -u root -p

Instalar o Workbench para gerenciar o banco de dados de forma grafica

Comandos basicos de MySQL
Criar a base de dados
###  create database celke character set utf8mb4 collate utf8mb4_unicode_ci;

Criar a tabela
### CREATE TABLE `users` (
### 	`id` int NOT NULL AUTO_INCREMENT, 
###     `name` varchar(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
###     `email` varchar(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
###     PRIMARY KEY (`id`)
### )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

Selecionar registrro no banco de dados:
### SELECT id, name, email FROM users;

Cadastrar registro no banco de dados:
### INSERT INTO users (name, email) VALUES ('João', 'joao@celke);

Limitar a quantidade de registros selecionado no banco de dados:
### SELECT id, name, email FROM users LIMIT 5;

Limitar a quantidade de registros selecionado no banco de dados e indicar o inicio:
### SELECT id, name, email FROM users LIMIT 2 OFFSET 4;
Exemplo:
pg 1 = 1,2
pg 2 = 3,4
pg 3 = 5,6

Acrescentar condicao na busca de registros:
### SELECT id, name, email FROM users WHERE name = 'João';
### SELECT id, name, email FROM users WHERE email = 'cesar@ceclke.com.br' LIMIT 1;

Acrescentar mais de uma condicao na busca de registros:
### SELECT id, name, email FROM users WHERE email = 'cesar@celke.com' AND name = 'Cesar' LIMIT 1;    
### SELECT id, name, email FROM users WHERE email = 'cesar@celke.com' OR name = 'Cesar' LIMIT 1; 

Ordenar os registros retornado do banco dee dados:
### SELECT id, name, email FROM users ORDER BY id ASC;
### SELECT id, name, email FROM users ORDER BY id DESC;

Editar registro no banco de dados:
### UPDATE users SET name = 'Cesar 3a', email = 'cesar3a@gmail.com' WHERE id=3;

Apagar registro no banco de dados: 
### DELETE FROM users; // Apaga todos os registros.
### DELETE FROM users WHERE id = 3; Apaga o registro selecionado.

