var p;
function Valid(){
    var pattern=/^([A-Z]{1,1})+([a-z]{1,9})+([0-9]{1,5})$/;
    var u=document.getElementById("uname").value;
    
    if(u.match(pattern)){
        showuname.innerHTML="<img src='correct.jpeg' height='20px' width='20px'>";
        localStorage.setItem("username",u);
    }
    else{
        showuname.innerHTML="<img src='wrong.jpeg' height='20px' width='20px'>";
        form1.u.innerHTML="";
        form1.u.focus();
        uname.style.bottomBorder="2px solid red";

    }

    pattern=/^([a-zA-Z]{1,9})+([@]{1,1})+([a-z]{3,9})+([.]{1,1})+([a-z]{3,9})$/;
    var e=document.getElementById("email").value;
    if(e.match(pattern)){
        showemail.innerHTML="<img src='correct.jpeg' height='20px' width='20px'>";
        localStorage.setItem("email",e);
    }
    else{
        showemail.innerHTML="<img src='wrong.jpeg' height='20px' width='20px'>";
        form1.e.innerHTML="";
        form1.e.focus();
    }

    pattern= /^([a-zA-z]{1,9})+([0-9]{1,9})$/;
     p=document.getElementById("password").value;
    if(p.match(pattern)){
        showpassword.innerHTML="<img src='correct.jpeg' height='20px' width='20px'>";
        localStorage.setItem("password",p)
    }
    else{
        showpassword.innerHTML="<img src='wrong.jpeg' height='20px' width='20px'>";
        form1.p.innerHTML="";
        form1.p.focus();
    }
    var c=document.getElementById("cpassword").value;

    if(c==p){
        showcpassword.innerHTML="<img src='correct.jpeg' width='20px' height='20px'>";
    }
    else if(c!=p){
        showcpassword.innerHTML="<img src='wrong.jpeg' width='20px' height='20px'>";
        form1.cpassword.innerHTML="";
        form1.cpassword.focus();
    }
    alert("Registratin completed SuccessFully"); 
}

function Login(){
    var email=form2.loginemail.value;
    var password=form2.loginpassword.value;
    var lemail=localStorage.getItem("email");
    var lpassword=localStorage.getItem("password");
    if(email==lemail && password==lpassword){
        alert("You Have Logged SuccessFully");
    }
    else{
        alert("Enter valid email or password");
    }

  
}