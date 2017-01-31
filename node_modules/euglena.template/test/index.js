/// <reference path="../typings/index.d.ts" />
"use strict";
var index_1 = require("../src/index");
var chai = require("chai");
var StaticTools = index_1.euglena_template.being.subscribtion.StaticTools;
describe("euglena.template", function () {
    describe("being", function () {
        describe("subscribtion", function () {
            describe("StaticTools", function () {
                it("addSubscribtion", function () {
                    //given
                    var particle = { meta: { name: "Token" } };
                    var euglenaName = "idcore";
                    //when
                    var result = StaticTools.addSubscribtion(particle, euglenaName);
                    //then
                    var tools = StaticTools;
                    chai.expect(tools["subscribtionDict"]).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]).property('particle', particle);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.contains(euglenaName);
                });
                it("removeSubscribtions", function () {
                    //given
                    var particle = { meta: { name: "Token" } };
                    var euglenaName = "idcore";
                    var result = StaticTools.addSubscribtion(particle, euglenaName);
                    //then
                    var tools = StaticTools;
                    chai.expect(tools["subscribtionDict"]).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]).property('particle', particle);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.contains(euglenaName);
                    //when
                    StaticTools.removeSubscribtions(particle);
                    //after then
                    chai.expect(tools["subscribtionDict"]).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]).property('particle', particle);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.has.length(0);
                });
            });
        });
    });
});
//# sourceMappingURL=index.js.map