import DataBase from '../servers/DataBase';
import Middleware from './Middleware';

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (email.indexOf('@') === -1) {
      console.log('E-mail inválido!');

      return false;
    }

    function hasUser() {
      return DataBase.filter(
        (item) => item.email === email && item.password === password
      ).length;
    }

    if (!hasUser()) {
      console.log('E-mail e/ou senha inválidos!');
      return false;
    }

    return this.checkNext(email, password);
  }
}
