import { Data } from './data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponentComponent implements OnInit {

  @Input() datapacket;
  constructor() { 
   }

  ngOnInit() {
      
  }
  
  
}
