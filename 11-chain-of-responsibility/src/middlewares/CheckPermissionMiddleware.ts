import DataBase from '../servers/DataBase';
import Middleware from './Middleware';
import PermissionType from '../servers/PermissionType';

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    const user = DataBase.filter(
      (item) => item.password === password && item.email === email
    );

    if (!user.length) {
      console.log('E-mail não cadastrado!');
      return false;
    }

    if (user[0].permission === PermissionType.ADMIN) {
      console.log('Seja bem-vindo admistrador ');

      return true;
    }

    console.log('Seja bem vindo usuário');

    return this.checkNext(email, password);
  }
}
