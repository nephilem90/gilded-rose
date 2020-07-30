import {Abstract} from "./abstract";
import {Item} from "../gilded-rose";

export class LegendaryChain extends Abstract{
    private legendaryItem = [
        'Sulfuras, Hand of Ragnaros',
    ];

    handle(item: Item): Item {
        if (this.legendaryItem.indexOf(item.name) !== -1) {
            return item;
        }
        return this.next.handle(item);
    }
}
