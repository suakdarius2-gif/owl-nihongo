# Owl Nihongo · フクロウ日本語

Aplikasi web belajar bahasa Jepang dari nol sampai bisnis: jalur belajar 6 tahap, kaiwa bersuara dengan roleplay, soal dan tryout berwaktu, game interaktif, serta progres XP dan lencana.

## Struktur file

| File | Isi |
|---|---|
| `index.html` | Seluruh aplikasi: tampilan, materi, dan logika |
| `manifest.webmanifest` | Data agar aplikasi bisa dipasang di layar utama HP |
| `sw.js` | Service worker: membuat aplikasi tetap jalan saat offline |
| `icons/` | Ikon burung hantu bertoga |

## Cara update aplikasi

1. Edit `index.html` (atau minta Claude membuat versi baru).
2. Buka `sw.js`, naikkan `VERSI` (misal `owl-v1` menjadi `owl-v2`).
3. Di GitHub: buka repositori, klik **Add file → Upload files**, seret file yang berubah, lalu klik **Commit changes**.
4. Tunggu 1–2 menit. Siswa otomatis mendapat versi baru saat membuka aplikasi.

Setiap update tersimpan di riwayat (tab **Commits**), jadi versi lama bisa dikembalikan kapan saja.

## Menambah materi

Semua materi ada di bagian `DATA MATERI` di `index.html`:

- `LEVELS`: tahap belajar dan pelajaran (pola, contoh, kosakata, latihan mini)
- `KAIWA`: dialog percakapan dan pilihan roleplay
- `QB`: bank soal latihan dan tryout
- `SENT`: kalimat untuk game Susun Kalimat

Furigana ditulis dengan format `漢字{かんじ}`, contohnya `日本語{にほんご}`.

## Catatan

- Progres siswa tersimpan di browser perangkat masing-masing.
- Suara memakai suara bahasa Jepang bawaan perangkat.
