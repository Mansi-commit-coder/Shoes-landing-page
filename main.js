$(document).ready(function () {
    $(".one").on('click', function () {
        changeShoeVariant("./assets/img1", "lightblue", "black", this);
    });

    $(".two").on('click', function () {
        changeShoeVariant("./assets/img2", "coral", "white", this);
    });

    $(".three").on('click', function () {
        changeShoeVariant("./assets/img3", "black", "white", this);
    });

    function changeShoeVariant(imagePath, backgroundColor, textColor, clickedVariant) {
        $("body").css({ color: textColor, background: backgroundColor });
        $(".product-img").attr("src", imagePath + "/1.png");
        $(".logo-img img").attr("src", "./assets/pic.png");
        $(".btn").css({ color: "#fff", background: "#000" });
        $(".variant").removeClass("active");
        $(clickedVariant).addClass("active");
        $(".images").html("");
        for (var i = 1; i <= 6; i++) {
            $(".images").append(`<img src='${imagePath}/${i}.png'/>`);
        }
    }

    
});
