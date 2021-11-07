//jshint esversion : 6

// //1
// let fname = prompt("Bạn hãy nhập tên: ");
// let age = prompt("Bạn hãy nhập tuổi: ");

// let html = `<p>Chào bạn: <strong>${fname}</strong></p><p>Tuổi của bạn là: <u>${age}</u></p>`;

// $("#excercise1").html(html);

//2
$(document).ready(function(){
    $("input[name='welcome']").click(function(){
        alert($("input[name='msg'").val() + " javascript");
    })
})


//3
$(document).ready(function(){
    $("#button").click(function(){
        alert($("#text").val());
    })
})


//4
$(document).ready(function(){
    $("#age").click(function(){
        let d = new Date();
        let yearNow = d.getFullYear();
        alert(yearNow - parseInt($("input[name='age']").val()));
    })
})

//5
$(document).ready(function(){
    $("#age2").click(function(){
        let d = new Date();
        let yearNow = d.getFullYear();
        let yearUser = $("input[name='age2']").val();
        do{
            if(yearUser > yearNow){
                alert("Mời bạn nhập lại");
                break;
            }else{
                alert(yearNow - yearUser);
            }
        }while(yearUser > yearNow);
    })
})


//6 
$(document).ready(function(){
    $("#red").click(function(){
        document.body.style.backgroundColor = "red";
    })
    $("#blue").click(function(){
        document.body.style.backgroundColor = "blue";
    })
})

//7 
$(document).ready(function(){
    $("#colorList").click(function(){
        let colorList = $("#backgroundColor").val();
        console.log(colorList);
        $("body").css("background-color", colorList);
    });
})

//8 
$(document).ready(function(){
    $("#title").click(function(){
        let d = new Date();
        let hour = d.getHours();
        let minute = d.getMinutes();
        document.title = `${hour}:${minute}`;
    });
})

//9
setInterval(clock, 1000);

function clock(){
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let html = `${hour}:${minute}:${second}`;
    $("#clock").html(html);
}

//10
let showLess = $(".text").html();
let showMore = "";
for(let i = 0; i < 80; i++){
    showMore += showLess[i];
}
showMore += `<span class="showMore"><u>Show More</u></span>`;

$(".showLess").click(function(){
    $(".text").html(showMore);
    $(".showMore").click(function(){
        $(".text").html(showLess);
        console.log(showLess);
    })
})




