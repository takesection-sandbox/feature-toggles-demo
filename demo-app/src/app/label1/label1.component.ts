import { Component, OnInit } from '@angular/core';
import { Label1Service} from "../label1.service";

@Component({
  selector: 'app-label1',
  templateUrl: './label1.component.html',
  styleUrls: ['./label1.component.css']
})
export class Label1Component implements OnInit {

  label: string = 'Unauthorized';

  constructor(
    private service: Label1Service
  ) { }

  ngOnInit() {
    this.service.getLabel().subscribe(msg => {
      this.label = msg.toString();
    });
  }
}
