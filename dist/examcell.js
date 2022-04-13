function firee(){
        db.collection("Examcell").doc("data").get().then(function(doc){
              document.getElementById("ninee").href=doc.data().nine;
              document.getElementById("tent").href=doc.data().ten;
              document.getElementById("elev").href=doc.data().eleven;
              document.getElementById("twel").href=doc.data().twelve;
              document.getElementById("comp").href=doc.data().competetive;
              console.log(doc.data().nine);

          })
          .catch(function(error){
              console.log(error);
              alert("Something went wrong");
          });

}

function logincriteria(){
    var page = document.getElementById('pg').value;
    db.collection("Examcell").doc("data").get().then(function(doc){
        if((document.getElementById("recipient-name").value==doc.data().admin_name) && (document.getElementById("message-text").value==doc.data().adminpass))
        {
            document.getElementById("recipient-name").value="";
            document.getElementById("message-text").value="";
            //window.open("examcell.html","_blank");
            location.replace(page);
        }
        else{
            document.getElementById("er").innerHTML="Entered wrong login information";
        }

    })
    .catch(function(error){
        console.log(error);
        alert("Something went wrong");
    });
}

function gohome(){
    location.replace("index.html");
}

function putDatanine(){
    db.collection("Examcell").doc("data").update({
        nine: document.getElementById("clsnine").value
    }).then(function(){
        alert("Document updated successfully");

    })
    .catch(function(error){
        console.log(error);
        alert("Something went wrong");
    });
}

function putDataten(){
    db.collection("Examcell").doc("data").update({
        ten: document.getElementById("clsten").value
    }).then(function(){
        alert("Document updated successfully");

    })
    .catch(function(error){
        console.log(error);
        alert("Something went wrong");
    });
}

function putDataeleven(){
    db.collection("Examcell").doc("data").update({
        eleven: document.getElementById("clselev").value
    }).then(function(){
        alert("Document updated successfully");

    })
    .catch(function(error){
        console.log(error);
        alert("Something went wrong");
    });
}

function putDatatwelve(){
    db.collection("Examcell").doc("data").update({
        twelve: document.getElementById("clstwlve").value
    }).then(function(){
        alert("Document updated successfully");

    })
    .catch(function(error){
        console.log(error);
        alert("Something went wrong");
    });
}

function putDatacomp(){
    db.collection("Examcell").doc("data").update({
        competetive: document.getElementById("clscomp").value
    }).then(function(){
        alert("Document updated successfully");

    })
    .catch(function(error){
        console.log(error);
        alert("Something went wrong");
    });
}

function deleteDoc(id){
    if(confirm("Are you sure to delete the selected document???")){
        db.collection("Student").doc(id).delete().then(() => {
            alert("Document successfully deleted!");
            document.getElementById(id).disabled = true;
         }).catch((error) => {
             alert("Error removing document: ", error);
         });
    }
    
}