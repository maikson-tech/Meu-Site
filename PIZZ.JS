document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simula um envio de formulário bem-sucedido
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        formResponse.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        formResponse.style.color = 'green';

        // Limpa o formulário
        form.reset();
    });
});
