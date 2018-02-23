import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

	products: any;

  constructor(public http: HttpModule) {
    console.log('Hello DataProvider Provider');

    this.products = [
{
	id: 1,
	name: 'Bread',
	description: 'Fazer',
	price: 3.50,
	discountPrice: 2,
	img: 'assets/imgs/product/fazer.jpg'
}
];

  }

  loadAll() {
  	return Promise.resolve(this.products);
  }

  getByID(id) {
    for (var i = 0; i < (this.products).length; i++) {
      if (this.products[i].id == id) {
        return Promise.resolve(this.products[i]);
      }
    }
  };

}
