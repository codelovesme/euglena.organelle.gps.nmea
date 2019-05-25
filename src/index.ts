"use strict";

import * as euglena_template from "@euglena/template";
import * as euglena from "@euglena/core";
import * as SerialPort from "serialport";
var GPS = require("gps");
var gps = new GPS();

import Particle = euglena.AnyParticle;

export class Organelle extends euglena_template.alive.organelle.GPSOrganelle {
  private sapContent: euglena_template.alive.particle.GPSOrganelleSapContent;
  protected bindActions(
    addAction: (
      particleName: string,
      action: (
        particle: Particle,
        callback: (particle: Particle) => void
      ) => void
    ) => void
  ): void {
    addAction(
      euglena_template.alive.constants.particles.GPSOrganelleSap,
      particle => {
        this.sapContent = particle.data;
        console.log("connection via serialport");
        var port = new SerialPort(this.sapContent.port, {
          baudRate: 4800
        });
        console.log("listening");
        port.on("data", (data: any) => {
          console.log("gps update");
          gps.updatePartial(data);
        });

        gps.on("data", () => {
          console.log("on gps data");
          if (gps.state.lat && gps.state.lon) {
            console.log("on gps data inner");
            this.send(
              new euglena_template.alive.particle.Coordinate(
                Number(gps.state.lat),
                Number(gps.state.lon),
                this.sapContent.euglenaName
              )
            );
          }
        });
      }
    );
  }
}
