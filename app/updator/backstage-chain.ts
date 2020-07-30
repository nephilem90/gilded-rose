import {Abstract} from "./abstract";
import {Item} from "../gilded-rose";

export class BackstageChain extends Abstract {
    handle(item: Item): Item {
        if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn > 0) {
                this.addQuality(item, 1);
            }
            if (item.sellIn <= 10 && item.sellIn >= 5) {
                this.addQuality(item, 1);
            }
            if (item.sellIn <= 5 && item.sellIn > 0) {
                this.addQuality(item, 1);
            }
            if (item.sellIn < 1) {
                item.quality = 0;
            }
            item.sellIn--;
            return item;
        }
        return this.next.handle(item);
    }
}
