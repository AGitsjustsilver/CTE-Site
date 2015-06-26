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
                            id: 'Text',
                            type: 'text',
                            rect: ['5px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Check out this dank meme",
                            font: ['Arial, Helvetica, sans-serif', [75, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Pepe',
                            type: 'image',
                            rect: ['225px', '182px', '450px', '436px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Pepe.png",'0px','0px'],
                            transform: [[],[],[],['1.54','1.54']]
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['2px', '0px', '917px', '800px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(150,198,125,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Pepe2',
                            display: 'block',
                            type: 'image',
                            rect: ['34px', '36px', '224px', '224px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pepe.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            display: 'none',
                            type: 'rect',
                            rect: ['-10px', '0px', '910px', '806px', 'auto', 'auto'],
                            opacity: '0.5',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['154px', '134px', '616px', '452px', 'auto', 'auto'],
                            opacity: '0',
                            text: "THE <br>END",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [154, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '568px', '784px', '195px', 'auto', 'auto'],
                            opacity: '1',
                            text: "There once was a frog named PEPE",
                            font: ['Arial, Helvetica, sans-serif', [94, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['84px', '100px', '676px', '574px', 'auto', 'auto'],
                            opacity: '0',
                            text: "He died a most grusome death",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [154, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '800px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(125,127,198,1.00)",[270,[['rgba(125,127,198,1.00)',0],['rgba(103,64,204,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 11000,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${Text3}",
                            '154px',
                            '153px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Pepe}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${Pepe}",
                            '0.000000',
                            '0.55284552845528'
                        ],
                        [
                            "eid11",
                            "opacity",
                            6000,
                            1000,
                            "linear",
                            "${Pepe}",
                            '0.55284552845528',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "font-size",
                            9000,
                            0,
                            "linear",
                            "${Text4}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid13",
                            "background-color",
                            7000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(150,198,125,1.00)',
                            'rgba(150,198,125,1.00)'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${Text}",
                            '5px',
                            '2px'
                        ],
                        [
                            "eid53",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid60",
                            "width",
                            7000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '917px',
                            '917px'
                        ],
                        [
                            "eid22",
                            "left",
                            7000,
                            1000,
                            "linear",
                            "${Pepe2}",
                            '34px',
                            '214px'
                        ],
                        [
                            "eid25",
                            "left",
                            8000,
                            500,
                            "linear",
                            "${Pepe2}",
                            '214px',
                            '338px'
                        ],
                        [
                            "eid26",
                            "left",
                            8500,
                            500,
                            "linear",
                            "${Pepe2}",
                            '338px',
                            '572px'
                        ],
                        [
                            "eid1",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${Text}",
                            '0px',
                            '710px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            8500,
                            500,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${Pepe2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            7145,
                            0,
                            "linear",
                            "${Pepe2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${Pepe2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid33",
                            "top",
                            7000,
                            0,
                            "linear",
                            "${Text2}",
                            '568px',
                            '568px'
                        ],
                        [
                            "eid31",
                            "scaleY",
                            7000,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid65",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "left",
                            7000,
                            0,
                            "linear",
                            "${Text2}",
                            '48px',
                            '48px'
                        ],
                        [
                            "eid44",
                            "opacity",
                            9000,
                            500,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid45",
                            "opacity",
                            9500,
                            500,
                            "linear",
                            "${Rectangle2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid23",
                            "top",
                            7000,
                            1000,
                            "linear",
                            "${Pepe2}",
                            '36px',
                            '186px'
                        ],
                        [
                            "eid24",
                            "top",
                            8000,
                            500,
                            "linear",
                            "${Pepe2}",
                            '186px',
                            '64px'
                        ],
                        [
                            "eid27",
                            "top",
                            8500,
                            500,
                            "linear",
                            "${Pepe2}",
                            '64px',
                            '162px'
                        ],
                        [
                            "eid32",
                            "font-size",
                            7000,
                            0,
                            "linear",
                            "${Text2}",
                            '94px',
                            '94px'
                        ],
                        [
                            "eid52",
                            "color",
                            9000,
                            0,
                            "linear",
                            "${Text4}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid56",
                            "opacity",
                            9000,
                            1000,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            10000,
                            500,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "scaleX",
                            7000,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            7145,
                            355,
                            "linear",
                            "${Pepe2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid63",
                            "top",
                            10000,
                            1000,
                            "linear",
                            "${Text3}",
                            '134px',
                            '174px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("PEPE_edgeActions.js");
})("EDGE-6909694");
