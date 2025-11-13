document.addEventListener('DOMContentLoaded', () => {
  const SOCKET_URL = 'http://localhost:3001';
  const socket = io(SOCKET_URL, { transports: ['websocket', 'polling'] });

  const messagesList = document.getElementById('messages-list');
  const input = document.getElementById('input-msg');
  const sendBtn = document.getElementById('send-msg');
  const roomButtons = document.querySelectorAll('.chat'); 
  const chat = document.getElementById('chat1'); 
  console.log(chat)

  const USER = localStorage.getItem('userName') || 'Visitante';

  let currentRoom = null;

  socket.on('connect', () => {
    console.log('Conectado ao socket:', socket.id);
  });


  socket.on('chat_message', (payload) => {
    if(payload.room === currentRoom)
    appendMessage(payload);
  });


  function appendMessage({ user, text, room }) {
    const li = document.createElement('li');
    li.className = 'message';

  
    const header = document.createElement('div');
    header.style.fontWeight = '700';
    header.style.marginBottom = '4px';
    header.textContent = `${user}`;

    const body = document.createElement('div');
    body.textContent = text;

    li.appendChild(header);
    li.appendChild(body);
    messagesList.appendChild(li);
  }

  async function send() {
    const text = input.value.trim();
    if (!text) {
      alert('Você não digitou uma mensagem');
      return;
    }
    else if (!currentRoom){
      alert('Nenhuma sala selecionada.');
      return;
    }

    const payload = {
      user: USER,
      text,
      room: currentRoom,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit('chat_message', payload);
    input.value = '';
  }

  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });

    roomButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const room = btn.dataset.room;
      alert("entrou")
      
      if (currentRoom === room) return;

      if (currentRoom) {
        socket.emit('leave_room', currentRoom);
        console.log(`Saiu da sala: ${currentRoom}`);
      }

      roomButtons.forEach((b) => b.classList.remove('active')); // remove dos outros
      btn.classList.add('active'); 
      currentRoom = room;
      socket.emit('join_room', room);
      
      
      messagesList.innerHTML = '';
    });
  });
});
