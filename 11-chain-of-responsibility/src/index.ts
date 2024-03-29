import * as readline from 'readline';

declare var process;

import Server from './servers/Server';
import CheckUserMiddleware from './middlewares/CheckUserMiddleware';
import CheckPermissionMiddleware from './middlewares/CheckPermissionMiddleware';

const server = new Server();

function setPromptQuestions() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Digite o seu e-mail: ', (email) => {
    rl.question('Digite a sua senha: ', (password) => {
      server.login(email, password);

      rl.close();
    });
  });

  rl.on('close', () => setPromptQuestions());
}

const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());

server.setMiddleware(middleware);

setPromptQuestions();
