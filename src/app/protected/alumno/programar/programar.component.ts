import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

//import * as Blockly from 'blockly';
import { a, jsonTools, xmlTools } from '../../../utils';

import { saveAs } from 'file-saver';//para insatalarlo son 2 instalaciones
//import * as fileSaver from 'file-saver';

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
  selector: 'app-programar',
  templateUrl: './programar.component.html',
  styleUrls: ['./programar.component.css']
})
export class ProgramarComponent implements OnInit,AfterViewInit,AfterViewChecked {

  verReto:boolean =false;
  verCodigo:boolean =true;

  constructor() {console.log("el obk en cons",this.obj);
  let area= <HTMLInputElement>document.getElementById('code')!;
  console.log("el area en el CONSTRUCTO es",area);}
  
  ngAfterViewChecked() {
    let code = (Blockly as any).Arduino.workspaceToCode(this.ws);
    let area= <HTMLInputElement>document.getElementById('code')!;
    console.log("el area en el NGDOCHECK es",area);
    if(area){
      area.value = code;
    }
  }


  ngAfterViewInit() {
    if(this.verCodigo){
      let area= <HTMLInputElement>document.getElementById('code')!;
      console.log("NG AFTERVIEWINIT",area);
      
      area.value = this.codeWs;
    }
    
  }
  //ws:any; //espacio de trabajo
  ws:Blockly.Workspace | any; //espacio de trabajo
  path:string = '';
  bloqueSeleccionado:any ={};//definir luego
  obj:any = {a:"asd"};
  codeWs:any;
  ngOnInit(): void {
    let area= <HTMLInputElement>document.getElementById('code')!;
    console.log("el area en el ONINIT es",area);
    this.obj={z:"asdasd"};
    console.log("el obj en init",this.obj);
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
    this.ws.addChangeListener(this.actualizar);
    
    
    //this.ws.addChangeListener(this.actualizar);
    /* let code =  (Blockly as any).JavaScript.workspaceToCode(this.ws);
    console.log("el codigo es : ", code); */
    //hola();
    
  }

  ngDoCheck(): void {
    //this.codeWs = (Blockly as any).Arduino.workspaceToCode(this.ws);
    let code = (Blockly as any).Arduino.workspaceToCode(this.ws);
    //let code = Blockly.Arduino.workspaceToCode(this.ws);
    //let code = (Blockly as any).JavaScript.workspaceToCode(this.ws);
    //console.log(code);
    let area= <HTMLInputElement>document.getElementById('code')!;
    console.log("el area en el NGDOCHECK es",area);
    if(area){
      area.value = code;
    }
    //Blockly.Arduino.workspaceToCode(workspace);
    //Arduino.workspaceToCode();
    //console.log(Blockly.WorkspaceComment.prototype);
    
    if(!Blockly.selected){
      const ayuda = document.getElementById("ayuda")!;
      const blockly = document.getElementById("blocklyDiv")!;
      const code = document.getElementById("code")!;
      ayuda.style.display="none";
      //ayuda.classList.add("col-4");
      blockly.classList.replace("col-6","col-9");
      if(code){code.classList.replace("col-3","col-3");}
    }
  }

  cargarAyuda(){
    console.log("el bloqe se",Blockly.selected);
    
    if(Blockly.selected){
      const ayuda = document.getElementById("ayuda")!;
      const blockly = document.getElementById("blocklyDiv")!;
      const code = document.getElementById("code")!;
      ayuda.style.display="block";
      ayuda.classList.add("col-3");
      blockly.classList.replace("col-9","col-6");
      code.classList.replace("col-3","col-3");
    }else{
      console.log("seleccione un bloque para q se muestre la ayuda de el");
    }
  }


  actualizar(){
    
    //console.log(this.obj);
    
    console.log("entro actualizar");
    console.log("el ws en el actualizar es ", Blockly.getMainWorkspace().getAllBlocks(true));
    console.log("el bloque seleccionado es  ", Blockly.selected);//obtengo el id del bloque seleccionado
    let sele=Blockly.selected;
    //this.bloqueSeleccionado = sele;
    //this.bloqueSeleccionado = Blockly.selected;
    //let bloqueSI=Blockly.getMainWorkspace().getBlockById(Blockly.selected.id);
    console.log("el tipo es ;:",typeof sele);
    
    

/* no funca esto
    this.bloqueSeleccionado =Blockly.getMainWorkspace().getBlockById(Blockly.selected.id);
    console.log("elboc",Blockly.getMainWorkspace().getBlockById(Blockly.selected.id)); */


    //console.log("elboc",this.bloqueSeleccionado);
    
    //Blockly.Comment.drawIcon_(bloque);
    //bloque.inputList[2].setVisible(true);
    //bloque.inputList[3].setVisible(true);
    
    /* this.bloqueSeleccionado.commentModel.pinned=true;
    this.bloqueSeleccionado.commentModel.text="gaaaaaa";
    console.log("modelo",this.bloqueSeleccionado.commentModel);
    console.log("get comment text",this.bloqueSeleccionado.getCommentText()); */
     
    /**no entiendo por q el this.ws no funca*/




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

  resetClick(){
    console.log("el ws en el actualizar es ", this.ws);
    this.ws.clear();
    //let code = "void setup() {} void loop() {}";
    //let area= <HTMLInputElement>document.getElementById('code')!;
    //area.value = code;

    /* this.uploadCode(code, (status :any, errorInfo:any) => {
        if (status != 200) {
            alert("Error resetting program: " + errorInfo);
        }
    }); */
  }

  saveArduino(){
    let fileName = window.prompt('What would you like to name your file?', 'BlocklyDuino')
    //doesn't save if the user quits the save prompt
    if(fileName){
      let blob = new Blob([(Blockly as any).Arduino.workspaceToCode()], {type: 'text/plain;charset=utf-8'});
      saveAs(blob, fileName + '.ino');
    }
  }

  save(){
    let xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    let data = Blockly.Xml.domToText(xml);
    let fileName = window.prompt('What would you like to name your file?', 'BlocklyDuino');
    // Store data in blob.
    // var builder = new BlobBuilder();
    // builder.append(data);
    // saveAs(builder.getBlob('text/plain;charset=utf-8'), 'blockduino.xml');
    if(fileName){
      var blob = new Blob([data], {type: 'text/xml'});
      saveAs(blob, fileName + ".xml");
    } 
  }

  cargar(){
    let loadInput = document.getElementById('load');
    loadInput!.addEventListener('change', this.load, false);
    document.getElementById('fakeload')!.onclick = function() {
      (<HTMLInputElement>loadInput).click();
    };
  }

  load(event:any){
    let files = event.target.files;
    // Only allow uploading one file.
    if (files.length != 1) {
      return;
    }

    // FileReader
    let reader = new FileReader();
    reader.onloadend = function(event) {
      let target = event.target!;
      // 2 == FileReader.DONE
      if (target.readyState == 2) {
        let xml
        try {
          let a=<string>target.result!;
          xml = Blockly.Xml.textToDom(a);
        } catch (e) {
          alert('Error parsing XML:\n' + e);
          return;
        }
        let count = Blockly.mainWorkspace.getAllBlocks(true).length;//examinar q hace ese true
        if (count && confirm('Replace existing blocks?\n"Cancel" will merge.')) {
          Blockly.mainWorkspace.clear();
        }
        Blockly.Xml.domToWorkspace(xml,Blockly.mainWorkspace);//cambie pos
      }
      // Reset value of input after loading because Chrome will not fire
      // a 'change' event if the same file is loaded again.
      (<HTMLInputElement>document.getElementById('load')).value = '';
    };
    reader.readAsText(files[0]);
  }


  serializar(){
    //let json = Blockly.serialization.workspaces.save.workspaceToCode(this.ws);
  }

  radioBtn(e:any){
    console.log(e.target.id);
    if(e.target.id =="reto"){
      this.verReto =true;
      this.verCodigo =false;
      /* document.getElementById("code")!.style.display="none";
      document.getElementById("reto")!.style.display="block"; */
    }else{
      this.verReto =false;
      this.verCodigo =true;
      /* document.getElementById("code")!.style.display="block";
      document.getElementById("reto")!.style.display="none"; */
    }
  }

}
