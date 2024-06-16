
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('senha');
    const toggleBtn = document.querySelector('.alternasenha');

    if (passwordInput.type === 'senha') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '👁️';
    } else {
        passwordInput.type = 'senha';
        toggleBtn.textContent = '👁️';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('Form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('senha').value;
        const confirmPassword = document.getElementById('confirmasenha').value;
        const city = document.getElementById('cidade').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        const usuario = { name, email, password, city };
        localStorage.setItem('usuario', JSON.stringify(usuario));

        window.location.href = '/tela cadastro/telainicial2.html';
    });
});
