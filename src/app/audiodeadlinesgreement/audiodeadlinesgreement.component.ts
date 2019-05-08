import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from "@angular/router";
import {ModalaudiodeadlineComponent} from "../modalaudiodeadline/modalaudiodeadline.component";
import {ApiService} from "../api.service";
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-audiodeadlinesgreement',
  templateUrl: './audiodeadlinesgreement.component.html',
  styleUrls: ['./audiodeadlinesgreement.component.css']
})
export class AudiodeadlinesgreementComponent implements OnInit {
  fullname: string;
  public errormsg: any;
  public show: any = false;
  public successmsg: any;
  public endpoint = 'addorupdatedata';
  public endpoint1 = 'datalist';
  constructor(public modal: MatDialog, public apiservice: ApiService,public cookieService:CookieService, public router: Router) {
    console.log('id-- '+this.cookieService.get('id'));
  }
  openDialog(){
    this.errormsg='';
    console.log('-- '+this.fullname);
   /* const dialogRef = this.modal.open(ModalaudiodeadlineComponent);{
      data: {myForm : this.fullname}
    }*/
    const dialogRef = this.modal.open(ModalaudiodeadlineComponent, {
      data: {myForm : this.fullname}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.fullname = result;
      this.show = true;
      console.log('this.myForm');
      console.log(this.fullname);
    });
  }

  ngOnInit() {
  }
  onAgreement() {
    console.log(this.fullname);
    let data = {
      audiodeadline_sign: this.fullname,
      audiodeadline_agreement_date: new Date().getTime(),
      status: 3,
      id: this.cookieService.get('id'),
      create_a_user: true
    };
    let data1 = {data: data,source:'users'};
    console.log(data);
    if (this.fullname != '' && this.fullname!= null) {
      this.apiservice.postData(this.endpoint, data1).subscribe(res => {
        this.successmsg = true;
        let result: any = {};
        result = res;
        console.log('result');
        console.log(result);
        if (result.data.status == 'success') {
          let data2={_id: this.cookieService.get('id')};
          let data3 = {"condition": data2,source:'users'};
          this.apiservice.postData(this.endpoint1, data3).subscribe( res => {
            let result: any;
            result = res;
            console.log(result.res[0].auidodeadineusername);
            this.cookieService.set('modelaffiliateemail', result.res[0].auidodeadineusername);
            this.router.navigate(['/modeldashboard']);
          })
        }
      },error => {
        this.successmsg = false;
        this.onAgreement();
      })

    } else {
      this.errormsg = "Sign is required";
    }
  }

}



