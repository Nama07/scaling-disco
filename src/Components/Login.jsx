import React, { useState } from 'react';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  function handleRegister() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!email.includes("@")) {
      alert("Tohle není email (není tam @)");
      return;
    }

    if (password !== confirmPassword) {
      alert("Hesla se neshodují, zkuste to znovu.");
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
      alert("Email už je registrovaný.");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registrace úspěšná");
    setCurrentUser(email);
    setIsLoggedIn(true);
    closeModal();
  }

  function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      alert("Přihlášení úspěšné");
      setCurrentUser(email);
      setIsLoggedIn(true);
      closeModal();
    } else {
      alert("Nesprávný email nebo heslo, zkuste to znovu.");
    }
  }

  function openModal() {
    document.getElementById("authModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("authModal").style.display = "none";
  }

  function toggleMode() {
    setIsLoginMode(!isLoginMode);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentUser(null);
  }

  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-auto">
          {!isLoggedIn ? (
            <button className="btn btn-primary" onClick={openModal}>Přihlásit se</button>
          ) : (
            <div>
              <span>Vítejte, {currentUser}</span>
              <button className="btn btn-danger ml-2" onClick={handleLogout}>Odhlásit se</button>
            </div>
          )}
        </div>
      </div>

      <div id="authModal" className="modal" tabIndex="-1" style={{ display: 'none' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{isLoginMode ? "Login" : "Register"}</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Zadejte email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" id="password" placeholder="Zadejte heslo" />
              </div>
              {!isLoginMode && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Potvrdit heslo:</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Potvrďte heslo" />
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={toggleMode}>
                {isLoginMode ? "Změnit na Registraci" : "Změnit na Přihlášení"}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={isLoginMode ? handleLogin : handleRegister}
              >
                {isLoginMode ? "Přihlásit se" : "Registrovat"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
