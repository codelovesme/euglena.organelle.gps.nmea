
/// <reference path="../typings/index.d.ts" />


"use strict"

import { euglena_template } from "euglena.template";
import { euglena } from "euglena";
import * as SerialPort from "serialport";
var GPS = require('gps');
var gps = new GPS;

import Particle = euglena.being.Particle;

export class Organelle extends euglena_template.being.alive.organelle.GPSOrganelle {
    private sapContent: euglena_template.being.alive.particle.GPSOrganelleSapContent;
    protected bindActions(addAction: (particleName: string, action: (particle: Particle, callback: (particle: Particle) => void) => void) => void): void {
        addAction(euglena_template.being.alive.constants.particles.GPSOrganelleSap, (particle) => {
            this.sapContent = particle.data;

            var port = new SerialPort(this.sapContent.port, { // change path 
                baudrate: 4800,
                parser: SerialPort.parsers.readline('\r\n')
            });

            port.on('data', data => {
                gps.update(data);
            });

            gps.on('data', data => {
                if(gps.state.lat && gps.state.lon){
                    this.send(new euglena_template.being.alive.particle.Coordinate(gps.state.lat,gps.state.lon,this.sapContent.euglenaName),this.name);
                }
            });
        });
    }
}