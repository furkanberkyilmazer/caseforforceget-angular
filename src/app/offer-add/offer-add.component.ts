import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css']
})
export class OfferAddComponent {
  offerDto: any = {
    mode: '',
    movementType: '',
    incoterms: '',
    country:'',
    city:'',
    packageType: '',
    unit1: '',
    unit2: '',
    currency: ''
  };
  offer:any={
    mode: '',
  movementType: '',
  incoterms: '',
  countriesCities: '',
  packageType: '',
  unit1: '',
  unit2: '',
  currency: ''};
  errorMessage: any ={};
  errorMessageForRecord: string | null = null;
  successMessage: string | null = null;

  selectedCountry: any  = '';
  selectedCity: any  = '';

  countries: string[] = ['USA', 'China', 'Turkey']; 
  cities: string[] = []; 

  constructor(private http: HttpClient) {}

  onCountryChange(event: any) {
    const country = event.target.value;
    if (country) {
      this.cities = this.getCitiesByCountry(country);
    }
  }
  getCitiesByCountry(country: string): string[] {
   
    switch (country) {
      case 'USA':
        return ['New York', 'Los Angeles', 'Miami', 'Minnesota'];
      case 'China':
        return ['Beijing', 'Shanghai'];
      case 'Turkey':
        return ['Istanbul', 'Izmir'];
      default:
        return [];
    }
  }

  submitOffer() {
    let isValid = true;
  console.log("burdaaa");
    Object.keys(this.offerDto).forEach((key) => {
      
      if (!this.offerDto[key]) {
        this.errorMessage[key] = 'Please make a selection';
        console.log("burdaaafalse");

        isValid = false;
      }
      else {
        this.errorMessage[key] = '';
      }

     
     
    });
    console.log("burdaaa2");

    console.log(isValid);
    if (isValid) {
 
       this.offer.mode=this.offerDto.mode;
       this.offer.movementType=this.offerDto.movementType;
       this.offer.incoterms=this.offerDto.incoterms;
       this.offer.countriesCities=this.offerDto.country +" - "+ this.offerDto.city;
       this.offer.packageType=this.offerDto.packageType;
       this.offer.unit1=this.offerDto.unit1;
       this.offer.unit2=this.offerDto.unit2;
       this.offer.currency=this.offerDto.currency;

      console.log(this.offer);
      this.http.post('https://localhost:7091/api/Offers/Add', this.offer).subscribe(
        (response: any) => {
          this.successMessage = 'Kayıt Tamamlandı';
        },
        (error) => {
          this.errorMessageForRecord="Kayıt Başarısız!!!";
          console.error('An error occurred:', error);
        }
      );
    }
  }

  
}