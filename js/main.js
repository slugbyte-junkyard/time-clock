
'use strict';

var employeeList = (JSON.parse(localStorage.getItem('employees')));

function removeEmployee(){
  var employeeSelector = document.getElementById('remove-employee');
  var firedButton = document.createElement('input');
  firedButton.setAttribute('type', 'submit');
  firedButton.setAttribute('value', 'Fired');
  var selectRemove = document.createElement('select');
  employeeSelector.appendChild(selectRemove);
  selectRemove.setAttribute('id', 'removeSelector');
  employeeSelector.appendChild(firedButton);
  for(var i = 0; i < employeeList.length; i++) {
    var removeOption = document.createElement('option');
    removeOption.setAttribute('value', employeeList[i].name);
    removeOption.textContent = employeeList[i].name;
    selectRemove.appendChild(removeOption);
  }
  employeeSelector.addEventListener('submit', terminatedWithPrejudice);
}


function terminatedWithPrejudice(event){
  event.preventDefault();

  var terminated = event.target.removeSelector.value;

  for(var i = 0; i < employeeList.length; i++){
    if(employeeList[i].name === terminated) {
      employeeList = employeeList.splice(i, 1);
    }
  }
}

removeEmployee();


if employee list I matches terminated then fire/splice his ass
