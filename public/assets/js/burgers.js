$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);
    

        //PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT"

        }).then(
            function () {
                // console.log("changed devoured to ", newDevoured);
                //reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        //send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                //reload the page to get hte updated list
                location.reload();
            }
        );
    });
});