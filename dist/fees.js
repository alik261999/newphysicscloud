function addDocument(){
    var today = new Date();
    var yr = today.getFullYear();
    var mon = today.getMonth()+1;

    var doc1 = document.getElementById("fi1").value;
    var doc2 = document.getElementById("fi2").value;
    var doc3 = document.getElementById("fi3").value;
    var doc4 = document.getElementById("fi4").value;
    var doc5 = document.getElementById("fi5").value;
    var doc6 = document.getElementById("fi6").value;
    var doc7 = document.getElementById("fi7").value;
    var doc8 = document.getElementById("fi8").value;
    var doc9 = document.getElementById("in10").value;
    var file = document.getElementById("in9").files[0];
    var cls = localStorage.getItem("class");
    //var fname = file.name;
    if(doc1.trim()!="" && doc2.trim()!="" && doc3.trim()!="" && doc4.trim()!="" && doc5.trim()!="" && doc6.trim()!="" && doc7.trim()!="" && doc8.trim()!="" && doc9.trim()!=""){
        dbf.collection("Student").doc(doc2).get().then((doc) => {
        if (doc.exists) {
            //console.log("Document data:", doc.data());
        var uploadTask = strg.ref().child("Fees/"+yr.toString()+mon.toString() + "/"+doc2).put(file);
        uploadTask.on('state_changed', (snapshot) => {
            
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById('result').innerHTML = 'Upload is ' + progress + '% done';
        }, 
        (error) => {
            document.getElementById('result').innerHTML = "Something went wrong";
        }, 
        () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                db.ref("Fees/"+yr.toString()+mon.toString() + "/" + doc2).set({
                    Stud_name: doc1,
                    En_Id: doc2,
                    ac_name: doc3,
                    ac_no: doc4,
                    IFSC: doc5,
                    pay_date: doc6,
                    mail_id: doc7,
                    T_Id: doc8,
                    Fee_type: doc9,
                    class: cls,
                    img_url: downloadURL,
                    file_path: "Fees/"+yr.toString()+mon.toString() + "/"+doc2
                }).then(function(){
                    alert("Document uploaded successfully...");
                    location.replace("price.html");
                });
            });
        }
        );
        } else {
                // doc.data() will be undefined in this case
                alert("No such document!");
            }
        }).catch((error) => {
            alert("Error getting document:", error);
        });
    }else{
        alert("Fill all the required documents...");
    }

    
}

function fetchDoc(){
    var html="";
    db.ref("Fees/20224").get().then((snapshot)=>{
        snapshot.forEach(element => {
            //console.log(element.val().En_Id);
            html+=`<tr>
            <td>${element.val().En_Id}</td>
            <td>${element.val().Stud_name}</td>
            <td>${element.val().ac_name}</td>
            <td>${element.val().ac_no}</td>
            <td>${element.val().IFSC}</td>
            <td>${element.val().pay_date}</td>
            <td>${element.val().T_Id}</td>
            <td>${element.val().Fee_type}</td>
            <td><p onclick="Open('${element.val().img_url}')">Image</p></td>
            <td><input type="number" min="1" max="12" id="${element.val().En_Id}"></input></td>
            <td><div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-outline-success" onclick="Entry('${element.val().En_Id}','${element.val().file_path}')">Verified</button>
          <button type="button" class="btn btn-outline-danger">Decline</button>
        </div></td>
        </tr>`;
        });
    }).then(function(){
        document.getElementById('data').innerHTML = html;
    });
}

function Entry(id,path){
    var mon = document.getElementById(id).value;
    var today = new Date(document.getElementById("date").value);
    var date;
    dbf.collection("Student").doc(id).get().then((doc)=>{
        if (doc.exists) {
            date = doc.data().pay_date;
            var mn=parseInt(date.split("-")[0])+parseInt(mon);
            var yr=parseInt(date.split("-")[1]);
            var mnr=mn%12;
            yr+=((mn-mnr)/12);
            //console.log(yr);
            console.log("Fees/"+today.getFullYear().toString()+(today.getMonth()+1).toString()+"/"+id);
            dbf.collection("Student").doc(id).update({
                "pay_date": mnr.toString()+"-"+yr.toString()
            })
            .then(() => {
                alert("Document successfully updated!");
                //console.log("storage");
                document.getElementById(id).disabled = true;
                strg.ref().child(path).delete().then(() => {
                    db.ref("Fees/"+today.getFullYear().toString()+(today.getMonth()+1).toString()+"/"+id).remove().then(()=>{
                        console.log("Fees/"+today.getFullYear().toString()+(today.getMonth()+1).toString()+"/"+id);
                        alert("Data deleted sucessfully");
                    });
                  }).catch((error) => {
                    alert("Storage deletion error...");
                  });
            });
        } else {
            // doc.data() will be undefined in this case
            alert("No such document!");
        }
    }).catch((error) => {
        alert("Error getting document:", error);
    });
}

function Open(url){
    window.open(url,"_blank");
}

function Go(){
    location.replace("index.html");
}