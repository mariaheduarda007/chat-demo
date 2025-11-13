document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn-login');

    const input = document.getElementById("input-login")
    button.addEventListener('click', send);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });

});

async function send() {
        const name = document.getElementById('input-login').value.trim();

        if (!name) {
                alert('Digite seu nome!');
                return;
            }

            localStorage.setItem('userName', name);
            console.log("Usuário cadastrado:", name);

            window.location.href = window.rotaHome;

}
  
  