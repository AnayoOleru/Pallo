function palindrome(str) { 

  let re = /[\W_]/g; 
  
  let lowRegStr = str.toLowerCase().replace(re, '');
  
  let reverseStr = lowRegStr.split('').reverse().join(''); if(reverseStr === lowRegStr){
    return "Yeah! You did it, that's a Palindrome."
  }else{
    return "Whoops...that's not a Palindrome. Try again, sorry."
  }
}

//this saves and display users input
let store = Array();
//
function showToast(text) {
    let label = document.getElementById("toast")
    label.textContent = text;
    label.className = "show";
    setTimeout(function(){
//After 3 seconds, remove the show class from DIV
      label.className = label.className.replace("show", ""); }, 3000);
}
// 
function add_element_to_array()
{
  if(document.getElementById("text1").value) {
 store.push(document.getElementById("text1").value);
    // 
 showToast(palindrome(store[store.length - 1]));
//    immediately the code runs and the toast shows, it automatically removes.Edge cases.
  document.getElementById("text1").value = "";
  }else{
    document.getElementById("text1").value ="";
  return (showToast(" Please, type in a word or phrase"))
  }
}

// archive button
  
function display_array()
{
//   
  let slicedStore, reversedStore;
  if (store.length > 5) {
    slicedStore = store.slice(0)
    reversedStore = slicedStore.reverse().slice(0, 5)//picks only the first five in the array.
}else{
       slicedStore = store.slice(0)
    reversedStore = slicedStore.reverse()
    }
//   
   let e = "<hr/>";
   for (let y = 0; y < reversedStore.length; y++)
   {
     e += reversedStore[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}