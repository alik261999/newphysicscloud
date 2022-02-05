let locations=[
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
]

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
    //console.log(nm,div,gender,loc,cls);
    if(div=="Online" || (chk(loc,cls)==1 && div=="Offline")){
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
            DOB: DOBirth
        }).then((docRef) => {
            console.log(docRef);
            alert("Successfully registered...\nYour enrollment ID: "+docRef.id);
            document.getElementById('rec').reset();
        })
        .catch((error) => {
            alert("Something went wrong");
        });
    }
    else{
        alert("No Matches found for classes");
    }
    return false;
}

function chk(loc,cls){
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
}

