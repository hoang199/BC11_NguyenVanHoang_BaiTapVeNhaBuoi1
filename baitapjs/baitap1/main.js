
document.getElementById("btnLuong").onclick = function () {
    var luongMotNgay = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value;
    var tongLuong = luongMotNgay*soNgayLam;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tongLuongFormat = currentFormat.format(tongLuong);
    document.getElementById("divShowInfo").innerHTML = "Tổng Lương Là: " + tongLuongFormat + "VND";
    document.getElementById("divShowInfo").style.backgroundColor = "red";
    document.getElementById("divShowInfo").style.color = "white";
    document.getElementById("divShowInfo").style.fontSize = "30px";
};
