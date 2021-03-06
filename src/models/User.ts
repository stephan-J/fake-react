
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { Api } from './Api';
import { Model } from "./Model";

interface UserProps {
    id?: number,
    name?: string,
    age?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps>{
    static buildUser(attrs: UserProps): User {
        return new User(new Attributes(attrs), new Api<UserProps>(rootUrl), new Eventing())
    }
}