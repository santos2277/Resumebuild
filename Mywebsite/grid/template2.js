var user = document.getElementById('username');  
var userconact = document.getElementById('usercontact');
var usadress = document.getElementById('useradress');
var usrfb = document.getElementById('userfb');
var usrinstaa = document.getElementById('userinstaa');
var usrlindn = document.getElementById('usrlindn');
var usrgit = document.getElementById('github');
var usrlang = document.getElementById('langhub');
var usrinter = document.getElementById('interesthub');
var usrobj = document.getElementById('objecthub');
var usrwork = document.getElementById('workhub');
var usracad = document.getElementById('acadhub');




var usrerror = document.getElementById('submit-error');


//alert("loading");
function addNewWEField(){

    // console.log("Adding new Field");
    let newNode =  document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField()
{
    let newNode =  document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
    
}
//for languages
function addNewleField()
{
    let newNode =  document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("leField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let leOb=document.getElementById("le");
    let leAddButtonOb = document.getElementById("leAddButton");

    leOb.insertBefore(newNode, leAddButtonOb);
    
}
//for languages
function addNewinTField()
{
    let newNode =  document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("inTField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let InTOb=document.getElementById("inT");
    let inTAddButton = document.getElementById("inTAddButton");

    InTOb.insertBefore(newNode, inTAddButton);
    
}


function validation(){
    var name = document.getElementById('namefield').value;
    if(name.length == 0){
        user.innerHTML=' <i class="fa fa-times-circle" aria-hidden="true"></i> user name is required';
        username.style.color = 'Red';
        return false;
        

    }
    if(!isNaN(name)){
        user.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> only Character';
        username.style.color = 'Red';
        return false;
    }
   
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        user.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Write full name';
        username.style.color = 'Red';
        return false;
    }
    username.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    username.style.color = 'yellowgreen'
   return true;

}
function validationphone(){
    var contact = document.getElementById('contactfield').value;

    if(contact.length == 0){
        userconact.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Contact Number is required';
        usercontact.style.color = 'Red';
        return false;

    }
    if(isNaN(contact)){
        userconact.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Only Numrical value from 0-9';
        usercontact.style.color = 'Red';
        return false;
    }
    usercontact.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    usercontact.style.color ='yellowgreen';
    return true;
   
  }
  function validationaddress(){
    var addess = document.getElementById('addressfield').value;

    if(addess.length == 0){
        usadress.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Address filled Is Required';
        useradress.style.color = 'Red';
        return false;

    }
    
    usadress.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    useradress.style.color ='yellowgreen';
    return true;
  }
  function validationfb(){
    var fb = document.getElementById('fbfield').value;

    if(fb.length == 0){
        usrfb.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> FB filled Is Required';
        userfb.style.color = 'Red';
        return false;

    }
    usrfb.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    userfb.style.color ='yellowgreen';

    return true;
  }
  function validationainstaa(){
    var instaa = document.getElementById('instafield').value;

    if(instaa.length == 0){
        usrinstaa.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Instaa filled Is Required';
        userinstaa.style.color = 'Red';
        return false;

    }
    usrinstaa.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    userinstaa.style.color ='yellowgreen';

    return true;
  }
  function validationalinkdin(){
    var linkdn = document.getElementById('linkedinfield').value;

    if(linkdn.length == 0){
        userlinkdin.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Linkdin filled Is Required';
        userlinkdin.style.color = 'Red';
        return false;

    }
    userlinkdin.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    userlinkdin.style.color ='yellowgreen';

    return true;
  }
  function validationagit(){
    var gith = document.getElementById('githubfield').value;

    if(gith.length == 0){
        github.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Github filled Is Required';
        github.style.color = 'Red';
        return false;

    }
    github.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    github.style.color ='yellowgreen';

    return true;
  }
  function validationlang(){
    var lang = document.getElementById('Languagefield').value;

    if(lang.length == 0){
        langhub.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Language filled Is Required';
        langhub.style.color = 'Red';
        return false;

    }
    langhub.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    langhub.style.color ='yellowgreen';

    return true;
  }
  function validationinter(){
    var interest = document.getElementById('interestfield').value;

    if(interest.length == 0){
        interesthub.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Interest filled Is Required';
        interesthub.style.color = 'Red';
        return false;

    }
    interesthub.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    interesthub.style.color ='yellowgreen';

    return true;
  }
  function validationobject(){
    var object = document.getElementById('objectivefield').value;

    if(object.length == 0){
        objecthub.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Object filled Is Required';
        objecthub.style.color = 'Red';
        return false;

    }
    objecthub.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    objecthub.style.color ='yellowgreen';

    return true;
  }
  function validationwork(){
    var work = document.getElementById('WorkField').value;

    if(work.length == 0){
        workhub.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> work filled Is Required';
        workhub.style.color = 'Red';
        return false;

    }
    workhub.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    workhub.style.color ='yellowgreen';

    return true;
  }
  function validatioacad(){
    var work = document.getElementById('Academicfield').value;

    if(work.length == 0){
        acadhub.innerHTML='<i class="fa fa-times-circle" aria-hidden="true"></i> Academic filled Is Required';
        acadhub.style.color = 'Red';
        return false;

    }
    acadhub.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    acadhub.style.color ='yellowgreen';

    return true;
  }
  

  
    function generateCV(){
        if(!validation() || !validationphone() || !validationaddress() || !validationfb()){
            usrerror.innerHTML="Fix error";
            return false;
            
        }
        {
         let namefield = document.getElementById("namefield").value;
        let NameT1 = document.getElementById("NameT1");
        NameT1.innerHTML= namefield;
    
        //contact
        document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
    
        //address
        document.getElementById("AddressT").innerHTML=document.getElementById("addressfield").value;
    
        //Fbaddress
        document.getElementById("FbT").innerHTML=document.getElementById("fbfield").value;
        //Instaa field
        document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;
      //linkdinid
        document.getElementById("lKT").innerHTML=document.getElementById("linkedinfield").value;
        //github
        document.getElementById("GthT").innerHTML=document.getElementById("githubfield").value;
        //objective
        document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;
    
        //language Field
        let les=document.getElementsByClassName('leField');
      let str2=''
      for(let e of les)
      {
          str2 += `<li>${e.value} </li>`;
      }
    
      document.getElementById('LgT').innerHTML=str2;
        
      //interest field
      let inT=document.getElementsByClassName('inTField');
      let str3=''
      for(let e of inT)
      {
          str3 += `<li>${e.value} </li>`;
      }
    
      document.getElementById('IntT').innerHTML=str3;
        
       //work exprience
       let wes = document.getElementsByClassName("weField");
    
       let str= "";
    
       for (let e of wes)
       {
       str = str + `<li> ${e.value}</li>`;
       }
       
      document.getElementById('WeT').innerHTML=str;
      //Aaecdmics
      let aqs=document.getElementsByClassName('eqField')
      let str1=''
      for(let e of aqs)
      {
          str1 += `<li>${e.value} </li>`;
      }
    
      document.getElementById('aqT').innerHTML=str1;
      document.getElementById('cv-form').style.display='none';
      document.getElementById('cv-template').style.display='block';
      
        }
        
    }
    function printCV()
    {
         window.print();
    }

    
    