# Praktikum 6: JavaScript DOM & Event Handling

Repository ini berisi hasil pengerjaan Praktikum 6 Pemrograman Web mengenai manipulasi Document Object Model (DOM) dan Event Handling menggunakan JavaScript vanilla.

**Identitas Mahasiswa:**
- **Nama:** Nabila Lutfia Sari
- **NIM:** 312510040
- **Kelas:** I253A
- **Program Studi:** Teknik Informatika
- **Dosen Pengampu:** Agung Nugroho, S.Kom., M.Kom.
- **Kampus:** Universitas Pelita Bangsa

---

# Struktur File

```text
lab6_dom_event/
├── index.html              # Halaman Utama (Latihan 1 - 6)
├── script.js               # Logic JavaScript untuk Latihan 1 - 6
├── style.css               # Stiling CSS Utama
├── miniproject.html        # Halaman Mini Project (Form Workshop)
├── script-miniproject.js   # Logic JavaScript Mini Project
├── eksperimen.html         # Halaman Eksperimen Mandiri
├── script-eksperimen.js    # Logic JavaScript Eksperimen Mandiri
├── screenshots             # Folder Bukti Tangkap Layar
└── README.md               # Dokumentasi Laporan Praktikum
```

---

#  Rincian Tugas & Fitur

**1. Latihan Dasar (Latihan 1 - 6)**
- Latihan 1 (Mengubah teks dengan DOM): Mengubah isi teks heading dan paragraf secara dinamis.

   **Bukti Screenshots:**

  <img width="597" height="125" alt="Screenshot 2026-10-31 161809" src="https://github.com/user-attachments/assets/4f7de032-bd8b-4a79-9caa-3c503bb557f1" />
  <img width="599" height="125" alt="Screenshot 2026-10-31 162334" src="https://github.com/user-attachments/assets/d998decb-e2fd-4bcd-86a4-01a50015c3aa" />
  <img width="597" height="157" alt="Screenshot 2026-10-31 163957" src="https://github.com/user-attachments/assets/6116e93e-39db-4264-a23c-2d71dbab3562" />

- Latihan 2 (Event Click): Menampilkan timestamp saat tombol diklik.

  **Bukti screenshots:**
  
  <img width="599" height="143" alt="Screenshot 2026-10-31 164031" src="https://github.com/user-attachments/assets/48f30cc0-a033-43e4-bb43-806a0681f79f" />

- Latihan 3 (Mengubah kelas dan gaya CSS): Mengubah dan mengaktifkan class CSS (highlight & teks-besar) secara interaktif.

  **Bukti screenshots:**
  
  <img width="596" height="142" alt="Screenshot 2026-10-31 164100" src="https://github.com/user-attachments/assets/b17c3c9b-a834-46f7-943c-fb657eaf8b32" />
  <img width="599" height="174" alt="Screenshot 2026-10-31 164121" src="https://github.com/user-attachments/assets/451a46b6-71a9-4887-8f0e-61e84280cf3b" />

- Latihan 4 (Event input dan penghitung karakter): Menghitung jumlah karakter input secara real-time.

  **Bukti screenshots:**
  
  <img width="597" height="181" alt="Screenshot 2026-10-31 164152" src="https://github.com/user-attachments/assets/1892006a-3efe-46ee-83b1-3b7ed80c13d4" />

- Latihan 5 (Validasi form pendaftaran): Validasi dasar input nama, format email, dan batas usia (17-100).

  **Bukti screenshots:**
  
  <img width="601" height="298" alt="Screenshot 2026-10-31 164204" src="https://github.com/user-attachments/assets/e09e3401-9208-4f75-af4b-9b417b4a6602" />
  <img width="599" height="326" alt="Screenshot 2026-10-31 164258" src="https://github.com/user-attachments/assets/f7f837d7-46a7-4d34-b319-eed634ee6ae3" />
  <img width="595" height="323" alt="Screenshot 2026-10-31 173802" src="https://github.com/user-attachments/assets/2a7ae0a1-078c-4127-ac7b-ed729dd72899" />
  <img width="597" height="325" alt="Screenshot 2026-10-31 173839" src="https://github.com/user-attachments/assets/50ed468c-5772-49e6-9cba-7e72a615563b" />
  <img width="593" height="314" alt="Screenshot 2026-10-31 173929" src="https://github.com/user-attachments/assets/6e8eac31-9760-474a-bfd3-1003beaf40ef" />

- Latihan 6 (Daftar tugas sederhana (To-do List)): Menambahkan tugas baru dan fitur toggle penanda selesai.

  **Bukti screenshots**
  
  <img width="601" height="180" alt="Screenshot 2026-10-31 164343" src="https://github.com/user-attachments/assets/db69471f-9402-49cd-9867-7cdfc9ada34e" />
  <img width="597" height="248" alt="Screenshot 2026-10-31 164356" src="https://github.com/user-attachments/assets/f6fd8914-707e-400f-98c2-58f8b295f8a8" />
  <img width="601" height="250" alt="Screenshot 2026-10-31 164407" src="https://github.com/user-attachments/assets/d91f0a11-b030-4002-b075-5c847db6091b" />

---

# Mini Project — Form Pendaftaran Workshop

  Kembangkan halaman pendaftaran workshop dengan minimal tiga fungsi interaktif.
  • Validasi nama, email, dan pilihan sesi.
  • Penghitung karakter atau ringkasan input secara langsung.
  • Pesan kesalahan dan pesan sukses yang tampil pada halaman.
  • Tombol reset atau hapus input.
  • Gunakan addEventListener() untuk event input, change, click, atau submit.
  Pisahkan kode ke index.html, style.css, dan script.js. Buat antarmuka yang mudah digunakan di desktop
  maupun perangkat mobile.

  **Bukti screenshots:**

  <img width="599" height="320" alt="Screenshot 2026-10-31 165518" src="https://github.com/user-                          attachments/assets/34c2aa2c-d670-42e0-90de-7ab67003e0fe" />

---

# Eksperimen Mandiri
  1. Tambahkan tombol untuk menghapus satu item dari To-do List.
  2. Ubah validasi agar nama minimal terdiri dari tiga karakter.
  3. Tambahkan event change pada dropdown sesi workshop dan tampilkan sesi yang dipilih.
  4. Buat tombol untuk menyembunyikan dan menampilkan paragraf menggunakan class CSS.
  5. Coba pindahkan script tanpa defer ke bagian head. Amati kemungkinan masalah dan jelaskan
  penyebabnya.

  **Bukti screenshots**

  <img width="616" height="386" alt="Screenshot 2026-10-31 165831" src="https://github.com/user-                           attachments/assets/d1151418-ed42-414f-bc45-cae99058381d" />
  <img width="599" height="221" alt="Screenshot 2026-10-31 165858" src="https://github.com/user-                          attachments/assets/6d5bcdbe-bb33-48f1-8428-b24cc2f02a4f" />
  <img width="595" height="143" alt="Screenshot 2026-10-31 165913" src="https://github.com/user-                          attachments/assets/7751d7b8-df28-4fd5-805c-8e62fc12cb36" />
  <img width="591" height="110" alt="Screenshot 2026-10-31 165922" src="https://github.com/user-                          attachments/assets/600abe7e-2bdf-42d5-a936-2c2a51ef3439" />
  <img width="959" height="446" alt="Screenshot 2026-10-31 170826" src="https://github.com/user-                          attachments/assets/2f0e1059-4b26-4006-8315-d69b1e847926" />
  



