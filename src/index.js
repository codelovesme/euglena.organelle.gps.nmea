/// <reference path="../typings/index.d.ts" />
"use strict";
const euglena_template_1 = require("euglena.template");
const SerialPort = require("serialport");
var GPS = require('gps');
var gps = new GPS;
class Organelle extends euglena_template_1.euglena_template.being.alive.organelle.GPSOrganelle {
    bindActions(addAction) {
        addAction(euglena_template_1.euglena_template.being.alive.constants.particles.GPSOrganelleSap, (particle) => {
            this.sapContent = particle.data;
            var port = new SerialPort(this.sapContent.port, {
                baudrate: 4800,
                parser: SerialPort.parsers.readline('\r\n')
            });
            port.on('data', data => {
                gps.update(data);
            });
            gps.on('data', data => {
                if (gps.state.lat && gps.state.lon) {
                    this.send(new euglena_template_1.euglena_template.being.alive.particle.Coordinate(gps.state.lat, gps.state.lon, this.sapContent.euglenaName), this.name);
                }
            });
        });
    }
}
exports.Organelle = Organelle;
