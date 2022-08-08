import { Component, OnInit } from '@angular/core';
import { ProdXCat } from './prodXcat';
import { ProdXCatService } from './prodXcat.service';

@Component({
  selector: 'app-prod-xcat',
  templateUrl: './prod-xcat.component.html'
})
export class ProdXcatComponent implements OnInit {

  prodXcats: ProdXCat[];

  constructor(private prodxcatService: ProdXCatService) { }

  ngOnInit(): void {
    this.prodxcatService.getProdXCat().subscribe(
      prodXcats => this.prodXcats = prodXcats
    );
  }

}
