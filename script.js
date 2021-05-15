var canvas = new fabric.Canvas("My_Canvas");
player_x = 10
player_y = 10
blockImgWidth = 30
blockImgHeight = 30
player_object = ""
blockImgObject = ""

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
            player_object = Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(140);
            player_object.set({
                top: player_y,
                left: player_x
            });
            canvas.add(player_object);
        }

    )
}

function new_img(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
            blockImgObject = Img;
            blockImgObject.scaleToWidth(blockImgWidth);
            blockImgObject.scaleToHeight(blockImgHeight);
            blockImgObject.set({
                top: player_y,
                left: player_x
            });
            canvas.add(blockImgObject);
        }

    )
}
window.addEventListener("keydown", my_KeyDown)

function my_KeyDown(e) {
    keyPressed = e.keyCode
    if (e.shiftKey == true && keyPressed == "80") {
        blockImgWidth = blockImgWidth + 10
        blockImgHeight = blockImgHeight + 10
        document.getElementById("cw").innerHTML = blockImgWidth
        document.getElementById("ch").innerHTML = blockImgHeight
        console.log("add")
    }
    if (e.shiftKey == true && keyPressed == "77") {
        blockImgWidth = blockImgWidth - 10
        blockImgHeight = blockImgHeight - 10
        document.getElementById("cw").innerHTML = blockImgWidth
        document.getElementById("ch").innerHTML = blockImgHeight
    }
}