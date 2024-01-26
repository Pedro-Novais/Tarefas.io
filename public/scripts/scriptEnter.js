const email = document.querySelector('#value-email')
const password = document.querySelector('#value-password')

const btnSend = document.querySelector('#btn-login')

btnSend.addEventListener('click', makeLogin)

removePlaceholder()

function makeLogin(){
    if(email.value == "" || password.value == ""){
        return console.log('Preencha todos os dados para realizar o login')
    }

    if(!validEmail(email.value)){
        return console.log('Formato de email inválido')
    }
}

function validEmail(email) {
    // Expressão regular para validar e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

function removePlaceholder(){
    const inputAuthor = document.querySelectorAll('.inputs-credentials');
    let placeholder = []
    
    for(let i = 0; i < inputAuthor.length; i++){

        placeholder[i] = inputAuthor[i].placeholder;

    }
    
    inputAuthor.forEach((input) =>{
        
        input.addEventListener('focus', () =>{
            input.placeholder = ""
        })
    })

    inputAuthor.forEach((input) =>{

        input.addEventListener('blur', () =>{
            if(input.value == ""){

                const getForName = input.getAttribute('mark')
                inputAuthor[getForName].placeholder = placeholder[getForName]
            }
        })
    })
}