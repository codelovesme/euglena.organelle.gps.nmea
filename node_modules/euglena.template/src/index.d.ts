/**
 * Created by codelovesme on 6/19/2015.
 */
import { euglena } from "euglena";
import Impact = euglena.being.interaction.Impact;
export declare module euglena_template {
    namespace being {
        namespace particle {
            abstract class BooleanParticle extends euglena.being.Particle {
                constructor(meta: any, data: Boolean);
            }
            abstract class VoidParticle extends euglena.being.Particle {
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
            namespace constants {
                namespace particles {
                    const Domain = "Domain";
                    const WhoAmI = "WhoAmI";
                    const ParticlesOf = "ParticlesOf";
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
                    const ReadMatchedParticles = "ReadMatchedParticles";
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
                namespace impacts {
                    const AddGene = "AddGene";
                    const TimeChanged = "TimeChanged";
                    const ExceptionOccurred = "ExceptionOccurred";
                    const SaveParticle = "SaveParticle";
                    const ReadParticle = "ReadParticle";
                    const ReadParticles = "ReadParticles";
                    const ReadParticlesOf = "ReadParticlesOf";
                    const RemoveParticle = "RemoveParticle";
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
                class Coordinate extends Particle {
                    constructor(lat: string, lon: string, of: string);
                }
                class WhoAmI extends Particle {
                    constructor();
                }
                interface NetClientOrganelleSapContent {
                    euglenaName: string;
                }
                interface WebUIOrganelleSapContent {
                    euglenaName: string;
                    rootComponentUrl: string;
                }
                class NetClientOrganelleSap extends Particle {
                    constructor(content: NetClientOrganelleSapContent, of: string);
                }
                class WebUIOrganelleSap extends Particle {
                    constructor(content: WebUIOrganelleSapContent, of: string);
                }
                interface WebOrganelleSapContent {
                    euglenaName: string;
                    euglenaInfo: particle.EuglenaInfo;
                    singlePageApp: boolean;
                }
                class WebOrganelleSap extends Particle {
                    constructor(content: WebOrganelleSapContent, of: string);
                }
                interface GPSOrganelleSapContent {
                    euglenaName: string;
                    port: string;
                }
                class GPSOrganelleSap extends Particle {
                    constructor(content: GPSOrganelleSapContent, of: string);
                }
                interface NetOrganelleSapContent {
                    euglenaName: string;
                    euglenaInfo: particle.EuglenaInfo;
                }
                class NetOrganelleSap extends Particle {
                    constructor(content: NetOrganelleSapContent, of: string);
                }
                interface DbOrganelleSapContent {
                    euglenaName: string;
                    url: string;
                    port: number;
                    databaseName: string;
                }
                class DbOrganelleSap extends Particle {
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
                class OrganelleHasComeToLife extends Particle {
                    constructor(organelleName: string, of: string);
                }
                class Domain extends Particle {
                    constructor(domain: string, of: string);
                }
                class Authenticate extends euglena.being.Particle {
                    constructor(euglenaName: string, password: string);
                }
                class Proxy extends Particle {
                    constructor(from: string, to: string, expireTime: euglena.sys.type.Time);
                }
                class SetTime extends Particle {
                    constructor(time: euglena.sys.type.Time, of: string);
                }
                class ConnectToEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
                }
                class ConnectedToEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
                }
                class DisconnectedFromEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
                }
                class Listen extends being.particle.VoidParticle {
                    constructor(of: string);
                }
                interface ThrowImpactContent {
                    to: alive.particle.EuglenaInfo;
                    impact: Impact;
                }
                class ThrowImpact extends euglena.being.Particle {
                    constructor(content: {
                        to: alive.particle.EuglenaInfo;
                        impact: Impact;
                    }, of: string);
                }
                class EuglenaInfo extends euglena.being.Particle {
                    constructor(content: {
                        name: string;
                        url: string;
                        port: string;
                    }, of: string);
                }
                class CytoplasmInfo extends euglena.being.Particle {
                    constructor(content: {
                        particles: Particle[];
                        chromosome: euglena.being.alive.dna.Gene[];
                    }, of: string);
                }
                class OrganelleList extends Particle {
                    constructor(content: Array<string>, of: string);
                }
                class Token extends Particle {
                    constructor(content: string, of: string, for_: string);
                }
                class Exception extends euglena.being.Particle {
                    constructor(content: euglena.sys.type.Exception, of: string);
                }
                class Time extends euglena.being.Particle {
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
                class SaveParticle extends Particle {
                    constructor(content: Particle, of: string);
                }
                class ReadParticle extends Particle {
                    constructor(content: euglena.being.alive.dna.ParticleReference, of: string);
                }
                class ReadParticles extends Particle {
                    constructor(particleName: string, of: string);
                }
                class ReadParticlesOf extends Particle {
                    constructor(whose: string, of: string);
                }
                class ReadMatchedParticles extends Particle {
                    constructor(particleRef: Particle, of: string);
                }
                class ParticlesOf extends Particle {
                    constructor(particles: Particle[], of: string);
                }
                interface RemoveParticleContent {
                    name: string;
                    of: string;
                }
                class RemoveParticle extends Particle {
                    constructor(ref: Particle, of: string);
                }
                interface DoesParticleExistContent {
                    name: string;
                    of: string;
                }
                class DoesParticleExist extends Particle {
                    constructor(content: DoesParticleExistContent, of: string);
                }
                class ImpactReceived extends euglena.being.Particle {
                    constructor(content: Impact, of: string);
                }
            }
        }
    }
    namespace reference {
        namespace being {
            namespace interaction {
                const Impact: Impact;
            }
            const Particle: euglena.being.Particle;
        }
    }
}
