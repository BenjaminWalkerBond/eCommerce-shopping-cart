function getPhysicalAddress() {
  console.log("working");
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = eval(xmlhttp.responseText);
      console.log(obj.class());
      var addressOne = document.getElementById("addressOne");
      addressOne.innerHTML = obj[0].address1;
    }
  };
  xmlhttp.open("GET", "../php/getPhysicalAddress.php", true);
  xmlhttp.send();
}
