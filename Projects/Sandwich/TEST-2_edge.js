/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '550px', '400px', 'auto', 'auto'],
                            fill: ["rgba(41,71,149,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['77px', '400px', '395', '373', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['115px', '238px', '166px', '135px', 'auto', 'auto'],
                                text: "A<br> PRODUCTION <br>BY ALESSANDRO GUARESTI",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(192,168,62,1.00)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['0px', '137px', '395px', '77px', 'auto', 'auto'],
                                text: "WITH HELP FROM <br>THE BIG DANK PRODUCTIONS",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(192,168,62,1)", "400", "none solid rgb(192, 168, 62)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['0px', '0px', '395px', '77px', 'auto', 'auto'],
                                text: "SANDWICH",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [69, "px"], "rgba(192,168,62,1)", "400", "none solid rgb(192, 168, 62)", "normal", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'Sandwitch',
                            type: 'image',
                            rect: ['0', '0', '280px', '180px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0.25',
                            fill: ["rgba(0,0,0,0)",im+"Sandwitch.jpg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid13",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '238px',
                            '238px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            5000,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(41,71,149,1.00)'
                        ],
                        [
                            "eid26",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Sandwitch}",
                            '0',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${Sandwitch}",
                            '0',
                            '0.25'
                        ],
                        [
                            "eid27",
                            "opacity",
                            5500,
                            500,
                            "linear",
                            "${Sandwitch}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid28",
                            "opacity",
                            6000,
                            500,
                            "linear",
                            "${Sandwitch}",
                            '0.5',
                            '0.75'
                        ],
                        [
                            "eid29",
                            "opacity",
                            6500,
                            500,
                            "linear",
                            "${Sandwitch}",
                            '0.75',
                            '1'
                        ],
                        [
                            "eid14",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${Group}",
                            '-373px',
                            '400px'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${Sandwitch}",
                            '0px',
                            '135px'
                        ],
                        [
                            "eid25",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${Sandwitch}",
                            '0px',
                            '110px'
                        ],
                        [
                            "eid12",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '135px',
                            '135px'
                        ],
                        [
                            "eid16",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '77px',
                            '77px'
                        ],
                        [
                            "eid17",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${Group}",
                            '77px',
                            '77px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("TEST-2_edgeActions.js");
})("EDGE-6599033");
