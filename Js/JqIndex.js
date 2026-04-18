$(document).ready(function () {
  console.log("Successfully!!");
  $(".service").click(function () {
    console.log("Working!!");
    $("#serviceOption").animate({
      height: "toggle",
    });
  });
});

$(document).ready(function () {
  console.log("Successfully!!");
  $("#menu").click(function () {
    console.log("Working!!");
    $("#menunav").animate({
      height: "toggle",
    });
  });
});
