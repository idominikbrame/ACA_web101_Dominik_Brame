  let current_url = document.location;
  document.querySelectorAll(".bottom-nav a").forEach(function(e){
    if(e.href == current_url){
      e.classList += " current";
    }
});

