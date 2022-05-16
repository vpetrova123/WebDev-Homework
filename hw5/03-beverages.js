$(document).ready(function () {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

  const addToDOM = (item) => {
    var img = new Image();
    img.src = item.strDrinkThumb;
    $("#results").append(
      $("<div class='figure'>")
        .css({
          height: "60%",
          width: "200px",
          margin: "10px",
        })
        .append(
          $(img).css({
            width: "100%",
            height: "100%",
          })
        )
        .append(
          $("<p>").text(item.strDrink).css({
            height: "60px",
            marginTop: "10px",
            marginBottom: "50px",
            fontSize: "24px",
          })
        )
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        console.log(data.drinks);
        data.drinks.forEach((item) => {
          addToDOM(item);
        });
      },
      error: (error) => {
        console.log(error);
        $("#results").append(
          $("<div>").text(`An error occured. Please try again.`)
        );
      },
      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});
