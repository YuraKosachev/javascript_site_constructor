import { Site } from '../classes/site';
import { Sidebar } from '../classes/sidebar';

export class App {

    constructor(models)
    {
        this.models = models;
    }
    init() {
        const site = new Site('#site');

        const updateCallback = (block) => {
            this.models.push(block);
            site.render(this.models);
        };

        const sidebar = new Sidebar('.sidebar', updateCallback);
        site.render(this.models);
    }
}