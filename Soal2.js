 function himbuhan(a){
    if (a > 1000) {
      return "input tidak valid";
    } else if (a == 1000 ){
      return "RIBUAN";
    } else if (a >= 100 && a < 1000){
      return "RATUSAN";
    } else if (a > 10 && a <= 99) {
      return "PULUHAN";
    } else if (a > 0 && a <= 9 ){
      return "SATUAN";
    }else {
      return "Input tidak valid";
    }
  }
  
 
console.log(himbuhan(5))
console.log(himbuhan(1000))
console.log(himbuhan(-1000))