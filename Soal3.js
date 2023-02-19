function segitiga2(panjang) {
    let a = "kuncie"
    let hasil = '';
    for (let i = 0 ; i < panjang ; i++) {
        for (let j = 0; j < i+1; j++) {
            hasil += a[j % a.length] ;
        } 
        hasil += "\n";
    }
    return hasil;
}
console.log(segitiga2(6));


 