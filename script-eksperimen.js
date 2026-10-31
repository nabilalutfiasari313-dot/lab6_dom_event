// ==========================================
// EKSPERIMEN 1: Tombol Hapus pada To-Do List
// ==========================================
const inputEks = document.getElementById("inputEks");
const tambahEks = document.getElementById("tambahEks");
const daftarEks = document.getElementById("daftarEks");

tambahEks.addEventListener("click", function () {
    const teks = inputEks.value.trim();
    if (teks === "") return;

    const item = document.createElement("li");
    const label = document.createElement("span");
    const btnHapus = document.createElement("button");

    label.textContent = teks + " ";
    btnHapus.textContent = "Hapus";
    btnHapus.style.backgroundColor = "#d9534f";
    btnHapus.style.marginLeft = "8px";

    btnHapus.addEventListener("click", function () {
        item.remove(); // Menghapus item satu per satu
    });

    item.append(label, btnHapus);
    daftarEks.appendChild(item);
    inputEks.value = "";
});

// ==========================================
// EKSPERIMEN 4: Sembunyikan dan Tampilkan Paragraf
// ==========================================
const paragrafTeks = document.getElementById("paragrafTeks");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
    if (paragrafTeks.style.display === "none") {
        paragrafTeks.style.display = "block";
    } else {
        paragrafTeks.style.display = "none";
    }
});