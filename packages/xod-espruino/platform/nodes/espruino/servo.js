
module.exports.setup = function(e) {
  e.context.pin = new Pin(e.props.pin);
};

module.exports.evaluate = function(e) {
  var minPulse = +e.inputs.minPulse;
  var maxPulse = +e.inputs.maxPulse;
  var us = minPulse + (maxPulse - minPulse) * e.inputs.value;
  analogWrite(e.context.pin, us / 20000, { freq: 50 });
};