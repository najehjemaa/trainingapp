import { Component, Input, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  alignement = 'center';
  couleur = 'red';
  @Input() session!: any;
  

  constructor(private sessionItemService: FakeSessionItemService) { }

  ngOnInit(): void {
  }
  
  inscrire() {
    console.log('Formation Web Avancée');
    this.session.name = 'Formation Web Avancée'
    this.session.participants = this.session.participants + 1;
    if (this.session.participants >= 20) {
      this.session.isCompleted = true;
    }
  }

  onDelete() {
    console.log(this.session);
    this.sessionItemService.delete(this.session);
  }
}
