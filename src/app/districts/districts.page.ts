import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpcallsService } from "../shared/httpcalls.service";

@Component({
  selector: "app-districts",
  templateUrl: "./districts.page.html",
  styleUrls: ["./districts.page.scss"],
})
export class DistrictsPage implements OnInit {
  state;
  districts;
  constructor(
    private route: ActivatedRoute,
    private httpServices: HttpcallsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.state = this.route.snapshot.queryParams.state;
    if (this.state == "Andaman and Nicobar Islands") {
      this.districts = this.httpServices.AN;
    }
    if (this.state == "Andhra Pradesh") {
      this.districts = this.httpServices.AP;
    }
    if (this.state == "Arunachal Pradesh") {
      this.districts = this.httpServices.AR;
    }
    if (this.state == "Assam") {
      this.districts = this.httpServices.AS;
    }
    if (this.state == "Bihar") {
      this.districts = this.httpServices.BR;
    }
    if (this.state == "Chhattisgarh") {
      this.districts = this.httpServices.CT;
    }
    if (this.state == "Chandigarh") {
      this.districts = this.httpServices.CH;
    }
    if (this.state == "Delhi") {
      this.districts = this.httpServices.DL;
    }
    if (this.state == "Dadra and Nagar Haveli and Daman and Diu") {
      this.districts = this.httpServices.DN;
    }
    if (this.state == "Goa") {
      this.districts = this.httpServices.GA;
    }
    if (this.state == "Gujarat") {
      this.districts = this.httpServices.GJ;
    }
    if (this.state == "Himachal Pradesh") {
      this.districts = this.httpServices.HP;
    }
    if (this.state == "Haryana") {
      this.districts = this.httpServices.HR;
    }
    if (this.state == "Jharkhand") {
      this.districts = this.httpServices.JH;
    }
    if (this.state == "Jammu and Kashmir") {
      this.districts = this.httpServices.JK;
    }
    if (this.state == "Karnataka") {
      this.districts = this.httpServices.KA;
    }
    if (this.state == "Kerala") {
      this.districts = this.httpServices.KL;
    }
    if (this.state == "Ladakh") {
      this.districts = this.httpServices.LA;
    }
    if (this.state == "Lakshadweep") {
      this.districts = this.httpServices.LD;
    }
    if (this.state == "Maharashtra") {
      this.districts = this.httpServices.MH;
    }
    if (this.state == "Meghalaya") {
      this.districts = this.httpServices.ML;
    }
    if (this.state == "Manipur") {
      this.districts = this.httpServices.MN;
    }
    if (this.state == "Madhya Pradesh") {
      this.districts = this.httpServices.MP;
    }
    if (this.state == "Mizoram") {
      this.districts = this.httpServices.MZ;
    }
    if (this.state == "Nagaland") {
      this.districts = this.httpServices.NL;
    }
    if (this.state == "Odisha") {
      this.districts = this.httpServices.OR;
    }
    if (this.state == "Punjab") {
      this.districts = this.httpServices.PB;
    }
    if (this.state == "Puducherry") {
      this.districts = this.httpServices.PY;
    }
    if (this.state == "Rajasthan") {
      this.districts = this.httpServices.RJ;
    }
    if (this.state == "Sikkim") {
      this.districts = this.httpServices.SK;
    }
    if (this.state == "Telangana") {
      this.districts = this.httpServices.TG;
    }
    if (this.state == "Tamil Nadu") {
      this.districts = this.httpServices.TN;
    }
    if (this.state == "Tripura") {
      this.districts = this.httpServices.TR;
    }
    if (this.state == "Uttar Pradesh") {
      this.districts = this.httpServices.UP;
    }
    if (this.state == "Uttarakhand") {
      this.districts = this.httpServices.UT;
    }
    if (this.state == "West Bengal") {
      this.districts = this.httpServices.WB;
    }
  }
  gotoResult(n) {
    this.httpServices.addDistrict(n);
    this.router.navigate(["result"]);
  }
}
