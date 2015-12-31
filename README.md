powerswitch
=========

Node.js package for driving the Adafruit PowerSwitch Tail II. Originally built for use with Raspberry Pi, but theoretically it could work for other systems.

## Installation

    $ npm install powerswitch --save

## Usage

    var ps = require('powerswitch');
    var GPIO_PIN = 18; // Pin that the PowerSwitch Tail is wired to. Use Raspberry Pi addressing scheme for the pin (NOT SoC/BCM pin schemas)

    // Instantiate a PowerSwitch object
    var powerswitch = new ps(GPIO_PIN);

    // Do some stuff with the switch
    powerswitch.setOn();
    console.log('The PowerSwitch is ', powerswitch.isOn ? 'ON' : 'OFF');
    powerswitch.setOff();

    // Remember to free up the GPIO pin when done!
    powerswitch.destroy();

## Release History

* 1.0.0 Initial release
