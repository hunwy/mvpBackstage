import Web3 from 'web3';
import {reactLocalStorage} from 'reactjs-localstorage';

class Web3Service {
  static instance

  constructor() 
  {
    if (Web3Service.instance) {
      return Web3Service.instance
    }

    Web3Service.instance = this;  
  }



  loadWallet(){

    if(!window.web3loaded)
    {
      window.web3 = new Web3( new Web3.providers.HttpProvider(window.config.web3Provider));
      window.web3loaded = true;
    }

    if( !window.address )
    {
      var obj =reactLocalStorage.getObject('wallet');
      if(obj && obj.address && obj.privateKey)
      {
          window.address = obj.address;
          window.privateKey = obj.privateKey;
          window.addressshow = obj.address.substring(0,10)+"...";
          window.gas = 4;
      }
    }
    
 }

}

  const web3Service = new Web3Service()
export default web3Service