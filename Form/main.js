/*
   Author: Fazle Rabbi
   Date: 20 November, 2022
*/

let signUp = document.querySelector("#signup"),
    signIn = document.querySelector("#signin"),
    title = document.querySelector(".title")
    nameField = document.querySelector(".name-field")
    form = document.querySelector("form")
    emailField = document.querySelector("#email-field")
    passwordField = document.querySelector("#password-field")
    userIcon = document.querySelector(".fa-user")
     
   
signIn.onclick = function (e){
   e.preventDefault()
   if(form.classList[0] == 'signin'){
      if(emailField.value == '' || passwordField.value == ''){
         alert('Please fill out the form')
      }else{
         alert('ok')
      }
   }else{
      // alert('not ok')
      nameField.style.height = '0'
      userIcon.style.fontSize='0'
      // nameField.style.background='red'
      // nameField.style.padding = '0'
      title.innerHTML = 'Sign In'
      // console.log(form.classList);
      form.classList.remove('signup')
      form.classList.add('signin')
      signIn.style.background = '#784beb'
      signIn.style.color = 'white'
      signUp.style.background = 'rgb(240,240,240)'
      signUp.style.color = 'black'
   }
}


signUp.onclick = function (e){
   e.preventDefault()
   console.log(form.classList[0]);
   if(form.classList[0] == 'signup'){
      alert('ok')
   }else{
      nameField.style.height = '40px'
      // nameField.style.padding = '10px'
      userIcon.style.fontSize='16px'
      title.innerHTML = 'Sign Up'
      signIn.style.background = 'rgb(240,240,240)'
      signIn.style.color = 'black'
      signUp.style.background = '#784beb'
      signUp.style.color = 'white'
      form.classList.remove('signin')
      form.classList.add('signup')
      userIcon.style.fontSize='16px'
   }
}

