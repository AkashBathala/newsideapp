import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponentComponent implements OnInit {

  constructor() { 
   }

  ngOnInit() {
  }
  @Input() name:string;
  @Input() project:string;
  @Input() icon:string;
  @Input() id:number;
  @Input() status:true;
  @Input() address:string;
  @Input() date:Date;
}
