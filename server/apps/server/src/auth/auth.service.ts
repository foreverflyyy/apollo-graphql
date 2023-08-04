import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getInfo(): string {
        return "Getting info!"
    }
}
