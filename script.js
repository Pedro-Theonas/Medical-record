document.addEventListener("DOMContentLoaded", () => {

  const logoInput = document.getElementById("logoInput");
  const btnLogo = document.getElementById("btnLogo");
  const btnPrint = document.getElementById("btnPrint");

  // Selecionar logo
  btnLogo.onclick = () => logoInput.click();

  logoInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("logoBox").innerHTML =
        `<img src="${reader.result}">`;
    };
    reader.readAsDataURL(file);
  };

  // Impressão normal
  btnPrint.onclick = () => window.print();

});
