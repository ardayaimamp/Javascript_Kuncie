function segitiga2(panjang) {
    let a = "Kunciekunciekuncie"
    let hasil = '';
    for (let i = 0 ; i < panjang ; i++) {
        for (let j = 0; j < i+1 ; j++) {
            hasil += a[j] ;
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(6));
console.log(segitiga2(3));
console.log(segitiga2(8));
console.log(segitiga2(12));
 