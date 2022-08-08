import { Component, OnInit } from '@angular/core';
import { ProdXSuc } from './prodXsuc';
import { ProdXSucService } from './prodXsuc.service';

@Component({
  selector: 'app-prod-xsuc',
  templateUrl: './prod-xsuc.component.html'
})
export class ProdXsucComponent implements OnInit {

  prodXsucs: ProdXSuc[];

  constructor(private prodxsucService: ProdXSucService) { 
  }

  ngOnInit(): void {
    this.prodxsucService.getProdXSuc().subscribe(
      prodXsucs => this.prodXsucs = prodXsucs
    );
    console.log(localStorage.getItem('ClienteID'));
  }

}
