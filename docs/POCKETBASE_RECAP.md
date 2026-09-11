# 🤖 PocketBase Context & Agent Handbook (v0.23+)

> **Tujuan Dokumen:**  
> File ini adalah **Single Source of Truth (SSOT)** konteks database PocketBase untuk diberikan kepada AI Agent di proyek / website mana pun.  
> Cukup sertakan file ini bersama `.env.local`, maka AI Agent di proyek baru akan langsung memahami kondisi database saat ini, aturan autentikasi, serta cara membuat/mengelola collection baru secara mandiri tanpa halusinasi.

---

## 1. Identitas & Status Database

- **Host / URL:** `https://db.nominanetwork.tech`
- **Engine:** PocketBase **v0.23+**
- **Admin / Superuser Email:** Tersimpan di `process.env.POCKETBASE_ADMIN_EMAIL`
- **Admin / Superuser Password:** Tersimpan di `process.env.POCKETBASE_ADMIN_PASSWORD`
- **Database Type:** SQLite via PocketBase BaaS

---

## 2. Koleksi yang Sudah Ada (DO NOT OVERWRITE / CONFLICT)

Saat membuat collection baru di project Anda, **hindari penggunaan nama berikut** agar tidak bentrok dengan sistem yang sudah berjalan:

| Nama Collection | Status | Fungsi & Pemilik |
| :--- | :---: | :--- |
| `job_applications` | **Active** | Khusus penampung CV & lamaran karir Nomina (`/job-application`) |
| `contact_submissions` | **Active** | Khusus penampung pesan kontak umum Nomina (`/contact`) |
| `_superusers` | **System** | Tabel internal superuser/admin PocketBase v0.23+ |
| `users` | **System** | Auth collection bawaan PocketBase |
| `_mfas`, `_otps`, `_externalAuths`, `_authOrigins` | **System** | Tabel keamanan internal PocketBase v0.23+ |

---

## 3. Aturan Autentikasi Superuser untuk Agent (PocketBase v0.23+)

> ⚠️ **INSTRUKSI WAJIB UNTUK AI AGENT:**  
> PocketBase v0.23+ memiliki *breaking change*. **JANGAN** gunakan `pb.admins.authWithPassword(...)` sebagai metode utama karena sudah deprecated.  
> **SELALU** gunakan collection `_superusers`:

```typescript
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.POCKETBASE_URL);

// Autentikasi Superuser standar v0.23+
await pb.collection('_superusers').authWithPassword(
  process.env.POCKETBASE_ADMIN_EMAIL!,
  process.env.POCKETBASE_ADMIN_PASSWORD!
);
```

---

## 4. Panduan Agent: Cara Membuat Collection Baru untuk Project Ini

Setiap website/project bebas mendesain nama collection dan field-field-nya sendiri sesuai kebutuhan formulir.

### Sintaks Pembuatan Collection (PocketBase v0.23+ Standard)
> ⚠️ **PERHATIAN FORMAT:** Gunakan properti `fields: [...]` (bukan `schema: [...]` warisan v0.22 ke bawah).

```javascript
// Contoh script pembuatan collection baru yang dieksekusi Agent
const collectionData = {
  name: 'NAMA_COLLECTION_PROJECT_ANDA', // Contoh: 'acme_leads', 'prospek_landing', dsb.
  type: 'base',
  
  // API RULES (Pilih sesuai arsitektur project):
  // 1. Jika form disubmit lewat Server (Next.js Server Action / API Route):
  createRule: null, // Akses terkunci, hanya server dengan token superuser yang bisa create
  
  // 2. ATAU jika form disubmit langsung dari browser client (Static HTML / JS):
  // createRule: '', // Publik bisa POST/create, tapi TIDAK BISA baca/edit data orang lain
  
  listRule: null,   // Tetap null agar publik tidak bisa membaca data lead
  viewRule: null,   // Tetap null agar publik tidak bisa mengintip record
  updateRule: null, // Tetap null agar tidak bisa diedit orang luar
  deleteRule: null, // Tetap null agar tidak bisa dihapus orang luar

  // DAFTAR FIELD (Sesuaikan dengan kebutuhan spesifik website Anda)
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text', required: false },
    { name: 'message', type: 'text', required: false },
    // Field fleksibel untuk menampung data unik lainnya:
    { name: 'metadata', type: 'json', required: false }
  ]
};

// Eksekusi create
await pb.collections.create(collectionData);
```

### Tipe Data Field yang Didukung di v0.23+:
- `text` : String teks (opsi: `min`, `max`, `pattern`)
- `email` : Validasi format email otomatis
- `number` : Angka (opsi: `min`, `max`)
- `bool` : Boolean (`true` / `false`)
- `select` : Pilihan opsi (opsi: `values: ['a', 'b']`, `maxSelect: 1`)
- `file` : Upload berkas (opsi: `maxSelect: 1`, `maxSize: 10485760`, `mimeTypes: ['application/pdf']`)
- `json` : Data terstruktur dinamis (bebas diisi object key-value apa pun)
- `url` : Validasi URL

---

## 5. Ringkasan Operasional untuk Developer & Agent

Bila Anda memulai proyek website baru dan ingin menyambungkannya ke PocketBase ini:
1. **Salin 2 file ke project baru:**
   - `.env.local` (berisi URL, EMAIL, dan PASSWORD superuser).
   - File ini (`POCKETBASE_RECAP.md` atau `POCKETBASE_CONTEXT.md`).
2. **Beri instruksi ke AI Agent di project baru:**
   > *"Baca file `POCKETBASE_RECAP.md` dan `.env.local`. Tolong buatkan collection baru bernama `<nama_collection>` dengan field-field `<field_a, field_b, ...>` dan hubungkan form di website ini ke collection tersebut."*
3. **Agent akan otomatis:**
   - Membaca kredensial dari `.env.local`.
   - Menggunakan sintaks autentikasi `_superusers` v0.23+.
   - Membuat collection baru tanpa menabrak `job_applications` atau `contact_submissions`.
   - Menyiapkan server action atau fungsi submit data yang sesuai.
