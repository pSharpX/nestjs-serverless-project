import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const allowedOrigins = ['http://localhost:3000'];
    if (allowedOrigins.indexOf(req.header('Origin')) > -1) {
      res.header('Access-Control-Allow-Origin', req.header('Origin'));
      res.header('Access-Control-Allow-Headers', 'content-type');
      res.header('Access-Control-Allow-Methods', '*');
    }
    next();
  }

}
