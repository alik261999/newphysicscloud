function selectAll(chkbox){
    var chkboxes = document.querySelectorAll("input[type='checkbox']");
    if(chkbox.checked == true){
        chkboxes.forEach(function(cbox){
            cbox.checked = true;
        });
    }
    else{
        chkboxes.forEach(function(cbox){
            cbox.checked = false;
        });
    }
}