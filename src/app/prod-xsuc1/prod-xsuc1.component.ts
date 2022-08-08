import { Component, OnInit } from '@angular/core';
import { ProdXSuc1 } from './prodXsuc1';
import { ProdXSucService1 } from './prod-xsuc1.service';

@Component({
  selector: 'app-prod-xsuc',
  templateUrl: './prod-xsuc1.component.html'
})
export class ProdXsucComponent1 implements OnInit {

  prodXsucs: ProdXSuc1[];

  constructor(private prodxsucService: ProdXSucService1) {
    console.log(localStorage.getItem('ClienteID'));
   }

  ngOnInit(): void {
    this.prodxsucService.getProdXSuc().subscribe(
      prodXsucs => this.prodXsucs = prodXsucs
    );
  }

}
