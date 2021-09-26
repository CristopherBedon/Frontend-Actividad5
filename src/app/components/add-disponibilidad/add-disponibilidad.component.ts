import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Disponibilidad } from 'src/app/models/disponibilidad.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CombosService } from 'src/app/services/combos.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {

  disponibilidad : Disponibilidad = {
    dia              :"",
    ciclo            :{
      idCiclo:0
    },
    usuario          :{
      idUsuario:0
    }
  }

  listaUsuarios  :Usuario   [] = [];
  listaCiclos    :Ciclo     [] = [];


  constructor(
    private servicioDisponibilidad: DisponibilidadService,
    private servicioCombos: CombosService
  ) {}

  registra(){
    console.log(" >>> registra() ");
    console.log(this.disponibilidad);

    this.servicioDisponibilidad.registraDisponibilidad(this.disponibilidad).subscribe(
        response => {
          console.log(response.mensaje);
          alert(response.mensaje);
        },
        error => {
          console.log(error);
        },
    );
  }

  ngOnInit(): void {
    this.combos();
  }

  combos() {
    this.servicioCombos.comboUsuario().subscribe(
      usuario => {
        this.listaUsuarios = usuario;
      }
    );
    this.servicioCombos.comboCiclo().subscribe(
      ciclo => {
        this.listaCiclos = ciclo;
      }
    );
  }

}

