//THE MOST COUNTER INTUITIVE STUFF EVER

var allRecipes = new Map;
var allProducts = new Map;
function loadProductsXml() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "db/products.xml", true);
    xhttp.send();

    function myFunction(xml) {

        let productsResponse = xml.responseText.split("\t").join("");
        productsResponse = productsResponse.split("\n").join("");
        mapAllProducts(productsResponse)
        function mapAllProducts(productsResponse) {

            let allProductsRegex = "<product>(.+?)</product>";


            if (productsResponse.match(allProductsRegex) == null)
                return;

            let singleProduct = productsResponse.match(allProductsRegex)

            let productIdRegex = "<id>(.+)</id>"
            let productTitleRegex = "<title>(.+)</title>"
            let productContentRegex = "<content>(.+)</content>"
            let productImgRegex = "<img>(.+)</img>"

            let product = {};
            product.id = singleProduct[1].match(productIdRegex)[1];
            product.title = singleProduct[1].match(productTitleRegex)[1];
            product.content = singleProduct[1].match(productContentRegex)[1];
            product.img = singleProduct[1].match(productImgRegex)[1];

            allProducts.set(product.id, product);

            mapAllProducts(productsResponse.replace(singleProduct[0], ""))
        }
    }
}
function loadRecipesXml() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "db/recipes.xml", true);
    xhttp.send();

    function myFunction(xml) {

        let recipesResponse = xml.responseText.split("\t").join("");
        recipesResponse = recipesResponse.split("\n").join("");
        mapAllRecipes(recipesResponse)
        function mapAllRecipes(recipesResponse) {

            let allRecipesRegex = "<recipe>(.+?)</recipe>";


            if (recipesResponse.match(allRecipesRegex) == null)
                return;

            let singleRecipe = recipesResponse.match(allRecipesRegex);

            let recipeIdRegex = "<id>(.+)</id>";
            let recipeTitleRegex = "<title>(.+)</title>";
            let recipeContentRegex = "<content>(.+)</content>";

            let recipe = {};
            recipe.id = singleRecipe[1].match(recipeIdRegex)[1];
            recipe.title = singleRecipe[1].match(recipeTitleRegex)[1];
            recipe.content = singleRecipe[1].match(recipeContentRegex)[1];

            allRecipes.set(recipe.id, recipe);

            mapAllRecipes(recipesResponse.replace(singleRecipe[0], ""))
        }

    }
}
