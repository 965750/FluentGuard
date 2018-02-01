var str = 5;
var agi = 5;
var int = 5;
var stat = null;

$(document).ready(function(){
    statsRotate();
    powerCal();
});
$('.greenOut').on('mouseover', function(){
    $('#int').html('<span class="statNo">'+ int +'</span>');
});

function powerCal(){
    var pwr = str * agi * int;
    $(".powerCont .pwr").text(pwr);
}
function statsRotate(){ 
    $(".circleStay").css('transform', 'rotate(-45deg)');
}
$(".strBtn").on("click", function(){   
    if(str < 20){
        str++;
        statsUpdateAgi(str);
    }
});
$(".agiBtn").on("click", function(){   
    if(agi < 20){
        agi++;
        statsUpdateAgi(agi);
    }
});
$(".intBtn").on("click", function(){   
    if(int < 20){
        int++;
        statsUpdateAgi(int);
    }
});

function statsUpdateAgi(stat){
    if (stat == agi){
        if(agi > 5 && agi < 20.1){
            var degAgi = (agi - 5) * 18; 
            $(".blueIn").css('transform', 'rotate('+ degAgi +'deg)');
        
            if(degAgi > 89.9){
            $(".blueOut").css('border-right', '20px solid #2828eb');
            }
            if(degAgi > 179.9){
            $(".blueOut").css('border-bottom', '20px solid #2828eb');
            }
        }
    }
    else if (stat == str){
        if(str > 5 && str < 20.1){
            var degStr = (str - 5) * 18; 
            $(".redIn").css('transform', 'rotate('+ degStr +'deg)');
            
            if(degStr > 89.9){
            $(".redOut").css('border-right', '20px solid #f73232');
            }
            if(degStr > 179.9){
            $(".redOut").css('border-bottom', '20px solid #f73232');
            }
        }
    }
    else if (stat == int){
        if(int > 5 && int < 20.1){
            var degInt = (int - 5) * 18; 
            $(".greenIn").css('transform', 'rotate('+ degInt +'deg)');
    
            if(degInt > 89.9){
            $(".greenOut").css('border-right', '20px solid #35eb35');
            }
            if(degInt > 179.9){
            $(".greenOut").css('border-bottom', '20px solid #35eb35');
            }
        }
    }
    powerCal();
}