const validateForm = () => {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const passwordField = document.querySelector('.password-field');
  
  if (!firstName || !lastName || !email || !phone || !password.value || !confirmPassword.value) {
    alert('Please fill in all fields.');
  }

  if (password.value !== confirmPassword.value) {
    password.classList.add('incorrect')
    confirmPassword.classList.add('incorrect')

    let incorrectPasswords = document.createElement('div')
    incorrectPasswords.classList.add('incorrect-password')
    incorrectPasswords.innerHTML = 'Passwords do not match!'

    passwordField.appendChild(incorrectPasswords)

    return false
  } else {
    password.classList.remove('incorrect')
    confirmPassword.classList.remove('incorrect')

    if (incorrectPasswords) {
      incorrectPasswords.remove()
    }

    return true
  }
  }