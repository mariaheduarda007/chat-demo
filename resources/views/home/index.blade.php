<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>



  @vite(['resources/js/home.js', 'resources/css/app.css'])

   <title>Document</title>
</head>
   
<body class="screen">
   <div class="home-container">
      <div class="chats-container">
         <div id="chat1" class="chat" data-room="filmes">FILMES</div>
         <div class="chat" data-room="musica">MÚSICA</div>
         <div class="chat" data-room="gastronomia">GASTRONOMIA</div>
      </div>
      <div class="messages-container">
         <ul id="messages-list">
          
         </ul> 

         <div class="message-input-area">
            <input id="input-msg" class="input" placeholder="Participe do chat!">
            <div id="send-msg" class="button-send">Enviar</div>
         </div>
      </div>

</body>

</html>