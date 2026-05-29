import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "company" : "Aedes",
        "name" : "Jan Brinkkemper",
        "url" : "https://www.aedes.nl"
      } ],
  editors: [ 
      { 
        "company" : "Aedes",
        "name" : "Jan Brinkkemper",
        "url" : "https://www.aedes.nl"
      }
    ],
  github: "https://github.com/JanAedes/Vera-beheermodel",
  nl_markdownCodeClass: "code",
  nl_markdownTableClass: "dkkvs",
  previousPublishDate: "2026-05-29",
  previousPublishVersion: "0.1",
  pubDomain: "bomos",
  publishDate: "2022-06-01",
  publishVersion: "1.0",
  // TODO: verwijder voor publicatie
  latestVersion: "https://logius-standaarden.github.io/BOMOS-voorbeeld-beheermodel/",
  prevVersion: [],
  shortName: "template",
  specStatus: "WV",
  specType: "HR"
});
