var type = new Typed(".autotype", {
    strings: ["Hi my name is Carl Morada.", "I love to code.", "And also to analyze data."],
    typeSpeed: 100,
    backSpeed: 150,
    loop: true,
    showCursor: false
});

$(".softskill1").on("mouseover", function(){
    $(".desc1").animate({
        top: "10px",
    })
})
$(".softskill2").on("mouseover", function(){
    $(".desc1").animate({
        top: "200px",
    })
})

$(".softskill2").on("mouseover", function(){
    $(".desc2").animate({
        top: "10px",
    })
})
$(".softskill3").on("mouseover", function(){
    $(".desc2").animate({
        top: "200px",
    })
})

$(".softskill3").on("mouseover", function(){
    $(".desc3").animate({
        top: "10px",
    })
})
$(".softskill4").on("mouseover", function(){
    $(".desc3").animate({
        top: "200px",
    })
})

$(".softskill4").on("mouseover", function(){
    $(".desc4").animate({
        top: "10px",
    })
})
$(".softskill5").on("mouseover", function(){
    $(".desc4").animate({
        top: "200px",
    })
})

$(".softskill5").on("mouseover", function(){
    $(".desc5").animate({
        top: "10px",
    })
})
$(".softskill1").on("mouseover", function(){
    $(".desc5").animate({
        top: "200px",
    })
})

for (var i = 1; i < 5; i++){
    $(`.box${i}`).hide();
}

$(".btn1").on("click", function(){
    $(".box1").show(1000);
})
$(".btn2").on("click", function(){
    $(".box2").show(1000);
})
$(".btn3").on("click", function(){
    $(".box3").show(1000);
})
$(".btn4").on("click", function(){
    $(".box4").show(1000);
})

$(".back1").on("click", function(){
    $(".box1").hide(1000);
})
$(".back2").on("click", function(){
    $(".box2").hide(1000);
})
$(".back3").on("click", function(){
    $(".box3").hide(1000);
})
$(".back4").on("click", function(){
    $(".box4").hide(1000);
})

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
$(".python").hide()
$('.webdev').hide()
$(".excel").hide()
$(".sql").hide()
$(".vi").hide()
$(".tool1").click(function(){
    if (num1 == 0){
        $(".python").show(1000)
        $(".tool1").html("Hide Me")
        num1 = 1
    }
    else if(num1 == 1){
        $(".python").hide(1000)
        $(".tool1").html("See my skills")
        num1 = 0
    }
});
$(".tool2").click(function(){
    if (num2 == 0){
        $(".webdev").show(1000)
        $(".tool2").html("Hide Me")
        num2  = 1
    }
    else if(num2 == 1){
        $(".webdev").hide(1000)
        $(".tool2").html("See my skills")
        num2 = 0
    }
});

$(".tool3").click(function(){
    if (num3 == 0){
        $(".excel").show(1000)
        $(".tool3").html("Hide Me")
        num3  = 1
    }
    else if(num3 == 1){
        $(".excel").hide(1000)
        $(".tool3").html("See my skills")
        num3 = 0
    }
});

$(".tool4").click(function(){
    if (num4 == 0){
        $(".sql").show(1000)
        $(".tool4").html("Hide Me")
        num4  = 1
    }
    else if(num4 == 1){
        $(".sql").hide(1000)
        $(".tool4").html("See my skills")
        num4 = 0
    }
});
$(".tool5").click(function(){
    if (num5 == 0){
        $(".vi").show(1000)
        $(".tool5").html("Hide Me")
        num5  = 1
    }
    else if(num5 == 1){
        $(".vi").hide(1000)
        $(".tool5").html("See my skills")
        num5 = 0
    }
});


