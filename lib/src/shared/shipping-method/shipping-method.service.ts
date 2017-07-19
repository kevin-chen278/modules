import { ShippingMethodOptions } from './shipping-method-options';

export class ShippingMethodService {
    shippingMethodList: ShippingMethodOptions[];


    constructor() {
        this.shippingMethodList = [];
    }

    // for testing
    setShippingMethodList() {
        this.shippingMethodList = JSON.parse('[{"langID":"en_US","channel":"ALL","region":"Whole World","carrier":"FedEx","code":"FDX2DNOS","name":"Standard Ground Delivery 3-5 Days","shippingSpeed":"(2 to 3 days)","estimatedDeliveryDate":"2017-07-12T15:49:35.116-04:00","currency":"USD","currencyString":"$","price":0},{"langID":"en_US","channel":"TELESALES","region":"Whole World","carrier":"FedEx","code":"TSFTRDOVNT","name":"Agent Upgrade Overnight","shippingSpeed":"(1 to 2 Days)","estimatedDeliveryDate":"2017-07-11T15:49:35.116-04:00","currency":"USD","currencyString":"$","price":0}]');
    }
    getShippingMethodOptions(code: string) {
        return this.shippingMethodList.find(item => {
            return item.code === code;
        });
    }
    getShippingMethodOptionsByIndex(index: number): ShippingMethodOptions {
        return index < this.shippingMethodList.length ? this.shippingMethodList[index] : null;
    }
}