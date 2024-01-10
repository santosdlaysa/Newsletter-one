
function validarEmail(email) {
    // Expressão regular para validar o formato do email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  function habilitarBotao() {
    const emailInput = document.getElementById('emailInput');
    const submitButton = document.getElementById('submitButton');
    const errorMessage = document.getElementById('error-message');

    if (!emailInput.value.trim()) {
      errorMessage.textContent = 'Por favor, preencha o campo de email.';
      emailInput.classList.add('error-border');
      submitButton.disabled = true;
    } else if (!validarEmail(emailInput.value)) {
      errorMessage.textContent = 'Por favor, insira um email válido.';
      emailInput.classList.add('error-border');
      submitButton.disabled = true;
    } else {
      errorMessage.textContent = '';
      emailInput.classList.remove('error-border');
      submitButton.disabled = false;
    }
  }
 

  function subscribe() {
    // Obtenha o valor do campo de e-mail
    var email = document.getElementById("emailInput").value;
    
    // Simule o envio de e-mail (substitua por sua lógica real)
    // Aqui, apenas exibimos a mensagem de sucesso com o e-mail
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    successMessage.textContent = "Foi enviado para o email " + email;

    // Redirecione para a página de sucesso após alguns segundos (opcional)
    setTimeout(function () {
        window.location.href = "./sucessmensagem.html?email=" + encodeURIComponent(email);
    }, 3000); // Redireciona após 3 segundos (3000 milissegundos)
    }
  // Adiciona ouvinte de eventos para chamar a função habilitarBotao quando o valor do input mudar
  document.getElementById('emailInput').addEventListener('input', habilitarBotao);

  // Adiciona um ouvinte de evento ao formulário para evitar o envio se o botão estiver desativado
  document.getElementById('emailForm').addEventListener('submit', function (event) {
    const submitButton = document.getElementById('submitButton');
    if (submitButton.disabled) {
      event.preventDefault();
    }
  })
  
  function voltarPagina() {
    history.back();
  };