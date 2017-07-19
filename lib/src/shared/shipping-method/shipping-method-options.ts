export class ShippingMethodOptions {
     name: string;
     shippingSpeed: string;
     estimatedDeliveryDate: string;
     price: number;
     langID: string;
     currency: string;
     carrier: string;
     region: string;
     channel: string;
     code: string;
     currencyString: string;

     constructor (sourceObject?: any) {
         if (sourceObject) {
              this.name = sourceObject['name'];
              this.shippingSpeed = sourceObject['shippingSpeed'];
              this.estimatedDeliveryDate = sourceObject['estimatedDeliveryDate'];
              this.price = sourceObject['price'];
              this.currency = sourceObject['currency'];
              this.carrier = sourceObject['carrier'];
              this.region = sourceObject['region'];
              this.code = sourceObject['code'];
              this.currencyString = sourceObject['currencyString'];
         }
     }
}
