var GPIO = require('onoff').Gpio;

function PowerSwitch(GPIO_PIN) {
  this._GPIO_PIN = GPIO_PIN;
  this.isOn = false;

  // Initialize the GPIO pin
  this._powerSwitch = new GPIO(this._GPIO_PIN, 'out');
}

/** Set the power switch to ON */
PowerSwitch.prototype.setOn = function() {
  this._powerSwitch.writeSync(1);
  this.isOn = true;
};

/** Set the power switch to OFF */
PowerSwitch.prototype.setOff = function() {
  this._powerSwitch.writeSync(0);
  this.isOn = false;
};

/** Tear down all of the configured pins */
PowerSwitch.prototype.destroy = function() {
  this._powerSwitch.unexport();
};

module.exports = PowerSwitch;
