export class Site {

    constructor(selector) {
        this.$el = document.querySelector(selector);
    }
    render(models) {
        this.$el.innerHTML='';
        models.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHtml());
        });
    }
}