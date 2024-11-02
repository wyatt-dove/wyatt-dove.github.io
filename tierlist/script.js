//Written by Ashia Taplin
function openTab(event, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Remove "active" class from all tab links
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab and add "active" class to the clicked tab link
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Set the first tab to be visible by default
document.getElementById("tab-link active").style.display = "block";





