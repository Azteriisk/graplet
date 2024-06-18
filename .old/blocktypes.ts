
/*
// Tyes aren't correct yet

THOSE TYPES ARE FOR THE NEW VERSION. MIGHT BE FOR A DISCORD BOT EXTENSION


import Graplet from '../scripts/graplet';

const workspace: Blockly.WorkspaceSvg = Graplet.getInstance().workspace!;

Blockly.defineBlocksWithJsonArray([
  {
    type: 'field_date',
    message0: 'date: %1',
    args0: [
      {
        type: 'field_date',
        name: 'FIELDNAME',
        date: '2020-02-20',
      },
    ],
    "inputsInline": true,
    "colour": "%{BKY_INSTANCE_HUE}",
    "output" : "String"
  },
  {
    type: 'colour_hsv_sliders',
    message0: 'hsv %1',
    args0: [
      {
        type: 'field_colour_hsv_sliders',
        name: 'COLOUR',
        colour: '#ff0000',
      },
    ],
    output: 'Colour',
    style: 'colour_blocks',
  },
  {
    "type": "input",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": ""
      }
    ],
    "output": "String",
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "terminal_log",
    "message0": "log in console %1",
    "args0": [
      {
        "type": "input_value",
        "name": "LOG"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#ffbf2b',
    "tooltip": "Outputs a message or value to the console for debugging or informational purposes.",
    "helpUrl": ""
  },  
  {
    "type": "once",
    "message0": "once %1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "EVENT",
        "check": "Boolean"
      },
      {
        "type": "input_statement",
        "name": "DO"
      }
    ],
    "inputsInline": true,
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Executes only once when the specified condition becomes true.",
    "helpUrl": ""
  },
  {
    "type": "channel_event",
    "message0": "channel %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "created",
            "CREATE"
          ],
          [
            "updated",
            "UPDATE"
          ],
          [
            "deleted",
            "DELETE"
          ],
          [
            "pins update",
            "PINS_UPDATE"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to channel creation, updating (editing), deletion, or pin updates has occurred.",
    "helpUrl": ""
  },
  {
    "type": "guild_emoji_event",
    "message0": "emoji %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "created",
            "CREATE"
          ],
          [
            "updated",
            "UPDATE"
          ],
          [
            "deleted",
            "DELETE"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to emoji creation, update, or deletion has occurred.",
    "helpUrl": ""
  },
  {
    "type": "guild_event",
    "message0": "server %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "updated",
            "UPDATE"
          ],
          [
            "available",
            "AVAILABLE"
          ],
          [
            "unavailable",
            "UNAVAILABLE"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action between bot and a server has occurred.",
    "helpUrl": ""
  },
  {
    "type": "bot_guild_event",
    "message0": "bot %1 server",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "joins",
            "JOIN"
          ],
          [
            "leaves",
            "REMOVE"
          ],
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether the bot gets added or removed from a server.",
    "helpUrl": ""
  },
  {
    "type": "guild_sticker_event",
    "message0": "sticker %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "created",
            "CREATE"
          ],
          [
            "updated",
            "UPDATE"
          ],
          [
            "deleted",
            "DELETE"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to server sticker creation, update, or deletion has occurred.",
    "helpUrl": ""
  },
  {
    "type": "guild_member_moderate_event",
    "message0": "member %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "banned",
            "BAN"
          ],
          [
            "unbanned",
            "UNBAN"
          ],
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether a member was banned or unbanned.",
    "helpUrl": ""
  },
  {
    "type": "guild_member_event",
    "message0": "member %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "joined",
            "ADD"
          ],
          [
            "updated",
            "UPDATE"
          ],
          [
            "left",
            "REMOVE"
          ],
          [
            "available",
            "AVAILABLE"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to server members has occurred.",
    "helpUrl": ""
  },
  {
    "type": "guild_role_event",
    "message0": "role %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "created",
            "CREATE"
          ],
          [
            "updated",
            "UPDATE"
          ],
          [
            "deleted",
            "DELETE"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to server role creation, update, or deletion has occurred.",
    "helpUrl": ""
  },
  {
    "type": "guild_scheduled_event_event",
    "message0": "scheduled event %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "created",
            "CREATE"
          ],
          [
            "updated",
            "UPDATE"
          ],
          [
            "deleted",
            "DELETE"
          ],
          [
            "member interested",
            "USER_ADD"
          ],
          [
            "member uninterested",
            "USER_REMOVE"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to server members has occurred.",
    "helpUrl": ""
  },
  {
    "type": "botready",
    "message0": "bot is ready",
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Triggers when the Discord bot is fully ready and connected to the server.",
    "helpUrl": ""
  },
  {
    "type": "change_guild_name",
    "message0": "change name of guild %1 to %2",
    "args0": [
      {
        "type": "input_value",
        "name": "GUILD",
        "check": "Guild"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": '%{BKY_ACTION_HUE}',
    "tooltip": "Changes the name of a given Guild.",
    "helpUrl": ""
  },
  {
    "type": "embed_builder",
    "message0": "Embed Message%1",
    "args0": [
      {
        "type": "input_dummy"
      },
    ],
    "mutator" : 'embed_builder_mutator',
    "inputsInline": false,
    "output": null,
    "colour": '%{BKY_INSTANCE_HUE}',
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "client_user",
    "message0": "bot",
    "output": "ClientUser",
    "colour": '%{BKY_INSTANCE_HUE}',
    "tooltip": "Represents the Discord bot instance.",
    "helpUrl": ""
  },
  {
    "type": "response_reply",
    "message0": "%1 %2 with %3",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "STATUS",
        "text": "reply to message"
      },
      {
        "type": "input_value",
        "name": "MESSAGE",
        "check": "Message"
      },
      {
        "type": "input_value",
        "name": "CONTENT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": '%{BKY_ACTION_HUE}',
    "tooltip": "Replies to a message.",
    "helpUrl": ""
  },
  {
    "type": "bulk_delete",
    "message0": "in channel %1 purge %2 messages",
    "args0": [
      {
        "type": "input_value",
        "name": "CHANNEL",
        "check": "Channel"
      },
      {
        "type": "input_value",
        "name": "AMOUNT",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": '%{BKY_ACTION_HUE}',
    "tooltip": "Deletes a given amount of messages in a Channel.",
    "helpUrl": ""
  },
  {
    "type": "message_event",
    "message0": "message %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "sent",
            "CREATE"
          ],
          [
            "edited",
            "UPDATE"
          ],
          [
            "deleted",
            "DELETE"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to message creation, update, or deletion has occurred.",
    "helpUrl": ""
  },
  {
    "type": "message_reaction_event",
    "message0": "message reaction %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [
            "added",
            "ADD"
          ],
          [
            "removed",
            "REMOVE"
          ],
          [
            "removed an emoji",
            "REMOVE_EMOJI"
          ],
          [
            "cleared",
            "REMOVE_ALL"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to message reaction has occurred.",
    "helpUrl": ""
  },
  {
    "type": "automod_rule_event",
    "message0": "AutoMod rule %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [ "created", "CREATE" ],
          [ "updated", "UPDATE" ],
          [ "deleted", "DELETE" ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to automod rules has occurred.",
    "helpUrl": ""
  },
  {
    "type": "automod_action_event",
    "message0": "AutoMod Trigger",
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Triggers when any AutoMod action triggers.",
    "helpUrl": ""
  },
  {
    "type": "channel_typing_event",
    "message0": "Typing Trigger",
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Triggers when anyone starts typing in a channel.",
    "helpUrl": ""
  },
  {
    "type": "shard_event",
    "message0": "shard %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [ "ready", "READY" ],
          [ "resumed", "RESUME" ],
          [ "disconnected", "DISCONNECT" ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to Shards has occurred.",
    "helpUrl": ""
  },
  {
    "type": "audit_log_event",
    "message0": "Server Audit Log",
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Triggers when server audit log entry is created.",
    "helpUrl": ""
  },
  {
    "type": "invite_event",
    "message0": "invite %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [ "created", "CREATE" ],
          [ "deleted", "DELETE" ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to invits has occurred.",
    "helpUrl": ""
  },
  // REVIEW - guild integration
  {
    "type": "webhook_event",
    "message0": "Webhook Updated",
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Triggers whenever a webhook is created, modified, or removed from a guild channel.",
    "helpUrl": ""
  },
  {
    "type": "interaction_event",
    "message0": "Interaction Triggered",
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Triggers when an interaction is created.",
    "helpUrl": ""
  },
  {
    "type": "user_event",
    "message0": "User Updated",
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Triggers whenever a user's details (e.g. username) are changed.",
    "helpUrl": ""
  },
  {
    "type": "presence_event",
    "message0": "Presence Updated",
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Triggers whenever a guild member's presence (e.g. status, activity) is changed.",
    "helpUrl": ""
  },
  {
    "type": "voice_event",
    "message0": "Voice State Updated",
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Triggers whenever a member changes voice state - e.g. joins/leaves a channel, mutes/unmutes.",
    "helpUrl": ""
  },
  {
    "type": "stage_event",
    "message0": "stage %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [ "started", "CREATE" ],
          [ "ended", "DELETE" ],
          [ "updated", "UPDATE" ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to stage channels has occurred.",
    "helpUrl": ""
  },
  {
    "type": "thread_event",
    "message0": "thread %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          [ "created", "CREATE" ],
          [ "updated", "UPDATE" ],
          [ "deleted", "DELETE" ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Represents a boolean value indicating whether an action related to stage channels has occurred.",
    "helpUrl": ""
  },
  {
    "type": "booster_event",
    "message0": "Server Boosted",
    "inputsInline": true,
    "output": "Boolean",
    "colour": '%{BKY_EVENT_HUE}',
    "tooltip": "Triggers whenever a member boosts the server.",
    "helpUrl": ""
  },
  {
    "type": "wait_for",
    "message0": "wait for %1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "TIME",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "TYPE",
        "options": [['seconds','SECONDS'],['minutes','MINUTES'],['hours','HOURS'],['days','DAYS']]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#4C97FC',
    "tooltip": "Waits for a specific time range.",
    "helpUrl": ""
  },
])

Blockly.Blocks['embed_mutator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Description')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'DESCRIPTION');
    this.appendDummyInput()
        .appendField('Title')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'TITLE');
    this.appendDummyInput()
        .appendField('Color')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLOUR');
    this.appendDummyInput('AUTHOR')
        .appendField('Author')
        .appendField(new Blockly.FieldCheckbox('FALSE',this.author), 'AUTHOR');
    this.appendDummyInput('FOOTER')
        .appendField('Footer')
        .appendField(new Blockly.FieldCheckbox('FALSE',this.footer), 'FOOTER');
    this.setColour('%{BKY_INSTANCE_HUE}');
    this.setTooltip('');
    this.setHelpUrl('');
  },
  author: function(newValue: string) {
    const input = this.getSourceBlock().getInput('AUTHOR')
    input.removeField('AUTHOR_NAME',true)
    input.removeField('AUTHOR_URL',true)
    input.removeField('AUTHOR_ICON_URL',true)
    input.removeField('F1',true)
    input.removeField('F2',true)
    input.removeField('F3',true)
    if (this.getValue() == 'FALSE'){
      input.appendField('name','F1')
      input.appendField(new Blockly.FieldCheckbox('FALSE'), 'AUTHOR_NAME')
      input.appendField('link','F2')
      input.appendField(new Blockly.FieldCheckbox('FALSE'), 'AUTHOR_URL')
      input.appendField('icon url','F3')
      input.appendField(new Blockly.FieldCheckbox('FALSE'), 'AUTHOR_ICON_URL')
    }
    return newValue;
  },
  footer: function(newValue: string) {
    const input = this.getSourceBlock().getInput('FOOTER')
    input.removeField('FOOTER_TEXT',true)
    input.removeField('FOOTER_ICON_URL',true)
    input.removeField('F1',true)
    input.removeField('F2',true)
    if (this.getValue() == 'FALSE'){
      input.appendField('text','F1')
      input.appendField(new Blockly.FieldCheckbox('FALSE'), 'FOOTER_TEXT')
      input.appendField('icon url','F2')
      input.appendField(new Blockly.FieldCheckbox('FALSE'), 'FOOTER_ICON_URL')
    }
    return newValue;
  },
};
Blockly.Blocks['reaction_action'] = {
  validate: function(newValue: string) {
    this.getSourceBlock().updateConnections(newValue);
    return newValue;
  },
  
  init: function() {
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('%{BKY_ACTION_HUE}');
    
    var options: Blockly.MenuOption[] = [["add", "ADD"], ["remove", "REMOVE"], ["remove all", "REMOVE_ALL"]]; 
    this.appendValueInput('MESSAGE')
      .appendField('to message')
      .setCheck('Message');
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(options, this.validate), 'TYPE');
    
    this.setTooltip('Removes or adds a reaction to a Message.');
    this.updateConnections('ADD');
  },
  
  updateConnections: function(newValue: string) {
    this.removeInput('REACTION', true);
    this.removeInput('DUMMY', true);
    
    if (newValue === 'REMOVE_ALL') {
      this.appendDummyInput('DUMMY')
        .appendField('reactions');
    } else {
      var parent = this.appendValueInput('REACTION')
        .setCheck('String')
        .appendField('reaction');
      
      if (this.rendered && workspace && !parent.connection.targetConnection && !parent.sourceBlock.isInFlyout) {
        var inputBlock = workspace.newBlock('input');
        inputBlock.setShadow(true);
        inputBlock.initSvg();
        inputBlock.render();
        parent.connection.connect(inputBlock.outputConnection);
      }
    }
  }
};

const property_of_Dict = {
  'ClientUser': [['id','String'],['name','String'],['tag','String'],['avatar icon url','String'],['DM Channel','Channel'],['guilds','Guild'],['status','String'],['presence','Presence']],
  'Message' : [['id','String'],['content','String'],['channel','Channel'],['server','Guild'],['user','User'],['member','Member'],['url','String']],
  'Channel' : [['id','String'],['name','String'],['server','Guild'],['url','String']],
  'Guild' : [['id','String'],['name','String'],['description','String'],['icon url','String'],['member count','Number'],['boost level','Number'],['boost count','Number'],['rules channel','Channel'],['owner id','String']],
  'Member': [['id','String'],['user','User'],['server','Guild'],['display name','String'],['avatar icon url','String'],['DM Channel','Channel'],['top role','Role']],
  'User': [['id','String'],['display name','String'],['username','String'],['DM Channel','Channel'],['avatar icon url','String']],
  'MessageReaction': [['count','Number'],['message','Message'],["emoji text", "String"]],
  'Role': [['id','String'],['name','String'],['server','Guild'],['ping text','String']],
  'GuildScheduledEvent': [['id','String'],['name','String'],['description','String'],['url','String'],['server','Guild'],['channel','Channel'],['user count','Number'],['location text','String'],['creator','User']],
  'AutoModerationRule': [['id','String'],['name','String'],['server','Guild'],['creator id','String']],
  'GuildAuditLogsEntry': [['id','String'],['executer','User'],['reason','String']],
  'Invite': [['id','String'],['url','String'],['server','Guild'],['inviter','User'],['channel','Channel'],['uses','Number'],['max uses','Number'],['code','String']],
  'StageInstance': [['id','String'],['server','Guild'],['stage channel','Channel'],['topic','String']],
}
Blockly.Blocks['property_of'] = {
  validate: function(newValue: string){
    this.getSourceBlock().updateConnections(newValue);
    return newValue;
  },
  init: function() {
    this.setInputsInline(true)
    this.setColour('%{BKY_INSTANCE_HUE}')
    this.setOutput(true, null);
    this.setTooltip("Retrieves a specific property of an object or variable");

    this.dropdownDefaultOptions = [["...","NONE"]];
    this.appendDummyInput('VALUE_CHILD')
      .appendField('property')
      .appendField(new Blockly.FieldDropdown(this.dropdownDefaultOptions), 'VALUE');
    this.appendValueInput('VALUE_PARENT')
      .appendField('of');

    this.isFirstTimeLoading = true;
  },
  saveExtraState: function() {
    return {
      'propertyOptions': this.latestOptionsValues || null,
      'selectedOption': this.getField("VALUE").getValue(),
    };
  },
  loadExtraState: function(state: any) {
    let defaultOptions = this.dropdownDefaultOptions;
    this.latestOptionsValues = this.latestOptionsValues || state['propertyOptions'] || defaultOptions;
    this.removeInput("VALUE_CHILD",true);

    const block = this;
    this.appendDummyInput('VALUE_CHILD')
      .appendField('property')
      .appendField(new Blockly.FieldDropdown(function() {
        var options = defaultOptions;
        if (block.isFirstTimeLoading) options = block.latestOptionsValues;

        var child = block.getInput("VALUE_PARENT").connection.targetConnection;
        if (child && typeof child.getCheck()?.[0] === 'string' && property_of_Dict[child.getCheck()?.[0] as keyof typeof property_of_Dict]) {
          const key = child.getCheck()?.[0] as keyof typeof property_of_Dict;
          options = options.concat(property_of_Dict[key].map(function(property) {
            return [property[0], property[0].toUpperCase().split(' ').join('_')];
          }));
        }
        
        block.latestOptionsValues = options;
        return options;
      }, this.validate), 'VALUE');
    this.moveInputBefore("VALUE_CHILD","VALUE_PARENT");

    this.isFirstTimeLoading = false;
    block.getField("VALUE").setValue(state['selectedOption']);
  },
  updateConnections: function(newValue: string) {
    if (newValue == "NONE") {
      this.setOutput(true, null);
      return;
    }
    var parentConnection = this.getInput("VALUE_PARENT").connection.targetConnection;
    if (parentConnection == null) return;
    let selectedDictType: string[][] | undefined;

    const key = parentConnection.getCheck()?.[0];
    if (key && typeof key === 'string' && property_of_Dict[key as keyof typeof property_of_Dict]) {
      selectedDictType = property_of_Dict[key as keyof typeof property_of_Dict];
    }

    if (selectedDictType == null) {
      this.getField("VALUE").setValue("NONE");
      return;
    }
    let selectedDictOption = selectedDictType.find(x => x[0].toUpperCase().split(' ').join('_') === newValue);
    if (selectedDictOption) {
      this.setOutput(true, selectedDictOption[1]);
    } else {
      console.error('Selected dictionary option not found for newValue:', newValue);
    }
  },
}

Blockly.Blocks['token_input'] = {
  init: function() {
    var validator = function(newValue: string){
      if (/^([MN][\w-]{23,25})\.([\w-]{6})\.([\w-]{27,39})$/gm.test(newValue)) {
        return newValue;
      } else{
        return null;
      }
    }
    const field = new Blockly.FieldTextInput("Your token here")
    field.setValidator(validator);
    this.appendDummyInput()
        .appendField((field), "TOKEN");
    this.setOutput(true, "String");
  }
};


Blockly.Blocks['get_by_id'] = {
  validate: function(newValue: string){
    this.getSourceBlock().updateConnections(newValue);
    return newValue;
  },
  init: function() {
    this.setInputsInline(true)
    this.setColour('%{BKY_ACTION_HUE}')
    this.setOutput(true, null);
    const options: Blockly.MenuOption[] = [["guild","GUILD"],["channel","CHANNEL"],["user","USER"],["message","MESSAGE"],["emoji","EMOJI"],["member","MEMBER"],["role","ROLE"]]; 
    this.appendDummyInput()
      .appendField('get')
      .appendField(new Blockly.FieldDropdown(options,this.validate), 'INSTANCES')
    this.notFirstTimeLoading = false;
    this.updateConnections('GUILD')
  },
  updateConnections: function(newValue: string){
    if (this.notFirstTimeLoading == true) {
      this.setOutput(true,newValue.toLowerCase());
    }
    this.notFirstTimeLoading = true;
    this.setOutput(true,newValue.toLowerCase());
    this.removeInput('ID_INPUT',true)
    this.removeInput('METHOD',true)
    const parent: Blockly.Input = this.appendValueInput('ID_INPUT')
      .appendField('by ID:')
    if (this.rendered && workspace && !parent.connection?.targetConnection && !parent.getSourceBlock().isInFlyout){
      var InputBlock = workspace.newBlock('math_number')
        InputBlock.setShadow(true)
        InputBlock.initSvg()
        InputBlock.render();
      parent.connection?.connect(InputBlock.outputConnection)
    }
    if (['MEMBER', 'ROLE'].includes(newValue)) {
      this.appendValueInput('METHOD')
        .appendField(`of guild`)
        .setCheck('Guild')
    }
    if (newValue == 'MESSAGE') {
      this.appendValueInput('METHOD')
        .appendField(`of channel`)
        .setCheck('Channel')
    }
  },
  onchange : function(){
    // Check if child METHOD exists -> check if empty
    const valueInput = this.getInput('METHOD', true)
    if (valueInput){
      const connection = valueInput.connection.targetConnection
      if (connection){
        console.log(connection)
      }
    }
  }
}


export const globalEventArguments = {
  bot_guild_event: {
    JOIN: [["Server", "Guild"]],
    REMOVE: [["Server", "Guild"]],
  },
  channel_event: {
    CREATE: [["Channel", "Channel"]],
    UPDATE: [["Old Channel", "Channel"],["New Channel", "Channel"]],
    DELETE: [["Channel", "Channel"]],
    PINS_UPDATE: [["Channel", "Channel"]],
  },
  message_event: {
    CREATE: [["Message", "Message"]],
    UPDATE: [["Old Message", "Message"], ["New Message", "Message"]],
    DELETE: [["Message", "Message"]],
  },
  message_reaction_event: {
    ADD: [["Reaction","MessageReaction"],["User","User"]],
    REMOVE: [["Reaction","MessageReaction"],["User","User"]],
    REMOVE_EMOJI: [["Reaction","MessageReaction"]],
    REMOVE_ALL: [["Message","Message"]],
  },
  guild_event: {
    UPDATE: [["Old Server", "Guild"],["New Server", "Guild"]],
    AVAILABLE: [["Server", "Guild"]],
    UNAVAILABLE: [["Server", "Guild"]],
  },
  guild_member_event: {
    ADD: [["Member", "Member"]],
    UPDATE: [["Old Member", "Member"], ["New Member", "Member"]],
    REMOVE: [["Member", "Member"]],
  },
  guild_role_event: {
    CREATE: [["Role", "Role"]],
    UPDATE: [["Old Role", "Role"], ["New Role", "Role"]],
    DELETE: [["Role", "Role"]],
  },
  guild_scheduled_event_event: {
    CREATE: [["Event", "GuildScheduledEvent"]],
    UPDATE: [["Old Event", "GuildScheduledEvent"], ["New Event", "GuildScheduledEvent"]],
    DELETE: [["Event", "GuildScheduledEvent"]],
    USER_ADD: [["Event", "GuildScheduledEvent"],["User", "User"]],
    USER_REMOVE: [["Event", "GuildScheduledEvent"],["User", "User"]],
  },
  automod_rule_event: {
    CREATE: [["Rule", "AutoModerationRule"]],
    UPDATE: [["Old Rule", "AutoModerationRule"], ["New Rule", "AutoModerationRule"]],
    DELETE: [["Rule", "AutoModerationRule"]],
  },
  channel_typing_event: [["Channel", "Channel"],["User", "User"]],
  shard_event: {
    READY: [["Shard ID", "String"]],
    RESUME: [["Shard ID", "String"]],
  },
  audit_log_event: [["Entry", "GuildAuditLogsEntry"]],
  invite_event: {
    CREATE: [["Invite", "Invite"]],
    DELETE: [["Invite", "Invite"]],
  },
  webhook_event: [["Channel", "Channel"]],
  user_event: [["Old User", "User"],["New User", "User"]],
  stage_event: {
    CREATE: [["Stage", "StageInstance"]],
    UPDATE: [["Old Stage", "StageInstance"], ["New Stage", "StageInstance"]],
    DELETE: [["Stage", "StageInstance"]],
  },
  thread_event: {
    CREATE: [["Channel", "Channel"]],
    UPDATE: [["Old Channel", "Channel"], ["New Channel", "StageInstance"]],
    DELETE: [["Channel", "Channel"]],
  },
  booster_event: [["Member", "Member"]],
};
const ArgumentEventHandler = function(block) {
  const eventBlock = block.getInputTargetBlock("EVENT");

  block.eventArgsList = eventBlock?.genEventRags || [];
  if (block.lastEventArgs == null) {
    block.lastEventArgs = [];
    block.connectedEventArgs = [];
  }

  block.lastEventArgs.forEach((x,i) => {
    let argBlock = block.getInputTargetBlock("ARG"+(i+1));
    if (argBlock != null) {
      if (!block.connectedEventArgs.includes(argBlock)) {
        if (this.isFirstTimeSetup) {
          argBlock.dispose(true);
        } else {
          block.getInput("ARG"+(i+1)).connection.disconnect();
        }
      }
      return;
    }
    
    var InputBlock: Blockly.BlockSvg = workspace.newBlock('event_arg_placeholder');
    InputBlock.setFieldValue(x[0], "PLACEHOLDER");
    InputBlock.eventArgOutput = x;
    InputBlock.setOutput(true,x[1]);
    InputBlock.initSvg();
    InputBlock.render();
    let inputField = block.getInput('ARG'+(i+1));
    inputField?.connection.connect(InputBlock.outputConnection);
    block.connectedEventArgs.push(InputBlock);
  });

  //handle event change and remove references
  if (block.lastEventArgs !== block.eventArgsList) {

    //remove variable and its copies
    block.connectedEventArgs.forEach(x => x.dispose(true));
    block.connectedEventArgs = [];
    block.lastEventArgs.forEach((x,i) => {
      block.removeInput("ARG"+(i+1));
    });

    block.lastEventArgs = block.eventArgsList;
    for (let index = 0; index < block.eventArgsList.length; index++) {
      const element = block.eventArgsList[index];
      
      var InputBlock = workspace.newBlock('event_arg_placeholder');
      InputBlock.setFieldValue(element[0], "PLACEHOLDER");
      InputBlock.eventArgOutput = element;
      InputBlock.setOutput(true,element[1]);
      InputBlock.initSvg();
      InputBlock.render();
      let inputField = block.appendValueInput('ARG'+(index+1));
      if (index == 0) {
        inputField.appendField('Outputs:');
      }
      inputField.connection.connect(InputBlock.outputConnection);
      block.connectedEventArgs.push(InputBlock);
      block.moveInputBefore('ARG'+(index+1), "DO");
    }
  }
  this.isFirstTimeSetup = false;
};
Blockly.Blocks['when'] = {
  init: function() {
    this.setInputsInline(true)
    this.setColour('%{BKY_EVENT_HUE}')
    this.setTooltip("Executes every time the specified condition is true.");

    this.appendValueInput('EVENT')
      .appendField('when')
      .setCheck("Boolean");
    this.appendStatementInput('DO');

    if (workspace == null) return;
    const block = this;
    workspace.addChangeListener((event) => {
      if (this.isFirstTimeSetup && event.type == "create") {
        this.updateEventArguments(block);
        return;
      }
      if (event.type !== "move" && event.type !== "change") return;
      if (event.reason && !(event.reason.includes("connect") || event.reason.includes("disconnect"))) return;

      this.updateEventArguments(block);
    });

    this.isFirstTimeLoading = true;
    this.isFirstTimeSetup = true;
  },
  updateEventArguments: ArgumentEventHandler,
  saveExtraState: function() {
    return {
      'eventArgsList': this.eventArgsList || [],
    };
  },
  loadExtraState: function(state) {
    const block = this;
    block.eventArgsList = state.eventArgsList;

    if (!this.isFirstTimeLoading) return;
    this.isFirstTimeLoading = false;
    block.lastEventArgs = [];
    block.connectedEventArgs = [];

    if (block.lastEventArgs == block.eventArgsList) return;
    block.lastEventArgs = block.eventArgsList;
    for (let index = 0; index < block.eventArgsList.length; index++) {
      let inputField = block.appendValueInput('ARG'+(index+1));
      if (index == 0) { inputField.appendField('Outputs:'); }
      block.moveInputBefore('ARG'+(index+1), "DO");
    }
  },
}
Blockly.Blocks['once'] = {
  init: function() {
    this.setInputsInline(true)
    this.setColour('%{BKY_EVENT_HUE}')
    this.setTooltip("Executes every time the specified condition is true.");

    this.appendValueInput('EVENT')
      .appendField('once')
      .setCheck("Boolean");
    this.appendStatementInput('DO');

    if (workspace == null) return;
    const block = this;
    workspace.addChangeListener((event) => {
      if (this.isFirstTimeSetup && event.type == "create") {
        this.updateEventArguments(block);
        return;
      }
      if (event.type !== "move" && event.type !== "change") return;
      if (event.reason && !(event.reason.includes("connect") || event.reason.includes("disconnect"))) return;

      this.updateEventArguments(block);
    });

    this.isFirstTimeLoading = true;
    this.isFirstTimeSetup = true;
  },
  updateEventArguments: ArgumentEventHandler,
  saveExtraState: function() {
    return {
      'eventArgsList': this.eventArgsList || [],
    };
  },
  loadExtraState: function(state) {
    const block = this;
    block.eventArgsList = state.eventArgsList;

    if (!this.isFirstTimeLoading) return;
    this.isFirstTimeLoading = false;
    block.lastEventArgs = [];
    block.connectedEventArgs = [];

    if (block.lastEventArgs == block.eventArgsList) return;
    block.lastEventArgs = block.eventArgsList;
    for (let index = 0; index < block.eventArgsList.length; index++) {
      let inputField = block.appendValueInput('ARG'+(index+1));
      if (index == 0) { inputField.appendField('Outputs:'); }
      block.moveInputBefore('ARG'+(index+1), "DO");
    }
  },
}

  

Blockly.Blocks['event_arg_placeholder'] = {
  init: function() {
    this.setOutput(true, null);
    this.setColour(230);

    this.appendDummyInput()
      .appendField('', 'PLACEHOLDER');
    
    if (workspace == null) return;
    const parentFinder = () => {
      const rootBlock = this.getRootBlock();

      if (rootBlock.type == this.type) return;
      if (rootBlock.type !== "when" && rootBlock.type !== "once") return;

      workspace.removeChangeListener(parentFinder);
      rootBlock.connectedEventArgs.push(this);
    };

    workspace.addChangeListener(parentFinder);
  },
  saveExtraState: function() {
    return {
      'eventArgsList': this.eventArgOutput,
    };
  },
  loadExtraState: function(state) {
    const block = this;
    if (state.eventArgsList == null) {
      // console.log("no eventArgsList", block);
      block.dispose(true);
      return;
    }
    block.eventArgOutput = state.eventArgsList;
    block.setFieldValue(block.eventArgOutput[0], "PLACEHOLDER");
    block.setOutput(true, block.eventArgOutput[1]);
  },
}

  
  
  
Blockly.Blocks['bot_login'] = {
  init: function() {
    this.jsonInit({
      "type": "bot_login",
      "message0": "login with token",
      "inputsInline": true,
      "colour": "%{BKY_ACTION_HUE}",
      "tooltip": "Login the specified Client with the provided token.",
      "helpUrl": ""
    })
    const parent: Blockly.Input = this.appendValueInput('TOKEN_INPUT');
    if (this.rendered && workspace && !parent.connection?.targetConnection && !parent.getSourceBlock().isInFlyout){
      var InputBlock = workspace.newBlock('token_input')
        InputBlock.setShadow(true)
        InputBlock.initSvg()
        InputBlock.render();
      parent.connection?.connect(InputBlock.outputConnection)
    }
  }
}

function generateActionBlock(typeLabel: string,initOptions: Blockly.MenuOption[], updateConnectionsFunction) {
  return {
    validate: function(newValue: string){
      this.getSourceBlock().updateConnections(newValue);
      return newValue;
    },
    init: function() {
      const options = initOptions;
      this.setColour('%{BKY_ACTION_HUE}');
      this.setNextStatement(true);
      this.setPreviousStatement(true);
      this.setInputsInline(true);
      this.appendDummyInput()
        .appendField(typeLabel)
        .appendField(new Blockly.FieldDropdown(options, this.validate), 'TYPE');
      this.updateConnections(initOptions[0][1]);
    },
    updateConnections: updateConnectionsFunction
  };
}

var channelActions = generateActionBlock('channel',[
  ['create', 'CREATE'],
  ['edit', 'EDIT'],
  ['delete', 'DELETE']
], function(newValue: string){
  this.removeInput('CREATE', true);
  this.removeInput('EDIT', true);
  this.removeInput('DELETE', true);
  this.removeInput('NAME', true);
  this.removeInput('GUILD', true);
  if (newValue == 'CREATE') {
    this.appendDummyInput('CREATE')
      .appendField('type:')
      .appendField(new Blockly.FieldDropdown([['Text', 'TEXT'], ['Voice', 'VOICE'], ['Announcement', 'ANNOUNCEMENT'],['Stage', 'STAGE']]), 'CHANNELTYPE');
    this.appendValueInput('GUILD')
      .appendField('on guild:')
      .setCheck('Guild')
    const parentBlock = this.appendValueInput('NAME')
      .appendField('name:')
    if (this.rendered && workspace && !parentBlock.connection.targetConnection && !parentBlock.sourceBlock.isInFlyout){
      var InputBlock = workspace.newBlock('input')
        InputBlock.setShadow(true)
        InputBlock.initSvg()
        InputBlock.render();
      parentBlock.connection.connect(InputBlock.outputConnection)
    }
  } else if (newValue == 'EDIT') {
    var InputBlock = workspace.newBlock('input')
      InputBlock.setShadow(true)
      InputBlock.initSvg()
      InputBlock.render();  
    this.appendValueInput('EDIT')
      .appendField('channel:')
      .setCheck('Channel')
    this.appendValueInput('NAME')
      .appendField('new name:')
      .connection.connect(InputBlock.outputConnection)   
  } else if (newValue == 'DELETE') {
    this.appendValueInput('DELETE')
      .appendField('channel:')
      .setCheck('Channel')
  }
});

var messageActions = generateActionBlock('message',[
  ['send', 'SEND'],
  ['edit', 'EDIT'],
  ['delete', 'DELETE']
], function(newValue: string) {
  this.removeInput('SEND',true);
  this.removeInput('EDIT', true);
  this.removeInput('DELETE',true);
  this.removeInput('CONTENT',true);
  if (newValue == 'SEND') {
    this.appendValueInput('SEND')
      .appendField('in channel:')
      .setCheck('Channel')
    var parentBlock = this.appendValueInput('CONTENT')
      .appendField('content:')
      .setCheck('String')
    if (this.rendered && workspace && !parentBlock.connection.targetConnection && !parentBlock.sourceBlock.isInFlyout){
      var InputBlock = workspace.newBlock('input')
        InputBlock.setShadow(true)
        InputBlock.initSvg()
        InputBlock.render();
      parentBlock.connection.connect(InputBlock.outputConnection)
    }
  } else if (newValue == 'EDIT') {
    this.appendValueInput('EDIT')
      .appendField('message:')
      .setCheck('Message')
    var InputBlock = workspace.newBlock('input')
      InputBlock.setShadow(true)
      InputBlock.initSvg()
      InputBlock.render();

    this.appendValueInput('CONTENT')
      .appendField('new content:')
      .connection.connect(InputBlock.outputConnection)        
  } else if (newValue == 'DELETE'){
    this.appendValueInput('DELETE')
    .appendField('message:')
    .setCheck('Message')
  }
});

var roleActions = generateActionBlock('role',[
  ['create', 'CREATE'],
  ['edit', 'EDIT'],
  ['delete', 'DELETE']
], function(newValue: string) {
  this.removeInput('CREATE',true);
  this.removeInput('EDIT', true);
  this.removeInput('DELETE',true);
  this.removeInput('NAME',true);
  this.removeInput('COLOUR',true)
  if (newValue == 'CREATE') {
    this.appendValueInput('CREATE')
      .appendField('in guild:')
      .setCheck('Guild')
    var parentBlock1 = this.appendValueInput('NAME')
      .appendField('name:')
      .setCheck('String')
    this.appendValueInput('COLOUR')
      .appendField('color:')
      .setCheck('Colour')
    
    if (workspace){
      if (this.rendered && !parentBlock1.connection.targetConnection && !parentBlock1.sourceBlock.isInFlyout){
        var InputBlock = workspace.newBlock('input')
          InputBlock.setShadow(true)
          InputBlock.initSvg()
          InputBlock.render();
        parentBlock1.connection.connect(InputBlock.outputConnection)
      }
    }
  } else if (newValue == 'EDIT') {
    this.appendValueInput('EDIT')
      .appendField('role:')
      .setCheck('Role')
    var InputBlock = workspace.newBlock('input')
      InputBlock.setShadow(true)
      InputBlock.initSvg()
      InputBlock.render();  

    this.appendValueInput('NAME')
      .appendField('new name:')
      .connection.connect(InputBlock.outputConnection)        
  } else if (newValue == 'DELETE'){
    this.appendValueInput('DELETE')
    .appendField('role:')
    .setCheck('Role')
  }
});
  


Blockly.Blocks['channel_action'] = channelActions
Blockly.Blocks['message_action'] = messageActions
Blockly.Blocks['role_action'] = roleActions



*/