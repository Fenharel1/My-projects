function isDiptongo(vowelA, vowelB) {
  let strongV = "aeoAEOáéíóú";
  let weakV = "iuIU";
  if (
    (strongV.includes(vowelA) && weakV.includes(vowelB)) ||
    (strongV.includes(vowelB) && weakV.includes(vowelA)) ||
    (weakV.includes(vowelB) && weakV.includes(vowelA))
  )
    return true;
  return false;
}

//regla adicional para triptongo (a,b,c,d) => isDiptongo(a,c) && b==h && d no es strong, 

function isTriptongo(a,b,c,d){
  let strongV = "aeoAEOáéíóú";
  var vowels = "aeiouAEIOUáéíóúÁ´ÉÍÓÚ";
  return (isDiptongo(a,c) && b=="h" && !strongV.includes(d)) || (vowels.includes(a) && vowels.includes(b) && vowels.includes(c)) ;
}

function splitConsonantsAndVowels(palabra) {
  // Usamos una expresión regular para dividir la palabra en consonantes y vocales
  var vowels = "aeiouAEIOUáéíóúÁ´ÉÍÓÚ";
  var casoEspecial2 = "pr br dr cr fr gr kr tr fl pl gl kl cl bl";
  var casoEspecial3 = "pl bl cl gl tl dl pr br cr gr tr dr";
  var digrafos = "rr ll ch";
  var partes = palabra.split(/([aeiouáéíóúAEIOU])/);
  partes = partes.filter(function (parte) {
    return parte != "";
  });

  var partesConDiptongo = [];
  let idx = 0;
  for (idx = 0; idx < partes.length - 1; idx++) {
    if (
      idx < partes.length - 2 &&
      vowels.includes(partes[idx]) &&
      vowels.includes(partes[idx + 1]) &&
      vowels.includes(partes[idx + 2])
    ) {
      partesConDiptongo.push(partes[idx] + partes[idx + 1] + partes[idx + 2]);
      idx += 2;
    } else if (isDiptongo(partes[idx], partes[idx + 1])) {
      partesConDiptongo.push(partes[idx] + partes[idx + 1]);
      idx++;
    } else {
      partesConDiptongo.push(partes[idx]);
    }
  }

  if (idx < partes.length) partesConDiptongo.push(partes[idx]);

  let silaba = "";
  let silabaList = [];
  for (idx = 0; idx < partesConDiptongo.length; idx++) {
    // console.log(idx, partesConDiptongo[idx])
    let aux2 = partesConDiptongo[idx];
    if (!vowels.includes(aux2[0])) {
      if (idx == 0) {
        while (!vowels.includes(partesConDiptongo[idx][0])) {
          silaba += partesConDiptongo[idx++];
        }
        silaba += partesConDiptongo[idx];
      } else if (idx == partesConDiptongo.length - 1) {
        silabaList.push(silaba + aux2);
      }
      else {
        switch (aux2.length) {
          case 1:
            silabaList.push(silaba);
            anteriorSilaba = silaba;
            silaba = aux2 + partesConDiptongo[idx + 1];
            idx++;
            // console.log('this=>',aux2);
            break;
          case 2:
            if (digrafos.includes(aux2)) {
              silabaList.push(silaba);
              silaba = aux2 + partesConDiptongo[idx + 1];
            } else if (casoEspecial2.includes(aux2)) {
              silabaList.push(silaba);
              silaba = aux2 + partesConDiptongo[idx + 1];
            } else {
              silabaList.push(silaba + aux2[0]);
              silaba = aux2[1] + partesConDiptongo[idx + 1];
            }
            idx++;
            break;
          case 3:
            if (casoEspecial3.includes(aux2[1] + aux2[2])) {
              silabaList.push(silaba + aux2[0]);
              silaba = aux2[1] + aux2[2] + partesConDiptongo[idx + 1];
            } else {
              silabaList.push(silaba + aux2[0] + aux2[1]);
              silaba = aux2[2] + partesConDiptongo[idx + 1];
            }
            idx++;
            break;
          case 4:
            silabaList.push(silaba + aux2[0] + aux2[1]);
            silaba = aux2[2] + aux2[3] + partesConDiptongo[idx + 1];
            idx++;
            break;
        }
        if(idx==partesConDiptongo.length-1){
          silabaList.push(silaba);
        }
      }
    } else {
      silabaList.push(silaba);
      silaba = aux2;
      if(idx==partesConDiptongo.length-1) silabaList.push(aux2);
    }
  }

  silabaList = silabaList.filter(function (parte) {
    return parte != "";
  });

  let stringResultado = silabaList.join(' ');

  // console.log(silabaList.join(' '));
  console.log(silabaList.length);
  
  return partes.filter(function (parte) {
    return parte !== "";
  });
}

let arr = ["a","b","c"];
let mystr = "abcd"

console.log(mystr.substring(0,2))
console.log(mystr.substring(2))

// function hyphenEnglish(word){
//   count = 0;
//   let vowels = "aeiouy";
//   if(vowels.)
// }

// splitConsonantsAndVowels("ahuecar")
// splitConsonantsAndVowels("ahogar")
// splitConsonantsAndVowels("ahuyentar")
// splitConsonantsAndVowels("cihuela")
// splitConsonantsAndVowels("ahijado")









splitConsonantsAndVowels("Florentino")
splitConsonantsAndVowels("Mafia")
splitConsonantsAndVowels("Campeonato")
splitConsonantsAndVowels("Barcelona")
splitConsonantsAndVowels("Historia")
splitConsonantsAndVowels("Constipación")
splitConsonantsAndVowels("Príncipes")
splitConsonantsAndVowels("Español")
splitConsonantsAndVowels("Fútbol")
splitConsonantsAndVowels("Herramientas")
splitConsonantsAndVowels("Cooperación")
splitConsonantsAndVowels("Conquistas")
splitConsonantsAndVowels("Complacer")
splitConsonantsAndVowels("Planteamiento")
splitConsonantsAndVowels("Independencia")
splitConsonantsAndVowels("Averiguáis")
splitConsonantsAndVowels("Productividad")
splitConsonantsAndVowels("Regimiento")
splitConsonantsAndVowels("Tecnología")
splitConsonantsAndVowels("Diario")
splitConsonantsAndVowels("Madrid")
splitConsonantsAndVowels("Pasado")
splitConsonantsAndVowels("Cenit")
splitConsonantsAndVowels("Población")
splitConsonantsAndVowels("Bonanza")
splitConsonantsAndVowels("Imágenes")
splitConsonantsAndVowels("Regla")
splitConsonantsAndVowels("Constelación")
splitConsonantsAndVowels("Títulos")
splitConsonantsAndVowels("Paella")
splitConsonantsAndVowels("Selector")
splitConsonantsAndVowels("Cuarenta")
splitConsonantsAndVowels("Cosmología")
splitConsonantsAndVowels("Referencia")
splitConsonantsAndVowels("Vigía")
splitConsonantsAndVowels("Francia")
splitConsonantsAndVowels("Corresponsal")
splitConsonantsAndVowels("Juventud")
splitConsonantsAndVowels("Opinión")
splitConsonantsAndVowels("Bloqueo")
splitConsonantsAndVowels("Avalancha")
splitConsonantsAndVowels("Ventilador")
splitConsonantsAndVowels("Desplazamiento")
splitConsonantsAndVowels("Hallar")
splitConsonantsAndVowels("Cosmos")
splitConsonantsAndVowels("Periódico")
splitConsonantsAndVowels("Igualdad")
splitConsonantsAndVowels("Plantación")
splitConsonantsAndVowels("Obstruyendo")
splitConsonantsAndVowels("Chile")
