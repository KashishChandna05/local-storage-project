window.onload= () =>{
    if(localStorage.getItem("text") !== null) document.getElementById("saveTxt").value = localStorage.getItem("text")
  }
  
  let area = document.getElementById("saveTxt");
  
  area.addEventListener('keydown', function() {
      let txt = area.value;
      localStorage.setItem("text",txt)
  })