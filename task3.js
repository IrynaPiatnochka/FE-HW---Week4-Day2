function changeColor(element) {
    var colors = ['#ff6347', '#4682b4', '#008000', '#ffa500', '#800080'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
    element.classList.toggle('clicked'); 
  }
  
const button = document.querySelector('.btn.rotate');

button.addEventListener('mouseover', function() {
  button.style.transform = 'rotate(360deg)';
});

button.addEventListener('mouseout', function() {
  button.style.transform = 'rotate(0deg)';
});

  