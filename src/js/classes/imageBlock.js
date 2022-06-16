import { Block } from './block';
import { row, css } from '../util.js';

export class ImageBlock extends Block {

	constructor(value, options) {
		super(value, options)
	}

	toHtml(){
		const body = `<img src="${this.value.src}" alt="${this.value.alt}"/>`;
		return row(body, css(this.options.styles));
	}
}