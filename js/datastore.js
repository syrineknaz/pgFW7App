var $$=Dom7;
$$('.get-storage-data').on('click', function() {
  var storedData = myApp.formGetData('my-form');
  if(storedData) {
    alert(JSON.stringify(storedData));
  }
  else {
    alert('There is no stored data for this form yet. Try to change any field')
  }
});

 

