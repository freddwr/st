import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  
  constructor() { 
  
  }
  ngOnInit() {
    $(window).scroll(function() {
      if ($("#menu").offset().top > 500) {
          $("#menu").addClass("navbar-dark bg-dark");
          $("#icon").removeClass("icono");
      } else {
          $("#menu").removeClass("navbar-dark bg-dark");
          $("#icon").addClass("icono");
      }
    });
  }
}
