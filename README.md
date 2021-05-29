## Bahasa:

- Javascript

## Software:

- Visual Studio Code
- NodeJs
- Terminal

### Soal 1 - 3

##### Cara menjalankan:

Wajib install [Node.js](https://nodejs.org/). Arahkan terminal ke folder Test-Dumbways

```sh
node 1.js
```

> Note: soal 2 dan soal 3 tinggal mengikuti

### Soal 4

##### Cara menjalankan:

- Masuk ke folder 4A atau 4B

```sh
cd 4A
```

- Jalankan perintah npm install untuk menginstall semua dependencies

```sh
npm install
```

- Copy paste file .env.example lalu rename menjadi .env
- Buat database bernama book_dumbways
- Jalankan perintah adonis migration:run untuk mengisi database

```sh
adonis migration:run
```

- Jalankan perintah npm run build untuk membuild static assets

```sh
npm run build
```

- Jalankan perintah adonis serve --dev untuk menjalankan aplikasi

```sh
adonis serve --dev
```
