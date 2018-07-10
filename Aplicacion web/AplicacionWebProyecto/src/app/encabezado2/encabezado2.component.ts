import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado2',
  templateUrl: './encabezado2.component.html',
  styleUrls: ['./encabezado2.component.css']
})
export class Encabezado2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('email');
    console.log('email removed',localStorage.getItem('email'));
  }

}
