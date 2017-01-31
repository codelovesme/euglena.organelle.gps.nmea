
/// <reference path="../typings/index.d.ts" />


import {euglena} from "euglena";
import {euglena_template} from "../src/index";

import * as chai from "chai";

import Particle = euglena.being.Particle;

import Class = euglena.js.Class;
import StaticTools = euglena_template.being.subscribtion.StaticTools;

describe("euglena.template", () => {
    describe("being", () => {
        describe("subscribtion", () => {
            describe("StaticTools", () => {
                it("addSubscribtion", () => {
                    //given
                    let particle = { meta: { name: "Token" } };
                    let euglenaName = "idcore";
                    //when
                    let result = StaticTools.addSubscribtion(particle as euglena.being.Particle, euglenaName);
                    //then
                    let tools :any = StaticTools;
                    chai.expect(tools["subscribtionDict"]).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]).property('particle',particle);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.contains(euglenaName);
                });
                it("removeSubscribtions", () => {
                    //given
                    let particle = { meta: { name: "Token" } };
                    let euglenaName = "idcore";
                    let result = StaticTools.addSubscribtion(particle as euglena.being.Particle, euglenaName);
                    //then
                    let tools :any = StaticTools;
                    chai.expect(tools["subscribtionDict"]).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]).property('particle',particle);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.contains(euglenaName);
                    //when
                    StaticTools.removeSubscribtions(particle as Particle);
                    //after then
                    chai.expect(tools["subscribtionDict"]).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]).property('particle',particle);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.has.length(0);

                });
            });
        });
    });
});