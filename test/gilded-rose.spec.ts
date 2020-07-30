import {expect} from 'chai';
import {Item, GildedRose} from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function () {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    describe('should generic item decrease value', () => {
        it('should decrease by one if sellIn is major of 0', function () {
            const gildedRose = new GildedRose([new Item('foo', 1, 1)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });
        it('should decrease by two if sellIn is minor or equal of 0', function () {
            const gildedRose = new GildedRose([new Item('foo', 0, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });
    });

    it('should quality never decrease under 0', function () {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('should aged brie increment value by 2', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(2);
    });

    it('quality should never exceed 50', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it('should Sulfuras never decrease quality', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(1);
    });

    describe('backstage pass', () => {
        it('should increase quality of 1 if sellIn major of 10', function () {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(1);
        });
        it('should increase quality of 2 if sellIn major of 5', function () {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(2);
        });
        it('should increase quality of 3 if sellIn minor equal of 5', function () {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(3);
        });
        it('should be zero if sellIn is minor or equal of 0', function () {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });

        it('should conjured items degrade more twice in quality', function () {
            const gildedRose = new GildedRose([new Item('Foo Conjured', 1, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });
    });
});
