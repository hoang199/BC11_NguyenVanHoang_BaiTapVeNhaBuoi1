document.getElementById("btnTong").onclick = function () {
    var soN = document.getElementById("soN").value;
    var soHangChuc = Math.floor(soN/10);

    var soHangDonVi = Math.floor(soN%10);
    var tong = soHangChuc + soHangDonVi;

    
     document.getElementById("divShowInfo").innerHTML = "Tổng hai kí số là: " + tong;

    
     document.getElementById("divShowInfo").style.backgroundColor = "red";
     document.getElementById("divShowInfo").style.color = "white";
     document.getElementById("divShowInfo").style.fontSize = "30px";
     document.getElementById("divShowInfo").style.textAlign = "center";
};