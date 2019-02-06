import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  // images = [1, 2, 3].map(() => `/assets/unsolotamanio1.jpg,/assets/unsolotamanio2.jpg,/assets/unsolotamanio3.jpg`);

  constructor() { }

  ngOnInit() {
    document.getElementById("html").classList.toggle("fhtml");
    // revizar luego la funcion scroll para las animaciones
  //   window.onscroll = function (){
  //     // Obtenemos la posicion del scroll en pantall
  //     var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  
  //     // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
  //     if(scroll > 300 && scroll < 400){
  //         console.log("Pasaste la posicion 300 del scroll");
  //     }
  // }
  }

}
