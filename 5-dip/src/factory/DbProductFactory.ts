import Db from '../model/DB';
import IDbProduct from '../model/IDbproduct';
import MySLQProduct from '../model/MySLQProduct';
import MongoDBProduct from '../model/MongoDBProduct';

export default class DbProductFactory {
  private static type: Db = Db.MONGODB;

  public static create(): IDbProduct {
    if (this.type === Db.MONGODB) {
      return new MongoDBProduct();
    } else if (this.type === Db.MYSQL) {
      return new MySLQProduct();
    }
  }
}
