function cls1(val){
    localStorage.setItem("class",val);
    window.open("admission.html","_self");
}

function pay(cls){
    localStorage.setItem("class",cls);
    window.open("payfees.html","_self");
}

function clr(){
    localStorage.removeItem("class");
}