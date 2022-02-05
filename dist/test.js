let ansarray=[];
function AddItemToTable(qn,q,p1,p2,p3,p4,ans){
    //var childq = document.createElement('var');
    //console.log("3rd");
    var html="";
    html += `
    <div class="container card mt-4 shadow-sm p-2 mb-10 bg-body rounded">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/imagery/USG_owned/usg-acoustical-panels-cognizant-office-alternate-6.jpg/_jcr_content/renditions/gallery-large.876.657.jpg" class="img-fluid rounded-start" alt="..." width="500">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <div class="card" style="width: 100%;">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${q}</li>
                      <li class="list-group-item">
                        <input class="form-check-input" type="radio" name="exampleRadios${qn}" id="rad1">
                        <label class="form-check-label" for="rad1">
                            ${p1}
                        </label></li>
                      <li class="list-group-item">
                        <input class="form-check-input" type="radio" name="exampleRadios${qn}" id="rad2">
                        <label class="form-check-label" for="rad2">
                            ${p2}
                        </label>
                      </li>
                      <li class="list-group-item">
                        <input class="form-check-input" type="radio" name="exampleRadios${qn}" id="rad3">
                        <label class="form-check-label" for="rad3">
                            ${p3}
                        </label>
                      </li>
                      <li class="list-group-item">
                        <input class="form-check-input" type="radio" name="exampleRadios${qn}" id="rad4">
                        <label class="form-check-label" for="rad4">
                            ${p4}
                        </label>
                      </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
    </div>
    `;
    ansarray.push(ans);
    return html;
}

function AddItemstoTheTable(QuesDocsList){
    //console.log('2nd');
    qno = 0;
    var html="";
    document.getElementById("brand").innerHTML="Welcome! "+window.sessionStorage.getItem("name");
    document.getElementById('disp').innerHTML="";
    QuesDocsList.forEach(ele=>{
        html+=AddItemToTable(++qno,ele.ques,ele.op1,ele.op2,ele.op3,ele.op4,ele.ans)
    });
    document.getElementById('disp').innerHTML=html;
    console.log(ansarray);
}

function submitt(){
  var ele;
  var total = 0;
  if (confirm('Are you sure to submit exam?')) {
    for(var i=0;i<=ansarray.length;i++){
      ele = document.getElementsByName("exampleRadios"+(i+1));
      for(var j = 0; j < ele.length; j++) {
        if(ele[j].checked==true && (j+1)==ansarray[i])
          total+=4;
      }
    }
    window.sessionStorage.setItem("points", total);
    window.location.replace("end.html");
  }
  
}