
"use strict";

/**
 * Created by codelovesme on 6/19/2015.
 */
import { euglena } from "euglena";
import Exception = euglena.sys.type.Exception;
import Impact = euglena.being.interaction.Impact;
import interaction = euglena.being.interaction;

export module euglena_template {
    export namespace being {
        export namespace particle {
            export abstract class BooleanParticle extends euglena.being.ParticleV2<Boolean> {
                constructor(meta: euglena.being.MetaV2, data: Boolean) { super(meta, data); }
            }
            export abstract class VoidParticle extends euglena.being.ParticleV1 {
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
            import ParticleV2 = euglena.being.ParticleV2;
            import MetaV2 = euglena.being.MetaV2;
            import Cytoplasm = euglena.being.alive.Cytoplasm;
            export namespace constants {
                export namespace particles {
                    export const Domain = "Domain";
                    export const WhoAmI = "WhoAmI";
                    export const Particles = "Particles";
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
                    export const ReadParticles = "ReadParticles";
                    export const Subscribe = "Subscribe";
                    export const SubscribtionDict = "SubscribtionDict";
                    export const Password = "Password";
                    export const AddGene = "AddGene";
                    export const TimeChanged = "TimeChanged";
                    export const ExceptionOccurred = "ExceptionOccurred";
                    export const SaveParticle = "SaveParticle";
                    export const ReadParticle = "ReadParticle";
                    export const RemoveParticle = "RemoveParticle";
                    export const RemoveParticles = "RemoveParticles";
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
                export interface MatchedParticlesContent {
                    particleRef: Particle;
                    result: Particle[];
                }
                export class Password extends ParticleV2<string> {
                    constructor(euglenaName: string, value: string) { super(new MetaV2(constants.particles.Password, euglenaName), value); }
                }
                export class SubscribtionDict extends ParticleV2<euglena.sys.type.Map<any, string[]>> {
                    constructor(of: string) {
                        super(new MetaV2(constants.particles.SubscribtionDict, of), new euglena.sys.type.Map<any, string[]>((key1, key2) => {
                            return euglena.js.Class.doesCover(key1, key2);
                        }));
                    }
                }
                export class Subscribe extends ParticleV2<Particle> {
                    constructor(particleReference: Particle, of: string) {
                        super(new MetaV2(constants.particles.Subscribe, of), particleReference);
                    }
                }
                export class Coordinate extends ParticleV2<{ lat: number, lon: number }> {
                    constructor(lat: number, lon: number, of: string) {
                        super(new MetaV2(constants.particles.Coordinate, of), { lat, lon });
                    }
                }
                export class WhoAmI extends ParticleV2<void> {
                    constructor(of: string) {
                        super(new MetaV2(constants.particles.WhoAmI, of));
                    }
                }
                export interface WebUIOrganelleSapContent {
                    euglenaName: string,
                    rootComponentUrl: string
                }
                export interface NetClientOrganelleSapContent {
                    euglenaName: string;
                }
                export class NetClientOrganelleSap extends ParticleV2<NetClientOrganelleSapContent> {
                    constructor(of: string) { super(new MetaV2(constants.particles.NetClientOrganelleSap, of), { euglenaName: of }); }
                }
                export class WebUIOrganelleSap extends ParticleV2<WebUIOrganelleSapContent> {
                    constructor(content: WebUIOrganelleSapContent, of: string) { super(new MetaV2(constants.particles.WebUIOrganelleSap, of), content); }
                }
                export interface WebOrganelleSapContent {
                    euglenaName: string,
                    euglenaInfo: particle.EuglenaInfo,
                    singlePageApp: boolean
                }
                export class WebOrganelleSap extends ParticleV2<WebOrganelleSapContent> {
                    constructor(content: WebOrganelleSapContent, of: string) { super(new MetaV2(constants.particles.WebOrganelleSap, of), content); }
                }
                export interface GPSOrganelleSapContent {
                    euglenaName: string,
                    port: string
                }
                export class GPSOrganelleSap extends ParticleV2<GPSOrganelleSapContent> {
                    constructor(content: GPSOrganelleSapContent, of: string) { super(new MetaV2(constants.particles.GPSOrganelleSap, of), content); }
                }
                export interface NetOrganelleSapContent {
                    euglenaName: string,
                    euglenaInfo: particle.EuglenaInfo
                }
                export class NetOrganelleSap extends ParticleV2<NetOrganelleSapContent> {
                    constructor(content: NetOrganelleSapContent, of: string) { super(new MetaV2(constants.particles.NetOrganelleSap, of), content); }
                }
                export interface DbOrganelleSapContent {
                    euglenaName: string,
                    url: string,
                    port: number,
                    databaseName: string
                }
                export class DbOrganelleSap extends ParticleV2<DbOrganelleSapContent> {
                    constructor(content: DbOrganelleSapContent, of: string) { super(new MetaV2(constants.particles.DbOrganelleSap, of), content); }
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
                export class OrganelleHasComeToLife extends ParticleV2<{ organelleName: string }> {
                    constructor(organelleName: string, of: string) {
                        super(new MetaV2(constants.particles.OrganelleHasComeToLife, of), { organelleName: organelleName });
                    }
                }
                export class Domain extends ParticleV2<string> {
                    constructor(domain: string, of: string) {
                        super(new MetaV2(constants.particles.Domain, of), domain);
                    }
                }
                export class Authenticate extends euglena.being.ParticleV2<{ euglenaName: string, password: string }> {
                    constructor(euglenaName: string, password: string, of: string) { super(new MetaV2(constants.particles.Authenticate, of), { euglenaName: euglenaName, password: password }); }
                }
                export class Proxy extends ParticleV2<{ from: string, to: string }> {
                    constructor(from: string, to: string, expireTime: number, of: string) { super(new MetaV2(constants.particles.Proxy, of, expireTime), { from, to }); }
                }
                export class SetTime extends ParticleV2<euglena.sys.type.Time> {
                    constructor(time: euglena.sys.type.Time, of: string) { super(new MetaV2(constants.particles.SetTime, of), time); }
                }
                export class ConnectToEuglena extends euglena.being.ParticleV2<alive.particle.EuglenaInfo> {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) {
                        super(new MetaV2(constants.particles.ConnectToEuglena, of), euglenaInfo);
                    }
                }
                export class ConnectedToEuglena extends euglena.being.ParticleV2<alive.particle.EuglenaInfo> {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) { super(new MetaV2(constants.particles.ConnectedToEuglena, of), euglenaInfo); }
                }
                export class DisconnectedFromEuglena extends euglena.being.ParticleV2<alive.particle.EuglenaInfo> {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) { super(new MetaV2(constants.particles.ConnectedToEuglena, of), euglenaInfo); }
                }
                export class Listen extends being.particle.VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.Listen, of: of }); }
                }
                export interface ThrowImpactContent {
                    to: alive.particle.EuglenaInfo,
                    impact: Impact
                }
                export class ThrowImpact extends euglena.being.ParticleV2<{ to: alive.particle.EuglenaInfo, impact: Impact }> {
                    constructor(content: { to: alive.particle.EuglenaInfo, impact: Impact }, of: string) { super(new MetaV2(constants.particles.ThrowImpact, of), content); }
                }
                export class EuglenaInfo extends euglena.being.ParticleV2<{ name: string, url: string }> {
                    constructor(content: { name: string, url: string, port: string }, of: string) { super(new MetaV2(constants.particles.EuglenaInfo, of), content); }
                }
                export class CytoplasmInfo extends euglena.being.ParticleV2<{ particles: Particle[], chromosome: euglena.being.alive.dna.Gene[] }> {
                    constructor(content: { particles: Particle[], chromosome: euglena.being.alive.dna.Gene[] }, of: string) { super(new MetaV2(constants.particles.EuglenaInfo, of), content); }
                }
                export class OrganelleList extends ParticleV2<Array<string>> {
                    constructor(content: Array<string>, of: string) { super(new MetaV2(constants.particles.OrganelleList, of), content); }
                }
                export class Exception extends euglena.being.ParticleV2<euglena.sys.type.Exception> {
                    constructor(content: euglena.sys.type.Exception, of: string) { super(new MetaV2(constants.particles.Exception, of), content); }
                }
                export class Time extends euglena.being.ParticleV2<euglena.sys.type.Time> {
                    constructor(content: euglena.sys.type.Time, of: string) { super(new MetaV2(constants.particles.Time, of), content); }
                }
                export class Acknowledge extends being.particle.VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.Acknowledge, of: of }); }
                }
                export class ConnectedToTheInternet extends being.particle.BooleanParticle {
                    constructor(content: boolean, of: string) { super(new MetaV2(constants.particles.ConnectedToTheInternet, of), content); }
                }
                export class EuglenaHasBeenBorn extends being.particle.BooleanParticle {
                    constructor(of: string) { super(new MetaV2(constants.particles.EuglenaHasBeenBorn, of), true); }
                }
                export class SaveParticle extends ParticleV2<Particle> {
                    constructor(content: Particle, of: string) { super(new MetaV2(constants.particles.SaveParticle, of), content); }
                }
                export class ReadParticle extends ParticleV2<Particle> {
                    constructor(content: Particle, of: string) { super(new MetaV2(constants.particles.ReadParticle, of), content); }
                }
                export class ReadParticles extends ParticleV2<Particle> {
                    constructor(particleRef: Particle, of: string) {
                        super(new MetaV2(constants.particles.ReadParticles, of), particleRef);
                    }
                }
                export class Particles extends ParticleV2<Particle[]> {
                    constructor(particles: Particle[], of: string) { super(new MetaV2(constants.particles.Particles, of), particles); }
                }
                export interface RemoveParticleContent {
                    name: string,
                    of: string
                }
                export class RemoveParticle extends ParticleV2<Particle> {
                    constructor(ref: Particle, of: string) { super(new MetaV2(constants.particles.RemoveParticle, of), ref); }
                }
                export class RemoveParticles extends ParticleV2<Particle> {
                    constructor(ref: Particle, of: string) {
                        super(new MetaV2(constants.particles.RemoveParticles, of), ref);
                    }
                }
                export interface DoesParticleExistContent {
                    name: string,
                    of: string
                }
                export class DoesParticleExist extends ParticleV2<DoesParticleExistContent> {
                    constructor(content: DoesParticleExistContent, of: string) { super(new MetaV2(alive.constants.particles.DoesParticleExist, of), content); }
                }
                export class ImpactReceived extends euglena.being.ParticleV2<Impact> {
                    constructor(content: Impact, of: string) { super(new MetaV2(constants.particles.ImpactReceived, of), content); }
                }
            }
        }
    }
}


