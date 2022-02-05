function time(){
    let today=new Date();
    var str=today.toDateString();
    document.getElementById("date").innerHTML=str;
}
function nextPage(){
    var name = document.getElementById("name").value;
    var add = document.getElementById("address").value;
    window.sessionStorage.setItem("name",name);
    window.sessionStorage.setItem("mail",add);
    //console.log(name);
    window.open("bootstrap.html","_blank");
    //location.href = "bootstrap.html";
    return false;
}

function studentlogin(){
    var mail = document.getElementById("rn-1").value;
    var dob = document.getElementById("dob1").value;
    db.collection("Student").where("Mail_ID","==",mail).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.data().DOB == dob){
                location.replace("linkarea.html");
            }
        });
    })
    .catch((error) => {
        alert("Error getting documents: ", error);
    });
}

function distlogin(){
    var mail = document.getElementById("recipient-name1").value;
    var dob = document.getElementById("message-text1").value;
    var clss = document.getElementById("cls").value;
    db.collection("Student").where("Mail_ID","==",mail).where("Class","==",clss).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.data().DOB == dob){
                location.replace("tutorial.html");
            }
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}