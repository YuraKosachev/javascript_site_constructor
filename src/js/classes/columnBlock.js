import { Block } from './block';
import { col, row, css } from '../util.js';

export class ColumnBlock extends Block {

	constructor(value, options) {
		super(value, options)
	}

	toHtml(){
		const body = this.value.map(col).join("\r\n");//analog .map(col)
		return row(body, css(this.options.styles));
	}
}