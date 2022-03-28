import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_set_bot_game";

const blockData = {
    "message0": "Set Bot Status %1 Type %2 String/URL %3",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "STATUS",
            "options": [
                [
                    "Online",
                    "online"
                ],
                [
                    "Idle",
                    "idle"
                ],
                [
                    "Do Not Disturb",
                    "dnd"
                ],
                [
                    "Invisible",
                    "invisible"
                ]
            ]
        },
        {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                [
                    "Playing",
                    "0"
                ],
                [
                    "Listening",
                    "2"
                ],
                [
                    "Watching",
                    "3"
                ],
                [
                    "Streamin",
                    "1"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "GAME",
            "check": [ "Number", "String" ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const game = Blockly.JavaScript.valueToCode(block, "GAME", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4d.client.editStatus(${block.getFieldValue("STATUS")}, {
        type: ${block.getFieldValue("NAME")},
        name: ${game}
    })`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_GAME",
        types: [
            "GAME",
            "STATUS",
            "NAME"
        ]
    }
]);
