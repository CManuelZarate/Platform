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
    console.log("el ws en on initi es :" ,this.ws);
    
    //this.ws.addChangeListener(this.actualizar);
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


  actualizar(){
    console.log("entro actualizar");
    console.log("el ws en el actualizar es ", this.ws);
    //let code = (Blockly as any).Arduino.workspaceToCode(this.ws);
    //let area= <HTMLInputElement>document.getElementById('code')!;
    //area.value = code;
  }

  uploadClick(){//funcio de blockduino
    let code = (Blockly as any).Arduino.workspaceToCode();

    alert("Ready to upload to Arduino.");
    
    this.uploadCode(code, (status:any, errorInfo:any) => {
        if (status == 200) {
            alert("Program uploaded ok");
        } else {
            alert("Error uploading program: " + errorInfo);
        }
    });
  }

  uploadCode(code:any, callback:any){
    //let target = document.getElementById("code");

    let url = "http://127.0.0.1:8080/";
    let method = "POST";

    let async = true;

    let request = new XMLHttpRequest();
   
    request.onreadystatechange = function() {
        if (request.readyState != 4) { 
            return; 
        }
        
        //spinner.stop();
        
        var status = parseInt(request.status.toString()); // HTTP response status, e.g., 200 for "200 OK"
        var errorInfo = null;
        switch (status) {
        case 200:
            break;
        case 0:
            errorInfo = "code 0\n\nCould not connect to server at " + url + ".  Is the local web server running?";
            break;
        case 400:
            errorInfo = "code 400\n\nBuild failed - probably due to invalid source code.  Make sure that there are no missing connections in the blocks.";
            break;
        case 500:
            errorInfo = "code 500\n\nUpload failed.  Is the Arduino connected to USB port?";
            break;
        case 501:
            errorInfo = "code 501\n\nUpload failed.  Is 'ino' installed and in your path?  This only works on Mac OS X and Linux at this time.";
            break;
        default:
            errorInfo = "code " + status + "\n\nUnknown error.";
            break;
        };
        
        callback(status, errorInfo);
    };

    request.open(method, url, async);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.send(code);

  }

  serializar(){
    //let json = Blockly.serialization.workspaces.save.workspaceToCode(this.ws);
  }

}
