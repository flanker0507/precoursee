class Kendaraan {
    constructor(merk, model) {
        if (this.constructor === Kendaraan) {
            throw new Error("Abstract class tidak dapat diinstansiasi langsung.");
        }
        this.merk = merk;
        this.model = model;
    }

    deskripsi() {
        throw new Error("Metode 'deskripsi()' harus diimplementasikan dalam subclass.");
    }
}

class Mobil extends Kendaraan {         //INHERITANCE
    constructor(merk, model, tipe) {
        super(merk, model);             //INHERITANCE
        this.tipe = tipe;               //POLYMORPHISM
    }

    deskripsi() {
        return `${this.merk} ${this.model} adalah mobil tipe ${this.tipe}.`;    //ABSTRACTION
    }
}

const mobil1 = new Mobil("Toyota", "Corolla", "Sedan");
const mobil2 = new Mobil("Honda", "HRV", "Minivan");
console.log(mobil1.deskripsi());
console.log(mobil2.deskripsi());
