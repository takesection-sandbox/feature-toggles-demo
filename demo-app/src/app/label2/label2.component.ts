import { Component, OnInit } from '@angular/core';
import { Label2Service } from "../label2.service";

@Component({
  selector: 'app-label2',
  templateUrl: './label2.component.html',
  styleUrls: ['./label2.component.css']
})
export class Label2Component implements OnInit {

  label;

  constructor(
    private service: Label2Service
  ) { }

  ngOnInit() {
    this.label = 'Unauthorized';
    this.service.getLabel().subscribe(msg => this.label = msg);
  }

}
