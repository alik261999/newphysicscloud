var files = [];
var reader = new FileReader();

let question = [{}];
let ser = 0;

function enter(){
    var ques = document.getElementById("text").value;
    var op = [];
    var ans = "";
    var query = document.getElementsByName("op");
    for(var i=0;i<query.length;i++)
        console.log(query[i].value);
}

//var slct = document.getElementById('file-selector');
//var uplod = document.getElementById('upld');

var input = document.createElement('input');
input.type = 'file';
input.onchange = e =>{
    //console.log("alik");
    files = e.target.files;
    
    reader.readAsDataURL(files[0]);
    //console.log(files[0]);
}

reader.onload = function(){
    var myfile = document.getElementById('image');
    myfile.src = reader.result;
}

function selectImage(){
    input.click();
}



function savetodatabase(cls,url){

    var txt = document.getElementById('text').value;
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    var op3 = document.getElementById('op3').value;
    var op4 = document.getElementById('op4').value;
    //console.log("Hello",cls,chapn,chapnm,txt,url);
    set(ref(realdb,"Tutorials/class_"+cls+"/chapter_"+chapn+"/"+chapnm),{
        MName: txt,
        mUrl: url
    });
    //window.reset();
    //location.reload();
    
}

function clikk(){
    var toastLiveExample = document.getElementById('Toast');
    var toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
    console.log("done");
    toast.hide();
}

        