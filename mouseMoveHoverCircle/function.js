container.addEventListener('mousemove' , function (event) {
  mouseX.innerText = event.clientX;
  mouseY.textContent = event.clientY;
  blueCircle.style.top = `${event.clientY -10}px`;
  blueCircle.style.left = `${event.clientX -20}px`;
}) 

transparentBoxRed.addEventListener('mousemove' , function (event) {
  redX.innerText = event.clientX -40;
  redY.textContent = event.clientY - 40;
  redX.parentElement.style.display = 'block';
}) 

transparentBoxRed.addEventListener('mouseleave' , function (event) {
  redX.parentElement.style.display = 'none';
})

transparentBoxBlacked.addEventListener('mousemove' , function (event) {
  BlackX.innerText = event.clientX -40;
  BlackY.textContent = event.clientY - 500;
  BlackX.parentElement.style.display = 'block';
}) 

transparentBoxBlacked.addEventListener('mouseleave' , function (event) {
  BlackX.parentElement.style.display = 'none';
})