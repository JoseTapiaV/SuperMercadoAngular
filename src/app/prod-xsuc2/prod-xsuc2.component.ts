import { Component, OnInit } from '@angular/core';
import { ProdXSuc2 } from './prodXsuc2';
import { ProdXSucService2 } from './prod-xsuc2.service';

@Component({
  selector: 'app-prod-xsuc',
  templateUrl: './prod-xsuc2.component.html'
})
export class ProdXsucComponent2 implements OnInit {

  prodXsucs: ProdXSuc2[];

  constructor(private prodxsucService: ProdXSucService2) { }

  ngOnInit(): void {
    this.prodxsucService.getProdXSuc().subscribe(
      prodXsucs => this.prodXsucs = prodXsucs
    );
  }

}
