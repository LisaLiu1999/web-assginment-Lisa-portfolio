// get the form element //

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// check email format //
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


form.addEventListener('submit', (event) => {
  // prevent default//
  event.preventDefault();

  // check input //
  let errors = [];
  console.log('Form submitted');

  if (nameInput.value.trim() === '') {
    errors.push('Name is required.');
  }
  console.log('Name:',nameInput.value)

  if (!validateEmail(emailInput.value.trim())) {
    errors.push('Please enter a valid email address.');
  }
  console.log('Email:',emailInput.value)


  if (messageInput.value.trim() === '') {
    errors.push('Message cannot be empty.');
  }
  console.log('Message:',messageInput.value)


  // Show error or success message //
  if (errors.length > 0) {
    alert(errors.join('\n'));    //*  \n means new line //
  } else {
    alert('Thank you! Your message has been sent successfully.');
    form.reset();
    console.log('Form reset');     // reset form //

  }

  emailInput.addEventListener('input', () => {
    console.log('user input', emailInput.value.trim());

    if (!validateEmail(emailInput.value.trim())) {
      emailInput.style.borderColor = 'red';
      console.log('Invalid email format');
      
    } else {
      emailInput.style.borderColor = 'green';
      console.log('Valid email format');
    }
  });
  
});
