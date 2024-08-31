function contadorA(string) {
    let cont = 0
    for (let i = 0; i < string.length; i++) {
        if(string[i] == "a" || string[i] == "A"){
            cont++
        }
    }
    console.log(`a letra 'a' aparece ${cont} no texto`) 
}
let texto = "Arara"
contadorA(texto)