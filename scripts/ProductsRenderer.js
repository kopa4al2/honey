function productClick(id) {

    let productSelector = `#${id}`;
    let paragraphSelector = `#${id} p`;
    let showMoreSelector = productSelector + " a";
    let paragraph = $(paragraphSelector);

    $(productSelector)[0].scrollIntoView({behavior:'smooth'});

    if (($(paragraphSelector).hasClass('hidden'))) {

        $clamp(paragraph[0], {clamp: 5});

        $(paragraphSelector).addClass('shown');
        $(paragraphSelector).removeClass('hidden');

        $(showMoreSelector).fadeIn();
        $(productSelector).animate({height: 400}, 500);
        $(paragraphSelector).fadeIn()
    }
    else {
        $(paragraphSelector).addClass('hidden');
        $(paragraphSelector).removeClass('shown');

        $(showMoreSelector).fadeOut();
        $(productSelector).animate({height: 300}, 500);
        $(paragraphSelector).fadeOut()
    }
}
function showMoreClick(id) {

    let productSelector = `#${id}`;
    let paragraph = $(productSelector + ' p')
    $clamp(paragraph[0], {clamp: 500});
    let productCss = {
        'padding': "30px",
        'padding-bottom': "50px",
        'height': '400px'
    };
    let imgCss = {
        'width': '30%',
        'height': '90%',
        'float': 'right',
        'margin-left': '30px'
    };

    $(productSelector).attr('class', 'product-expand');

    $(productSelector)
        .unbind("click");
    $(productSelector + ' a')
        .text('Свий')
        .attr('class', 'show-less')
        .unbind('click');
    setTimeout(() => {
        $(productSelector)[0].scrollIntoView({behavior:'smooth'});
    },410);
    $('.show-less').click((event) => {
        let parentDivId = event.target.parentNode.id;
        showLessClick(parentDivId);
    })
}
function showLessClick(id) {

    let productSelector = `#${id}`;

    $(productSelector).click(() => productClick(id))

    $(productSelector).attr('class', 'product');
    let productCss = {
        'width': '32%',
        'padding': '10px',
        'background-color': 'white',
        'height': '300px'
    };

    let imgCss = {
        'width': '85%',
        'height': '200px',
        'margin': 'auto',
        'float': 'none'
    };

    $(productSelector + ' a')
        .text('Разгъни')
        .attr('class', 'show-more')
        .unbind('click')
        .css('display', 'none');

    $(productSelector + ' p')
        .css({
        'display': 'none',
    })
        .removeClass('shown')
        .addClass('hidden');

    productClick(id);
    setTimeout(() => {
        $(productSelector)[0].scrollIntoView();
    },410);

    $('.show-more').click((event) => {
        let parentDivId = event.target.parentNode.id;
        showMoreClick(parentDivId);
    });


}
function renderProducts() {
    let container = $('#product-container');
    allProducts.forEach((product, id) => {


        //language=HTML
        $('<div>')
            .click(() => productClick(id))
            .attr({
                class: 'product',
                id: id
            })
            .append($('<h2>').text(product.title))
            .append($('<img>').attr('src', product.img))
            .append($('<p>')
                .text(product.content)
                .css('display', 'none')
                .attr('class', 'hidden'))
            .append($('<a>')
                .text("Разгъни")
                .attr('class', 'show-more')
                .css('display', 'none')
                .on('click', (event) => {
                    let parentDivId = event.target.parentNode.id;
                    showMoreClick(parentDivId);
                }))
            .appendTo(container)
    });
}