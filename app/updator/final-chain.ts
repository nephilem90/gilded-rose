import {Interface} from "./interface";

export class FinalChain implements Interface {
    handle(item: any): any {
        return item;
    }

    static composer(...links: Array<new(Interface) => Interface>): Interface {
        return links.map(f1 => (next :Interface) :Interface => new f1(next))
            .reduce((f1, f2) => next => f1(f2(next)))
            (new FinalChain());
    }
}
