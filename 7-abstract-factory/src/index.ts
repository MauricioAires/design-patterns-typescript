import Client from './vehicles/client/Client';
import Company from './vehicles/consts/Company';
import ITransportFactory from './vehicles/factorys/interfaces/ITransportFactory';
import UberTransport from './vehicles/factorys/UberTransport';
import NineTransport from './vehicles/factorys/NineTransport';

const currentCompany = Company.NINENINE;
let factory: ITransportFactory;

switch (currentCompany) {
  case Company.NINENINE:
    factory = new NineTransport();
    break;
  case Company.UBER:
    factory = new UberTransport();
    break;

  default:
    console.error('Desconhecida');
    break;
}

const client = new Client(factory);

client.startRout();
