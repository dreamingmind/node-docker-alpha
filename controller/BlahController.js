class BlahController {
    req = {};
    res = {};
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    view(id) {
        return `<h1>view id: ${id} from Blah Controller</h1>`;
    }

    edit(id) {
        return `<h1>edit id: ${id} from Blah Controller*** NEW</h1>`;
    }

    index() {
        return "<h1>index from Blah Controller</h1>";
    }


}

module.exports = BlahController;