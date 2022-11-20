import { createRouter } from "./helpers/createRouter";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { usersRouter } from "./User.router";
import { verificationtokensRouter } from "./VerificationToken.router";
import { todosRouter } from "./Todo.router";

export const appRouter = createRouter()

  .merge('account.', accountsRouter)

  .merge('session.', sessionsRouter)

  .merge('user.', usersRouter)

  .merge('verificationtoken.', verificationtokensRouter)

  .merge('todo.', todosRouter)
