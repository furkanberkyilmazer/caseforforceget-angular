import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  offers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.http.get<any[]>('https://localhost:7091/api/Offers/GetAll').subscribe(
      (response) => {
        this.offers = response;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
}