var tabuleiro = document.createElement("div");
tabuleiro.id = "tabuleiro";
document.body.appendChild(tabuleiro);

for(var c = 0; c < 8;c++){

    for(var l = 0; l <8 ;l++){
        var quadrado = document.createElement("div");
        if(c == 6){
            var img = document.createElement('img')
            img.src = 'imgs/wP.svg'
            quadrado.appendChild(img)
        }

        if(c == 1){
            var img = document.createElement('img')
            img.src = 'imgs/bP.svg'
            quadrado.appendChild(img)
        }

        if(c == 7){

            if(l == 0 || l == 7){
                var img = document.createElement('img')
                img.src = 'imgs/wR.svg'
                quadrado.appendChild(img)
            }

            if(l == 1 || l == 6){
                var img = document.createElement('img')
                img.src = 'imgs/wN.svg'
                quadrado.appendChild(img)

            }

            if(l == 2 || l == 5){
                var img = document.createElement('img')
                img.src = 'imgs/wB.svg'
                quadrado.appendChild(img)
            }

            if(l == 4){
                var img = document.createElement('img')
                img.src = 'imgs/wK.svg'
                quadrado.appendChild(img)
            }

            if(l == 3){
                var img = document.createElement('img')
                img.src = 'imgs/wQ.svg'
                quadrado.appendChild(img)

            }

        }

        if(c == 0){

            if(l == 0 || l == 7){
                var img = document.createElement('img')
                img.src = 'imgs/bR.svg'
                quadrado.appendChild(img)
            }

            if(l == 1 || l == 6){
                var img = document.createElement('img')
                img.src = 'imgs/bN.svg'
                quadrado.appendChild(img)
            }

            if(l == 2 || l == 5){
                var img = document.createElement('img')
                img.src = 'imgs/bB.svg'
                quadrado.appendChild(img)
            }

            if(l == 4){
                var img = document.createElement('img')
                img.src = 'imgs/bK.svg'
                quadrado.appendChild(img)
            }

            if(l == 3){
                var img = document.createElement('img')
                img.src = 'imgs/bQ.svg'
                quadrado.appendChild(img)

            }

        }

        if((c+l) % 2 == 0){
           quadrado.className= 'chess-square white'

        }else{
            quadrado.className= 'chess-square black'
        }
        tabuleiro.appendChild(quadrado);

    }

}