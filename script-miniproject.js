const formWs = document.getElementById("formWorkshop");
const namaWs = document.getElementById("namaWs");
const emailWs = document.getElementById("emailWs");
const sesiWs = document.getElementById("sesiWs");
const sisaKarakterWs = document.getElementById("sisaKarakterWs");
const infoSesi = document.getElementById("infoSesi");
const pesanWs = document.getElementById("pesanWs");

// 1. Live Character Counter (Maksimal 50 Karakter)
const maxKarakter = 50;
namaWs.setAttribute("maxlength", maxKarakter);

namaWs.addEventListener("input", function () {
    const sisa = maxKarakter - namaWs.value.length;
    sisaKarakterWs.textContent = sisa;
});

// 2. Event Change Dropdown Sesi
sesiWs.addEventListener("change", function () {
    if (sesiWs.value !== "") {
        infoSesi.textContent = `Anda memilih sesi: ${sesiWs.value}`;
    } else {
        infoSesi.textContent = "";
    }
});

// 3. Validasi Form Submit
formWs.addEventListener("submit", function (e) {
    e.preventDefault();

    const namaVal = namaWs.value.trim();
    const emailVal = emailWs.value.trim();
    const sesiVal = sesiWs.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (namaVal.length < 3) {
        pesanWs.textContent = "Nama wajib diisi dan minimal terdiri dari 3 karakter!";
        pesanWs.className = "error";
    } else if (!polaEmail.test(emailVal)) {
        pesanWs.textContent = "Masukkan alamat email yang valid!";
        pesanWs.className = "error";
    } else if (sesiVal === "") {
        pesanWs.textContent = "Silakan pilih salah satu sesi workshop!";
        pesanWs.className = "error";
    } else {
        pesanWs.textContent = `Pendaftaran Berhasil! Terima kasih ${namaVal}, Anda terdaftar pada sesi "${sesiVal}".`;
        pesanWs.className = "sukses";
        formWs.reset();
        sisaKarakterWs.textContent = maxKarakter;
        infoSesi.textContent = "";
    }
});

// 4. Reset Button
formWs.addEventListener("reset", function () {
    sisaKarakterWs.textContent = maxKarakter;
    infoSesi.textContent = "";
    pesanWs.textContent = "";
});