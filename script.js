// PLL
// Global variabl

var var_input = document.getElementById("result_value");
var first_input = "";
var second_input = ''
var operant = ''

// event handler
function click_button(e) {
  if (e.value=='.' && var_input.value.includes('.')) {
    return
  }else{
  var_input.value += e.value;
}

}

var_input.addEventListener('keydown',function(e){
  if (e.key=='.' && var_input.value.includes('.')) {
    e.preventDefault()
  }
})

// event handler
function plus_button(e) {
  first_input = Number(var_input.value);
  var_input.value = "";
  operant = '+'
}

function minus_button(e) {
    first_input = Number(var_input.value);
    var_input.value = "";
    operant = '-'
  }

  function multiply_button(e) {
    first_input = Number(var_input.value);
    var_input.value = "";
    operant = '*'
  }

  function divide_button(e) {
    first_input = Number(var_input.value);
    var_input.value = "";
    operant = '/'
  }

function equal_button(e){
second_input = Number(var_input.value)
if (operant == '+') {

    var_input.value = first_input+second_input
}
if (operant == '-') {
    var_input.value = first_input-second_input
}
if (operant == '*') {
    var_input.value = first_input*second_input
}
if (operant == '/') {
    var_input.value = first_input/second_input
}

}
