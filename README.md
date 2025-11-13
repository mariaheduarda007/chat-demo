## cd node-server

1 - npm install express socket.io axios cors

express: cria o servidor HTTP
socket.io: gerencia os WebSockets
axios: envia requisições para o Laravel
cors: libera acesso entre as portas diferentes

2 - node server.js
mantém o servidor websocket rodando

## laravel

1 - php artisan serve 
mantém o servidor do front rodando e reagindo às mudanças da tela

2 - npm run build
construir as depêndencias do vite, carrega os arquivos JS/CSS rapidamente usando ES Modules nativos



