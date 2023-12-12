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

//Generating Cv
function generateCV()
{
    //console.log("generating Cv");

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

function printCV()
{
     window.print();
}
