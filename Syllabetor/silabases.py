def dameSilabas(cadena):
  silabas = []
  vocales = "aeiou"

  for l in cadena:
      if l in vocales:
          actual = cadena.index(l)
          if actual != 0:
              ant = cadena[actual-1] 

          #verificamos si la anterior y actual letra son vocales
          #no entra a este if
          if ant in vocales and l in vocales:
              if len(cadena)<actual+1:
                silabas[-1] += l

          elif cadena[actual] in vocales:
              silaba = cadena[: actual+1]

              silabas.append(silaba)
              cadena = cadena.split(silaba)
              print(cadena,silaba) #vemos como se va separando
              cadena = cadena[1]
  print(silabas)

dameSilabas("Florentino")
dameSilabas("Mafia")
dameSilabas("Campeonato")
dameSilabas("Barcelona")
dameSilabas("Historia")
dameSilabas("Constipación")
dameSilabas("Príncipes")
dameSilabas("Español")
dameSilabas("Fútbol")
dameSilabas("Herramientas")
dameSilabas("Cooperación")
dameSilabas("Conquistas")
dameSilabas("Complacer")
dameSilabas("Planteamiento")
dameSilabas("Independencia")
dameSilabas("Averiguáis")
dameSilabas("Productividad")
dameSilabas("Regimiento")
dameSilabas("Tecnología")
dameSilabas("Diario")
dameSilabas("Madrid")
dameSilabas("Pasado")
dameSilabas("Cenit")
dameSilabas("Población")
dameSilabas("Bonanza")
dameSilabas("Imágenes")
dameSilabas("Regla")
dameSilabas("Constelación")
dameSilabas("Títulos")
dameSilabas("Paella")
dameSilabas("Selector")
dameSilabas("Cuarenta")
dameSilabas("Cosmología")
dameSilabas("Referencia")
dameSilabas("Vigía")
dameSilabas("Francia")
dameSilabas("Corresponsal")
dameSilabas("Juventud")
dameSilabas("Opinión")
dameSilabas("Bloqueo")
dameSilabas("Avalancha")
dameSilabas("Ventilador")
dameSilabas("Desplazamiento")
dameSilabas("Hallar")
dameSilabas("Cosmos")
dameSilabas("Periódico")
dameSilabas("Igualdad")
dameSilabas("Plantación")
dameSilabas("Obstruyendo")
dameSilabas("Chile")