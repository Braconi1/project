$(document).ready(function() {
    var app = $.spapp({
        defaultView: "#page1",
        templateDir: "./views/"
    });

    app.route({
        view: 'page1',
        load: 'index.html'
    });

    app.route({
        view: 'page2',
        load: 'shop.html'
    });

    app.route({
        view: 'page3',
        load: 'gallery.html'
    });

    app.run();
});
