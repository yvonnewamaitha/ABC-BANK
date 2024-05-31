window.onload=function(){
  document.getElementById('swithToReg').onclick=switchToReg;
  document.getElementById('swithToLogin').onclick=switchTologin;
  //-----switch to reg-----//
  function switchToReg()
   document.getElementById('register-portal').style="display:inline-block";
   document.getElementById('login-portal').style="display:none";
}
function switchTologin(){
  document.getElementById('register-portal').style="display: none";
  document.getElementById('register-portal').style="display: inline-block"
}
//---acc no and pin pattern----//
var AccNoPattern="[0-9]"
//----login validation----//
function loginValidation(){
  var lAccNo=document.getElementById('lAccNo').value;
  var lAccPin=document.getElementById('lPinNo').value;
}