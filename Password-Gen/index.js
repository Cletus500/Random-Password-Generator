function codeGen() {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    
    let codeEl = document.getElementById("Gen-pass")
    let codeElone = document.getElementById("code-gen1")
    let codeEltwo = document.getElementById("code-gen2")
    let passWordOne = ""
    let passWordTwo = ""
    passwordLength = 15
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex1 = characters[Math.floor(Math.random()*characters.length)]
        let randomIndex2 = characters[Math.floor(Math.random()*characters.length)]
        passWordOne += randomIndex1
        passWordTwo += randomIndex2
        codeElone.textContent = passWordOne
        codeEltwo.textContent = passWordTwo 
    }
    return
}
