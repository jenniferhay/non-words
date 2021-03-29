function init(){
    if(maori){ // PREFIX TO BYPASSS PROTOCAL: https://raw.githubusercontent.com/greybeetle213/non-words/main/
        xhttp.open("GET", "maomeans.csv", true) // set the XMLHttpRequest to be get WordList.csv (a long list of words)
    }else{
        //xhttp.open("GET", "NonWords.csv", true) // set the XMLHttpRequest to be get WordList.csv (a long list of words)
        xhttp.open("GET", "engmeans2.csv", true) // set the XMLHttpRequest to be get WordList.csv (a long list of words)
    
    }
    xhttp.send() // send the request    

}
var xhttp = new XMLHttpRequest() // create a XMLHttpRequest called xhhtp
xhttp.onreadystatechange = function() { // when the XMLHttpRequest becomes ready (the file with the words in it is loaded) run a function
    if (this.readyState == 4 && this.status == 200) {
        allWords = xhttp.responseText // set wordToGuess to be the contense of the file
        allWords = allWords.split("\r\n") // turn the file into a list where the delimters are where there were origanaly line breaks
        wordsInUse = []
        for(i = 0; i < 10; i ++){
            var word = allWords[Math.round(Math.random()*allWords.length - 1)].split(",")
            wordsInUse.push(word)
        }
        P1equasion = []
        P2equasion = []
        selectedWord = "gone"
        turn = 0
        document.getElementById("p2").style.backgroundColor = "lightgray"
        document.getElementById("p1").style.backgroundColor = "white"
        document.getElementById("words").innerHTML = ""
        for(i = 0; i < 10; i ++){
            document.getElementById("words").innerHTML += '<button id="'+i+'" onclick="'+"selectWord("+i+")"+'" style="height: 15%; width: 45%; font-size: 3vw;">'+wordsInUse[i][1]+'</button> '
            if(i/2 != Math.round(i/2)){
                document.getElementById("words").innerHTML += "<p></p>"
            }
        }
        document.getElementById("p1").innerHTML = ""
        if(!maori){
            document.getElementById("words").innerHTML += '<a href="https://jenniferhay.github.io/ororeo/">Return to Instruction Page</a>'
        }else{
            document.getElementById("words").innerHTML += '<a href="https://jenniferhay.github.io/ororeo/">Hokia ki te whārangi tohutohu</a>'
        }
        if(maori){
            document.getElementById("instructions").innerHTML = "Kaitākaro 1: Whiriwhiritia te kupu"
        }else{
            document.getElementById("instructions").innerHTML = "Player 1: Choose a word"
        }

        if(!maori){
        document.getElementById("p1").innerHTML = '<button onclick="P1buttons(\'+\')">+</button><button onclick="P1buttons(\'x\')">x</button> Player 1: '+P1score + '<br>'
        document.getElementById("p2").innerHTML = '<button onclick="P2buttons(\'+\')">+</button><button onclick="P2buttons(\'x\')">x</button> Player 2: '+P2score + '<br>'
        }else{
            document.getElementById("p1").innerHTML = '<button onclick="P1buttons(\'+\')">+</button><button onclick="P1buttons(\'x\')">x</button> Kaitākaro 1: '+P1score + '<br>'
            document.getElementById("p2").innerHTML = '<button onclick="P2buttons(\'+\')">+</button><button onclick="P2buttons(\'x\')">x</button> Kaitākaro 2: '+P2score + '<br>'
        }    
    }
}
P1score = 0
P2score = 0
Round = 0
init()
