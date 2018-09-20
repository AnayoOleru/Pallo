// let inputField = document.getElementById("inputField").value;
// let toast = document.getElementById('toast');

// function palindrome(str) { 

//   let re = /[\W_]/g; 
  
//   let lowRegStr = str.toLowerCase().replace(re, '');
  
//   let reverseStr = lowRegStr.split('').reverse().join(''); if(reverseStr === lowRegStr){
//     return "Yeah! You did it, that's a Palindrome."
//   }else{
//     return "Whoops...that's not a Palindrome. Try again, sorry."
//   }
// }

// //this saves and display users input
// let store = Array();
// //
// function showToast(text) {
//     let label = document.getElementById("toast")
//     label.textContent = text;
//     label.className = "show";
//     setTimeout(function(){
// //After 3 seconds, remove the show class from DIV
//       label.className = label.className.replace("show", ""); }, 3000);
// }
// // 
// function playBtn(){
//   if(inputField){
//  store.push(inputField);
//     // 
//  showToast(palindrome(store[store.length - 1]));
// //    immediately the code runs and the toast shows, it automatically removes.Edge cases.
//   inputField = "";
//   }else{
//     inputField ="";
//   return (showToast(" Please, type in a word or phrase"))
//   }
// }



var checkButton = document.getElementById("inputBtn");

function isPalindrome(str) {
  'use strict';
  
  str = str.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

checkButton.addEventListener("click", function() {
  'use strict';
  
  var value = document.getElementById("inputBtn").value;
  var notification = document.getElementById("result");
  
  if(isPalindrome(value)) {
    notification.innerHTML = "Yay! You've got yourself a palindrome";
    notification.className = "alert alert-success";
  } else {
    notification.innerHTML = "Nay! Ain't no palindrome";
    notification.className = "alert alert-danger";
  }
});
