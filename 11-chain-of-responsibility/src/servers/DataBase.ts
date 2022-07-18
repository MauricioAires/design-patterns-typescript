import PermissionType from './PermissionType';

interface DataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const DataBase: DataBaseItem[] = [
  {
    email: 'masterngrd@code.com.br',
    password: '123456',
    permission: PermissionType.ADMIN,
  },
  {
    email: 'userngrd@code.com.br',
    password: 'u53rp@4ss',
    permission: PermissionType.USER,
  },
];

export default DataBase;
