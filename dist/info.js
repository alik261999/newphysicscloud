let points=window.sessionStorage.getItem("points");
let namee=window.sessionStorage.getItem("name");
let mail=window.sessionStorage.getItem("mail");
console.log(points);

  
function marks(){
    //event.preventDefault();
    fire();
    document.querySelector("div.result").innerHTML="Your Obtained Marks is "+points;
}

/*function send(){
    scriptUrl="https://script.google.com/macros/s/AKfycbxUTQt2c_imbg-1LzFF9_K_KVEFlGpPsqGC5G-o20BK9fDVa7hx0GSl7wq01Rs9ddF59g/exec";
    var url=scriptUrl+"?name="+namee+"&email="+mail+"&marks="+points;
    console.log(url);
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "POST",
        dataType: "jsonp"
    });
}*/

function back(){
    location.href="index.html";
}

function fire(){
    //console.log(points);
    var date = new Date();
    var day = date.getDate().toString();
    var mon = date.getMonth().toString();
    var yr = date.getFullYear().toString();
    var arrname = namee.split(" ");
    var nm = arrname.join("");
    if(points!=null)
    {
        db.ref(yr+mon+day+"/"+nm).set({
            Name: namee,
            email_ID: mail,
            Marks: points
          });
    }
    else{
        alert("Your form already has been submited");
    }

}
