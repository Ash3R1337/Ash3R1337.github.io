let WEB = 0; //MAX: 29
let SOFT = 0; //MAX: 29
let GAME = 0; //MAX: 25
let MOB = 0; //MAX: 13

(function( $ ){
    //timer
    var _Seconds = $('.seconds').text(),
    int;
    int = setInterval(function() { // запускаем интервал
        if (_Seconds >= 0) {
        _Seconds++; // вычитаем 1
        $('.seconds').text(_Seconds); // выводим получившееся значение в блок
        } 
    }, 1000);
	$('input[name="answer"]').on('click', function () {
    	if ( $(this).is(':checked') ) 
        {
            //first
    		if ($('input[value="web"]').is(':checked')) {
                WEB++;
                $('input[value="soft"]').attr("disabled", "disabled")
                $('input[value="gamedev"]').attr("disabled", "disabled")
                $('input[value="DKnow"]').attr("disabled", "disabled")
                $('input[value="web"]').attr("disabled", "disabled")
        		$(".btn-test").click(function()
				{
					$("#first").css({'display' : 'none'});
                    $("#second").css({'display' : 'block'});
					$("#count").html('2');
                    $("img").attr("src", "assets/images/TEST/sec.jpg")
				});
            }
            else if ($('input[value="soft"]').is(':checked')) {
                SOFT++;
                $('input[value="soft"]').attr("disabled", "disabled")
                $('input[value="gamedev"]').attr("disabled", "disabled")
                $('input[value="DKnow"]').attr("disabled", "disabled")
                $('input[value="web"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#first").css({'display' : 'none'});
                    $("#second").css({'display' : 'block'});
                    $("#count").html('2');
                    $("img").attr("src", "assets/images/TEST/sec.jpg")
                });
            }
            else if ($('input[value="gamedev"]').is(':checked')) {
                GAME++;
                MOB++;
                $('input[value="soft"]').attr("disabled", "disabled")
                $('input[value="gamedev"]').attr("disabled", "disabled")
                $('input[value="DKnow"]').attr("disabled", "disabled")
                $('input[value="web"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#first").css({'display' : 'none'});
                    $("#second").css({'display' : 'block'});
                    $("#count").html('2');
                    $("img").attr("src", "assets/images/TEST/sec.jpg")
                });
            }
            else if ($('input[value="DKnow"]').is(':checked')) {
                GAME-= 1;
                SOFT-= 1;
                WEB-= 1;
                $('input[value="soft"]').attr("disabled", "disabled")
                $('input[value="gamedev"]').attr("disabled", "disabled")
                $('input[value="DKnow"]').attr("disabled", "disabled")
                $('input[value="web"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#first").css({'display' : 'none'});
                    $("#second").css({'display' : 'block'});
                    $("#count").html('2');
                    $("img").attr("src", "assets/images/TEST/sec.jpg")
                });
            }
            //second
            if ($('input[value="5"]').is(':checked')) {
                WEB+= 3;
                SOFT+= 3;
                GAME+= 3;
                $('input[value="5"]').attr("disabled", "disabled")
                $('input[value="2"]').attr("disabled", "disabled")
                $('input[value="1"]').attr("disabled", "disabled")
                $('input[value="0"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#second").css({'display' : 'none'});
                    $("#third").css({'display' : 'block'});
                    $("#count").html('3');
                    $("img").attr("src", "assets/images/TEST/tg.jpg")
                });
            }
            else if ($('input[value="2"]').is(':checked')) {
                WEB+= 2;
                SOFT+= 2;
                GAME+= 2;
                $('input[value="5"]').attr("disabled", "disabled")
                $('input[value="2"]').attr("disabled", "disabled")
                $('input[value="1"]').attr("disabled", "disabled")
                $('input[value="0"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#second").css({'display' : 'none'});
                    $("#third").css({'display' : 'block'});
                    $("#count").html('3');
                    $("img").attr("src", "assets/images/TEST/tg.jpg")
                });
            }
            else if ($('input[value="1"]').is(':checked')) {
                WEB+= 1;
                SOFT+= 1;
                GAME+= 1;
                $('input[value="5"]').attr("disabled", "disabled")
                $('input[value="2"]').attr("disabled", "disabled")
                $('input[value="1"]').attr("disabled", "disabled")
                $('input[value="0"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#second").css({'display' : 'none'});
                    $("#third").css({'display' : 'block'});
                    $("#count").html('3');
                    $("img").attr("src", "assets/images/TEST/tg.jpg")
                });
            }
            else if ($('input[value="0"]').is(':checked')) {
                GAME-= 1;
                SOFT-= 1;
                WEB-= 1;
                $('input[value="5"]').attr("disabled", "disabled")
                $('input[value="2"]').attr("disabled", "disabled")
                $('input[value="1"]').attr("disabled", "disabled")
                $('input[value="0"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#second").css({'display' : 'none'});
                    $("#third").css({'display' : 'block'});
                    $("#count").html('3');
                    $("img").attr("src", "assets/images/TEST/tg.jpg")
                });
            }
            //third
             if ($('input[value="html"]').is(':checked')) {
                WEB-= 1;
                GAME-= 1;
                $('input[value="html"]').attr("disabled", "disabled")
                $('input[value="js"]').attr("disabled", "disabled")
                $('input[value="css"]').attr("disabled", "disabled")
                $('input[value="Dj"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#third").css({'display' : 'none'});
                    $("#fourth").css({'display' : 'block'});
                    $("#count").html('4');
                    $("img").attr("src", "assets/images/TEST/soft_1.jpg")
                });
            }
            else if ($('input[value="js"]').is(':checked')) {
                WEB+= 1;
                GAME+= 1;
                $('input[value="html"]').attr("disabled", "disabled")
                $('input[value="js"]').attr("disabled", "disabled")
                $('input[value="css"]').attr("disabled", "disabled")
                $('input[value="Dj"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#third").css({'display' : 'none'});
                    $("#fourth").css({'display' : 'block'});
                    $("#count").html('4');
                    $("img").attr("src", "assets/images/TEST/soft_1.jpg")
                });
            }
            else if ($('input[value="css"]').is(':checked')) {
                WEB-= 1;
                GAME-= 1;
                $('input[value="html"]').attr("disabled", "disabled")
                $('input[value="js"]').attr("disabled", "disabled")
                $('input[value="css"]').attr("disabled", "disabled")
                $('input[value="Dj"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#third").css({'display' : 'none'});
                    $("#fourth").css({'display' : 'block'});
                    $("#count").html('4');
                    $("img").attr("src", "assets/images/TEST/soft_1.jpg")
                });
            }
            else if ($('input[value="Dj"]').is(':checked')) {
                GAME+= 2;
                SOFT+= 1;
                WEB+= 1;
                $('input[value="html"]').attr("disabled", "disabled")
                $('input[value="js"]').attr("disabled", "disabled")
                $('input[value="css"]').attr("disabled", "disabled")
                $('input[value="Dj"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#third").css({'display' : 'none'});
                    $("#fourth").css({'display' : 'block'});
                    $("#count").html('4');
                    $("img").attr("src", "assets/images/TEST/soft_1.jpg")
                });
            }
            //fourth
            if ($('input[value="lit"]').is(':checked')) {
                SOFT-= 1;
                GAME-= 1;
                $('input[value="lit"]').attr("disabled", "disabled")
                $('input[value="bui"]').attr("disabled", "disabled")
                $('input[value="sel"]').attr("disabled", "disabled")
                $('input[value="oth"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fourth").css({'display' : 'none'});
                    $("#fifth").css({'display' : 'block'});
                    $("#count").html('5');
                    $("img").attr("src", "assets/images/TEST/game_2.png")
                });
            }
            else if ($('input[value="bui"]').is(':checked')) {
                SOFT+= 2;
                GAME+= 2;
                $('input[value="lit"]').attr("disabled", "disabled")
                $('input[value="bui"]').attr("disabled", "disabled")
                $('input[value="sel"]').attr("disabled", "disabled")
                $('input[value="oth"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fourth").css({'display' : 'none'});
                    $("#fifth").css({'display' : 'block'});
                    $("#count").html('5');
                    $("img").attr("src", "assets/images/TEST/game_2.png")
                });
            }
            else if ($('input[value="sel"]').is(':checked')) {
                SOFT-= 1;
                GAME-= 1;
                $('input[value="lit"]').attr("disabled", "disabled")
                $('input[value="bui"]').attr("disabled", "disabled")
                $('input[value="sel"]').attr("disabled", "disabled")
                $('input[value="oth"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fourth").css({'display' : 'none'});
                    $("#fifth").css({'display' : 'block'});
                    $("#count").html('5');
                    $("img").attr("src", "assets/images/TEST/game_2.png")
                });
            }
            else if ($('input[value="oth"]').is(':checked')) {
                $('input[value="lit"]').attr("disabled", "disabled")
                $('input[value="bui"]').attr("disabled", "disabled")
                $('input[value="sel"]').attr("disabled", "disabled")
                $('input[value="oth"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fourth").css({'display' : 'none'});
                    $("#fifth").css({'display' : 'block'});
                    $("#count").html('5');
                    $("img").attr("src", "assets/images/TEST/game_2.png")
                });
            }
            //fifth
            if ($('input[value="mul"]').is(':checked')) {
                SOFT-= 1;
                GAME-= 2;
                $('input[value="mul"]').attr("disabled", "disabled")
                $('input[value="vr"]').attr("disabled", "disabled")
                $('input[value="cross"]').attr("disabled", "disabled")
                $('input[value="int"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fifth").css({'display' : 'none'});
                    $("#sixth").css({'display' : 'block'});
                    $("#count").html('6');
                    $("img").attr("src", "assets/images/TEST/books.jpg")
                });
            }
            else if ($('input[value="vr"]').is(':checked')) {
                SOFT-= 1;
                GAME-= 2;
                $('input[value="mul"]').attr("disabled", "disabled")
                $('input[value="vr"]').attr("disabled", "disabled")
                $('input[value="cross"]').attr("disabled", "disabled")
                $('input[value="int"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fifth").css({'display' : 'none'});
                    $("#sixth").css({'display' : 'block'});
                    $("#count").html('6');
                    $("img").attr("src", "assets/images/TEST/books.jpg")
                });
            }
            else if ($('input[value="cross"]').is(':checked')) {
                SOFT+= 1;
                GAME+= 2;
                $('input[value="mul"]').attr("disabled", "disabled")
                $('input[value="vr"]').attr("disabled", "disabled")
                $('input[value="cross"]').attr("disabled", "disabled")
                $('input[value="int"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fifth").css({'display' : 'none'});
                    $("#sixth").css({'display' : 'block'});
                    $("#count").html('6');
                    $("img").attr("src", "assets/images/TEST/books.jpg")
                });
            }
            else if ($('input[value="int"]').is(':checked')) {
                SOFT-= 1;
                GAME-= 2;
                $('input[value="mul"]').attr("disabled", "disabled")
                $('input[value="vr"]').attr("disabled", "disabled")
                $('input[value="cross"]').attr("disabled", "disabled")
                $('input[value="int"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fifth").css({'display' : 'none'});
                    $("#sixth").css({'display' : 'block'});
                    $("#count").html('6');
                    $("img").attr("src", "assets/images/TEST/books.jpg")
                });
            }
            //sixth
            if ($('input[value="book_5"]').is(':checked')) {
                SOFT+= 2;
                GAME+= 2;
                WEB+= 2;
                $('input[value="book_5"]').attr("disabled", "disabled")
                $('input[value="book_3"]').attr("disabled", "disabled")
                $('input[value="book_1"]').attr("disabled", "disabled")
                $('input[value="book_0"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#sixth").css({'display' : 'none'});
                    $("#seventh").css({'display' : 'block'});
                    $("#count").html('7');
                    $("img").attr("src", "assets/images/TEST/soft_1.jpg")
                });
            }
            else if ($('input[value="book_3"]').is(':checked')) {
                SOFT+= 1;
                GAME+= 1;
                WEB+= 1;
                $('input[value="book_5"]').attr("disabled", "disabled")
                $('input[value="book_3"]').attr("disabled", "disabled")
                $('input[value="book_1"]').attr("disabled", "disabled")
                $('input[value="book_0"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#sixth").css({'display' : 'none'});
                    $("#seventh").css({'display' : 'block'});
                    $("#count").html('7');
                    $("img").attr("src", "assets/images/TEST/soft_1.jpg")
                });
            }
            else if ($('input[value="book_1"]').is(':checked')) {
                SOFT+= 1;
                $('input[value="book_5"]').attr("disabled", "disabled")
                $('input[value="book_3"]').attr("disabled", "disabled")
                $('input[value="book_1"]').attr("disabled", "disabled")
                $('input[value="book_0"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#sixth").css({'display' : 'none'});
                    $("#seventh").css({'display' : 'block'});
                    $("#count").html('7');
                    $("img").attr("src", "assets/images/TEST/soft_1.jpg")
                });
            }
            else if ($('input[value="book_0"]').is(':checked')) {
                SOFT-= 1;
                GAME-= 1;
                WEB-= 1;
                $('input[value="book_5"]').attr("disabled", "disabled")
                $('input[value="book_3"]').attr("disabled", "disabled")
                $('input[value="book_1"]').attr("disabled", "disabled")
                $('input[value="book_0"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#sixth").css({'display' : 'none'});
                    $("#seventh").css({'display' : 'block'});
                    $("#count").html('7');
                    $("img").attr("src", "assets/images/TEST/soft_1.jpg")
                });
            }
            //seventh
            if ($('input[value="ye"]').is(':checked')) {
                SOFT+= 2;
                GAME+= 1;
                $('input[value="ye"]').attr("disabled", "disabled")
                $('input[value="no"]').attr("disabled", "disabled")
                $('input[value="web-dev"]').attr("disabled", "disabled")
                $('input[value="mob"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#seventh").css({'display' : 'none'});
                    $("#eighth").css({'display' : 'block'});
                    $("#count").html('8');
                    $("img").attr("src", "assets/images/TEST/mob.jpg")
                });
            }
            else if ($('input[value="no"]').is(':checked')) {
                SOFT+= 1;
                GAME+= 1;
                WEB+= 1;
                $('input[value="ye"]').attr("disabled", "disabled")
                $('input[value="no"]').attr("disabled", "disabled")
                $('input[value="web-dev"]').attr("disabled", "disabled")
                $('input[value="mob"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#seventh").css({'display' : 'none'});
                    $("#eighth").css({'display' : 'block'});
                    $("#count").html('8');
                    $("img").attr("src", "assets/images/TEST/mob.jpg")
                });
            }
            else if ($('input[value="web-dev"]').is(':checked')) {
                WEB+= 2; 
                $('input[value="ye"]').attr("disabled", "disabled")
                $('input[value="no"]').attr("disabled", "disabled")
                $('input[value="web-dev"]').attr("disabled", "disabled")
                $('input[value="mob"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#seventh").css({'display' : 'none'});
                    $("#eighth").css({'display' : 'block'});
                    $("#count").html('8');
                    $("img").attr("src", "assets/images/TEST/mob.jpg")
                });
            }
            else if ($('input[value="mob"]').is(':checked')) {
                MOB+= 3;
                $('input[value="ye"]').attr("disabled", "disabled")
                $('input[value="no"]').attr("disabled", "disabled")
                $('input[value="web-dev"]').attr("disabled", "disabled")
                $('input[value="mob"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#seventh").css({'display' : 'none'});
                    $("#eighth").css({'display' : 'block'});
                    $("#count").html('8');
                    $("img").attr("src", "assets/images/TEST/mob.jpg")
                });
            }
            //eighth
            if ($('input[value="mob-one"]').is(':checked')) {
                MOB-= 3;
                SOFT+= 1;
                WEB+= 1;
                GAME+= 1; 
                $('input[value="mob-one"]').attr("disabled", "disabled")
                $('input[value="mob-five"]').attr("disabled", "disabled")
                $('input[value="mob-ten"]').attr("disabled", "disabled")
                $('input[value="mob-twelve"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#eighth").css({'display' : 'none'});
                    $("#ninth").css({'display' : 'block'});
                    $("#count").html('9');
                    $("img").attr("src", "assets/images/TEST/program.jpg")
                });
            }
            else if ($('input[value="mob-five"]').is(':checked')) {
                MOB-= 1;
                GAME+= 1;
                WEB+= 1;
                SOFT+= 1;
                $('input[value="mob-one"]').attr("disabled", "disabled")
                $('input[value="mob-five"]').attr("disabled", "disabled")
                $('input[value="mob-ten"]').attr("disabled", "disabled")
                $('input[value="mob-twelve"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#eighth").css({'display' : 'none'});
                    $("#ninth").css({'display' : 'block'});
                    $("#count").html('9');
                    $("img").attr("src", "assets/images/TEST/program.jpg")
                });
            }
            else if ($('input[value="mob-ten"]').is(':checked')) {
                MOB+= 1; 
                $('input[value="mob-one"]').attr("disabled", "disabled")
                $('input[value="mob-five"]').attr("disabled", "disabled")
                $('input[value="mob-ten"]').attr("disabled", "disabled")
                $('input[value="mob-twelve"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#eighth").css({'display' : 'none'});
                    $("#ninth").css({'display' : 'block'});
                    $("#count").html('9');
                    $("img").attr("src", "assets/images/TEST/program.jpg")
                });
            }
            else if ($('input[value="mob-twelve"]').is(':checked')) {
                MOB+= 3;
                $('input[value="mob-one"]').attr("disabled", "disabled")
                $('input[value="mob-five"]').attr("disabled", "disabled")
                $('input[value="mob-ten"]').attr("disabled", "disabled")
                $('input[value="mob-twelve"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#eighth").css({'display' : 'none'});
                    $("#ninth").css({'display' : 'block'});
                    $("#count").html('9');
                    $("img").attr("src", "assets/images/TEST/program.jpg")
                });
            }
            //ninth
            if ($('input[value="prog-two"]').is(':checked')) {
                SOFT+= 1;
                WEB+= 1;
                GAME+= 1;
                MOB+= 1;
                $('input[value="prog-two"]').attr("disabled", "disabled")
                $('input[value="prog-five"]').attr("disabled", "disabled")
                $('input[value="prog-one"]').attr("disabled", "disabled")
                $('input[value="prog-null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#ninth").css({'display' : 'none'});
                    $("#tenth").css({'display' : 'block'});
                    $("#count").html('10');
                    $("img").attr("src", "assets/images/TEST/git.png")
                });
            }
            else if ($('input[value="prog-five"]').is(':checked')) {
                SOFT+= 2;
                WEB+= 2;
                GAME+= 2;
                MOB+= 2;
                $('input[value="prog-two"]').attr("disabled", "disabled")
                $('input[value="prog-five"]').attr("disabled", "disabled")
                $('input[value="prog-one"]').attr("disabled", "disabled")
                $('input[value="prog-null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#ninth").css({'display' : 'none'});
                    $("#tenth").css({'display' : 'block'});
                    $("#count").html('10');
                    $("img").attr("src", "assets/images/TEST/git.png")
                });
            }
            else if ($('input[value="prog-one"]').is(':checked')) {
                SOFT+= 1;
                WEB+= 1;
                GAME+= 1;
                MOB+= 1;
                $('input[value="prog-two"]').attr("disabled", "disabled")
                $('input[value="prog-five"]').attr("disabled", "disabled")
                $('input[value="prog-one"]').attr("disabled", "disabled")
                $('input[value="prog-null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#ninth").css({'display' : 'none'});
                    $("#tenth").css({'display' : 'block'});
                    $("#count").html('10');
                    $("img").attr("src", "assets/images/TEST/git.png")
                });
            }
            else if ($('input[value="prog-null"]').is(':checked')) {
                SOFT-= 2;
                WEB-= 2;
                GAME-=2;
                MOB-=2;
                $('input[value="prog-two"]').attr("disabled", "disabled")
                $('input[value="prog-five"]').attr("disabled", "disabled")
                $('input[value="prog-one"]').attr("disabled", "disabled")
                $('input[value="prog-null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#ninth").css({'display' : 'none'});
                    $("#tenth").css({'display' : 'block'});
                    $("#count").html('10');
                    $("img").attr("src", "assets/images/TEST/git.png")
                });
            }
            //tenth
            if ($('input[value="git-one"]').is(':checked')) {
                SOFT+= 1;
                WEB+= 1;
                $('input[value="git-one"]').attr("disabled", "disabled")
                $('input[value="git-five"]').attr("disabled", "disabled")
                $('input[value="git-fifteen"]').attr("disabled", "disabled")
                $('input[value="git-null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#tenth").css({'display' : 'none'});
                    $("#eleventh").css({'display' : 'block'});
                    $("#count").html('11');
                    $("img").attr("src", "assets/images/TEST/eng.jpg")
                });
            }
            else if ($('input[value="git-five"]').is(':checked')) {
                SOFT+= 1;
                WEB+= 1;
                $('input[value="git-one"]').attr("disabled", "disabled")
                $('input[value="git-five"]').attr("disabled", "disabled")
                $('input[value="git-fifteen"]').attr("disabled", "disabled")
                $('input[value="git-null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#tenth").css({'display' : 'none'});
                    $("#eleventh").css({'display' : 'block'});
                    $("#count").html('11');
                    $("img").attr("src", "assets/images/TEST/eng.jpg")
                });
            }
            else if ($('input[value="git-fifteen"]').is(':checked')) {
                SOFT+= 2;
                WEB+= 2;
                $('input[value="git-one"]').attr("disabled", "disabled")
                $('input[value="git-five"]').attr("disabled", "disabled")
                $('input[value="git-fifteen"]').attr("disabled", "disabled")
                $('input[value="git-null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#tenth").css({'display' : 'none'});
                    $("#eleventh").css({'display' : 'block'});
                    $("#count").html('11');
                    $("img").attr("src", "assets/images/TEST/eng.jpg")
                });
            }
            else if ($('input[value="git-null"]').is(':checked')) {
                SOFT-= 1;
                WEB-= 1;
                $('input[value="git-one"]').attr("disabled", "disabled")
                $('input[value="git-five"]').attr("disabled", "disabled")
                $('input[value="git-fifteen"]').attr("disabled", "disabled")
                $('input[value="git-null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#tenth").css({'display' : 'none'});
                    $("#eleventh").css({'display' : 'block'});
                    $("#count").html('11');
                    $("img").attr("src", "assets/images/TEST/eng.jpg")
                });
            }
            //eleventh
            if ($('input[value="eng-one"]').is(':checked')) {
                SOFT-= 1;
                WEB-= 1;
                GAME-= 1;
                MOB-= 1;
                $('input[value="eng-one"]').attr("disabled", "disabled")
                $('input[value="eng-five"]').attr("disabled", "disabled")
                $('input[value="eng-eight"]').attr("disabled", "disabled")
                $('input[value="eng-ten"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#eleventh").css({'display' : 'none'});
                    $("#twelfth").css({'display' : 'block'});
                    $("#count").html('12');
                    $("img").attr("src", "assets/images/TEST/math.jpg")
                });
            }
            else if ($('input[value="eng-five"]').is(':checked')) {
                $('input[value="eng-one"]').attr("disabled", "disabled")
                $('input[value="eng-five"]').attr("disabled", "disabled")
                $('input[value="eng-eight"]').attr("disabled", "disabled")
                $('input[value="eng-ten"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#eleventh").css({'display' : 'none'});
                    $("#twelfth").css({'display' : 'block'});
                    $("#count").html('12');
                    $("img").attr("src", "assets/images/TEST/math.jpg")
                });
            }
            else if ($('input[value="eng-eight"]').is(':checked')) {
                SOFT+= 1;
                WEB+= 1;
                GAME+= 1;
                MOB+= 1;
                $('input[value="eng-one"]').attr("disabled", "disabled")
                $('input[value="eng-five"]').attr("disabled", "disabled")
                $('input[value="eng-eight"]').attr("disabled", "disabled")
                $('input[value="eng-ten"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#eleventh").css({'display' : 'none'});
                    $("#twelfth").css({'display' : 'block'});
                    $("#count").html('12');
                    $("img").attr("src", "assets/images/TEST/math.jpg")
                });
            }
            else if ($('input[value="eng-ten"]').is(':checked')) {
                SOFT+= 2;
                WEB+= 2;
                GAME+= 2;
                MOB+= 2;
                $('input[value="eng-one"]').attr("disabled", "disabled")
                $('input[value="eng-five"]').attr("disabled", "disabled")
                $('input[value="eng-eight"]').attr("disabled", "disabled")
                $('input[value="eng-ten"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#eleventh").css({'display' : 'none'});
                    $("#twelfth").css({'display' : 'block'});
                    $("#count").html('12');
                    $("img").attr("src", "assets/images/TEST/math.jpg")
                });
            }
            //twelfth
            if ($('input[value="math-one"]').is(':checked')) {
                SOFT+= 3;
                WEB+= 1;
                GAME+= 2;
                MOB+= 2;
                $('input[value="math-one"]').attr("disabled", "disabled")
                $('input[value="math-five"]').attr("disabled", "disabled")
                $('input[value="math-eight"]').attr("disabled", "disabled")
                $('input[value="math-ten"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#twelfth").css({'display' : 'none'});
                    $("#thirteenth").css({'display' : 'block'});
                    $("#count").html('13');
                    $("img").attr("src", "assets/images/TEST/cod.jpg")
                });
            }
            else if ($('input[value="math-five"]').is(':checked')) {
                WEB+= 1;
                SOFT-= 1;
                GAME-= 2;
                MOB-= 2;
                $('input[value="math-one"]').attr("disabled", "disabled")
                $('input[value="math-five"]').attr("disabled", "disabled")
                $('input[value="math-eight"]').attr("disabled", "disabled")
                $('input[value="math-ten"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#twelfth").css({'display' : 'none'});
                    $("#thirteenth").css({'display' : 'block'});
                    $("#count").html('13');
                    $("img").attr("src", "assets/images/TEST/cod.jpg")
                });
            }
            else if ($('input[value="math-eight"]').is(':checked')) {
                SOFT+= 1;
                WEB+= 1;
                GAME+= 1;
                MOB+= 1;
                $('input[value="math-one"]').attr("disabled", "disabled")
                $('input[value="math-five"]').attr("disabled", "disabled")
                $('input[value="math-eight"]').attr("disabled", "disabled")
                $('input[value="math-ten"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#twelfth").css({'display' : 'none'});
                    $("#thirteenth").css({'display' : 'block'});
                    $("#count").html('13');
                    $("img").attr("src", "assets/images/TEST/cod.jpg")
                });
            }
            else if ($('input[value="math-ten"]').is(':checked')) {
                SOFT+= 1;
                WEB+= 3;
                GAME+= 1;
                MOB+= 1;
                $('input[value="math-one"]').attr("disabled", "disabled")
                $('input[value="math-five"]').attr("disabled", "disabled")
                $('input[value="math-eight"]').attr("disabled", "disabled")
                $('input[value="math-ten"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#twelfth").css({'display' : 'none'});
                    $("#thirteenth").css({'display' : 'block'});
                    $("#count").html('13');
                    $("img").attr("src", "assets/images/TEST/cod.jpg")
                });
            }
            //thirteenth
            if ($('input[value="mon"]').is(':checked')) {
                SOFT+= 1;
                WEB+= 1;
                MOB+= 1;
                $('input[value="mon"]').attr("disabled", "disabled")
                $('input[value="glory"]').attr("disabled", "disabled")
                $('input[value="car"]').attr("disabled", "disabled")
                $('input[value="intg"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#thirteenth").css({'display' : 'none'});
                    $("#fourteenth").css({'display' : 'block'});
                    $("#count").html('14');
                    $("img").attr("src", "assets/images/TEST/c++.jpg")
                });
            }
            else if ($('input[value="glory"]').is(':checked')) {
                WEB+= 1;
                SOFT+= 2;
                $('input[value="mon"]').attr("disabled", "disabled")
                $('input[value="glory"]').attr("disabled", "disabled")
                $('input[value="car"]').attr("disabled", "disabled")
                $('input[value="intg"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#thirteenth").css({'display' : 'none'});
                    $("#fourteenth").css({'display' : 'block'});
                    $("#count").html('14');
                    $("img").attr("src", "assets/images/TEST/c++.jpg")
                });
            }
            else if ($('input[value="car"]').is(':checked')) {
                SOFT+= 2;
                GAME+= 2;
                $('input[value="mon"]').attr("disabled", "disabled")
                $('input[value="glory"]').attr("disabled", "disabled")
                $('input[value="car"]').attr("disabled", "disabled")
                $('input[value="intg"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#thirteenth").css({'display' : 'none'});
                    $("#fourteenth").css({'display' : 'block'});
                    $("#count").html('14');
                    $("img").attr("src", "assets/images/TEST/c++.jpg")
                });
            }
            else if ($('input[value="intg"]').is(':checked')) {
                WEB+= 2;
                GAME+= 1;
                $('input[value="mon"]').attr("disabled", "disabled")
                $('input[value="glory"]').attr("disabled", "disabled")
                $('input[value="car"]').attr("disabled", "disabled")
                $('input[value="intg"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#thirteenth").css({'display' : 'none'});
                    $("#fourteenth").css({'display' : 'block'});
                    $("#count").html('14');
                    $("img").attr("src", "assets/images/TEST/c++.jpg")
                });
            }
            //fourteenth
            if ($('input[value="stra"]').is(':checked')) {
                SOFT+= 2;
                GAME+= 1;
                $('input[value="stra"]').attr("disabled", "disabled")
                $('input[value="dud"]').attr("disabled", "disabled")
                $('input[value="xo"]').attr("disabled", "disabled")
                $('input[value="ron"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fourteenth").css({'display' : 'none'});
                    $("#fifteenth").css({'display' : 'block'});
                    $("#count").html('15');
                    $("img").attr("src", "assets/images/TEST/mob_2.png")
                });
            }
            else if ($('input[value="dud"]').is(':checked')) {
                GAME+= 1;
                SOFT+= 1;
                WEB+= 1;
                $('input[value="stra"]').attr("disabled", "disabled")
                $('input[value="dud"]').attr("disabled", "disabled")
                $('input[value="xo"]').attr("disabled", "disabled")
                $('input[value="ron"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fourteenth").css({'display' : 'none'});
                    $("#fifteenth").css({'display' : 'block'});
                    $("#count").html('15');
                    $("img").attr("src", "assets/images/TEST/mob_2.png")
                });
            }
            else if ($('input[value="xo"]').is(':checked')) {
                WEB+= 2;
                $('input[value="stra"]').attr("disabled", "disabled")
                $('input[value="dud"]').attr("disabled", "disabled")
                $('input[value="xo"]').attr("disabled", "disabled")
                $('input[value="ron"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fourteenth").css({'display' : 'none'});
                    $("#fifteenth").css({'display' : 'block'});
                    $("#count").html('15');
                    $("img").attr("src", "assets/images/TEST/mob_2.png")
                });
            }
            else if ($('input[value="ron"]').is(':checked')) {
                WEB+= 1;
                GAME+= 1;
                SOFT+= 1;
                MOB+= 1;
                $('input[value="stra"]').attr("disabled", "disabled")
                $('input[value="dud"]').attr("disabled", "disabled")
                $('input[value="xo"]').attr("disabled", "disabled")
                $('input[value="ron"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fourteenth").css({'display' : 'none'});
                    $("#fifteenth").css({'display' : 'block'});
                    $("#count").html('15');
                    $("img").attr("src", "assets/images/TEST/mob_2.png")
                });
            }
            //fifteenth
            if ($('input[value="dev_po"]').is(':checked')) {
                SOFT+= 1;
                $('input[value="dev_po"]').attr("disabled", "disabled")
                $('input[value="dev_web"]').attr("disabled", "disabled")
                $('input[value="dev_mob"]').attr("disabled", "disabled")
                $('input[value="dev_null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fifteenth").css({'display' : 'none'});
                    $("#sixteenth").css({'display' : 'block'});
                    $("#count").html('16');
                    $("img").attr("src", "assets/images/TEST/free.jpg")
                });
            }
            else if ($('input[value="dev_web"]').is(':checked')) {
                WEB+= 1;
                $('input[value="dev_po"]').attr("disabled", "disabled")
                $('input[value="dev_web"]').attr("disabled", "disabled")
                $('input[value="dev_mob"]').attr("disabled", "disabled")
                $('input[value="dev_null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fifteenth").css({'display' : 'none'});
                    $("#sixteenth").css({'display' : 'block'});
                    $("#count").html('16');
                    $("img").attr("src", "assets/images/TEST/free.jpg")
                });
            }
            else if ($('input[value="dev_mob"]').is(':checked')) {
                MOB+= 1;
                GAME+= 1;
                $('input[value="dev_po"]').attr("disabled", "disabled")
                $('input[value="dev_web"]').attr("disabled", "disabled")
                $('input[value="dev_mob"]').attr("disabled", "disabled")
                $('input[value="dev_null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fifteenth").css({'display' : 'none'});
                    $("#sixteenth").css({'display' : 'block'});
                    $("#count").html('16');
                    $("img").attr("src", "assets/images/TEST/free.jpg")
                });
            }
            else if ($('input[value="dev_null"]').is(':checked')) {
                WEB-= 1;
                GAME-= 1;
                SOFT-= 1;
                MOB-= 1;
                $('input[value="dev_po"]').attr("disabled", "disabled")
                $('input[value="dev_web"]').attr("disabled", "disabled")
                $('input[value="dev_mob"]').attr("disabled", "disabled")
                $('input[value="dev_null"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    $("#fifteenth").css({'display' : 'none'});
                    $("#sixteenth").css({'display' : 'block'});
                    $("#count").html('16');
                    $("img").attr("src", "assets/images/TEST/free.jpg")
                });
            }
            //sixteenth
            if ($('input[value="free"]').is(':checked')) {
                WEB+= 2;
                MOB+= 1;
                GAME+= 1;
                $('input[value="free"]').attr("disabled", "disabled")
                $('input[value="fix"]').attr("disabled", "disabled")
                $('input[value="cur"]').attr("disabled", "disabled")
                $('input[value="hob"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    alert('Тест пройден за ' + _Seconds + ' секунд')
                    _Seconds = -1;
                    $("#sixteenth").css({'display' : 'none'});
                    if(WEB >= SOFT & WEB >= MOB & WEB >= GAME) {
                        if(WEB <= 16) {
                            $("#HTML").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/html.jpg")
                        }
                        else if (WEB <= 21) {
                            $("#PHP").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/php.png")
                        }
                        else if (WEB <= 29) {
                            $("#JS").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/js.jpg")
                        }
                    }
                    else if (SOFT >= WEB & SOFT >= MOB & SOFT >= GAME) {
                        if(SOFT <= 16) {
                            $("#Pascal").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/pascal.jpg")
                        }
                        else if (SOFT <= 21) {
                            $("#Py").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/python.jpg")
                        }
                        else if (SOFT <= 29) {
                            $("#Java").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/java.png")
                        }
                    }
                    else if (GAME >= WEB & GAME >= MOB & GAME >= SOFT) {
                        if(GAME <= 12) {
                            $("#JS_GAME").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/JS_GAME.png")
                        }
                        else if (GAME <= 19) {
                            $("#Java_GAME").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/java_game.jpg")
                        }
                        else if (GAME <= 25) {
                            $("#cs").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/csharp.jpg")
                        }
                    }
                    else if (MOB >= WEB & MOB >= GAME & MOB >= SOFT) {
                        if(MOB <= 13) {
                            $("#Kotlin").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/kotlin.jpg")
                        }
                    }
                });
            }
            else if ($('input[value="fix"]').is(':checked')) {
                SOFT+= 2;
                GAME+= 1;
                $('input[value="free"]').attr("disabled", "disabled")
                $('input[value="fix"]').attr("disabled", "disabled")
                $('input[value="cur"]').attr("disabled", "disabled")
                $('input[value="hob"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                   alert('Тест пройден за ' + _Seconds + ' секунд')
                    _Seconds = -1;
                    $("#sixteenth").css({'display' : 'none'});
                    if(WEB >= SOFT & WEB >= MOB & WEB >= GAME) {
                        if(WEB <= 16) {
                            $("#HTML").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/html.jpg")
                        }
                        else if (WEB <= 21) {
                            $("#PHP").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/php.png")
                        }
                        else if (WEB <= 29) {
                            $("#JS").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/js.jpg")
                        }
                    }
                    else if (SOFT >= WEB & SOFT >= MOB & SOFT >= GAME) {
                        if(SOFT <= 16) {
                            $("#Pascal").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/pascal.jpg")
                        }
                        else if (SOFT <= 21) {
                            $("#Py").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/python.jpg")
                        }
                        else if (SOFT <= 29) {
                            $("#Java").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/java.png")
                        }
                    }
                    else if (GAME >= WEB & GAME >= MOB & GAME >= SOFT) {
                        if(GAME <= 12) {
                            $("#JS_GAME").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/JS_GAME.png")
                        }
                        else if (GAME <= 19) {
                            $("#Java_GAME").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/java_game.jpg")
                        }
                        else if (GAME <= 25) {
                            $("#cs").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/csharp.jpg")
                        }
                    }
                    else if (MOB >= WEB & MOB >= GAME & MOB >= SOFT) {
                        if(MOB <= 13) {
                            $("#Kotlin").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/kotlin.jpg")
                        }
                    }
                });
            }
            else if ($('input[value="cur"]').is(':checked')) {
                SOFT+= 1;
                WEB+= 1;
                MOB+= 1;
                GAME+= 1;
                $('input[value="free"]').attr("disabled", "disabled")
                $('input[value="fix"]').attr("disabled", "disabled")
                $('input[value="cur"]').attr("disabled", "disabled")
                $('input[value="hob"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    alert('Тест пройден за ' + _Seconds + ' секунд')
                    _Seconds = -1;
                    $("#sixteenth").css({'display' : 'none'});
                    if(WEB >= SOFT & WEB >= MOB & WEB >= GAME) {
                        if(WEB <= 16) {
                            $("#HTML").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/html.jpg")
                        }
                        else if (WEB <= 21) {
                            $("#PHP").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/php.png")
                        }
                        else if (WEB <= 29) {
                            $("#JS").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/js.jpg")
                        }
                    }
                    else if (SOFT >= WEB & SOFT >= MOB & SOFT >= GAME) {
                        if(SOFT <= 16) {
                            $("#Pascal").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/pascal.jpg")
                        }
                        else if (SOFT <= 21) {
                            $("#Py").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/python.jpg")
                        }
                        else if (SOFT <= 29) {
                            $("#Java").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/java.png")
                        }
                    }
                    else if (GAME >= WEB & GAME >= MOB & GAME >= SOFT) {
                        if(GAME <= 12) {
                            $("#JS_GAME").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/JS_GAME.png")
                        }
                        else if (GAME <= 19) {
                            $("#Java_GAME").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/java_game.jpg")
                        }
                        else if (GAME <= 25) {
                            $("#cs").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/csharp.jpg")
                        }
                    }
                    else if (MOB >= WEB & MOB >= GAME & MOB >= SOFT) {
                        if(MOB <= 13) {
                            $("#Kotlin").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/kotlin.jpg")
                        }
                    }
                });
            }
            else if ($('input[value="hob"]').is(':checked')) {
                WEB+= 1;
                GAME+= 1;
                SOFT+= 1;
                MOB+= 1;
                $('input[value="free"]').attr("disabled", "disabled")
                $('input[value="fix"]').attr("disabled", "disabled")
                $('input[value="cur"]').attr("disabled", "disabled")
                $('input[value="hob"]').attr("disabled", "disabled")
                $(".btn-test").click(function()
                {
                    alert('Тест пройден за ' + _Seconds + ' секунд')
                    _Seconds = -1;
                    $("#sixteenth").css({'display' : 'none'});
                    if(WEB >= SOFT & WEB >= MOB & WEB >= GAME) {
                        if(WEB <= 16) {
                            $("#HTML").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/html.jpg")
                        }
                        else if (WEB <= 21) {
                            $("#PHP").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/php.png")
                        }
                        else if (WEB <= 29) {
                            $("#JS").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/js.jpg")
                        }
                    }
                    else if (SOFT >= WEB & SOFT >= MOB & SOFT >= GAME) {
                        if(SOFT <= 16) {
                            $("#Pascal").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/pascal.jpg")
                        }
                        else if (SOFT <= 21) {
                            $("#Py").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/python.jpg")
                        }
                        else if (SOFT <= 29) {
                            $("#Java").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/java.png")
                        }
                    }
                    else if (GAME >= WEB & GAME >= MOB & GAME >= SOFT) {
                        if(GAME <= 12) {
                            $("#JS_GAME").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/JS_GAME.png")
                        }
                        else if (GAME <= 19) {
                            $("#Java_GAME").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/java_game.jpg")
                        }
                        else if (GAME <= 25) {
                            $("#cs").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/csharp.jpg")
                        }
                    }
                    else if (MOB >= WEB & MOB >= GAME & MOB >= SOFT) {
                        if(MOB <= 13) {
                            $("#Kotlin").css({'display' : 'block'});
                            $("img").attr("src", "assets/images/TEST/kotlin.jpg")
                        }
                    }
                });
            }
        }
    	else {
        // checkbox unchecked
    	}
	})
})( jQuery );