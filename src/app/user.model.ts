import { IUser } from './user.interface';

export class User implements IUser {
    userName: string;
    email: string;
    phone: number;

    public constructor(un?: string, em?: string, ph?: number) {
        this.userName = un ? un : '';
        this.email = em ? em : '';
        this.phone = ph ? ph : 0;
    }
}
