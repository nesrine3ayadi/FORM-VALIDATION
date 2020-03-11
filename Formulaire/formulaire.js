
function validate(){
    var name = document.getElementById('name').value;
    var adress = document.getElementById('adress').value;
    var email = document.getElementById('email').value;
    var password= document.getElementById('password').value;
    var regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    var comments = document.getElementById('comments').value
  
    if(name=="")
        alert("Name is obligatory");
    if(adress=="")
        alert("Adress is obligatory");

    //Check on email
    if(email=="")
        alert("Email is obligatory")

    if(!regexMail.test(email))
        alert("This is not a valid email address");

    // Check on password
    if(password.length==0){
        alert("Paswword is obligatory")
    
    }else  if((password.length>0) && (password.length<8)){
        alert("Your password should be longuer than 8 caracters");

    }else  if(!regexPassword.test(password)){
         alert("Your password is weak");
    }
    
    // Check on commentaire
    if(comments.length==0){
        alert('you must write a comment')
    }


    
   
  }
