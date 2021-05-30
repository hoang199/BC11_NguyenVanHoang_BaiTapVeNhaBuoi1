document.getElementById("btngiaTriTB").onclick = function () {
    var number1 = document.getElementById("txtNumber1").value;
    var number2 = document.getElementById("txtNumber2").value;
    var number3 = document.getElementById("txtNumber3").value;
    var number4 = document.getElementById("txtNumber4").value;
    var number5 = document.getElementById("txtNumber5").value;
    var tong = parseFloat(number1) + parseFloat(number2)+ parseFloat(number3)+ parseFloat(number4)+ parseFloat(number5);
    var trungBinh = parseFloat(tong/5);

    document.getElementById("divShowInfo").innerHTML = "Giá trị trung bình là: " + trungBinh;

    
     document.getElementById("divShowInfo").style.backgroundColor = "red";
     document.getElementById("divShowInfo").style.color = "white";
     document.getElementById("divShowInfo").style.fontSize = "30px";
     document.getElementById("divShowInfo").style.textAlign = "center";
};