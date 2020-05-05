document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("yu").addEventListener("click", openYt);
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("in").addEventListener("click", openIn);
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("wa").addEventListener("click", openWa);
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("git").addEventListener("click", openGit);
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("refresh").addEventListener("click", refreshPage);
  });
  var myWindow
  var prevWindow

  function openYt()
  {
    myWindow = window.open("https://www.youtube.com", "_blank", "width=100%", "height=100%");
    prevWindow="https://www.youtube.com"
  }
  function openIn() {
    myWindow = window.open("https://www.instagram.com", "_blank", "width=800, height=900");
    prevWindow="https://www.instagram.com"
  }
  function openWa() {
    myWindow = window.open("https://web.whatsapp.com", "_blank", "width=800, height=700");
    prevWindow="https://web.whatsapp.com"
  }
  function openGit()
  {
    myWindow = window.open("https://www.github.com/robotic7o7", "_blank", "width=100%", "height=100%");
    prevWindow="https://www.github.com/robotic7o7"
  }
  function refreshPage()
  {
    myWindow.close()
    if(prevWindow==="https://www.instagram.com")
    {
      openIn()
    }
    else if(prevWindow==="https://www.youtube.com")
    {
      openYt()
    }
    else if(prevWindow==="https://web.whatsapp.com")
    {
      openWa()
    }
    else if(prevWindow==="https://www.github.com/robotic7o7")
    {
      openGit()
    }
    else{
      alert("Invalid Selection")
    }
  }
  