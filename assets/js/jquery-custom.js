var $ = function(el){
  // agar menggunakan objek langsung pada variabel $ bukan menggunakan window(global)
  if(this === window) return new $(el);

  this.el = getElement(el);
  return this;
}

var getElement = function(el){
  // ambil karakter pertama
  firstLetter = el.charAt(0);

  if(el.indexOf(',') >= 0 || el.indexOf(' ') >= 0) return document.querySelectorAll(el);

  switch(firstLetter) {
    case "#":
      return document.getElementById(el.substr(1));
      break;
    case ".":
      return document.getElementsByClassName(el.substr(1));
      break;
    case "[":
      return document.querySelectorAll(el);
      break;

    default:
      return document.getElementsByTagName(el);
  }
}

$.prototype.text = function(text){
  this.el.innerHTML = text;
  return this;
}