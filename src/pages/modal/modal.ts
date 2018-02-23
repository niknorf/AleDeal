import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
	products: any=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataProvider) {
  	// console.log('ProductId', navParams.get('productId'));

  	this.dataService.getByID(this.navParams.get('id')).then(result => {
      this.products = result;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
