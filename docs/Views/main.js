import loginFunctions from '../firebase/login.js';

export default () => {
  const loginView = document.createElement('div');
  loginView.setAttribute('class', 'viewsStyle');
  loginView.innerHTML = `
            <h3>Inicia Sesión con tu email</h3>
            <form class="registerForm">
                <input type="email" required id="loginEmail" placeholder= "Correo electrónico">
                <input type="password" required id="loginPassword" minlength="6" placeholder="Contraseña">
                <button type="submit" class="registerButton" id="loginButton">INICIAR SESIÓN</button>
                <p><a href="#/passwordRecovery" id="recover">¿Has olvidado la contraseña?</a></p>
            </form> 
            <div class="conectWithSocialMedia">
                <h4>o ingresa con tu cuenta de:</h4>
                <img src="images/facebook.png" id="facebookLogin" class="buttons">
                <img src="images/Google.png" id="googleLogin" class="buttons">
                <p>¿No tienes cuenta? <a href="#/register">Registrate</a></p>
            </div>  `;

  // Nodos
  const loginEmail = loginView.querySelector('#loginEmail');
  const loginPassword = loginView.querySelector('#loginPassword');
  const loginButton = loginView.querySelector('#loginButton');
  const facebookLogin = loginView.querySelector('#facebookLogin');
  const googleLogin = loginView.querySelector('#googleLogin');

  // Listeners
  googleLogin.addEventListener('click', loginFunctions.google);
  facebookLogin.addEventListener('click', loginFunctions.facebook);
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginFunctions.emailLogIn(loginEmail.value, loginPassword.value);
  });
  return loginView;
};
