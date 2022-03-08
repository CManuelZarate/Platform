import { Component, OnInit } from '@angular/core';

import * as Blockly from 'blockly';
//import * as Blockly from '';
import { a, jsonTools, xmlTools } from '../utils';
//import './BlocklyDuino/blockly/apps/index.html'
@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  //templateUrl: '../BlocklyDuino/blockly/apps/index.html',
  //templateUrl: 'src/app/BlocklyDuino/blockly/apps/index.html',
  //templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.css']
})
export class BlocklyComponent implements OnInit {

  constructor() { }
  ws:any;
  path:string = ''
  ngOnInit(): void {

    const blocklyDiv = document.getElementById('blocklyDiv')!;
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

    let code =  (Blockly as any).JavaScript.workspaceToCode(this.ws);
    console.log("el codigo es : ", code);
    
    
  }

  serializar(){
    //let json = Blockly.serialization.workspaces.save 
  }

}
