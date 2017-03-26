/**
 * Created by codelovesme on 6/19/2015.
 */
import { euglena } from "euglena";
import Impact = euglena.being.interaction.Impact;
export declare module euglena_template {
    namespace being {
        namespace particle {
            abstract class BooleanParticle extends euglena.being.ParticleV2<Boolean> {
                constructor(meta: euglena.being.MetaV2, data: Boolean);
            }
            abstract class VoidParticle extends euglena.being.ParticleV1 {
                constructor(meta: any);
            }
        }
        namespace subscribtion {
            class Record {
            }
            import Particle = euglena.being.Particle;
            interface SubscribtionRecord {
                particle: Particle;
                euglenas: string[];
            }
            class StaticTools {
                private static subscribtionDict;
                static addSubscribtion(particleMatch: Particle, euglenaName: string): void;
                static removeSubscribtions(particleMatch: Particle): string[];
                static removeSubscribtion(particleMatch: Particle, euglenaName: string): boolean;
                static getSubscribtions(particleMatch: Particle): string[];
                static isSubscribed(particleMatch: Particle, euglenaName: string): boolean;
            }
        }
        namespace alive {
            import Particle = euglena.being.Particle;
            import ParticleV2 = euglena.being.ParticleV2;
            namespace constants {
                namespace particles {
                    const Domain = "Domain";
                    const WhoAmI = "WhoAmI";
                    const Particles = "Particles";
                    const EuglenaInfo = "EuglenaInfo";
                    const OrganelleList = "OrganelleList";
                    const EuglenaName = "EuglenaName";
                    const ImpactReceived = "ImpactReceived";
                    const EuglenaHasBeenBorn = "EuglenaHasBeenBorn";
                    const Acknowledge = "Acknowledge";
                    const Authenticate = "Authenticate";
                    const Time = "Time";
                    const Exception = "Exception";
                    const ConnectedToTheInternet = "ConnectedToTheInternet";
                    const Token = "Token";
                    const Impacts = "Impacts";
                    const DoesParticleExist = "DoesParticleExist";
                    const DoesUniqueParticleExist = "DoesUniqueParticleExist";
                    const Gene = "Gene";
                    const ThrowImpact = "ThrowImpact";
                    const Listen = "Listen";
                    const ConnectedToEuglena = "ConnectedToEuglena";
                    const DisconnectedFromEuglena = "DisconnectedFromEuglena";
                    const ConnectToEuglena = "ConnectToEuglena";
                    const ReturnCurrentTime = "ReturnCurrentTime";
                    const ReturnIfConnectedToTheInternet = "ReturnIfConnectedToTheInternet";
                    const OrganelleHasComeToLife = "OrganelleHasComeToLife";
                    const Proxy = "Proxy";
                    const Coordinate = "Coordinate";
                    const SetTime = "SetTime";
                    const DbIsOnline = "DbIsOnline";
                    const NetOrganelleSap = "NetOrganelleSap";
                    const NetClientOrganelleSap = "NetClientOrganelleSap";
                    const WebOrganelleSap = "WebOrganelleSap";
                    const GPSOrganelleSap = "GPSOrganelleSap";
                    const WebUIOrganelleSap = "WebUIOrganelleSap";
                    const DbOrganelleSap = "DbOrganelleSap";
                    const CytoplasmInfo = "CytoplasmInfo";
                    const ReadParticles = "ReadParticles";
                    const Subscribe = "Subscribe";
                    const SubscribtionDict = "SubscribtionDict";
                    const Password = "Password";
                    const AddGene = "AddGene";
                    const TimeChanged = "TimeChanged";
                    const ExceptionOccurred = "ExceptionOccurred";
                    const SaveParticle = "SaveParticle";
                    const ReadParticle = "ReadParticle";
                    const RemoveParticle = "RemoveParticle";
                    const RemoveParticles = "RemoveParticles";
                }
                namespace organelles {
                    const WebUIOrganelle = "WebUIOrganelle";
                    const GPSOrganelle = "GPSOrganelle";
                    const NetOrganelle = "NetOrganelle";
                    const TimeOrganelle = "TimeOrganelle";
                    const WebOrganelle = "WebOrganelle";
                    const DbOrganelle = "DbOrganelle";
                    const NetClientOrganelle = "NetClientOrganelle";
                    const Cytoplasm = "Cytoplasm";
                }
            }
            namespace organelle {
                import Organelle = euglena.being.alive.Organelle;
                abstract class TimeOrganelle extends Organelle<euglena.being.alive.particles.SapContent> {
                    constructor(className: string);
                }
                abstract class NetOrganelle extends Organelle<particle.NetOrganelleSapContent> {
                    constructor(className: string);
                }
                abstract class WebOrganelle extends Organelle<particle.WebOrganelleSapContent> {
                    constructor(className: string);
                }
                abstract class WebUIOrganelle extends Organelle<particle.WebUIOrganelleSapContent> {
                    constructor(className: string);
                }
                abstract class DbOrganelle extends Organelle<particle.DbOrganelleSapContent> {
                    constructor(className: string);
                }
                abstract class NetClientOrganelle extends Organelle<particle.NetClientOrganelleSapContent> {
                    constructor(className: string);
                }
                abstract class GPSOrganelle extends Organelle<particle.GPSOrganelleSapContent> {
                    constructor(className: string);
                }
            }
            namespace particle {
                interface MatchedParticlesContent {
                    particleRef: Particle;
                    result: Particle[];
                }
                class Password extends ParticleV2<string> {
                    constructor(euglenaName: string, value: string);
                }
                class SubscribtionDict extends ParticleV2<euglena.sys.type.Map<any, string[]>> {
                    constructor(of: string);
                }
                class Subscribe extends ParticleV2<Particle> {
                    constructor(particleReference: Particle, of: string);
                }
                class Coordinate extends ParticleV2<{
                    lat: number;
                    lon: number;
                }> {
                    constructor(lat: number, lon: number, of: string);
                }
                class WhoAmI extends ParticleV2<void> {
                    constructor(of: string);
                }
                interface WebUIOrganelleSapContent {
                    euglenaName: string;
                    rootComponentUrl: string;
                }
                interface NetClientOrganelleSapContent {
                    euglenaName: string;
                }
                class NetClientOrganelleSap extends ParticleV2<NetClientOrganelleSapContent> {
                    constructor(of: string);
                }
                class WebUIOrganelleSap extends ParticleV2<WebUIOrganelleSapContent> {
                    constructor(content: WebUIOrganelleSapContent, of: string);
                }
                interface WebOrganelleSapContent {
                    euglenaName: string;
                    euglenaInfo: particle.EuglenaInfo;
                    singlePageApp: boolean;
                }
                class WebOrganelleSap extends ParticleV2<WebOrganelleSapContent> {
                    constructor(content: WebOrganelleSapContent, of: string);
                }
                interface GPSOrganelleSapContent {
                    euglenaName: string;
                    port: string;
                }
                class GPSOrganelleSap extends ParticleV2<GPSOrganelleSapContent> {
                    constructor(content: GPSOrganelleSapContent, of: string);
                }
                interface NetOrganelleSapContent {
                    euglenaName: string;
                    euglenaInfo: particle.EuglenaInfo;
                }
                class NetOrganelleSap extends ParticleV2<NetOrganelleSapContent> {
                    constructor(content: NetOrganelleSapContent, of: string);
                }
                interface DbOrganelleSapContent {
                    euglenaName: string;
                    url: string;
                    port: number;
                    databaseName: string;
                }
                class DbOrganelleSap extends ParticleV2<DbOrganelleSapContent> {
                    constructor(content: DbOrganelleSapContent, of: string);
                }
                class DbIsOnline extends being.particle.VoidParticle {
                    constructor(of: string);
                }
                import VoidParticle = euglena_template.being.particle.VoidParticle;
                class ReturnCurrentTime extends VoidParticle {
                    constructor(of: string);
                }
                class ReturnIfConnectedToTheInternet extends VoidParticle {
                    constructor(of: string);
                }
                class OrganelleHasComeToLife extends ParticleV2<{
                    organelleName: string;
                }> {
                    constructor(organelleName: string, of: string);
                }
                class Domain extends ParticleV2<string> {
                    constructor(domain: string, of: string);
                }
                class Authenticate extends euglena.being.ParticleV2<{
                    euglenaName: string;
                    password: string;
                }> {
                    constructor(euglenaName: string, password: string, of: string);
                }
                class Proxy extends ParticleV2<{
                    from: string;
                    to: string;
                }> {
                    constructor(from: string, to: string, expireTime: number, of: string);
                }
                class SetTime extends ParticleV2<euglena.sys.type.Time> {
                    constructor(time: euglena.sys.type.Time, of: string);
                }
                class ConnectToEuglena extends euglena.being.ParticleV2<alive.particle.EuglenaInfo> {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
                }
                class ConnectedToEuglena extends euglena.being.ParticleV2<alive.particle.EuglenaInfo> {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
                }
                class DisconnectedFromEuglena extends euglena.being.ParticleV2<alive.particle.EuglenaInfo> {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
                }
                class Listen extends being.particle.VoidParticle {
                    constructor(of: string);
                }
                interface ThrowImpactContent {
                    to: alive.particle.EuglenaInfo;
                    impact: Impact;
                }
                class ThrowImpact extends euglena.being.ParticleV2<{
                    to: alive.particle.EuglenaInfo;
                    impact: Impact;
                }> {
                    constructor(content: {
                        to: alive.particle.EuglenaInfo;
                        impact: Impact;
                    }, of: string);
                }
                class EuglenaInfo extends euglena.being.ParticleV2<{
                    name: string;
                    url: string;
                }> {
                    constructor(content: {
                        name: string;
                        url: string;
                        port: string;
                    }, of: string);
                }
                class CytoplasmInfo extends euglena.being.ParticleV2<{
                    particles: Particle[];
                    chromosome: euglena.being.alive.dna.Gene[];
                }> {
                    constructor(content: {
                        particles: Particle[];
                        chromosome: euglena.being.alive.dna.Gene[];
                    }, of: string);
                }
                class OrganelleList extends ParticleV2<Array<string>> {
                    constructor(content: Array<string>, of: string);
                }
                class Exception extends euglena.being.ParticleV2<euglena.sys.type.Exception> {
                    constructor(content: euglena.sys.type.Exception, of: string);
                }
                class Time extends euglena.being.ParticleV2<euglena.sys.type.Time> {
                    constructor(content: euglena.sys.type.Time, of: string);
                }
                class Acknowledge extends being.particle.VoidParticle {
                    constructor(of: string);
                }
                class ConnectedToTheInternet extends being.particle.BooleanParticle {
                    constructor(content: boolean, of: string);
                }
                class EuglenaHasBeenBorn extends being.particle.BooleanParticle {
                    constructor(of: string);
                }
                class SaveParticle extends ParticleV2<Particle> {
                    constructor(content: Particle, of: string);
                }
                class ReadParticle extends ParticleV2<Particle> {
                    constructor(content: Particle, of: string);
                }
                class ReadParticles extends ParticleV2<Particle> {
                    constructor(particleRef: Particle, of: string);
                }
                class Particles extends ParticleV2<Particle[]> {
                    constructor(particles: Particle[], of: string);
                }
                interface RemoveParticleContent {
                    name: string;
                    of: string;
                }
                class RemoveParticle extends ParticleV2<Particle> {
                    constructor(ref: Particle, of: string);
                }
                class RemoveParticles extends ParticleV2<Particle> {
                    constructor(ref: Particle, of: string);
                }
                interface DoesParticleExistContent {
                    name: string;
                    of: string;
                }
                class DoesParticleExist extends ParticleV2<DoesParticleExistContent> {
                    constructor(content: DoesParticleExistContent, of: string);
                }
                class ImpactReceived extends euglena.being.ParticleV2<Impact> {
                    constructor(content: Impact, of: string);
                }
            }
        }
    }
}
