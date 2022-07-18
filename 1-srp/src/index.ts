import Client from './Client';
import Notify from './Notify';

const client = new Client();
const nofify = new Notify(client);

nofify.sendEmail();
