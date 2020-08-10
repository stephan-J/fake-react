import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';


interface ModelAttributes<P> {
    get<K extends keyof P>(key: K): P[K];
    getAll(): P;
    set(update: P): void;
}

interface Sync<P> {
    fetch<P>(id: (number | string)): Observable<AxiosResponse<P>>;
    save (data: P): Observable<AxiosResponse>;
}

interface Events {
    on (eventName: string, callback: () => void): void;
    trigger (eventName: string): void;
}

export class Model<P> {

    constructor(private atts: ModelAttributes<P>, private sync: Sync<P>, private events: Events) { 
    };

    get on()  { 
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }

    get get () {
        return this.atts.get;
    }

    get getAll () {
        return this.atts.getAll;
    }

    set (update: P) {
        this.atts.set(update);
        this.events.trigger('change');
    }

    get fetch () {
        return this.sync.fetch;
    }

    get save() {
        return this.sync.save;
    }
}