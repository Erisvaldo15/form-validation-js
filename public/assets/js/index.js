const form = document.querySelector("form");
const modal = document.querySelector('.modal');

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const divFields = document.querySelectorAll(".fields");
  let success = false;
  let existsMessage = false;

  for (let i = 0; i < 2; i++) {
    
    let field = form[i];
    let span = document.querySelector(`.error-${field.type}`);
    let spansExists = document.querySelectorAll('.error');
    

    if (field.value === "") {

        existsMessage = false; 
      
        if (!existsMessage && spansExists.length <= i) {

          createSpan = document.createElement("span");
          createSpan.classList.add('error',`error-${field.type}`, 'text-danger');
          createSpan.textContent =  `Required ${field.type}`;
          
          !span ? divFields[i].appendChild(createSpan) : ''; 
        }

      } 
      
    else {

      if (span) {
          span.classList.contains(`error-${field.type}`) ? divFields[i].removeChild(span) : '';
      } 

      success = (!span) && i == 1 ? true : false;
    }    
    
  }


  if(success) {
      alert('success');
      form.reset();
  }

});

const checkInput = document.querySelector('.form-check-input');

checkInput.addEventListener('click', () => {

    const password = document.querySelector('.password');

    password.type == 'password' ? password.type = 'text' : password.type = 'password';
});





