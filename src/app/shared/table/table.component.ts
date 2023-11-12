import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Alumno } from 'src/app/protected/alumno/interfaces/alumno.interface';

declare var $: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  alumnos:Alumno[] = [
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/medalla-diamante.png",
      logro:"../../../assets/images/trabajo-equipo.png",
      points: 450,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"Jose",
      lastname: "Perez",
      medalla:"../../../assets/images/medalla-oro.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 320,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/medalla-oro.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/medalla-oro.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:".../../../assets/images/medalla-plata.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/medalla-oro.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:".../../../assets/images/medalla-plata.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
  ]
  ingreso : boolean =false;//para inicializar 1 vez

  constructor() { }

  @ViewChild('dataTable', { static: true }) table!: ElementRef;
  ngOnInit(): void {
    this.loadTable();
  }

  loadTable(){
    //al tener mas de 500 registros seria bueno aplicar por AJAX(peticion segun se requiera ver mas)
    $(this.table.nativeElement).DataTable({
      data: this.alumnos.map( (alum,indx) => {
        return {id:indx+1,...alum};
      } ), // Obtener los datos que preparaste en el paso 1
      //scrollX:"2000px",//ver otra fora Y SE APLICA CUANDO HAYA MUCHAS COLUMNAS
      lengthMenu: [5],//para el mostrar [5,10,15,20]
      pageLength:5,//cantidad registros a mostrar inicial
      columnDefs: [
        {className:"text-center",targets:[0,3,2]},
        { orderable:false,target: [3] }, //columnas q no van a poder ser ordenables
        { searchable: false, target: [0,2,1] },//para q no busque por columna
        { width:"10%", targets:[0]  },//15
        { width:"45%", targets:[1]  },//5
        { width:"20%", targets:[2]  },//10
        { width:"25%", targets:[3]  }//25
      ],
      destroy:true,//para q sea una tabla q se pueda destruir y volver a crear,
      language:{
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
      },
      columns: [
        { title: 'ID', data: 'id' },
        { title: 'Nombre', data: 'name' },
        { title: 'Puntos', data: 'points' },
        { title: 'Medalla',searchable: false,
         data: 'medalla',
         render: (data:string) => { return `<img src=${data} alt="" width="50px" height="50px">` }
        }
      ]
    });
  }

}
