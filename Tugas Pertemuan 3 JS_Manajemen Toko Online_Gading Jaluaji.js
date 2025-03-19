let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga.toLocaleString()}, Stok: ${produk.stok}`);
    });
}

const tambahProduk = function(nama, harga, stok) {
    let idBaru = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;
    produkToko.push({ id: idBaru, nama, harga, stok });
    console.log(`Produk ${nama} berhasil ditambahkan.`);
    tampilkanProduk();
};

const hapusProduk = (id) => {
    let index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        let produkDihapus = produkToko.splice(index, 1);
        console.log(`Produk ${produkDihapus[0].nama} berhasil dihapus.`);
    } else {
        console.log("Produk dengan ID tersebut tidak ditemukan.");
    }
    tampilkanProduk();
};

console.log("Sebelum menambah produk:");
tampilkanProduk();

tambahProduk("Monitor", 1500000, 4);
hapusProduk(2);
