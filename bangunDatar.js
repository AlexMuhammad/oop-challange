class Segitiga {
    constructor(name, alas, tinggi, miring) {
        this.name = name;
        this.alas = alas;
        this.tinggi = tinggi;
        this.miring = miring;
    }
    #hitungLuas = () => {
        return 0.5 * this.alas * this.tinggi
    }
    #kelilingSegitigaSamaSiku = () => {
        return this.alas + this.tinggi + this.miring
    }
    #kelilingSegitigaSamaSisi = () => {
        let alas = this.alas
        let sisi = 0;
        for (let i = 1; i <= 3; i++) {
            sisi += alas
        }
        return sisi
    }
    #kelilingSegitigaSamaKaki = () => {
        let rumus = (2 * this.miring) + this.alas
        return rumus;
    }
    luas() {
        console.log(`Luas dari ${this.name} => ${this.#hitungLuas()}`)
    }
    keliling() {
        if (this.name === "Segitiga Sama Siku") {
            console.log(`Keliling dari ${this.name} => ${this.#kelilingSegitigaSamaSiku()}`);
        }
        if (this.name === "Segitiga Sama Sisi") {
            console.log(`Keliling dari ${this.name} => ${this.#kelilingSegitigaSamaSisi()}`);
        }
        if (this.name === "Segitiga Sama Kaki") {
            console.log(`Keliling dari ${this.name} => ${this.#kelilingSegitigaSamaKaki()}`);
        }
    }
}
const segitiga = new Segitiga("Segitiga", 5, 7, 5)

class SegitigaSamaSiku extends Segitiga {
    constructor(name, alas, tinggi, miring) {
        super(name, alas, tinggi, miring);
    }
    luas() {
        super.luas()
    }
    keliling() {
        super.keliling()
    }
}

class SegitigaSamaSisi extends Segitiga {
    constructor(name, alas, tinggi, miring) {
        super(name, alas, tinggi, miring);
    }
    luas() {
        super.luas()
    }
    keliling() {
        super.keliling()
    }
}

class SegitigaSamaKaki extends Segitiga {
    constructor(name, alas, tinggi, miring) {
        super(name, alas, tinggi, miring);
    }
    luas() {
        super.luas()
    }
    keliling() {
        super.keliling()
    }
}

const samaSiku = new SegitigaSamaSiku("Segitiga Sama Siku", 5, 7, 5)
const samaSisi = new SegitigaSamaSisi("Segitiga Sama Sisi", 5, 7, 5)
const samaKaki = new SegitigaSamaKaki("Segitiga Sama Kaki", 5, 7, 5)

//Sama Siku
samaSiku.luas();
samaSiku.keliling();

//Sama Sisi
samaSisi.luas();
samaSisi.keliling();

//Sama Kaki
samaKaki.luas();
samaKaki.keliling();

class SegiEmpat {
    constructor(name, panjang, lebar) {
        this.name = name;
        this.panjang = panjang;
        this.lebar = lebar;
    }
    #hitungLuasPersegiPanjang = () => {
        return this.panjang * this.lebar
    }
    #hitungLuasPersegi = () => {
        let sisi = this.lebar
        return sisi ** 2
    }
    luas() {
        if (this.name === "Persegi Panjang") {
            console.log(`Luas dari ${this.name} => ${this.#hitungLuasPersegiPanjang()}`);
        }
        if (this.name === "Persegi") {
            console.log(`Luas dari ${this.name} => ${this.#hitungLuasPersegi()}`);
        }
    }
    #hitungKelilingPersegiPanjang = () => {
        let prefix = 2;
        return prefix * (this.panjang + this.lebar)
    }
    #hitungKelilingPersegi = () => {
        let prefix = 4;
        let sisi = this.lebar;
        return prefix * sisi
    }
    keliling() {
        if (this.name === "Persegi Panjang") {
            console.log(`Keliling dari ${this.name} => ${this.#hitungKelilingPersegiPanjang()}`);
        }
        if (this.name === "Persegi") {
            console.log(`Keliling dari ${this.name} => ${this.#hitungKelilingPersegi()}`);
        }
    }
}

class PersegiPanjang extends SegiEmpat {
    constructor(name, panjang, lebar) {
        super(name, panjang, lebar);
    }

    luas() {
        super.luas();
    }
    keliling() {
        super.keliling()
    }
}

class Persegi extends SegiEmpat {
    constructor(name, panjang, lebar) {
        super(name, panjang, lebar);
    }

    luas() {
        super.luas();
    }
    keliling() {
        super.keliling()
    }
}

const persegiPanjang = new PersegiPanjang("Persegi Panjang", 10, 5);
const persegi = new Persegi("Persegi", 10, 5);

//Persegi
persegi.luas()
persegi.keliling()

//Persegi Panjang
persegiPanjang.luas()
persegiPanjang.keliling()

class Lingkaran {
    constructor(name, prefix, jari) {
        this.name = name;
        this.prefix = prefix;
        this.jari = jari;
    }
    #hasilLuasLingkaran() {
        const prefix = this.prefix;
        const jariJari = this.jari ** 2

        return Math.round(prefix * jariJari)
    }
    #hasilKelilingLingkaran() {
        const initial = 2;
        const prefix = this.prefix;
        const jariJari = this.jari

        return Math.round(initial * prefix * jariJari)
    }
    luas() {
        console.log(`Luas dari ${this.name} => ${this.#hasilLuasLingkaran()} cm2`);
    }
    keliling() {
        console.log(`Keliling dari ${this.name} => ${this.#hasilKelilingLingkaran()} cm`)
    }
}

const lingkaran = new Lingkaran("Lingkaran", 3.14, 7);
lingkaran.luas();
lingkaran.keliling();