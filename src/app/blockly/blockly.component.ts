import { Component, OnInit } from '@angular/core';

import * as Blockly from 'blockly';
//import Blockly from 'blockly';
//import * as Blockly from '';
import { a, jsonTools, xmlTools } from '../utils';
import "../Elementos/arduino_compressed";
//import Blockly.Arduino from "../Elementos/arduino_compressed.js";
//import * as Arduino  from '../Elementos/arduino_compressed.js'



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
    
    
  }

  ngDoCheck(): void {
    let code = (Blockly as any).Arduino.workspaceToCode(this.ws);
    console.log(code);
    let area= <HTMLInputElement>document.getElementById('code')!;
    area.value = code;
    //Blockly.Arduino.workspaceToCode(workspace);
    //Arduino.workspaceToCode();
  }

  serializar(){
    //let json = Blockly.serialization.workspaces.save.workspaceToCode(this.ws);
  }

}
