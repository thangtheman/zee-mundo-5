
//Table Show/Hide This Button

$(document).ready(function () {

    // $("#playClicked").hide();

    $('.trigger').click(function() {
        $('.showHideTable').toggle();
    });
    if (screen.width > 767) {
        setTimeout(function(){
            $(".slick-dots").css("left",($(".slick-slide .col-sm-5").width()/2) - ($(".slick-dots").width()/2)+ "px");
        },50);      }
    else {
    }



    var vod=1;
    $(".closevideo").fadeIn();

    $(".centered-content").click(function() {
        if(vod==0) {
            $("#playClicked").show();
            player.playVideo();
       }
        $(".closevideo").fadeIn();
        $("#playClicked").show();
        player.playVideo();
        vod=1;
        console.log('vod = 1')
    });
    $(".playButtonHP").click(function() {
        if(vod==0) {
            $("#playClicked").show();
            player.playVideo();
       }
        $(".closevideo").fadeIn();
        $("#playClicked").show();
        player.playVideo();
        vod=1;
        console.log('vod = 1')
    });

    $(".closevideo").click(function() {
        if(vod==1) {
            $("#playClicked").hide();
            player.stopVideo();
        }
        $(".closevideo").fadeOut();
        vod=0;
        console.log('vod = 0')

    });




    //Time Zone
    $('#timeZone').on('change', function() {
            if ( this.value == '0')
            {
                $("#pacificT").show();
                $("#mountainT").hide();
                $("#centralT").hide();
                $("#easterT").hide();

            }
            if ( this.value == '2')
            {
                $("#centralT").show();
                $("#pacificT").hide();
                $("#mountainT").hide();
                $("#easterT").hide();
            } if ( this.value == '3')
            {
                $("#easterT").show();
                $("#pacificT").hide();
                $("#centralT").hide();
                $("#mountainT").hide();
            }
            if ( this.value == '1')
            {
                $("#mountainT").show();
                $("#pacificT").hide();
                $("#centralT").hide();
                $("#easterT").hide();
            }
        });
    //Time Zone EnD

});


