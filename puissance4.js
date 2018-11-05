    $.fn.test = function(x, y, color, color2)
    {
        var plateau = [];
        var coups = 0;
        var victoire1 = 0;
        var victoire2 = 0;
        var matchnul = 0;

        this.grille = function() {

            // Creation de la grille

            $("#game").append("<table class =\"content\"></table>");
            $("#game").append("<h1 id = 'turn'> Joueur "+color2+" tour </h1>").css("color",color2);
            $("#game").append("<p id ='joueur1'> Joueur "+color2+" : "+victoire1+"</p>");
            $("#game").append("<p id ='matchnul'> Match nul : "+matchnul+"</p>");

            $("#game").append("<p id ='joueur2'> Joueur "+color+" : "+victoire2+"</p>");


            if (x >= 4 && x <= 20 && y >= 4 && y <= 20) {
                for ( var h = 0; h < x; h++) {
                    var rows = $(".content").append("<tr class ='rows' id ='rows"+h+"'></tr>");
                    plateau[h] = [];
                    console.log(plateau[h]);
                for (var i = 0; i < y; i++) {
                   var columns = $("#rows"+h+"").append("<td class ='columns' data-x ='" + h + "' data-y ='"+ i + "' > </td>");
                    plateau[h][i] = columns;
                }

            }
            }
            else {

                window.alert("Vous avez choisi un nombre de colonne ou de rangée trop petite ou bien trop grande !");
                for ( var h =0; h < 4; h++) {
                    $("#game").append("<tr class ='rows'></tr>");
                }
                for (var i = 0; i < 4; i++) {
                    $("tr").append("<td class ='columns'> </td>");
                }

                window.alert("Mise en place d'un plateau par défault (4x4)!");
            }

        };
        console.log(plateau);

        this.color = function() {
            var result;
            result = color;


            $(".rows").click(function() {


                $(this).children().each(function() {

                    var firstclick;
                    firstclick = new Audio("poker-chips-daniel_simon.wav");
                    firstclick.play();
                    if ($(this).hasClass("columns") && $(this).hasClass("player1") || $(this).hasClass("player2")) {
                            return;
                    }
                    else {

                        if (result === color) {

                            result = color2;


                            $(this).addClass("player1").css("background-color", result);
                            $("#turn").html("Joueur "+ color + " tour").css("color",color);
                            coups++;

                            return false;
                        }
                        else {
                            result = color;
                            $(this).addClass("player2").css("background-color", result);
                            $("#turn").html("Joueur "+ color2 + " tour").css("color",color2);
                            coups++;

                            return false;
                        }

                    }

                });


                if (coups === x*y) {
                    window.alert("Match nul");
                    $("#matchnul").html("Match nul : "+(matchnul+= 1));
                    $("#game").append("<button id = 'rejouer'>Rejouer</button>");


                    $("#rejouer").click(function() {
                        $(".columns").css("background-color","white");
                        coups = 0;
                        $("#rejouer").remove();
                        $(".columns").removeClass("player1");
                        $(".columns").removeClass("player2");

                    });
                }


            });



        };

        this.checkV = function() {

            var countPlayer1 = 0;
            var countPlayer2 = 0;
            var countPlayer1H = 0;
            var countPlayer2H = 0;

            var bbb = $(".rows").data("y");



            //verification verticale

            $(".rows").click(function() {
                $(this).each(function() {
                    $(this).children().each(function() {
                        if ($(this).hasClass("player1")) {
                            countPlayer1++;
                            countPlayer2 = 0;
                        } else if ($(this).hasClass("player2")) {
                            countPlayer2++;
                            countPlayer1 = 0;
                        }
                    });


                    if (countPlayer1 === 4) {
                        alert("PPlayer " + color2 + " a gagné!");
                        $("#joueur1").html("Joueur " + color2 + " : " + (victoire1+= 1));
                        $("#game").append("<button id = 'rejouer'>Rejouer</button>");

                        $("#rejouer").click(function() {
                            $(".columns").css("background-color","white");
                            coups = 0;
                            countPlayer1 = 0;

                            $("#rejouer").remove();
                            $(".columns").removeClass("player1");
                            $(".columns").removeClass("player2");

                        });
                    }
                    if (countPlayer2 === 4) {
                        alert("PPlayer "+color+" a gagné!");
                        $("#joueur2").html("Player "+color+" : "+(victoire2+= 1));
                        $("#game").append("<button id = 'rejouer'>Rejouer</button>");


                        $("#rejouer").click(function() {
                            $(".columns").css("background-color","white");
                            coups = 0;
                            countPlayer2 = 0;

                            $("#rejouer").remove();
                            $(".columns").removeClass("player1");
                            $(".columns").removeClass("player2");

                        });
                    }
                });

            });

            // Verification horizontale



                if (countPlayer1H === 4) {
                    alert("Player "+color2+" a gagné!");
                    $("#joueur1").html("Joueur "+color2+" : "+(victoire1+= 1));
                    $("#game").append("<button id = 'rejouer'>Rejouer</button>");

                    $("#rejouer").click(function() {
                        $(".columns").css("background-color","white");
                        coups = 0;
                        countPlayer1 = 0;

                        $("#rejouer").remove();
                        $(".columns").removeClass("player1");
                        $(".columns").removeClass("player2");

                    });
                }
                if (countPlayer2H === 4) {
                    alert("Player "+color+" a gagné!");
                    $("#joueur2").html("Player "+color+" : "+(victoire2+= 1));
                    $("#game").append("<button id = 'rejouer'>Rejouer</button>");


                    $("#rejouer").click(function() {
                        $(".columns").css("background-color","white");
                        coups = 0;
                        countPlayer2 = 0;

                        $("#rejouer").remove();
                        $(".columns").removeClass("player1");
                        $(".columns").removeClass("player2");

                    });
                }




        };

        this.grille();
        this.color();
        this.checkV();


    };
