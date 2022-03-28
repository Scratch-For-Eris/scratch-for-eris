import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_mentioned_member";

const blockData = {
    "message0": "Mentioned Member, No. (%1 or 1st)",
    "args0": [
        {
            "type": "input_value",
            "name": "no",
            "check": ["String", "Number"]
        }
    ],
    "colour": "#187795",
    "tooltip": "",
    "output": "Member",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const code = [`s4dmessage.mentions.members.first(Number(${Blockly.JavaScript.valueToCode(block, "no", Blockly.JavaScript.ORDER_NONE) || ""}))`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message"
        ]
    }
]);
