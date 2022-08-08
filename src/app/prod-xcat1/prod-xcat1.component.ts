import { Component, OnInit } from '@angular/core';
import { ProdXCat1 } from './prodXcat1';
import { ProdXCatService1 } from './prodXcat1.service';

@Component({
  selector: 'app-prod-xcat',
  templateUrl: './prod-xcat1.component.html'
})
export class ProdXcatComponent1 implements OnInit {

  prodXcats: ProdXCat1[];

  constructor(private prodxcatService: ProdXCatService1) { }

  ngOnInit(): void {
    this.prodxcatService.getProdXCat().subscribe(
      prodXcats => this.prodXcats = prodXcats
    );
  }

}
