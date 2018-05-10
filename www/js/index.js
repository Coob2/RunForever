$(document).on("pagecreate","#home",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });
});

function submitText() {
	var text = $('#textinput').val();
	alert(text);
  storeValue("name",$('#textinput').val());
}

function storeValue(key, value) {
  var storage = window.localStorage;
  var value = storage.getItem(key); // Pass a key name to get its value.
  storage.setItem(key, value) // Pass a key name and its value to add or update that key.
}
