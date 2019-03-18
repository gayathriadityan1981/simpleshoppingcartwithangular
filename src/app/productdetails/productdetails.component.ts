import { Component, OnInit,Input } from '@angular/core';
import {Subject} from 'rxjs';
//import { $ } from 'protractor';
@Component({
  selector: 'cm-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  @Input() list:Subject<any>;
  fullDetails:any[];
  constructor() { }

  ngOnInit() {
    this.list.subscribe(
      details=>{
        console.log("----details---"+details);
        this.fullDetails=details;
      //  $("#productinfomodal").modal("show");
      },
      error=>{
        console.log("-----error-----"+error);
      }
    )
  }

}
