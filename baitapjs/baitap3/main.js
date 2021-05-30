
document.getElementById("btnsoTienVnd").onclick = function () {
    var tyGia = document.getElementById("tyGia").value;
    var soTienUsd = document.getElementById("soTienUsd").value;
    var soTienVnd = tyGia*soTienUsd;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var soTienVndFormat = currentFormat.format(soTienVnd);
    document.getElementById("divShowInfo").innerHTML = "Số Tiền VNĐ Là: " + soTienVndFormat + "VND";
    document.getElementById("divShowInfo").style.backgroundColor = "red";
    document.getElementById("divShowInfo").style.color = "white";
    document.getElementById("divShowInfo").style.fontSize = "30px";
};
