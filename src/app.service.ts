import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getuser(id: string): string {
    return `User ID: ${id}`;
  }
}
