function randomImage() {
    var number = (Math.floor(Math.random() * 30) + 1).toString();
    var image = document.querySelector(".cssJoke")
    image.setAttribute("src", "https://digitalsynopsis.com/wp-content/uploads/2015/02/css-puns-web-design-funny-jokes-"+number+".jpg")
}
randomImage()