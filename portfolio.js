const form = document.getElementById('formContato');
const resposta = document.getElementById('resposta');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Simula envio
    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
    form.reset();
});