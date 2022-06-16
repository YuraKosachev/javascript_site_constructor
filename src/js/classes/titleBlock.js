import { Block } from './block';
import { row, col, css } from '../util.js';

export class TitleBlock extends Block {

    constructor(value, options) {
        super(value, options)
    }

    toHtml(){
        const { tag = 'h1', styles } = this.options;//деструктуризатор
        const body = col(`<${tag}>${this.value}</${tag}>`);
        return row(body, css(styles));
    }
}