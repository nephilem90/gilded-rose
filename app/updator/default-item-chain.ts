import {Abstract} from "./abstract";
import {Item} from "../gilded-rose";

export class DefaultItemChain extends Abstract {

    private static isConjured(name: string): boolean {
        return name.toLowerCase().indexOf('conjured') !== -1;
    }

    private static getSubValue(item: Item): number {
        const modifier: number = DefaultItemChain.isConjured(item.name) ? 2 : 1;
        const baseDecrease: number = item.sellIn <= 0 ? 2 : 1
        return baseDecrease * modifier;
    }

    handle(item: Item): Item {
        this.subQuality(item, DefaultItemChain.getSubValue(item));
        item.sellIn--;
        return this.next.handle(item);
    }
}
