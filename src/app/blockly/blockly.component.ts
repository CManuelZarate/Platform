import { Component, OnInit } from '@angular/core';

//import * as Blockly from 'blockly';
import { a, jsonTools, xmlTools } from '../utils';

//import Blockly from 'blockly';
//import * as Blockly from '';


//import "../Elementos/arduino_compressed";
//import Blockly.Arduino from "../Elementos/arduino_compressed.js";
//import * as Arduino  from '../Elementos/arduino_compressed.js'
/* import second from '../../assets/arduino_compressed.js' */

import * as Blockly from 'blockly/core';
import 'blockly/blocks';

import  'blockly-arduino/arduino'; 
import  'blockly-arduino/blocks';

declare var hola:any;



@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.css']
})
export class BlocklyComponent implements OnInit {

  constructor() { }
  ws:any; //espacio de trabajo
  path:string = ''
  ngOnInit(): void {

    /* let body =  document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    //script.src = '../../assets/arduino_compressed.js';
    script.src = './arduino.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script); */

    hola();
    const blocklyDiv = document.getElementById('blocklyDiv')!;//blocklyDiv
    console.log(typeof(blocklyDiv));
    
    this.ws= Blockly.inject(blocklyDiv, {
      readOnly: false,
      trashcan: true,
      //maxBlocks:1,
      //comments:false,
      //ma:3,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true
      },
      toolbox: a
        
    } as Blockly.BlocklyOptions);

    /* let code =  (Blockly as any).JavaScript.workspaceToCode(this.ws);
    console.log("el codigo es : ", code); */
    //hola();
    
  }

  ngDoCheck(): void {
    let code = (Blockly as any).Arduino.workspaceToCode(this.ws);
    //let code = Blockly.Arduino.workspaceToCode(this.ws);
    //let code = (Blockly as any).JavaScript.workspaceToCode(this.ws);
    //console.log(code);
    let area= <HTMLInputElement>document.getElementById('code')!;
    area.value = code;
    //Blockly.Arduino.workspaceToCode(workspace);
    //Arduino.workspaceToCode();
  }



  serializar(){
    //let json = Blockly.serialization.workspaces.save.workspaceToCode(this.ws);
  }

}
