import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
// import { ProductsProvider } from '../../providers/products/products';
// import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	tabs: string = "new";

	public prodPic: any;
	public pic: any;

	public productsList: Array<any>;

  public products: any;

  // public dataService: DataProvider,

  constructor(public navCtrl: NavController,  public modalCtrl: ModalController) {
  	this.prodPic = firebase.storage().ref().child('img/');
    this.prodPic.child('sample.png').getDownloadURL().then((url) => {
    this.pic = url;

    // this.dataService.loadAll().then(result => {
    //         this.products = result;
    //     });

    });

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

    openModal(id): void {
    this.navCtrl.push('ModalPage', {id:id});
  }

  // ionViewDidLoad() {
  // 	this.productsProvider.getProducts().on("value", productsListSnapshot => {
  //     this.productsList = [];
  //     productsListSnapshot.forEach(snap => {
  //       this.productsList.push({
  //         id: snap.key,
  //         header: snap.val().header,
  //         description: snap.val().description
  //       });
  //       return false;
  //     });
  //   });
  // }

}
