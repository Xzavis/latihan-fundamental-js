// ini adalah mesin menghitun rata-rata
// tujuan: membuat fungsi yang menerima array angka
// mengebalikan rata-rata

// function rata-rata

function calculateAvarage(numbers) {
    // check jika array kosong
    if (numbers.length === 0) {
        return console.log("array numbers kosong");
    }

    // SUM semua numbers dengan menggunakan reduce
    const sum = numbers.reduce((sum, num) => sum + num, 0);

    // Avarage numbers
    const avarage = sum / numbers.length;

    //   Return string pada  number
    return parseFloat(avarage.toFixed(1));
}

// input number
const inputNumbers = [1, 3, 6, 3, 8, 3, 2];
// view result in debug console
console.log("Rata-rata: " + calculateAvarage(inputNumbers));