import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-acknowledge',
  templateUrl: './acknowledge.component.html',
  styleUrls: ['./acknowledge.component.css']
})
export class AcknowledgeComponent implements OnInit {
 @Input()firstName: string;
 @Input()lastName: string;
 @Input() email: string;
 @Input() mobile: string;
 @Input() gender: string;
 @Input() age: string;

  constructor() { }

  ngOnInit() {
  }

}