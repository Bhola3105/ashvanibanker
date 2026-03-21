
/* ================= EMI CALCULATOR ================= */

function calcEMI(){

let P = document.getElementById("loan").value;
let rate = document.getElementById("rate").value;
let n = document.getElementById("months").value;

if(P === "" || rate === "" || n === ""){
document.getElementById("emi_result").innerHTML = "Please enter all values";
return;
}

let r = rate / 12 / 100;

let emi = (P * r * Math.pow(1+r,n)) / (Math.pow(1+r,n) - 1);

document.getElementById("emi_result").innerHTML =
"Monthly EMI: ₹ " + Math.round(emi);

}


/* ================= LOAN ELIGIBILITY SLIDER ================= */

let incomeSlider = document.getElementById("incomeSlider");
let emiSlider = document.getElementById("emiSlider");

let incomeValue = document.getElementById("incomeValue");
let emiValue = document.getElementById("emiValue");

if(incomeSlider){
incomeSlider.oninput = function(){
incomeValue.innerHTML = this.value;
}
}

if(emiSlider){
emiSlider.oninput = function(){
emiValue.innerHTML = this.value;
}
}


/* ================= SIMPLE ELIGIBILITY ================= */

function calculateEligibility(){

let income = document.getElementById("incomeSlider").value;
let emi = document.getElementById("emiSlider").value;

let eligible = (income * 0.6) - emi;

if(eligible < 0){
eligible = 0;
}

document.getElementById("eligibilityResult").innerHTML =
"Eligible EMI: ₹ " + eligible;

}


/* ================= ADVANCED LOAN ELIGIBILITY ================= */

function calculateLoanEligibility(){

let income = parseFloat(document.getElementById("income").value);
let emi = parseFloat(document.getElementById("existingEmi").value) || 0;
let rate = parseFloat(document.getElementById("interestRate").value);
let tenure = parseFloat(document.getElementById("tenure").value);

if(!income){
alert("Please enter income");
return;
}

let eligibleEmi = (income * 0.6) - emi;

if(eligibleEmi < 0){
eligibleEmi = 0;
}

let r = rate / 12 / 100;
let n = tenure * 12;

let loanAmount = (eligibleEmi * (Math.pow(1+r,n) - 1)) / (r * Math.pow(1+r,n));

document.getElementById("eligibleEmi").innerText = Math.round(eligibleEmi);
document.getElementById("loanAmount").innerText = Math.round(loanAmount);

}


/* ================= APPLICATION FORM VALIDATION ================= */

function submitApplication(){

let name = document.getElementById("name").value.trim();
let mobile = document.getElementById("mobile").value.trim();
let city = document.getElementById("city").value.trim();
let income = document.getElementById("income").value.trim();
let amount = document.getElementById("amount").value.trim();

let error = document.getElementById("formError");

let nameRegex = /^[A-Za-z ]+$/;
let cityRegex = /^[A-Za-z ]+$/;
let mobileRegex = /^[0-9]{10}$/;

if(!nameRegex.test(name)){
error.innerText = "Name must contain only letters";
return;
}

if(!mobileRegex.test(mobile)){
error.innerText = "Mobile number must be 10 digits";
return;
}

if(!cityRegex.test(city)){
error.innerText = "City must contain only letters";
return;
}

if(isNaN(income) || income <= 0){
error.innerText = "Income must be numeric";
return;
}

if(isNaN(amount) || amount <= 0){
error.innerText = "Loan amount must be numeric";
return;
}

error.innerText = "";


/* ================= SUCCESS POPUP ================= */

document.getElementById("successPopup").style.display="flex";

}


/* ================= CLOSE POPUP ================= */

function closePopup(){

document.getElementById("successPopup").style.display="none";

}

