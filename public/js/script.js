window.onload = function () {
  text = document.getElementsByClassName("description");
  for (var i = 0; i < text.length; i++) {
    text[i].innerHTML = text[i].innerHTML.replace(/([A-Z].+\.)/g, "<p>$1</p>");
  }
  ref = document.getElementsByClassName("reference");
  for (var i = 0; i < ref.length; i++) {

    ref[i].innerHTML = ref[i].innerHTML.replace(/(http\S+)/g, "\<a href\=\"$1\"\>$1\<\/a\>\<br\>\<br\>");
  };
  alert("The code has run");

};
