document.getElementById("login_button").addEventListener("click",function () {
    const mailVal = document.getElementById("emailId");
    const mailValueGet = mailVal.value;

    const passVal = document.getElementById("passId");
    const passValueGet = passVal.value;
    console.log(mailValueGet,passValueGet);
    if (mailValueGet === "asheq100mahmud@gmail.com" && passValueGet==="asheq18th" ){
        window.location.href="account.html"

    }
    else{
        alert("pass or mail not correct")
    }
    

    
})

