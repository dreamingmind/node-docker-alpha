class FooController {
    req = {};
    res = {};
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    view(id) {
        return `<h1>view id: ${id} from Foo Controller</h1>`;
    }

    edit(id) {
        return `<h1>edit id: ${id} from Foo Controller</h1>`;
    }

    index() {
        return "<h1>index from Foo Controller</h1>";
    }


}