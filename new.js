function saveDataAndRedirect() {
const name = document.getElementById("personalname").value;
if(name==""){
alert("Name feild is required")
}else{
console.log("Saving data:",name);
const address = document.getElementById("address").value;
if(address==""){
alert("address feild is required")}
else{
console.log("Saving data:", address);
const phone = document.getElementById("phone").value;
if(1000000000>phone){alert("invalid numberr");}
else if(phone>9999999999){alert("invalid number");}
else if(phone==""){alert("provide phone number");}
else{
console.log("Saving data:",phone);
const date = document.getElementById("email");
console.log("Saving data:",email);
alert("processed");
window.open("sellpage.html","_blank");
}
}
}
}
