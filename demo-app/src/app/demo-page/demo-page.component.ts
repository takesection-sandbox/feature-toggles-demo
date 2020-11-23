import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FeaturesService } from "../features.service";
import { Label1Service } from "../label1.service";
import { Label2Service } from "../label2.service";

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {
  isLoggedIn: boolean;
  features = {};

  existsLabel1 = false;
  existsLabel2 = false;

  constructor(
    private authService: AuthService,
    private featuresService: FeaturesService,
    private label1Service: Label1Service,
    private label2Service: Label2Service
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.getFeatures();
    }
  }

  getFeatures() {
    this.featuresService.getFeatures().subscribe(featuresMap => {
      this.features = featuresMap;
      if (this.features.hasOwnProperty("label1")) {
        this.label1Service.path = this.features["label1"];
        this.existsLabel1 = true;
      }
      if (this.features.hasOwnProperty("label2")) {
        this.label2Service.path = this.features["label2"];
        this.existsLabel2 = true;
      };
    });
  }
}
