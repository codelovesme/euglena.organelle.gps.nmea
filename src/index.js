"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const euglena_template = require("@euglena/template");
const SerialPort = require("serialport");
var GPS = require("gps");
var gps = new GPS();
class Organelle extends euglena_template.alive.organelle.GPSOrganelle {
    bindActions(addAction) {
        addAction(euglena_template.alive.constants.particles.GPSOrganelleSap, particle => {
            this.sapContent = particle.data;
            console.log("connection via serialport");
            var port = new SerialPort(this.sapContent.port, {
                baudRate: 4800
            });
            console.log("listening");
            port.on("data", (data) => {
                console.log("gps update");
                gps.updatePartial(data);
            });
            gps.on("data", () => {
                console.log("on gps data");
                if (gps.state.lat && gps.state.lon) {
                    console.log("on gps data inner");
                    this.send(new euglena_template.alive.particle.Coordinate(Number(gps.state.lat), Number(gps.state.lon), this.sapContent.euglenaName));
                }
            });
        });
    }
}
exports.Organelle = Organelle;
