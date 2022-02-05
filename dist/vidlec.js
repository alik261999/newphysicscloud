let array=[];
let poster=[];
function play(num){
    document.getElementById("vid").src=array[num];
    document.getElementById("vid").poster=poster[num];
}


function resette(){
    location.reload();
}

function retrieveData(){
    db.ref("Tutorials/class_12").on('value',function(snapshot){
        var html="";
        var count=0;
        var num=0;
        snapshot.forEach(function(childSnapshot) {
            
            var cnt = 0;
            
            html+=`<div class="accordion-item">
            <h2 class="accordion-header" id="heading${count}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${count}" aria-expanded="false" aria-controls="collapse${count}">
                ${childSnapshot.key}: &nbsp;`;
            childSnapshot.forEach(function(snp) {
                
                snp.forEach(function(cSnapshot) {
                    console.log(cSnapshot.val());
                    if(cnt==0){
                        html+=`<strong>${snp.key}</strong>
                        </button>
                      </h2>
                      <div id="collapse${count}" class="accordion-collapse collapse" aria-labelledby="heading${count}" data-bs-parent="#accordionExample">
                        <div class="accordion-body">`;
                    }
                    html+=`<p onclick="play(${num++})">Part ${cnt+1} : ${cSnapshot.child("MName").val()}</p>`;
                    
                    cnt++;
                    array.push(cSnapshot.child('mUrl').val());
                    poster.push(cSnapshot.child('pUrl').val())
                });
            });
            html+=`</div>
            </div>
          </div>`;
          count++;
        });
        //console.log(snapshot.numChildren());
        document.getElementById('accordionExample').innerHTML = html;
    });
}

                    
                          
                        