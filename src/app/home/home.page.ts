import { Component, OnInit } from "@angular/core";
import { HttpcallsService } from "../shared/httpcalls.service";
import { Idata } from "../shared/idata";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  nationData: any;
  enteredPlace: string;
  states;
  districts;
  selected;
  selectedDistrict;
  dataDisplay: Idata;
  active: Number;
  recovered: Number;
  confirmed: Number;

  constructor(private httpServices: HttpcallsService, private router: Router) {}
  ngOnInit() {
    this.states = this.httpServices.states;
    this.httpServices.getData().subscribe((data) => {
      this.nationData = data;
    });
  }
  click() {
    this.dataDisplay = this.nationData[this.selected].districtData[
      this.selectedDistrict
    ];
    this.active = this.dataDisplay.active;
    this.recovered = this.dataDisplay.recovered;
    this.confirmed = this.dataDisplay.confirmed;
  }
  about() {
    this.router.navigate(["about"]);
  }
  gotoDistrict(n) {
    this.httpServices.addState(n);
    this.router.navigate(["districts"], { queryParams: { state: n } });
  }
}