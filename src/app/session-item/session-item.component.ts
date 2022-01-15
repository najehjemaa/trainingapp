import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  //name ='Formation Web';
  alignement = 'center';
  couleur = 'red';
  @Input() session!: any;
  
 

  constructor() { }

  ngOnInit(): void {
  }

  inscrire() {
    console.log('Formation Web Avancée');
    this.session.name = 'Formation Web Avancée'
    this.session.participants = this.session.participants + 1;
  }

  

}
