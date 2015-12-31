var gpio = require('rpi-gpio');

function PowerSwitch(GPIO_PIN) {
  this._GPIO_PIN = GPIO_PIN;
  this.isOn = false;

  // Initialize the GPIO pin
  var self = this; // Scope closure
  gpio.setMode(gpio.MODE_RPI); // Use the Raspberry Pi wiring schema
  gpio.setup(this._GPIO_PIN, gpio.DIR_OUT, function(err) {
    if(err) {
      console.error('PowerSwitch error! Could not configure pin %s for writing: ', self._GPIO_PIN, err);
    } else {
      // Make sure that the switch is initialized in the OFF state
      self.setOff();
    }
  });
}

/** Set the power switch to ON */
PowerSwitch.prototype.setOn = function() {
  this.isOn = true;
  gpio.write(this._GPIO_PIN, true, function(err) {
      if (err) {
        throw err;
      }
  });
};

/** Set the power switch to OFF */
PowerSwitch.prototype.setOn = function() {
  this.isOn = false;
  gpio.write(this._GPIO_PIN, false, function(err) {
      if (err) {
        throw err;
      }
  });
};

/** Tear down all of the configured pins */
PowerSwitch.prototype.destroy = function() {
  gpio.destroy(function() {});
};

module.exports = PowerSwitch;
