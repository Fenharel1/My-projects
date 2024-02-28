function splitConsonantsAndVowels(palabra: string): string[] {
  // Usamos una expresión regular para dividir la palabra en consonantes y vocales
  let vowels = "aeiouAEIOU";
  let accentVowel = "áéíóú";
  let consonants = "bcdfghjklmñnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZÑ";
  let partes = palabra.split(/([aeiouAEIOU])/);
  partes = partes.filter(parte=>parte!="");
  console.log(partes)

  let partesConDiptongo:string[] = []
  for(let idx = 0; idx < partes.length-1; idx++){
    if((idx < partes.length-2) && 
      vowels.includes(partes[idx]) && 
      vowels.includes(partes[idx+1]) && 
      vowels.includes(partes[idx+2])){
      partesConDiptongo.push(partes[idx]+partes[idx+1]+partes[idx+2]);
      idx+=2;
    }else if(this.isDiptongo(partes[idx], partes[idx+1])){
      partesConDiptongo.push(partes[idx]+partes[idx+1]); idx++;
    }else{
      partesConDiptongo.push(partes[idx]);
    }
  }

  console.log("partes here: ",partesConDiptongo);

  return partes.filter(parte => parte !== "");
}


let a = splitConsonantsAndVowels("herramientas");