let remove = document.querySelector('#button1');

remove.onclick = function(e) {
  document.querySelector('#area1').value = "";
}

let myNodelist = document.getElementsByTagName("li");
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("x");

  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
let = i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("to-do-text").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("write!");
  } else {
    document.getElementById("task-to-do").appendChild(li);
  }
  document.getElementById("to-do-text").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
