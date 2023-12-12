    var user = document.getElementById('username');  
    var userconact = document.getElementById('usercontact');
  
    function validation(){
        var name = document.getElementById('namefield').value;
        if(name.length == 0){
            user.innerHTML='**user name is required**';
            username.style.color = 'Red';
            return false;

        }
        if(!isNaN(name)){
            user.innerHTML='**only Character**';
            username.style.color = 'Red';
            return false;
        }
       
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            user.innerHTML='**Write full name**';
            username.style.color = 'Red';
            return false;
        }
        username.innerHTML='✓ User Name is Successfull';
        username.style.color = 'yellowgreen'
       return true;

}

function validationphone(){
    var contact = document.getElementById('contactfield').value;

    if(contact.length == 0){
        userconact.innerHTML='**Plz fill**';
        usercontact.style.color = 'Red';
        return false;

    }
    if(isNaN(contact)){
        userconact.innerHTML='**only Character**';
        usercontact.style.color = 'Red';
        return false;
    }
    usercontact.innerHTML='✓ User Name is Successfull';
    usercontact.style.color ='yellowgreen';
    return true;
   
  }
