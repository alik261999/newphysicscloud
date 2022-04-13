var rate = [0,0,0,0,0];
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

function subcmnt(){
    var r1 = document.getElementById("rate-1").checked;
    var r2 = document.getElementById("rate-2").checked;
    var r3 = document.getElementById("rate-3").checked;
    var r4 = document.getElementById("rate-4").checked;
    var r5 = document.getElementById("rate-5").checked;
    var name = document.getElementById("nm").value;
    var mail = document.getElementById("mail").value;
    var cmnt = document.getElementById("cmnt").value;
    var index = "@"+name.split(" ").join("_").toLowerCase();
    if(name.trim()!="" && mail.trim()!=""){
        db1.ref().child("Comment/"+index).set({
            Name: name,
            Mail: mail,
            Cmnt: cmnt
        },(error) => {
            if (error) {
              alert("Oops!!!Something went wrong...");
            } else {
                document.getElementById("nm").value = "";
                document.getElementById("mail").value = "";
                document.getElementById("cmnt").value = "";
                alert("We accepted your views...");
                //document.querySelector(".star-widget").style.display = "none";
                chkrate();
            }
        });
        if(r1==true){
            rate[4]+=1;
        }
        else if(r2==true){
            rate[3]+=1;
        }
        else if(r3==true){
            rate[2]+=1;
        }
        else if(r4==true){
            rate[1]+=1;
        }
        else if(r5==true){
            rate[0]+=1;
        }
        db1.ref().child("Ratings").set({
            "5*" : rate[0],
            "4*" : rate[1],
            "3*" : rate[2],
            "2*" : rate[3],
            "1*" : rate[4]
        });
    }
}

function chkrate(){
    db1.ref().child("Ratings").get().then(snapshot =>{
        rate[0]=snapshot.child("5*").val();
        rate[1]=snapshot.child("4*").val();
        rate[2]=snapshot.child("3*").val();
        rate[3]=snapshot.child("2*").val();
        rate[4]=snapshot.child("1*").val();
    }).then(function(){
        var sum = rate[0]+rate[1]+rate[2]+rate[3]+rate[4];
        document.getElementById("5*").style.width = ((rate[0]/sum)*100)+"%";
        document.getElementById("4*").style.width = ((rate[1]/sum)*100)+"%";
        document.getElementById("3*").style.width = ((rate[2]/sum)*100)+"%";
        document.getElementById("2*").style.width = ((rate[3]/sum)*100)+"%";
        document.getElementById("1*").style.width = ((rate[4]/sum)*100)+"%";
    });
}

function fetchmsg(){
    html="";
    db1.ref().child("Comment").get().then(snapshot => {
        snapshot.forEach(childsnap=>{
            html+=`<div class="card">
            <div class="card-header">
              ${childsnap.child("Name").val()}
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${childsnap.child("Cmnt").val()}</p>
                <footer class="blockquote-footer">from <cite title="Source Title">${childsnap.child("Mail").val()}</cite></footer>
              </blockquote>
            </div>
        </div>`
        })
    }).then(function(){
        document.getElementById("container").innerHTML = html;
    });
}

function cmntlogout(){
    location.replace("index.html");
}

function addClass(cl){
    window.sessionStorage.setItem("class",cl);
}