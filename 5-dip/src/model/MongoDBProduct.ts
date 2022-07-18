import IDbProduct from './IDbproduct';

export default class MongoDBProduct implements IDbProduct {
  getProductById(productId: number): string {
    return `MongoDB: Exibindo dados do produto: ${productId}`;
  }
}
