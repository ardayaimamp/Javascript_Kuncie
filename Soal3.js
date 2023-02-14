
     let a = "KUNCIEKUNCIEKUNCIE"
     let n = 8
    hasil = ''
    for (let i = 0; i < n; i++){
        for (let j = 0; j <= i; j++) {
           hasil = hasil + a[j]
          
        }

        hasil += '\n'
        
        
    }
    console.log(hasil)
