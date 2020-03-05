var labelType, useGradients, nativeTextSupport, animate;

(function() {
    var ua = navigator.userAgent,
        iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
        typeOfCanvas = typeof HTMLCanvasElement,
        nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
        textSupport = nativeCanvasSupport &&
        (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff)) ? 'Native' : 'HTML';
    nativeTextSupport = labelType == 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
    elem: false,
    write: function(text) {
        if (!this.elem)
            this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};

// $("#infovis-canvas").attr('tabindex', 1);

function init() {
    //init data
    var json = {
        id: "node02",
        name: "Start",
        data: {},
        children: [{
            // Left Branch
            id: "node1.1",
            name: "Gram+",
            data: {},
            children: [{
                id: "node2.1",
                name: "High G+C",
                data: {},
                children: [{
                    id: "node3.1",
                    name: "Pathogenic",
                    data: {},
                    children: [{
                        id: "node4.1",
                        name: "Acid Fast",
                        data: {},
                        children: [{
                            id: "node5.1",
                            name: "Lung Infection",
                            data: {},
                            children: [{
                                id: "node6.1",
                                name: "Slow Grower",
                                data: {},
                                children: [{
                                    id: "node71",
                                    name: "Mycobacterium tuberculosis",
                                    data: {},
                                    children: []
                                }, ]
                            }, {
                                id: "node8.1",
                                name: "Fastidious",
                                data: {},
                                children: []
                            }, ]
                        }, {
                            id: "node9.1",
                            name: "Opportunistic infection",
                            data: {},
                            children: []
                        }, ]
                    }, {
                        id: "node10.1",
                        name: "Non-Acid Fast",
                        data: {},
                        children: []
                    }, ]
                }, {
                    id: "node11.1",
                    name: "Non-pathogenic",
                    data: {},
                    children: [{
                        id: "node12.1",
                        name: "Aerobic",
                        data: {},
                        children: [{
                            id: "node13.1",
                            name: "Antibiotic production",
                            data: {},
                            children: [{
                                id: "node73",
                                name: "Staphylococcus aureus",
                                data: {},
                                chlidren: []
                            }]
                        }]
                    }, {
                        id: "node14.1",
                        name: "Facultatively anaerobic",
                        data: {},
                        children: []
                    }, ]
                }, ]
            }, {
                id: "node1.2",
                name: "Low G+C",
                data: {},
                children: [{
                    id: "node2.2",
                    name: "Cocci",
                    data: {},
                    children: [{
                        id: "node3.2",
                        name: "Pathogenic",
                        data: {},
                        children: [{
                            id: "node4.2",
                            name: "Catalase+",
                            data: {},
                            children: [{
                                id: "node5.2",
                                name: "Mannitol+",
                                data: {},
                                children: [{
                                    id: "node6.2",
                                    name: "Yellow pigment",
                                    data: {},
                                    children: []
                                }, {
                                    id: "node7.2",
                                    name: "Golden pigment",
                                    data: {},
                                    children: [{
                                        id: "node72",
                                        name: "Streptomyces coelicolor",
                                        data: {},
                                        children: []
                                    }]
                                }]
                            }, {
                                id: "node8.2",
                                name: "Mannitol-",
                                data: {},
                                children: []
                            }]
                        }, {
                            id: "node9.2",
                            name: "Catalase-",
                            data: {},
                            children: [{
                                id: "node10.2",
                                name: "Non-hemolytic",
                                data: {},
                                children: []
                            }, {
                                id: "node11.2",
                                name: "Beta-hemolytic",
                                data: {},
                                children: [{
                                    id: "node12.2",
                                    name: "Group B antigen",
                                    data: {},
                                    children: []
                                }, {
                                    id: "node13.2",
                                    name: "Group A antigen",
                                    data: {},
                                    children: [{
                                        id: "node74",
                                        name: "Streptococcus pyogenes",
                                        data: {},
                                        children: []
                                    }]
                                }]
                            }]
                        }]
                    }, {
                        id: "node14.2",
                        name: "Non-pathogenic",
                        data: {},
                        children: []
                    }, ]
                }, {
                    id: "node15.2",
                    name: "Rods",
                    data: {},
                    children: [{
                        id: "node16.2",
                        name: "Pathogenic",
                        data: {},
                        children: [{
                            id: "node17.2",
                            name: "Spore-forming",
                            data: {},
                            children: [{
                                id: "node18.2",
                                name: "Pathogen of insects",
                                data: {},
                                children: []
                            }, {
                                id: "node19.2",
                                name: "Pathogen of humans",
                                data: {},
                                children: [{
                                    id: "node75",
                                    name: "Bacillus anthracis",
                                    data: {},
                                    children: []
                                }]
                            }]
                        }, {
                            id: "node20.2",
                            name: "Non-spore forming",
                            data: {},
                            children: []
                        }]
                    }, {
                        id: "node.21.2",
                        name: "Non-pathogenic",
                        data: {},
                        children: [{
                            id: "node 22.2",
                            name: "Fermenter",
                            data: {},
                            children: [{
                                id: "node76",
                                name: "Lactobacillus acidophilus",
                                data: {},
                                children: []
                            }]
                        }, {
                            id: "node 23.2",
                            name: "Non-fermenter",
                            data: {},
                            children: []
                        }]
                    }]
                }]
            }]
        }, {
            // Right Branch
            id: "node125",
            name: "Gram-",
            data: {},
            children: [{
                id: "node226",
                name: "Cocci",
                data: {},
                children: [{
                    id: "node327",
                    name: "Pathogenic",
                    data: {},
                    children: [{
                        id: "node428",
                        name: "Oxidase+",
                        data: {},
                        children: [{
                            id: "node528",
                            name: "Glucose+",
                            data: {},
                            children: [{
                                id: "node77",
                                name: "Neiserria meningitidis",
                                data: {},
                                children: []
                            }]
                        }, {
                            id: "node628",
                            name: "Glucose-",
                            data: {},
                            children: []
                        }]
                    }, {
                        id: "node429",
                        name: "Oxidase-",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node332",
                    name: "Non-Pathogenic",
                    data: {},
                    children: []
                }]
            }, {
                id: "node258",
                name: "Rods",
                data: {},
                children: [{
                    id: "node359",
                    name: "&#945",
                    data: {},
                    children: [{
                        id: "node463",
                        name: "Pathogenic",
                        data: {},
                        children: [{
                            id: "node563",
                            name: "Non-motile",
                            data: {},
                            children: [{
                                id: "node469",
                                name: "Culturable",
                                data: {},
                                children: [{
                                    id: "node378",
                                    name: "Catalase-",
                                    data: {},
                                    children: []
                                }, {
                                    id: "node379",
                                    name: "Catalase+",
                                    data: {},
                                    children: [{
                                        id: "node78",
                                        name: "Brucella melitensis",
                                        data: {},
                                        children: []
                                    }]
                                }]
                            }, {
                                id: "node577",
                                name: "Non-culturable",
                                data: {},
                                children: []
                            }]
                        }, {
                            id: "node663",
                            name: "Motile",
                            data: {},
                            children: []
                        }]
                    }, {
                        id: "node464",
                        name: "Non-pathogenic",
                        data: {},
                        children: [{
                            id: "node411",
                            name: "Non-nitrogen fixation",
                            data: {},
                            children: []
                        }, {
                            id: "node413",
                            name: "Nitrogen fixation",
                            data: {},
                            children: [{
                                id: "node421",
                                name: "Glucose +",
                                data: {},
                                children: [{
                                    id: "node79",
                                    name: "Rhizobium leguminosarum",
                                    data: {},
                                    children: []
                                }]
                            }, {
                                id: "node423",
                                name: "Glucose -",
                                data: {},
                                children: []
                            }]
                        }]
                    }]
                }, {
                    id: "node459",
                    name: "&#946",
                    data: {},
                    children: [{
                        id: "node461",
                        name: "Pathogenic",
                        data: {},
                        children: [{
                            id: "node416",
                            name: "Motile",
                            data: {},
                            children: [{
                                id: "node433",
                                name: "Toxin -",
                                data: {},
                                children: []
                            }, {
                                id: "node434",
                                name: "Toxin +",
                                data: {},
                                children: [{
                                    id: "node80",
                                    name: "Bordatella pertussis",
                                    data: {},
                                    children: []
                                }]
                            }]
                        }, {
                            id: "node461",
                            name: "Non-motile",
                            data: {},
                            children: []
                        }]
                    }, {
                        id: "node462",
                        name: "Non-pathogenic",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node559",
                    name: "&#947",
                    data: {},
                    children: [{
                        id: "node661",
                        name: "Pathogenic",
                        data: {},
                        children: [{
                            id: "node663",
                            name: "Non-motile",
                            data: {},
                            children: []
                        }, {
                            id: "node664",
                            name: "Motile",
                            data: {},
                            children: [{
                                id: "node665",
                                name: "Aerobic",
                                data: {},
                                children: [{
                                    id: "node667",
                                    name: "Glucose +",
                                    data: {},
                                    children: [{
                                        id: "node669",
                                        name: "Citrate +",
                                        data: {},
                                        children: [{
                                            id: "node671",
                                            name: "Oxidase +",
                                            data: {},
                                            children: [{
                                                id: "node81",
                                                name: "Pseudomonas aeruginosa",
                                                data: {},
                                                children: []
                                            }]
                                        }, {
                                            id: "node672",
                                            name: "Oxidase -",
                                            data: {},
                                            children: []
                                        }]
                                    }, {
                                        id: "node670",
                                        name: "Citrate -",
                                        data: {},
                                        children: []
                                    }]
                                }, {
                                    id: "node668",
                                    name: "Glucose -",
                                    data: {},
                                    children: []
                                }]
                            }, {
                                id: "node666",
                                name: "Faculatively anaerobic",
                                data: {},
                                children: [{
                                    id: "node673",
                                    name: "Lactose+",
                                    data: {},
                                    children: [{
                                        id: "node675",
                                        name: "Glocuse+",
                                        data: {},
                                        children: [{
                                            id: "node677",
                                            name: "Citrate-",
                                            data: {},
                                            children: [{
                                                id: "node82",
                                                name: "Escherichia coli",
                                                data: {},
                                                children: []
                                            }]
                                        }, {
                                            id: "node678",
                                            name: "Citrate+",
                                            data: {},
                                            children: []
                                        }]
                                    }, {
                                        id: "node676",
                                        name: "Glucose-",
                                        data: {},
                                        children: []
                                    }]
                                }, {
                                    id: "node674",
                                    name: "Lactose-",
                                    data: {},
                                    children: [{
                                        id: "node679",
                                        name: "Citrate+",
                                        data: {},
                                        children: [{
                                            id: "node681",
                                            name: "H2S+",
                                            data: {},
                                            children: [{
                                                id: "node83",
                                                name: "Salmonella typhimurium",
                                                data: {},
                                                children: []
                                            }]
                                        }, {
                                            id: "node682",
                                            name: "H2S-",
                                            data: {},
                                            children: []
                                        }]
                                    }, {
                                        id: "node680",
                                        name: "Citrate-",
                                        data: {},
                                        children: []
                                    }]
                                }]
                            }]
                        }]
                    }, {
                        id: "node662",
                        name: "Non-pathogenic",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node659",
                    name: "&#948",
                    data: {},
                    children: [{
                        id: "node819",
                        name: "Non-pathogenic",
                        data: {},
                        children: [{
                            id: "node821",
                            name: "Motile",
                            data: {},
                            children: [{
                                id: "node823",
                                name: "Flagella",
                                data: {},
                                children: []
                            }, {
                                id: "node823",
                                name: "Gliding",
                                data: {},
                                children: [{
                                    id: "node824",
                                    name: "Fruiting bodies",
                                    data: {},
                                    children: [{
                                        id: "node84",
                                        name: "Myxococcus xanthus",
                                        data: {},
                                        children: []
                                    }]
                                }, {
                                    id: "node825",
                                    name: "No",
                                    data: {},
                                    children: []
                                }]
                            }]
                        }, {
                            id: "node822",
                            name: "Non-motile",
                            data: {},
                            children: []
                        }]
                    }, {
                        id: "node820",
                        name: "Pathogenic",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node759",
                    name: "&#949",
                    data: {},
                    children: [{
                        id: "node719",
                        name: "Pathogenic",
                        data: {},
                        children: [{
                            id: "node721",
                            name: "Non-motile",
                            data: {},
                            children: []
                        }, {
                            id: "node722",
                            name: "Motile",
                            data: {},
                            children: [{
                                id: "node723",
                                name: "Multiple flagella",
                                data: {},
                                children: [{
                                    id: "node725",
                                    name: "Catalase+",
                                    data: {},
                                    children: [{
                                        id: "node727",
                                        name: "Urease-",
                                        data: {},
                                        children: []
                                    }, {
                                        id: "node728",
                                        name: "Urease+",
                                        data: {},
                                        children: [{
                                            id: "node85",
                                            name: "Helicobacter pylori",
                                            data: {},
                                            children: []
                                        }]
                                    }]
                                }, {
                                    id: "node726",
                                    name: "Catalase-",
                                    data: {},
                                    children: []
                                }]
                            }, {
                                id: "node724",
                                name: "Polar flagella",
                                data: {},
                                children: []
                            }]
                        }]
                    }, {
                        id: "node720",
                        name: "Non-pathogenic",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }, ]
    };
    //end
    //init Spacetree
    //Create a new ST instance
    var st = new $jit.ST({
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 550,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 80,
        offsetX: 50,
        //enable panning
        Navigation: {
            enable: true,
            panning: true,
            zooming: 50
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            height: 50,
            width: 100,
            type: 'rectangle',
            color: '#d5dae1',
            overridable: true
        },

        Edge: {
            type: 'bezier',
            overridable: true
        },

        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node) {
            label.id = node.id;
            label.innerHTML = node.name;
            label.onclick = function() {
                if (normal.checked) {
                    st.onClick(node.id)
                } else {
                    st.setRoot(node.id)
                }
            };
            //set label styles
            var style = label.style;
            style.width = 100 + 'px';
            style.height = 40 + 'px';
            style.cursor = 'pointer';
            style.color = '#000';
            style.fontSize = '1em';
            style.textAlign = 'center';
            style.paddingTop = '8px';
        },

        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node) {
            //add some color to the nodes in the path between the
            //root node and the selected node.
            if (node.selected) {
                node.data.$color = "#97a3b5";
            } else {
                delete node.data.$color;
                //if the node belongs to the last plotted level
                if (!node.anySubnode("exist")) {
                    //count children number
                    var count = 0;
                    node.eachSubnode(function(n) {
                        count++;
                    });
                    //assign a node color based on
                    //how many children it has
                    node.data.$color = ['#d5dae1', '#d5dae1', '#d5dae1', '#d5dae1', '#d5dae1', '#d5dae1'][count];
                }
            }
        },

        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj) {
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#97a3b5";
                adj.data.$lineWidth = 2;
            } else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        }
    });
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    
    //optional: make a translation of the tree
    st.geom.translate(new $jit.Complex(-200, 0), "current");
    //add media queries to center tree on load
    var xOffset;
    var yOffset;
    var checkCheck = false;
    var arr = [];
    // var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // var windowWidth = $("#center-container").width();

    //     function checkWindowSize(windowWidth) {
    //         console.log(windowWidth);
    //         if (windowWidth<=750) { // If media query matches
    //             arr[0] = 600
    //             arr[1] = 0
    //             arr[2] = true;
    //         } else if (windowWidth>750 && windowWidth<1050) {
    //             arr[0] = 500
    //             arr[1] = 0
    //             arr[2] = true;
    //         } else if (windowWidth>=1050) {
    //             arr[0] = -100
    //             arr[1] = 0
    //             arr[2] = true;
    //         } else {
    //             arr[0] = 0
    //             arr[1] = 0
    //             arr[2] = false;
    //         }
    //             return arr;
    //     }
        
    // $(document).on("load", checkWindowSize(windowWidth)) // Call listener function at run time
    
    // var xOffset = arr[0];
    // var yOffset = arr[1];
    // var checkCheck = arr[2];

    //emulate a click on the root node.
    st.onClick(st.root, {
            Move: {
                enable: true,
                offsetX: 0,
                offsetY: 0
            }, onComplete: function() {
                if(checkCheck==true){
                    offsetX = 50;
                    offsetY = 0;
                }
            }
    });

    //end
    //Add event handlers to switch spacetree orientation.
    var top = $jit.id('r-top'),
        left = $jit.id('r-left'),
        bottom = $jit.id('r-bottom'),
        right = $jit.id('r-right'),
        normal = $jit.id('s-normal');

    function changeHandler() {
        if (this.checked) {
            top.disabled = bottom.disabled = right.disabled = left.disabled = true;
            st.switchPosition(this.value, "animate", {
                onComplete: function() {
                    top.disabled = bottom.disabled = right.disabled = left.disabled = false;
                }
            });
        }
    };

    top.onchange = left.onchange = bottom.onchange = right.onchange = changeHandler;
    //end

    // Instantiate case study dialog boxes
    $(document).ready(function() {
        var nodeNumber = "";
        var caseNumber = "null";
        var answer = "";
        var caseStudy = "null";

        $('div#box-one').dialog({
            autoOpen: false
        })
        $('div#box-two').dialog({
            autoOpen: false
        })
        $('div#box-three').dialog({
            autoOpen: false
        })
        $('div#box-four').dialog({
            autoOpen: false
        })
        $('div#box-five').dialog({
            autoOpen: false
        })
        $('div#box-six').dialog({
            autoOpen: false
        })
        $('div#box-seven').dialog({
            autoOpen: false
        })
        $('div#box-eight').dialog({
            autoOpen: false
        })
        $('div#box-nine').dialog({
            autoOpen: false
        })
        $('div#box-ten').dialog({
            autoOpen: false
        })
        $('div#box-eleven').dialog({
            autoOpen: false
        })
        $('div#box-twelve').dialog({
            autoOpen: false
        })
        $('div#box-thirteen').dialog({
            autoOpen: false
        })
        $('div#box-fourteen').dialog({
            autoOpen: false
        })
        $('div#box-fifteen').dialog({
            autoOpen: false
        })
        $('div#welcome-modal').dialog({
            autoOpen: true
        })
        $('div#dialog-box-answer').dialog({
            autoOpen: false
        })
        $('div#dialog-box-incorrect').dialog({
            autoOpen: false
        })

        // Event for opening case study dialog boxes
        $(".caseNumbers").on("click", "button", function() {
            caseNumber = $(this).attr('id');
            $(this).addClass("case-active").siblings().removeClass("case-active");
            // Switch to find relevant case study dialog box to open
            function caseStudyNumber(caseNumber) {
                switch (caseNumber) {
                    case "caseOne":
                        caseStudy = "div#box-one"; // mycobacterium tuberculosis
                        break;
                    case "caseTwo":
                        caseStudy = "div#box-two"; // streptomyces coelicolor
                        break;
                    case "caseThree":
                        caseStudy = "div#box-three"; // stephylococcus aureus
                        break;
                    case "caseFour":
                        caseStudy = "div#box-four"; // streptococcus pyogenes
                        break;
                    case "caseFive":
                        caseStudy = "div#box-five"; // bacillus anthracis
                        break;
                    case "caseSix":
                        caseStudy = "div#box-six"; // lactobacillus acidophilus
                        break;
                    case "caseSeven":
                        caseStudy = "div#box-seven"; // neiserria meningitidis
                        break;
                    case "caseEight":
                        caseStudy = "div#box-eight"; // brucella melitensis
                        break;
                    case "caseNine":
                        caseStudy = "div#box-nine"; // rhizobium leguminosarum
                        break;
                    case "caseTen":
                        caseStudy = "div#box-ten"; // bordatella pertussis
                        break;
                    case "caseEleven":
                        caseStudy = "div#box-eleven"; // pseudomonas aeruginosa
                        break;
                    case "caseTwelve":
                        caseStudy = "div#box-twelve"; // escherichia coli
                        break;
                    case "caseThirteen":
                        caseStudy = "div#box-thirteen"; // salmonella typhimurium
                        break;
                    case "caseFourteen":
                        caseStudy = "div#box-fourteen"; // myxococcus xanthus
                        break;
                    case "caseFifteen":
                        caseStudy = "div#box-fifteen"; // helicobacter plyori
                        break;
                    default:
                        caseStudy = "null";
                }
                return caseStudy;
            }
            caseStudyNumber(caseNumber);
            $(caseStudy).dialog('open');
        });

        $('#welcome').click(function() {
            $('#welcome-modal').dialog('open');
        });

        // Click event for finding correct answer
        $('#infovis-canvaswidget div').on("click", ".node", function() {
            nodeNumber = $(this).attr('id');

            // Create array of endpoints to check against answers
            var endpoints = ["node71", "node72", "node73", "node74", "node75", "node76", "node77", "node78", "node79", "node80", "node81", "node82", "node83", "node84", "node85"];

            if (endpoints.includes(nodeNumber)) {

                function caseCalc(caseNumber) {
                    switch (caseNumber) {
                        case "caseOne":
                            answer = "node71"; // mycobacterium tuberculosis
                            break;
                        case "caseTwo":
                            answer = "node72"; // streptomyces coelicolor
                            break;
                        case "caseThree":
                            answer = "node73"; // stephylococcus aureus
                            break;
                        case "caseFour":
                            answer = "node74"; // streptococcus pyogenes
                            break;
                        case "caseFive":
                            answer = "node75"; // bacillus anthracis
                            break;
                        case "caseSix":
                            answer = "node76"; // lactobacillus acidophilus
                            break;
                        case "caseSeven":
                            answer = "node77"; // neiserria meningitidis
                            break;
                        case "caseEight":
                            answer = "node78"; // brucella melitensis
                            break;
                        case "caseNine":
                            answer = "node79"; // rhizobium leguminosarum
                            break;
                        case "caseTen":
                            answer = "node80"; // bordatella pertussis
                            break;
                        case "caseEleven":
                            answer = "node81"; // pseudomonas aeruginosa
                            break;
                        case "caseTwelve":
                            answer = "node82"; // escherichia coli
                            break;
                        case "caseThirteen":
                            answer = "node83"; // salmonella typhimurium
                            break;
                        case "caseFourteen":
                            answer = "node84"; // myxococcus xanthus
                            break;
                        case "caseFifteen":
                            answer = "node85"; // helicobacter plyori
                            break;
                        default:
                            answer = "null";
                    }
                    return answer;
                }

                caseCalc(caseNumber);

                if (nodeNumber === answer) {
                    $('div#dialog-box-answer').dialog('open');
                } else {
                    $('div#dialog-box-incorrect').dialog('open');
                }

                
            }
        });

        // var canvasFocus;
        // $("#infovis-canvas").attr('tabindex', 1);


        // Event for keyboard movement on tree
        // $("#infovis-canvas").on("focus", function(){
        if($("#infovis-canvas:focus")) {
            console.log("canvas focused");
            window.addEventListener("keydown", moveSomething, false);
    
            var deltaX = 0;
            var deltaY = 0;

            function moveSomething(e) {
                switch(e.keyCode) {
                    case 37:
                        deltaX = "-=15";
                        $('#infovis-canvaswidget').css({'left': deltaX});
                        break;
                    case 38:
                        deltaY = "-=15";
                        $('#infovis-canvaswidget').css({'top': deltaY});
                        break;
                    case 39:
                        deltaX = "+=15";
                        $('#infovis-canvaswidget').css({'left': deltaX});
                        break;
                    case 40:
                        deltaY = "+=15";
                        $('#infovis-canvaswidget').css({'top': deltaY});
                        break;  
                    case 9:
                        console.log("unfocused element");
                        $("#infovis-canvas").blur();
                }   
                e.preventDefault();
                deltaX = 0;
                deltaY = 0;
                // $('#infovis-label').children().css({'top': deltaX, 'left': deltaY});
            }
        }
        // });

        // Event for keyboard movement of tree

        // $('#infovis-label').children().css("top", yValue, "left", xValue);
        // xValue.css({'top': '2px'});
        // yValue.css({'top': '2px'});
        // xValue.css({'top': '-2px'});
        // yValue.css({'top': '-2px'});

    })
}