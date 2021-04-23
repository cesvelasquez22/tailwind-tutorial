import { Component } from '@angular/core';
import { Property } from './models/model.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwind-tutorial';

  property: Property = {
    imageSrc: 'assets/images/house.jpg',
    imageAlt: 'Rear view with modern home with wide garden',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center',
    priceInCents: 190000,
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4
  };
}
