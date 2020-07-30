import {Abstract} from "./abstract";
import {Item} from "../gilded-rose";

export class AgedBrieChain extends Abstract {
    handle(item: Item): Item {
        if (item.name === 'Aged Brie') {
            this.addQuality(item, 2);
            item.sellIn--;
            return item;
        }
        return this.next.handle(item);
    }
}
