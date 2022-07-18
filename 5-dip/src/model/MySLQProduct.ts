import IDbProduct from './IDbproduct';

export default class MySLQProduct implements IDbProduct {
  getProductById(productId: number): string {
    return `MYSQl: Exibindo dados do produto: ${productId}`;
  }
}
