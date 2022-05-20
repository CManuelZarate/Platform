export const xmlTools= `<xml id="toolbox" style="display: none">
  <category name="Logica">
    <block type="controls_if"></block>
    <block type="logic_compare"></block>
    <block type="logic_operation"></block>
    <block type="logic_negate"></block>
    <block type="logic_null"></block>
  </category>
  <category name="Control">
    <block type="base_delay">
      <value name="DELAY_TIME">
        <block type="math_number">
          <field name="NUM">1000</field>
        </block>
      </value>
    </block>
    <block type="controls_for">
      <value name="FROM">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
      <value name="TO">
        <block type="math_number">
          <field name="NUM">10</field>
        </block>
      </value>
    </block>
    <block type="controls_whileUntil"></block>
  </category>
  <category name="Operaciones matem.">
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
    <block type="base_map">
      <value name="DMAX">
        <block type="math_number">
          <field name="NUM">180</field>
        </block>
      </value>
    </block>
  <block type="base_map_v2">
    <value name="DMAX1">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
    </value>
    <value name="DMAX2">
        <block type="math_number">
          <field name="NUM">1024</field>
        </block>
    </value>
        <value name="DMAX">
        <block type="math_number">
          <field name="NUM">10</field>
        </block>
      </value>
    </block>
  </category>

  <category name="Text">
    <block type="text"></block>
    <block type="text_join"></block>
    <!---<block type="text_append"></block>-->
  </category>

  <category name="Variables" custom="VARIABLE"></category>
  <category name="Funciones" custom="PROCEDURE"></category>

  <sep></sep>
  
   <category name="Entrada/Salida">
    <block type="inout_highlow"></block>
    <block type="serial_print">
      <value name="CONTENT">
        <block type="text">
          <field name="TEXT"></field>
        </block>
      </value>
    </block>
  </category>
  
  <sep></sep>
<!--    
  <category name="Input/Output">
    <block type="inout_highlow"></block>
    <block type="inout_digital_write"></block>
    <block type="inout_digital_read"></block>
    <block type="inout_analog_write">
      <value name="NUM">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
    </block>
    <block type="inout_analog_read"></block>
    <block type="serial_print">
      <value name="CONTENT">
        <block type="text">
          <field name="TEXT"></field>
        </block>
      </value>
    </block>
    <block type="inout_tone">
      <value name="NUM">
        <block type="math_number">
          <field name="NUM">440</field>
        </block>
      </value>
    </block>
    <block type="inout_notone"></block>
    <block type="inout_buildin_led"></block>
  </category>
--> 
<!--   
<category name="Pràctica l'UJI">
  <block type="grove_moisture_sensor"></block>
  <block type="grove_temporature_sensor"></block>
  <block type="grove_light_sensor"></block>
  <block type="grove_pir_motion_sensor"></block>
  <block type="grove_sound_sensor"></block>
  <block type="grove_button"></block>
  <block type="grove_bar_led"></block>
  <block type="grove_led"></block>
  <block type="grove_display_print"></block>
</category>
--> 

<category name="Sensores">
  <block type="grove_moisture_sensor"></block>
  <block type="grove_dht_read"></block>
  <block type="grove_light_sensor"></block>
  <block type="grove_pir_motion_sensor"></block>
  <block type="grove_sound_sensor"></block>
  <block type="grove_button"></block>
</category>

<category name="Actuadores">
  <block type="grove_bar_led"></block>
  <block type="grove_led"></block>
  <block type="grove_relay"></block>
  <category name="Pantalla">
  <block type="grove_oled_display_clear"></block>
          <block type="grove_oled_display_set_cursor">
              <value name="ROW">
                  <block type="math_number">
                      <field name="NUM">0</field>
                  </block>
              </value>
              <value name="COL">
                  <block type="math_number">
                      <field name="NUM">0</field>
                  </block>
              </value>
          </block>
  <block type="grove_oled_display_put">
    <value name="VALUE"></value>
  </block> 
  </category>
</category>

</xml>`;

export const a={
    "kind": "categoryToolbox",
    "contents":[
        {
            "kind":"category",
            "name":"Logica",
            "contents":[
                {
                    "kind":"block",
                    "type":"logic_compare",
                    "comment":"asdas"
                },
                {
                    "kind":"block",
                    "type":"logic_operation"
                },
                {
                    "kind":"block",
                    "type":"logic_negate"
                },
                {
                    "kind":"block",
                    "type":"logic_null"
                },
            ]
        },
        {
            "kind":"category",
            "name":"Control",
            "contents":[
              {
                "kind": "block",
                "type": "base_delay",
                "contents": [
                  {
                    "kind": "block",
                    "type": "math_number"
                  },
                ]
              },
              {
                "kind": "block",
                "type": "controls_if"
              },
              {
                "kind": "block",
                "type": "controls_for"
              },
              {
                "kind": "block",
                "type": "controls_whileUntil"
              },
            ]
        },
        {
          "kind":"category",
          "name":"Matematica",
          "contents":[
              {
                "kind": "block",
                "type": "math_number"
              },
              {
                "kind": "block",
                "type": "math_arithmetic"
              },
          ]
        },
        {
          "kind":"category",
          "name":"Text",
          "contents":[
              {
                "kind": "block",
                "type": "text"
              },
          ]
        },
        {
          "kind":"category",
          "name":"Input/Output",
          "contents":[
              {
                "kind": "block",
                "type": "inout_highlow"
              },
              {
                "kind": "block",
                "type": "inout_digital_write"
              },
              {
                "kind": "block",
                "type": "inout_digital_read"
              },
              {
                "kind": "block",
                "type": "inout_analog_write"
              },
              {
                "kind": "block",
                "type": "inout_analog_read"
              },
              {
                "kind": "block",
                "type": "serial_print"
              },
              {
                "kind": "block",
                "type": "inout_tone"
              },
              {
                "kind": "block",
                "type": "inout_notone"
              },
              {
                "kind": "block",
                "type": "inout_buildin_led"
              },
          ]
        },
        {
          "kind":"category",
          "name":"Servo",
          "contents":[
              {
                "kind": "block",
                "type": "servo_move"
              },
              {
                "kind": "block",
                "type": "servo_read_degrees"
              }
          ]
        },
        {
          "kind":"category",
          "name":"Grove Analog",
          "contents":[
              {
                "kind": "block",
                "type": "grove_rotary_angle"
              },
              {
                "kind": "block",
                "type": "grove_temporature_sensor"
              },
              {
                "kind": "block",
                "type": "grove_sound_sensor"
              },
              {
                "kind": "block",
                "type": "grove_thumb_joystick"
              }
          ]
        },
        {
          "kind":"category",
          "name":"Grove",
          "contents":[
              {
                "kind": "block",
                "type": "grove_led"
              },
              {
                "kind": "block",
                "type": "grove_button"
              },
              {
                "kind": "block",
                "type": "grove_relay"
              },
              {
                "kind": "block",
                "type": "grove_tilt_switch"
              },
              {
                "kind": "block",
                "type": "grove_piezo_buzzer"
              },
              {
                "kind": "block",
                "type": "grove_pir_motion_sensor"
              },
              {
                "kind": "block",
                "type": "grove_line_finder"
              },
              {
                "kind": "block",
                "type": "grove_rgb_led"
              },
              {
                "kind": "block",
                "type": "grove_ultrasonic_ranger"
              }
          ]
        },
        {
          "kind":"category",
          "name":"Grove LCD",
          "contents":[
              {
                "kind": "block",
                "type": "grove_serial_lcd_print"
              },
              {
                "kind": "block",
                "type": "grove_serial_lcd_power"
              },
              {
                "kind": "block",
                "type": "grove_serial_lcd_effect"
              }
          ]
        },
        {
          "kind":"category",
          "name":"Grove motor",
          "contents":[
              {
                "kind": "block",
                "type": "grove_motor_shield"
              }
          ]
        },
    ]
}
export const jsonTools = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Control",
        "contents": [
          {
            "kind": "block",
            "type": "controls_if"
          },
        ]
      },
      {
        "kind": "category",
        "name": "Logic",
        "contents": [
          {
            "kind": "block",
            "type": "logic_compare"
          },
          {
            "kind": "block",
            "type": "logic_operation"
          },
          {
            "kind": "block",
            "type": "logic_boolean"
          }
        ]
      }
    ]
  };