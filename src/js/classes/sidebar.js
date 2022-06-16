import { block } from '../util';
import { ColumnBlock } from '../classes/columnBlock';
import { ImageBlock } from '../classes/imageBlock';
import { TextBlock } from '../classes/textBlock';
import { TitleBlock } from '../classes/titleBlock';

export class Sidebar {
    constructor(selector, updateCallBack) {
        this.$el = document.querySelector(selector);
        this.update = updateCallBack;
        this.init();
    }
    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template);
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    add(event) {
        event.preventDefault();
        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;

        let newBlock;
        if (type === 'text')
        {
            newBlock = new TextBlock(value, { styles });
        }

        if (type === 'title')
        {
            newBlock = new TitleBlock(value, { styles });
        }
        this.update(newBlock);
        event.target.value.value = '';
        event.target.styles.value = '';
    }




    get template() {
        return [
            block('text'),
            block('title')
            ].join('');
    }

}