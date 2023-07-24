window.onload = function () {
  text = document.getElementsByTagName("td")
  for (var i = 0; i < text.length; i++){
    text[i].innerHTML = text[i].innerHTML.replace(/(.+\n)/g, "<p>$1</p>");
  }
}
  ref = document.getElementsByClassName("reference");
  for (var i = 0; i < ref.length; i++) {
  ref[i].innerHTML = ref[i].innerHTML.replace(/(http\S+)/g,'<a href="$1">$1</a>');
    /*  ref[i].innerHTML = ref[i].innerHTML.replace(/(\$NL)/g,'<br><br>');*/
 }
