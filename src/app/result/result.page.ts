import { Component, OnInit } from "@angular/core";
import { HttpcallsService } from "../shared/httpcalls.service";
import { Idata } from "../shared/idata";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-result",
  templateUrl: "./result.page.html",
  styleUrls: ["./result.page.scss"],
})
export class ResultPage implements OnInit {
  nationData;
  dataDisplay: Idata;
  selectedState;
  selectedDistrict;
  active;
  recovered;
  confirmed;
  constructor(
    private httpServices: HttpcallsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http
      .get("https://api.covid19india.org/state_district_wise.json")
      .subscribe((data) => {
        this.nationData = data;
        this.selectedState = this.httpServices.getState();
        this.selectedDistrict = this.httpServices.getDistrict();
        this.dataDisplay = this.nationData[this.selectedState].districtData[
          this.selectedDistrict
        ];
        this.active = this.dataDisplay.active;
        this.recovered = this.dataDisplay.recovered;
        this.confirmed = this.dataDisplay.confirmed;
      });
  }
}
