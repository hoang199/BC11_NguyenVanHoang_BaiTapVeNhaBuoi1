document.getElementById("btnDienTich").onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var dienTich = parseFloat(chieuDai)*parseFloat(chieuRong) ;

    
     document.getElementById("divShowInfo").innerHTML = "Diện Tích là: " + dienTich;

    
     document.getElementById("divShowInfo").style.backgroundColor = "red";
     document.getElementById("divShowInfo").style.color = "white";
     document.getElementById("divShowInfo").style.fontSize = "30px";
     document.getElementById("divShowInfo").style.textAlign = "center";
};
document.getElementById("btnChuVi").onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var chuVi = (parseFloat(chieuDai)+parseFloat(chieuRong))*2;

    
     document.getElementById("divShowInfo").innerHTML = "Chu vi là: " + chuVi;

    
     document.getElementById("divShowInfo").style.backgroundColor = "red";
     document.getElementById("divShowInfo").style.color = "white";
     document.getElementById("divShowInfo").style.fontSize = "30px";
     document.getElementById("divShowInfo").style.textAlign = "center";
};