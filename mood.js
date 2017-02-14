console.log("mood.js - IT WORKS!");


var buttons = document.querySelectorAll(".work-btn");

buttons = [].slice.call(buttons)

buttons.forEach(function(button){
  button.addEventListener("click", clickButton)
})

function clickButton(e){
  e.preventDefault;
  var clickedButton = e.currentTarget
  removeActive(clickedButton);
  setActive(clickedButton);
}

function removeActive(clickedButton){
  var btnGroup = clickedButton.closest(".work-nav");
  var groupBtns = btnGroup.querySelectorAll(".work-btn");
  groupBtns = [].slice.call(groupBtns);
  groupBtns.forEach(function(button){
    button.classList.remove("active");
  })
}

function setActive(button){
  button.classList.add("active");
}
