var version = '1.12.1';
var iframe = document.getElementById('api-frame');
var uid = 'uxszTZETjcYGoKcS1RZlsAa92ZT';
var eventCatcher = document.createElement('div');
eventCatcher.style.width = '100%';
eventCatcher.style.height = '100%';
eventCatcher.style.position = 'absolute';
iframe.parentNode.insertBefore(eventCatcher, iframe);
var client = new window.Sketchfab(version, iframe);
var error = function error() {
  console.error('Sketchfab API error');
};
var success = function success(api) {
  api.start(function () {
    //Be carefull, the mouse can't be detected on the iframe
    //If you want to fix this, you have to put an overlay on the iframe
    document.body.addEventListener('mousemove', function (event) {
      // Calculate the location of the middle of the frame (Where we want the model to stay)
      var box = iframe.getBoundingClientRect();
      var frameX = box.left + box.width / 2;
      var frameY = box.top + box.height / 2;
      var x = event.pageX - frameX;
      var y = event.pageY - frameY;
      var z = 2;

      // Calculate the distance, normalize the vecteur by divising by distance and multiplicate by a factor
      var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
      x = x / distance * 6;
      y = y / distance * 6;
      z = z / distance * 6;

      // The disposition of x, y and z depend on how the model was made
      api.setCameraLookAt([y, -x, z], [0, 0, 0], 0);
    });
  });
};
client.init(uid, {
  success: success,
  error: error
});

//////////////////////////////////
// GUI Code
//////////////////////////////////
function initGui() {
  var controls = document.getElementById('controls');
  controls.innerHTML = 'move mouse up and down over this white zone';
}
initGui();

//////////////////////////////////
// GUI Code end
//////////////////////////////////