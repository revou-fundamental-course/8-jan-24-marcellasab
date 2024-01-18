function hitung() {
    var sisi = parseFloat(document.getElementById("sisi").value);

    if (isNaN(sisi) || sisi <= 0) {
      alert("Masukkan panjang sisi yang valid.");
      return;
    }

    var luas = sisi * sisi;
    var keliling = 4 * sisi;

    document.getElementById("luas").innerHTML = luas;
    document.getElementById("keliling").innerHTML = keliling;
  }

  function reset() {
    document.getElementById("sisi").value = "";
    document.getElementById("luas").innerHTML = "";
    document.getElementById("keliling").innerHTML = "";
  }