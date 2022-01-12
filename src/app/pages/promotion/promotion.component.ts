import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
  providers: [NgbCarouselConfig]
})
export class PromotionComponent implements OnInit {

  promotions:any[]=[
    {
      img: 'assets/img/promo1.jpg'
    },
    {
      img: 'assets/img/promo2.jpg'
    }
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 4100;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
