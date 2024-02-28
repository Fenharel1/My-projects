def syllable_count(word):
    word = word.lower()
    count = 0
    vowels = "aeiouáéíóú"
    if word[0] in vowels:
        count += 1
    for index in range(1, len(word)):
        if word[index] in vowels and word[index - 1] not in vowels:
            count += 1
    # if word.endswith("e"):
    #   count -= 1
    if count == 0:
        count += 1
    return count

print(syllable_count("anesthesiologist"))

print(syllable_count("Florentino"))
print(syllable_count("Mafia"))
print(syllable_count("Campeonato"))
print(syllable_count("Barcelona"))
print(syllable_count("Historia"))
print(syllable_count("Constipación"))
print(syllable_count("Príncipes"))
print(syllable_count("Español"))
print(syllable_count("Fútbol"))
print(syllable_count("Herramientas"))
print(syllable_count("Cooperación"))
print(syllable_count("Conquistas"))
print(syllable_count("Complacer"))
print(syllable_count("Planteamiento"))
print(syllable_count("Independencia"))
print(syllable_count("Averiguáis"))
print(syllable_count("Productividad"))
print(syllable_count("Regimiento"))
print(syllable_count("Tecnología"))
print(syllable_count("Diario"))
print(syllable_count("Madrid"))
print(syllable_count("Pasado"))
print(syllable_count("Cenit"))
print(syllable_count("Población"))
print(syllable_count("Bonanza"))
print(syllable_count("Imágenes"))
print(syllable_count("Regla"))
print(syllable_count("Constelación"))
print(syllable_count("Títulos"))
print(syllable_count("Paella"))
print(syllable_count("Selector"))
print(syllable_count("Cuarenta"))
print(syllable_count("Cosmología"))
print(syllable_count("Referencia"))
print(syllable_count("Vigía"))
print(syllable_count("Francia"))
print(syllable_count("Corresponsal"))
print(syllable_count("Juventud"))
print(syllable_count("Opinión"))
print(syllable_count("Bloqueo"))
print(syllable_count("Avalancha"))
print(syllable_count("Ventilador"))
print(syllable_count("Desplazamiento"))
print(syllable_count("Hallar"))
print(syllable_count("Cosmos"))
print(syllable_count("Periódico"))
print(syllable_count("Igualdad"))
print(syllable_count("Plantación"))
print(syllable_count("Obstruyendo"))
print(syllable_count("Chile"))