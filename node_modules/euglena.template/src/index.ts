
"use strict";

/**
 * Created by codelovesme on 6/19/2015.
 */
import { euglena } from "euglena";
import Exception = euglena.sys.type.Exception;
import ParticleReference = euglena.being.alive.dna.ParticleReference;
import Impact = euglena.being.interaction.Impact;
import interaction = euglena.being.interaction;

export module euglena_template {
    export namespace being {
        export namespace particle {
            export abstract class BooleanParticle extends euglena.being.Particle {
                constructor(meta: any, data: Boolean) { super(meta, data); }
            }
            export abstract class VoidParticle extends euglena.being.Particle {
                constructor(meta: any) { super(meta, null); }
            }
        }
        export namespace subscribtion {
            export class Record {

            }
            import Particle = euglena.being.Particle;
            export interface SubscribtionRecord {
                particle: Particle;
                euglenas: string[]
            }
            export class StaticTools {

                private static subscribtionDict: SubscribtionRecord[] = [];
                public static addSubscribtion(particleMatch: Particle, euglenaName: string): void {
                    let euglenas = StaticTools.getSubscribtions(particleMatch);
                    if (euglenas) {
                        if (!euglena.sys.type.StaticTools.Array.contains(euglenas, euglenaName)) {
                            euglenas.push(euglenaName);
                        }
                    } else {
                        StaticTools.subscribtionDict.push({ particle: particleMatch, euglenas: [euglenaName] });
                    }
                }
                public static removeSubscribtions(particleMatch: Particle): string[] {
                    for (let i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            return euglena.sys.type.StaticTools.Array.removeAt(StaticTools.subscribtionDict, i).euglenas;
                        }
                    }
                    return null;
                }
                public static removeSubscribtion(particleMatch: Particle, euglenaName: string): boolean {
                    for (let i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            let index = StaticTools.subscribtionDict[i].euglenas.indexOf(euglenaName);
                            if (index >= 0) {
                                return euglena.sys.type.StaticTools.Array.removeAt(StaticTools.subscribtionDict[i].euglenas, index) ? true : false;
                            }
                        }
                    }
                    return false;
                }
                public static getSubscribtions(particleMatch: Particle): string[] {
                    for (let i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            return StaticTools.subscribtionDict[i].euglenas;
                        }
                    }
                    return null;
                }
                public static isSubscribed(particleMatch: Particle, euglenaName: string): boolean {
                    for (let i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            return euglena.sys.type.StaticTools.Array.contains(StaticTools.subscribtionDict[i].euglenas, euglenaName);
                        }
                    }
                }
            }
        }
        export namespace alive {
            import Particle = euglena.being.Particle;
            import Cytoplasm = euglena.being.alive.Cytoplasm;
            import Time = euglena.sys.type.Time;
            export namespace constants {
                export namespace particles {
                    export const Domain = "Domain";
                    export const WhoAmI = "WhoAmI";
                    export const ParticlesOf = "ParticlesOf";
                    export const EuglenaInfo = "EuglenaInfo";
                    export const OrganelleList = "OrganelleList";
                    export const EuglenaName = "EuglenaName";
                    export const ImpactReceived = "ImpactReceived";
                    export const EuglenaHasBeenBorn = "EuglenaHasBeenBorn";
                    export const Acknowledge = "Acknowledge";
                    export const Authenticate = "Authenticate";
                    export const Time = "Time";
                    export const Exception = "Exception";
                    export const ConnectedToTheInternet = "ConnectedToTheInternet";
                    export const Token = "Token";
                    export const Impacts = "Impacts";
                    export const DoesParticleExist = "DoesParticleExist";
                    export const DoesUniqueParticleExist = "DoesUniqueParticleExist";
                    export const Gene = "Gene";
                    export const ThrowImpact = "ThrowImpact";
                    export const Listen = "Listen";
                    export const ConnectedToEuglena = "ConnectedToEuglena";
                    export const DisconnectedFromEuglena = "DisconnectedFromEuglena";
                    export const ConnectToEuglena = "ConnectToEuglena";
                    export const ReturnCurrentTime = "ReturnCurrentTime";
                    export const ReturnIfConnectedToTheInternet = "ReturnIfConnectedToTheInternet";
                    export const OrganelleHasComeToLife = "OrganelleHasComeToLife";
                    export const Proxy = "Proxy";
                    export const Coordinate = "Coordinate";
                    export const SetTime = "SetTime";
                    export const DbIsOnline = "DbIsOnline";
                    export const NetOrganelleSap = "NetOrganelleSap";
                    export const NetClientOrganelleSap = "NetClientOrganelleSap";
                    export const WebOrganelleSap = "WebOrganelleSap";
                    export const GPSOrganelleSap = "GPSOrganelleSap";
                    export const WebUIOrganelleSap = "WebUIOrganelleSap";
                    export const DbOrganelleSap = "DbOrganelleSap";
                    export const CytoplasmInfo = "CytoplasmInfo";
                    export const ReadMatchedParticles = "ReadMatchedParticles";

                }
                export namespace organelles {
                    export const WebUIOrganelle = "WebUIOrganelle";
                    export const GPSOrganelle = "GPSOrganelle";
                    export const NetOrganelle = "NetOrganelle";
                    export const TimeOrganelle = "TimeOrganelle";
                    export const WebOrganelle = "WebOrganelle";
                    export const DbOrganelle = "DbOrganelle";
                    export const NetClientOrganelle = "NetClientOrganelle";
                    export const Cytoplasm = "Cytoplasm";
                }
                export namespace impacts {
                    export const AddGene = "AddGene";
                    export const TimeChanged = "TimeChanged";
                    export const ExceptionOccurred = "ExceptionOccurred";
                    export const SaveParticle = "SaveParticle";
                    export const ReadParticle = "ReadParticle";
                    export const ReadParticles = "ReadParticles";
                    export const ReadParticlesOf = "ReadParticlesOf";
                    export const RemoveParticle = "RemoveParticle";
                }
            }
            export namespace organelle {
                import Organelle = euglena.being.alive.Organelle;
                export abstract class TimeOrganelle extends Organelle<euglena.being.alive.particles.SapContent> {
                    constructor(className: string) { super(alive.constants.organelles.TimeOrganelle, className); }
                }
                export abstract class NetOrganelle extends Organelle<particle.NetOrganelleSapContent> {
                    constructor(className: string) { super(constants.organelles.NetOrganelle, className); }
                }
                export abstract class WebOrganelle extends Organelle<particle.WebOrganelleSapContent>{
                    constructor(className: string) { super(constants.organelles.WebOrganelle, className); }
                }
                export abstract class WebUIOrganelle extends Organelle<particle.WebUIOrganelleSapContent>{
                    constructor(className: string) { super(constants.organelles.WebUIOrganelle, className); }
                }
                export abstract class DbOrganelle extends Organelle<particle.DbOrganelleSapContent>{
                    constructor(className: string) { super(constants.organelles.DbOrganelle, className); }
                }
                export abstract class NetClientOrganelle extends Organelle<particle.NetClientOrganelleSapContent>{
                    constructor(className: string) { super(constants.organelles.NetClientOrganelle, className); }
                }
                export abstract class GPSOrganelle extends Organelle<particle.GPSOrganelleSapContent>{
                    constructor(className: string) { super(constants.organelles.GPSOrganelle, className); }
                }
            }
            export namespace particle {
                export class Coordinate extends Particle {
                    constructor(lat: string, lon: string, of: string) {
                        super({ name: constants.particles.Coordinate, of: of }, { lat: lat, lon: lon });
                    }
                }
                export class WhoAmI extends Particle {
                    constructor() {
                        super({ name: constants.particles.WhoAmI }, {});
                    }
                }
                export interface NetClientOrganelleSapContent {
                    euglenaName: string
                }
                export interface WebUIOrganelleSapContent {
                    euglenaName: string,
                    rootComponentUrl: string
                }
                export class NetClientOrganelleSap extends Particle {
                    constructor(content: NetClientOrganelleSapContent, of: string) { super({ name: constants.particles.NetClientOrganelleSap, of: of }, content); }
                }
                export class WebUIOrganelleSap extends Particle {
                    constructor(content: WebUIOrganelleSapContent, of: string) { super({ name: constants.particles.WebUIOrganelleSap, of: of }, content); }
                }
                export interface WebOrganelleSapContent {
                    euglenaName: string,
                    euglenaInfo: particle.EuglenaInfo,
                    singlePageApp: boolean
                }
                export class WebOrganelleSap extends Particle {
                    constructor(content: WebOrganelleSapContent, of: string) { super({ name: constants.particles.WebOrganelleSap, of: of }, content); }
                }
                export interface GPSOrganelleSapContent {
                    euglenaName: string,
                    port:string
                }
                export class GPSOrganelleSap extends Particle {
                    constructor(content: GPSOrganelleSapContent, of: string) { super({ name: constants.particles.GPSOrganelleSap, of: of }, content); }
                }
                export interface NetOrganelleSapContent {
                    euglenaName: string,
                    euglenaInfo: particle.EuglenaInfo
                }
                export class NetOrganelleSap extends Particle {
                    constructor(content: NetOrganelleSapContent, of: string) { super({ name: constants.particles.NetOrganelleSap, of: of }, content); }
                }
                export interface DbOrganelleSapContent {
                    euglenaName: string,
                    url: string,
                    port: number,
                    databaseName: string
                }
                export class DbOrganelleSap extends Particle {
                    constructor(content: DbOrganelleSapContent, of: string) { super({ name: constants.particles.DbOrganelleSap, of: of }, content); }
                }
                export class DbIsOnline extends being.particle.VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.DbIsOnline, of: of }); }
                }
                import VoidParticle = euglena_template.being.particle.VoidParticle;
                export class ReturnCurrentTime extends VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.ReturnCurrentTime, of: of }); }
                }
                export class ReturnIfConnectedToTheInternet extends VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.ReturnIfConnectedToTheInternet, of: of }); }
                }
                export class OrganelleHasComeToLife extends Particle {
                    constructor(organelleName: string, of: string) {
                        super({ name: constants.particles.OrganelleHasComeToLife, of: of }, { organelleName: organelleName });
                    }
                }
                export class Domain extends Particle {
                    constructor(domain: string, of: string) {
                        super({ name: constants.particles.Domain, of: of }, domain);
                    }
                }
                export class Authenticate extends euglena.being.Particle {
                    constructor(euglenaName: string, password: string) { super({ name: constants.particles.Authenticate }, { euglenaName: euglenaName, password: password }); }
                }
                export class Proxy extends Particle {
                    constructor(from: string, to: string, expireTime: euglena.sys.type.Time) { super({ name: constants.particles.Proxy, expireTime: expireTime }, { from: from, to: to }); }
                }
                export class SetTime extends Particle {
                    constructor(time: euglena.sys.type.Time, of: string) { super({ name: constants.particles.SetTime, of: of }, time); }
                }
                export class ConnectToEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) {
                        super({ name: constants.particles.ConnectToEuglena, of: of }, euglenaInfo);
                    }
                }
                export class ConnectedToEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) { super({ name: constants.particles.ConnectedToEuglena, of: of }, euglenaInfo); }
                }
                export class DisconnectedFromEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) { super({ name: constants.particles.ConnectedToEuglena, of: of }, euglenaInfo); }
                }
                export class Listen extends being.particle.VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.Listen, of: of }); }
                }
                export interface ThrowImpactContent {
                    to: alive.particle.EuglenaInfo,
                    impact: Impact
                }
                export class ThrowImpact extends euglena.being.Particle {
                    constructor(content: { to: alive.particle.EuglenaInfo, impact: Impact }, of: string) { super({ name: constants.particles.ThrowImpact, of: of }, content); }
                }
                export class EuglenaInfo extends euglena.being.Particle {
                    constructor(content: { name: string, url: string, port: string }, of: string) { super({ name: constants.particles.EuglenaInfo, of: of }, content); }
                }
                export class CytoplasmInfo extends euglena.being.Particle {
                    constructor(content: { particles: Particle[], chromosome: euglena.being.alive.dna.Gene[] }, of: string) { super({ name: constants.particles.EuglenaInfo, of: of }, content); }
                }
                export class OrganelleList extends Particle {
                    constructor(content: Array<string>, of: string) { super({ name: constants.particles.OrganelleList, of }, content); }
                }
                export class Token extends Particle {
                    constructor(content: string, of: string, for_: string) { super({ name: constants.particles.Token, of: of, for: for_ }, content); }
                }
                export class Exception extends euglena.being.Particle {
                    constructor(content: euglena.sys.type.Exception, of: string) { super({ name: constants.particles.Exception, of: of }, content); }
                }
                export class Time extends euglena.being.Particle {
                    constructor(content: euglena.sys.type.Time, of: string) { super({ name: constants.particles.Time, of: of }, content); }
                }
                export class Acknowledge extends being.particle.VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.Acknowledge, of: of }); }
                }
                export class ConnectedToTheInternet extends being.particle.BooleanParticle {
                    constructor(content: boolean, of: string) { super({ name: constants.particles.ConnectedToTheInternet, of: of }, content); }
                }
                export class EuglenaHasBeenBorn extends being.particle.BooleanParticle {
                    constructor(of: string) { super({ name: constants.particles.EuglenaHasBeenBorn, of: of }, true); }
                }
                export class SaveParticle extends Particle {
                    constructor(content: Particle, of: string) { super({ name: constants.impacts.SaveParticle, of: of }, content); }
                }
                export class ReadParticle extends Particle {
                    constructor(content: euglena.being.alive.dna.ParticleReference, of: string) { super({ name: constants.impacts.ReadParticle, of: of }, content); }
                }
                export class ReadParticles extends Particle {
                    constructor(particleName: string, of: string) { super({ name: constants.impacts.ReadParticles, of: of }, particleName); }
                }
                export class ReadParticlesOf extends Particle {
                    constructor(whose: string, of: string) { super({ name: constants.impacts.ReadParticlesOf, of: of }, whose); }
                }
                export class ReadMatchedParticles extends Particle {
                    constructor(particleRef: Particle, of: string) {
                        super({ name: constants.particles.ReadMatchedParticles, of: of }, particleRef);
                    }
                }
                export class ParticlesOf extends Particle {
                    constructor(particles: Particle[], of: string) { super({ name: constants.particles.ParticlesOf, of: of }, particles); }
                }
                export interface RemoveParticleContent {
                    name: string,
                    of: string
                }
                export class RemoveParticle extends Particle {
                    constructor(ref: Particle, of: string) { super({ name: constants.impacts.RemoveParticle, of: of }, ref); }
                }
                export interface DoesParticleExistContent {
                    name: string,
                    of: string
                }
                export class DoesParticleExist extends Particle {
                    constructor(content: DoesParticleExistContent, of: string) { super({ name: alive.constants.particles.DoesParticleExist, of: of }, content); }
                }
                export class ImpactReceived extends euglena.being.Particle {
                    constructor(content: Impact, of: string) { super({ name: constants.particles.ImpactReceived, of: of }, content); }
                }
            }
        }
    }
    export namespace reference {
        export namespace being {
            export namespace interaction {
                export const Impact = new euglena.being.interaction.Impact(new euglena.being.Particle({ name: "name", of: "of" }, "content"), "token", "from");
            }
            export const Particle = new euglena.being.Particle({ name: "name", of: "of" }, "content");
        }
    }
}


