import { uuid } from 'uuid'

export class User {
    public readonly id: string;
    
    public name: string;
    public email: string;
    public password: string;
    public admin: boolean;

    constructor(props: Omit<User, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id){
            this.id = uuid()
        }
    }
}