document.getElementById("files").onchange = function() {
    var reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById("image").src = e.target.result;
    };
    document.getElementById("image").addEventListener("mouseover", showButtons);
    reader.readAsDataURL(this.files[0]);
};

document.getElementById("image").addEventListener("mouseout", function() {
  document.getElementById("edit").style.visibility = "hidden";
  document.getElementById("delete").style.visibility = "hidden";
});

function showButtons() {
    document.getElementById("edit").style.visibility = "visible";
    document.getElementById("delete").style.visibility = "visible";
}

function Button1() {
    document.getElementById("drop-button-1").classList.toggle("show");
}

function Button2() {
    document.getElementById("drop-button-2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
