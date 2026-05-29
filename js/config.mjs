import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "company" : "Logius",
        "name" : "Edwin Wisse",
        "url" : "https://www.logius.nl"
      } ],
  editors: [ 
      { 
        "company" : "Logius",
        "name" : "Gül Işik",
        "url" : "https://www.logius.nl"
      },
      { 
        "company" : "Logius",
        "name" : "Edwin Wisse",
        "url" : "https://www.logius.nl"
      }
    ],
  github: "https://github.com/Logius-standaarden/BOMOS-voorbeeld-beheermodel",
  nl_markdownCodeClass: "code",
  nl_markdownTableClass: "dkkvs",
  previousPublishDate: "2020-12-31",
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
