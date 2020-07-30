import {LegendaryChain} from "./updator/legendary-chain";
import {AgedBrieChain} from "./updator/aged-brie-chain";
import {BackstageChain} from "./updator/backstage-chain";
import {DefaultItemChain} from "./updator/default-item-chain";
import {FinalChain} from "./updator/final-chain";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        const updator = FinalChain.composer(LegendaryChain, AgedBrieChain, BackstageChain, DefaultItemChain);
        this.items.forEach((item) => {
            updator.handle(item);
        });

        return this.items;
    }
}
