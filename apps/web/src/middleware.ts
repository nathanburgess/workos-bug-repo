import { authkitMiddleware } from '@workos-inc/nextjs';

export default authkitMiddleware();

export const config = { matcher: ['/'] };