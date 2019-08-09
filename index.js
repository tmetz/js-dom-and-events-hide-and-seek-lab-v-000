function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    var rank = n + parseInt(lis[i].innerHTML, 10);
    lis[i].innerHTML = rank.toString();
  }
}

function deepestChild() {
  var divs = document.getElementById('grand-node').querySelectorAll('div');
  return divs[divs.length - 1];
}
