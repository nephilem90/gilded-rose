import {Interface} from "./interface";
import {Item} from "../gilded-rose";

export abstract class Abstract implements Interface {
    constructor(protected next: Interface) {
    }

    abstract handle(item: Item): Item;

    addQuality(item: Item, value: number): void {
        for (let i = 0; item.quality < 50 && i < value; i++) {
            item.quality++;
        }
    }

    subQuality(item: Item, value: number): void {
        for (let i = 0; item.quality > 0 && i < value; i++) {
            item.quality--;
        }
    }

}

