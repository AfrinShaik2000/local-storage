document.getElementById("first").addEventListener("focusout",myfunction);
document.getElementById("line-company").addEventListener("focusout",onesfunction);
document.getElementById("line2").addEventListener("focusout",addressline1);
document.getElementById("line3").addEventListener("focusout",addressline2);
document.getElementById("line4").addEventListener("focusout",addressline3);
document.getElementById("line5").addEventListener("focusout",addressline4);
document.getElementById("line6").addEventListener("focusout",addressline5);
document.getElementById("email-input").addEventListener("focusout",emailfunction);
document.getElementById("phone-input").addEventListener("focusout",phonefunction);
document.getElementById("country-input").addEventListener("focusout",selectfunction);
document.getElementById("add").addEventListener("focusout",lastrow);
// document.getElementById("submit").addEventListener("focusout",submitfunction);


function myfunction(){
    x = document.getElementById('client').value;
    let letter = /^[A-Za-z]{5,50}$/;
    if(x.length==""){
        document.getElementById("clients").innerHTML="Required";
    }
    else if (letter.test(x)){
        document.getElementById("clients").innerHTML="";
        document.getElementById("client").style.borderBlockColor="green";
    }else{
        document.getElementById("clients").innerHTML="only Alphabets and must be minimum 5 to 50 characters";
        document.getElementById("client").style.borderBlockColor="red";
    }
}
function onesfunction(){
    y = document.getElementById('second').value;
    if(y.length==""){
        document.getElementById("seconds").innerHTML="Required";
    }
    else if(y.length<5 || y.length>50){
        document.getElementById("seconds").innerHTML="must be of 5 to 50 characters";
    }
    else{
        document.getElementById("seconds").innerHTML="";
        document.getElementById("second").style.borderBlockColor="green";
    }
}
function department(){
    p = document.getElementById("general").value; 
    if(p.length!=""){
        document.getElementById("demo").style.display ="none";
    }
    else{
    document.getElementById("demo").innerHTML="Required"
}
}
function email(){
    document.getElementById("table1").style.display="block";
    document.getElementById("email-input").style.float="right";
    document.getElementById("table2").style.display="none";
}

function phone(){
    document.getElementById("table2").style.display="block";
    document.getElementById("phone-input").style.float="right";
    document.getElementById("table1").style.display="none";
}


function emailfunction(){
    patterns = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    value = document.getElementById("email-input").value;
    if(value.length==""){
        document.getElementById("vvalue").innerHTML="Required";
    }else if(patterns.test(value)){
        document.getElementById("vvalue").innerHTML="";
        document.getElementById("vvalue").style.color="green";
    }
}
function phonefunction(){
    pattern1=/^[9]{1}[0-9]{9}$/;
    values=document.getElementById("phone-input").value;
    if(pattern1.test(values)){
        document.getElementById("vvalue").innerHTML="";
        document.getElementById("vvalue").style.color="green";
    }else{
        document.getElementById("vvalue").innerHTML="must start with digit '9' and should contain 10 digits ";
    }

}

function addressline1(){
    q = document.getElementById('line2').value;
    if(q.length!=""){
        document.getElementById("streetaddress").innerHTML="";
        document.getElementById("line2").style.borderBlockColor="green";
        document.getElementById("streetaddress").style.color="green";
        
    }
    else{
        document.getElementById("streetaddress").innerHTML="Required"; 
    }
}

function addressline2(){
    w= document.getElementById('line3').value;
    if(w.length!=""){
        document.getElementById("addressline2").innerHTML="";
        document.getElementById("line3").style.borderBlockColor="green";
        document.getElementById("addressline2").style.color="green";
    }else{
        document.getElementById("addressline2").innerHTML="Required";
    }
}

function addressline3(){
    w= document.getElementById('line4').value;
    if(w.length!=""){
        document.getElementById("city").innerHTML="";
        document.getElementById("line4").style.borderBlockColor="green";
        document.getElementById("city").style.color="green";
    }else{
        document.getElementById("city").innerHTML="Required";
    }
}
function addressline4(){
    w= document.getElementById('line5').value;
    if(w.length!=""){
        document.getElementById("region").innerHTML="";
        document.getElementById("line5").style.borderBlockColor="green";
        document.getElementById("region").style.color="green";
    }else{
        document.getElementById("region").innerHTML="Required";
    }
}
function addressline5(){
    r= document.getElementById('line6').value;
    pattern = /^[0-9]{6}$/;
    if(pattern.test(r)){
        document.getElementById("postel").innerHTML="";
        document.getElementById("line6").style.borderBlockColor="green";
        document.getElementById("postel").style.color="green";
    }
    else{
        document.getElementById("postel").innerHTML="not valid and must be of 6 digits";
    }
}

function selectfunction(){
    p = document.getElementById("country-input").value; 
    if(p.length!=""){
        document.getElementById("count").innerHTML="";
        document.getElementById("count").style.color="green";
    }
    else{
        document.getElementById("count").innerHTML="Required";
    }
}
    function validations(){
    wq = document.getElementById("website").value;
    hold=wq.startsWith("http")
    if(hold){
        document.getElementById("newemail").innerHTML="";
        document.getElementById("newemail").style.color="green";
        document.getElementById("website").style.borderBlockColor="green";

    }
    else{
        document.getElementById("newemail").innerHTML="must start with http";
    }
}

function calenderfunction(){
    months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    date = new Date();
    tdate = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    digit=document.getElementById("input-date").value;
    datearray = digit.split('-');
    y=datearray[0];
    m=datearray[1];
    d=datearray[2];
    if((y<year) || (y==year && m<(month+1))  || (y==year && m==(month+1) && d<tdate)){

        document.getElementById("input-date").innerHTML="";
        document.getElementById("bill").innerHTML="";
        document.getElementById("error").innerHTML="past dates are not allowed";
    }else if(d%10==1){
        var str1=d + "st" + " " + months[m-1] + " "+y;
        document.getElementById("bill").value=str1;
        document.getElementById("error").innerHTML="";
    }
    else if(d%10==2){
        var str2=d + "nd" + " " + months[m-1]+ " "+y;
        document.getElementById("bill").value=str2;
        document.getElementById("error").innerHTML="";
    }
    else if(d%10==3){
        var str3=d + "rd" + " " + months[m-1] + " "+y;
        document.getElementById("bill").value=str3;
        document.getElementById("error").innerHTML="";
    }
    else{
        var str = d + "th" + " " + months[m-1] + " "+y;
        console.log(str);
        document.getElementById("bill").value=str;
        document.getElementById("error").innerHTML="";
    }

}

function lastrow(){
    document.getElementById("lastdata").innerHTML="must not exceed 200 characters";
    last=document.getElementById("add").value;
    if(last.length>1 && last.length<200){
        document.getElementById("lastdata").innerHTML="";
        document.getElementById("lastdata").style.color="green";
        document.getElementById("add").style.borderBlockColor="green";
    }
}




function submitfunction(){

    n = document.getElementById("client").value;
    c = document.getElementById("second").value;
    d = document.getElementById("general").value;
    em = document.getElementById("email-input").value;
    ph = document.getElementById("phone-input").value;
    ca = document.getElementById("line2").value;
    bc = document.getElementById("bill").value;

    document.getElementById("display").style.display="block";
    let userarray = new Array();
    userarray=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if (userarray.some((v)=>{return v.Email==em})){
        alert("Enter new data");
        return;
    }
    else{
    userarray.push({
        fullname:n,
        CompanyName:c,
        DepartmentName:d,
        Email:em,
        phone:ph,
        CompanyAddress:ca,
        BillingCycle:bc

    })
    localStorage.setItem("users",JSON.stringify(userarray));
}
if(n=="" || c=="" ||d=="" || ca=="" ||bc==""){
    alert("enter the full details");
}
else{
    var display = document.getElementById('display');
    var newRow = display.insertRow(display.length);

    var cell0 = newRow.insertCell(0);
    cell0.innerHTML = n;
    var cell1 = newRow.insertCell(1);
    cell1.innerHTML = c;
    var cell2 = newRow.insertCell(2);
    cell2.innerHTML = d;
    var cell3 = newRow.insertCell(3);
    cell3.innerHTML = (em+ph);
    var cell4 = newRow.insertCell(4);
    cell4.innerHTML = ca;
    var cell5 = newRow.insertCell(5);
    cell5.innerHTML = bc;
}

}