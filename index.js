
document.getElementById("boton").addEventListener("click", function() {
    
    const tablaLeet = {
        a: "4",
        b: "8",
        c: "(",
        d: "|)",
        e: "3",
        f: "|=",
        g: "6",
        h: "#",
        i: "!",
        j: "¿",
        k: "|<",
        l: "1",
        m: "AA",
        n: "11",
        ñ: "~",
        o: "0",
        p: "9",
        q: "o_",
        r: "?",
        s: "5",
        t: "7",
        u: "|_|",
        v: "'",
        w: "uu",
        x: "><",
        y: "'/",
        z: "2",
     } 
     
     let texto = document.getElementById("texto").value;
    
     let textoLeet = "";
     for (let i = 0; i < texto.length; i++) {
         const caracter = texto[i].toLowerCase();
        if(tablaLeet.hasOwnProperty(caracter)){
            textoLeet += tablaLeet[caracter];
        }else{
            textoLeet += texto[i];
        }
     }
    
     document.getElementById("textoLeet").innerText = textoLeet;
});




    
    
    