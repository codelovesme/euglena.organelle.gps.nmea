import * as euglena_template from "@euglena/template";
import * as euglena from "@euglena/core";
import Particle = euglena.AnyParticle;
export declare class Organelle extends euglena_template.alive.organelle.GPSOrganelle {
    private sapContent;
    protected bindActions(addAction: (particleName: string, action: (particle: Particle, callback: (particle: Particle) => void) => void) => void): void;
}
