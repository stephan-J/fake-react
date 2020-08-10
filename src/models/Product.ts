
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { Api } from './Api';
import { Model } from "./Model";

interface ProductProps {
    id?: number,
    name?: string,
    price?: number,
    supplier?: string
}

const rootUrl = 'http://localhost:3000/products';

export class Product extends Model<ProductProps>{
    static buildUser(attrs: ProductProps): Product {
        return new Product(new Attributes(attrs), new Api<ProductProps>(rootUrl), new Eventing())
    }
}