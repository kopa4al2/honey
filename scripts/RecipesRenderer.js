/**
 * Created by stefan on 02.07.18.
 */
function renderRecipes() {
    let container = $('#recipe-container');

    allRecipes.forEach((recipe, id) => {
        $('<div>')
            .attr({
                "class": "recipe-title-link",
                "id": id
            })
            .text(recipe.title)
            .append($('<div>')
                .attr("class", "recipe-content-container hidden")
                .css("display", "none")
                .append(recipe.content))
            .appendTo(container)
            .click(() => {
            let recipeContentContainer = `#${id}`;

                if (($(recipeContentContainer).hasClass('hidden'))){
                    $(recipeContentContainer).addClass('shown');
                    $(recipeContentContainer).removeClass('hidden');
                    $(recipeContentContainer).fadeIn();
                    setTimeout(() => {
                        $(recipeContentContainer)[0].scrollIntoView({behavior:'smooth'});
                    },50)

                }
                else{
                    $(recipeContentContainer).addClass('hidden');
                    $(recipeContentContainer).removeClass('shown');
                    $(recipeContentContainer).fadeOut()
                    setTimeout(() => {
                        $(recipeContentContainer)[0].scrollIntoView({behavior:'smooth'});
                    },50)
                }

            })
    });
}
