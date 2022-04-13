function Go(){
    location.replace("index.html");
}

function fetchResult(){
    var dat = document.getElementById('date').value;
    var cls = document.getElementById('class').value;
    //console.log(date);
    if(cls.trim()!=""){
        date = new Date(dat);
        day = date.getDate();
        month = date.getMonth();
        year = date.getFullYear();
        //console.log(day,month,year);

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        today = year.toString() + month.toString() + day.toString(); 
        //console.log(today);
        var html="";
        var stdn=0;
        var pers;
        var grade;
        db.ref().child("ExamResult/"+today+"/"+cls).get().then((snapshot) => {
            if (snapshot.exists()) {
              snapshot.forEach(element => {
                pers = chkPer(element.val().Marks,element.val().Total);
                grade = Grade(pers);
                  html+=`<tr>
                  <td>${++stdn}</td>
                  <td>${element.val().Name}</td>
                  <td>${element.val().email_ID}</td>
                  <td>${element.val().Marks}/${element.val().Total}</td>
                  <td>${pers.toFixed(2)}</td>
                  <td>${grade}</td>
              </tr>`;
              });
              document.getElementById('data').innerHTML = html;
            document.getElementById('msgarea').innerHTML = "Number of results found: "+stdn;
            } else {
                document.getElementById('msgarea').innerHTML = "No data available";
                document.getElementById('data').innerHTML = html;
            }
          }).catch((error) => {
            document.getElementById('msgarea').innerHTML = "Error occured"+error;
          });
          
    }else{
        document.getElementById('msgarea').innerHTML = "Fill all the required fields";
    }
    //return false;
}

function Grade(per){
    var str;
    if(per==100)
        str="O";
    else if(per<100 && per>90)
        str="AA";
    else if(per<=90 && per>80)
        str="A+";
    else if(per<=70 && per>60)
        str="A";
    else if(per<=60 && per>50)
        str="B+";
    else if(per<=50 && per>40)
        str="B";
    else{
        str="Fail";
    }
    return str;
}

function chkPer(mark,total){
    var per = (parseInt(mark)/parseInt(total))*100;
    return per
}