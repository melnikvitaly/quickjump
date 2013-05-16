function updateContextMenu() {
  var selection = window.getSelection().toString().trim();
  chrome.extension.sendMessage({request: 'updateContextMenu', selection: selection}, function (response) {
    console.log('sendMessage callback');
  });
};

document.addEventListener('mousedown', function(event){
  console.log('mouse down');
  if (event.button == 2) {
    updateContextMenu();
  }
}, true);