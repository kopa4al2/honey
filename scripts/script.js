$(document).ready(
    function loadXmls() {
        loadRecipesXml();
        loadProductsXml();
    }
);

$('#contact-us').click(function () {
    $('main').load('templates/contact-us.html');
});

$('#about-us').click(function () {
    $('main').load('templates/about-us.html');
});

$('#recipes').click(function () {
    $.when(
        $.get('templates/recipes.html', function (data) {
            $('main').text("");
            $('main').append(data);
            renderRecipes();
        })
    )
});
$('#products').click(function () {
    $.when(
        $.get('templates/products.html', function (data) {
            $('main')
                .text("")
                .append(data);
            renderProducts();
        })
    )
});


