/*let locations=[
    {
        loc: "Shyamnagar",
        batch: ["8","9","10","wbjee"]
    },
    {
        loc: "Barrackpore",
        batch: ["jeemain","9","10","11","12","wbjee","neet"]
    },
    {
        loc: "Khardah",
        batch: ["8","9","neet","wbjee"]
    },
    {
        loc: "Dumdum",
        batch: ["11","12","10","jeemain"]
    },
    {
        loc: "Chandannagar",
        batch: ["8","9","11","jeemain"]
    },
    {
        loc: "Uttarpara",
        batch: ["10","11","12","wbjee","neet"]
    }
]*/

function record(){
    var nm=document.getElementById("name").value;
    var gname=document.getElementById("gname").value;
    var add=document.getElementById("add").value;
    var gen=document.getElementById("male").checked;
    var num=document.getElementById("num").value;
    var gnum=document.getElementById("gnum").value;
    var mail=document.getElementById("mail").value;
    var tp=document.getElementById("on").checked;
    var loc=document.getElementById("menu").value;
    var cls=document.getElementById("classes").value;
    var DOBirth = document.getElementById('dob').value;
    var dt=new Date();
    var gender;
    var div;
    if(gen==true){
        gender="Male";
    }
    else{
        gender="Female";
    }
    if(tp==true){
        div="Online";
    }
    else{
        div="Offline";
    }
    var pdate = (dt.getMonth()+1).toString() + "-" + dt.getFullYear().toString();
    //console.log(nm,div,gender,loc,cls);
    //if(div=="Online" || (chk(loc,cls)==1 && div=="Offline")){
    db.collection("Student").add({
            Student_Name: nm,
            Guardian_Name: gname,
            Address: add,
            Gender: gender,
            Mobile_No: num,
            Phone_No: gnum,
            Mail_ID: mail,
            Class_type: div,
            Location: loc,
            Class: cls,
            Year: dt.getFullYear().toString(),
            DOB: DOBirth,
            pay_date: pdate
        }).then((docRef) => {
            //console.log(docRef);
            alert("Successfully registered...\nYour enrollment ID: "+docRef.id);
            document.getElementById('rec').reset();
        })
        .catch((error) => {
            alert("Something went wrong");
        });
    /*}
    else{
        alert("No Matches found for classes");
    }*/
    return false;
}

/*function chk(loc,cls){
    var clss;
    for(var i=0;i<locations.length;i++){
        if(locations[i].loc==loc){
            clss=locations[i].batch;
            break;
        }
    }
    if(clss.indexOf(cls)!=-1)
        return 1;
    else
        return 0;
}*/

function Classes(){
    var clsrange = localStorage.getItem("class");
    if(clsrange == "810"){
        document.getElementById("classes").innerHTML=`<option value="8">Class 8</option>
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>`;
    }
    else if(clsrange == "1112"){
        document.getElementById("classes").innerHTML=`<option value="11">Class 11</option>
        <option value="12">Class 12</option>`;
    }
    else if(clsrange == "wbjee"){
        document.getElementById("classes").innerHTML=`<option value="wbjee">WBJEE</option>`;
    }
    else if(clsrange == "jee"){
        document.getElementById("classes").innerHTML=`<option value="jeemain">JEE Main & Advance</option>`;
    }
    else if(clsrange == "med"){
        document.getElementById("classes").innerHTML=`<option value="neet">NEET & AIPMT</option>`;
    }
}

function addBatch(){
    var cls = document.getElementById("classes").value;
    var list = [];
    var html="";
    dtb.ref().child("Locations/"+cls).get().then(snapshot=>{
        list = snapshot.val().split(",");
    }).then(function(){
        for(var i=0;i<list.length;i++){
            html+=`<option value="${list[i]}">${list[i]}</option>`;
        }
        document.getElementById("menu").innerHTML = html;
    });
}

function delBatch(){
    document.getElementById("menu").innerHTML = `<option value="">Select Batch</option>`;
}

function clr(){
    document.getElementById("on").checked = false;
    document.getElementById("off").checked = false;
}
