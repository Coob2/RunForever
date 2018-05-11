$( document ).ready(function loadData() {

});

function loadData()
{
var name = localStorage.getItem("name");
var age = localStorage.getItem("age");
var gender = localStorage.getItem("gender");

alert("Get names");
$('#name').val(name);
$('#age').val(age);
$('#gender').val(gender);
};

function saveData()
{
  localStorage.removeItem("name");
  localStorage.removeItem("age");
  localStorage.removeItem("gender");

var name = $('#name').val(name);
var age = $('#age').val(age);
var gender = $('#gender').val(gender);

  localStorage.setItem('name', name);
  localStorage.setItem('age', age);
  localStorage.setItem('gender', gender);
  alert("save names");
}
