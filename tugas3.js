function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    //Logic untuk seleksi nilai diantara nilai awal dan akhir
    dataArray = dataArray.sort((a, b) => a - b);
    let result = [];
    for (let i of dataArray) {
        if (i > nilaiAwal && i < nilaiAkhir) {
            result.push(i);
        }
    }
    return result;
    
}

function validasi(callback) {
    let nilaiAwal;
    let nilaiAkhir;
    let jmlData;
    readlineSync = require('readline-sync');
    //Proses input nilai awal dan nilai akhir
    do{
        console.clear();
        nilaiAwal = readlineSync.question('Masukan nilai awal:');
        nilaiAwal = parseInt(nilaiAwal);
        nilaiAkhir = readlineSync.question('Masukan nilai akhir:');
        nilaiAkhir = parseInt(nilaiAkhir);
        if(isNaN(nilaiAwal) || isNaN(nilaiAkhir)){
            readlineSync.question('Input tipe data harus number!!!');
        }else if(nilaiAwal>=nilaiAkhir){
            readlineSync.question('Nilai awal harus kurang dari nilai akhir!!!');
        }
        console.clear();
    }while(nilaiAwal>=nilaiAkhir || isNaN(nilaiAwal) || isNaN(nilaiAkhir));
    //Proses input banyaknya data
    do{
        console.clear();
        jmlData = readlineSync.question('Masukan banyak data:');
        jmlData = parseInt(jmlData);
        if(isNaN(jmlData)){
            readlineSync.question('Input tipe data harus number!!!');
        }else if(jmlData<=5){
            readlineSync.question('Banyak data harus lebih dari 5 !!!');
        }
        console.clear();
    }while(jmlData<=5 || isNaN(jmlData));
    //Proses input data ke dalam array
    let dataArray = [];
    for (let i = 0; i < jmlData; i++) {
        let inputArray = readlineSync.questionInt(`Input nilai indeks-${i}:`);
        dataArray.push(inputArray);
    }
    //Return value
    let result = callback(nilaiAwal, nilaiAkhir, dataArray);
    if (result.length == 0){
        return "Nilai tidak ditemukan";
    } else{
        return result;
    }
}

let result = validasi(SeleksiNilai);

console.log(result);