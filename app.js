function answer1() {
    if (document.getElementById("cindrella").checked = true) {
        document.getElementById("favorite").innerHTML = ("It is Cinderella!");
    }}

    function answer2() {
        if (document.getElementById("tiana2").checked = true) {
            document.getElementById("left").innerHTML = ("It is Tiana!");
        }}

        function answer3() {
            if (document.getElementById("poca3").checked = true) {
                document.getElementById("love").innerHTML = ("It is Pocahontas!");
            }} 
            
            function answer4() {
                if (document.getElementById("snow4").checked = true) {
                    document.getElementById("first").innerHTML = ("It is Snow White!");
                }}


               
                function clickMe () { 
                    var yourPrincess = ["snowwhite.html", "Ariel.html", "Cinderella.html", "mulan.html", ];
                  var urldr= yourPrincess [Math.floor (Math.random() * yourPrincess.length)];
                  document.location = urldr;
                }

            