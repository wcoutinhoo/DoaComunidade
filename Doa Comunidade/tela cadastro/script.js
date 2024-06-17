
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '👁️';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁️';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('senha').value;
        const confirmPassword = document.getElementById('confirmasenha').value;
        const city = document.getElementById('cidade').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        const user = { name, email, password, city };
        localStorage.setItem('user', JSON.stringify(user));

        window.location.href = '/tela cadastro/telainicial2.html';
    });
});
