import { Block } from './block';
import { col, row, css } from '../util.js';

export class TextBlock extends Block {

	constructor(value, options) {
		super(value, options)
	}

	toHtml(){
		const body = col(`<p>${this.value}</p>`);
		return row(body, css(this.options.styles));
	}
}