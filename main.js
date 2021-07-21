$(function () {
    var modal = $(".modal-section")
    modal.hide()
    $("#plantes-grid .grid-box").click(function () {
        var name = $("#" + this.id + " .plante-details .plante-name").text()
        var price = $("#" + this.id + " .plante-details .plante-price").text()
        plante_id = ("" + this.id).toString()
        var image = "./images/nos_plantes/" + plante_id.charAt(plante_id.length - 1) + ".jpg"
        $("#myModal .content #modalImage").css("background-image", "url(" + image + ")")
        $("#myModal .content #modal-name").text(name)
        $("#myModal .content #modal-price").text(price)
        modal.show()
    })
    $("#close").click(function () {
        modal.fadeOut(2000)
    })

}
)