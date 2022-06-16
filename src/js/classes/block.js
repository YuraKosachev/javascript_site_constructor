export class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHtml(){ throw Error('method toHtml not implemented'); }
}

