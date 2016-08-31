/**
 * Created by ThangTheMan on 8/29/16.
 */
$(document).ready(function () {
    var id="", title = "", date = "", dateid="", time = "", description = "", genre = "", runtime = "", trailer = "", poster = "", featured="", order = "";


//Grid 4 Featured
    var zeeMundoMoviesPoster = "";
    var zeeMundoMoviesPosterContainer = "";
    for (i=0; i < movie.length; i++) {
        title = movie[i].title;
        date = movie[i].date;
        dateid = movie[i].dateid;
        time = movie[i].time;
        description = movie[i].description;
        genre = movie[i].genre;
        runtime = movie[i].runtime;
        trailer = movie[i].trailer;
        poster = movie[i].poster;
        featured = movie[i].featured;
        order = movie[i].order;
        id = poster.substring(30, poster.length -4);
        if (featured == 1) {

            zeeMundoMoviesPoster = '<div class="col-md-6 col-sm-12"><a class="HoverGrid" data-toggle="modal" data-target=".'+id+'movie" data-theVideo="'+trailer+'" href="#"><div class="row gridInfo moviePosters" ><div class="col-sm-4 col-md-6 col-xs-12" style="padding: 0; margin: 0;"><img style="width: 100%" src="'+poster+'" alt=""></div> <div class="col-sm-8 col-md-6 col-xs-12 infoPad" style="padding: 0;padding-left: 15px;padding-right: 15px;"><h3 class="movieModalTitle">'+title+'</h3> <div class="movieModalInfo"> <p class="alignleft" style="margin-bottom: 5px">'+genre+'</p> <p style="margin-bottom: 5px">Running Time: '+runtime+'</p> </div> <div class="moviedetails"> <p style="margin-bottom: 5px;line-height: 17px;">'+description+'</p>  </div> </div> </div></a> </div>';
            //Keep on adding info
            zeeMundoMoviesPosterContainer += zeeMundoMoviesPoster;
            var zeeMundoMoviesPosterDiv = document.getElementById('zeeMundoMoviesPosterContainer');
            zeeMundoMoviesPosterDiv.innerHTML = zeeMundoMoviesPosterContainer;

        }

    }
//        Grid 4 Featured End



//Table Modal
    var zeeMundoMoviesPosterTableModal = "";
    var zeeMundoMoviesPosterTableModalContainer = "";

    for (i=0; i < movie.length; i++) {
        title = movie[i].title;
        date = movie[i].date;
        dateid = movie[i].dateid;
        time = movie[i].time;
        description = movie[i].description;
        genre = movie[i].genre;
        runtime = movie[i].runtime;
        trailer = movie[i].trailer;
        poster = movie[i].poster;
        featured = movie[i].featured;
        order = movie[i].order;
        if (poster == "TBD") {
            id = title
        }
        else {
            id = poster.substring(30, poster.length - 4);
        }

        zeeMundoMoviesPosterTableModal = '<div class="modal fade '+id + 'table ' + ' text-center col-sm-6" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"> <a type="button" class="closePos" data-dismiss="modal" aria-label="Close">X</a><div class="row rowModal"> <div class="col-sm-5"><img class="moviePoster img-responsive" style="margin: auto;margin-bottom: 25px;" src="' + poster + '" alt=""></div><div class="col-sm-7 modalInfo"><h3 class="movieModalTitle">' + title + '</h3><div class="movieModalInfo" ><p class="alignleft">' + genre + '</p> <p><b>Running Time:</b> ' + runtime + ' <br></p></div> <div class="moviedetails"> <p>' + description + '</p> </div> </div> </div> </div> </div></div>';
        //Keep on adding info
        zeeMundoMoviesPosterTableModalContainer += zeeMundoMoviesPosterTableModal;
        var zeeMundoMoviesPosterTableModalDiv = document.getElementById('zeeMundoMoviesPosterTableModalContainer');
        zeeMundoMoviesPosterTableModalDiv.innerHTML = zeeMundoMoviesPosterTableModalContainer;

    }
//Table Modal End

// Movies Modal
    var zeeMundoMoviesPosterModal = "";
    var zeeMundoMoviesPosterModalContainer = "";

    for (i=0; i < movie.length; i++) {
        title = movie[i].title;
        date = movie[i].date;
        dateid = movie[i].dateid;
        time = movie[i].time;
        description = movie[i].description;
        genre = movie[i].genre;
        runtime = movie[i].runtime;
        trailer = movie[i].trailer;
        poster = movie[i].poster;
        featured = movie[i].featured;
        order = movie[i].order;
        if (poster == "TBD") {
            id = title
        }
        else {
            id = poster.substring(30, poster.length - 4);
        }

        zeeMundoMoviesPosterModal = '<div class="modal fade '+id+'movie ' + ' col-sm-6" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"> <a type="button" class="closePos" data-dismiss="modal" aria-label="Close">X</a><div class="row rowModal"><h3 class="movieModalTitle" style="padding-left: 15px">'+title+'</h3><iframe style="width: 100%;min-height: 350px" src="" frameborder="0"></iframe> </div></div></div></div>';
        //Keep on adding info
        zeeMundoMoviesPosterModalContainer += zeeMundoMoviesPosterModal;
        var zeeMundoMoviesPosterModalContainerDiv = document.getElementById('zeeMundoMoviesPosterModalContainer');
        zeeMundoMoviesPosterModalContainerDiv.innerHTML = zeeMundoMoviesPosterModalContainer;

        //    autoplay Youtube Video Modal

        //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
//    autoplay Youtube Video Modal End
        autoPlayYouTubeModal();

        //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
        function autoPlayYouTubeModal() {
            var trigger = $("body").find('[data-toggle="modal"]');
            trigger.click(function () {
                var theModal = $(this).data("target"),
                    videoSRC = $(this).attr("data-theVideo"),
                    videoSRCauto = videoSRC + "&autoplay=1";
                $(theModal + ' iframe').attr('src', videoSRCauto);
                $(theModal + ' button.close').click(function () {
                    $(theModal + ' iframe').attr('src', videoSRC);
                });
                $('.modal').click(function () {
                    $(theModal + ' iframe').attr('src', videoSRC);
                });
            });
        }
    }
//Movies Modal End

// $(function(){
//     $('#LA_CARRERA_2movie').on('show.bs.modal', function(){
//         var myModal = $(this);
//         clearTimeout(myModal.data('hideInterval'));
//         myModal.data('hideInterval', setTimeout(function(){
//             myModal.modal('hide');
//         }, 100));
//     });
// });


//Movies table
    var date, month, dayNo,dayName,dayGenre, time1,time1slot,time1slotid, time2, time2slot,time2slotid, time3, time3slot,time3slotid, time4, time4slot,time4slotid, time5, time5slot,time5slotid, time6, time6slot,time6slotid, time7, time7slot,time7slotid, time8, time8slot,time8slotid, time9, time9slot,time9slotid, time10, time10slot,time10slotid, time11, time11slot,time11slotid, time12, time12slot,time12slotid ;




    var zeeMundoMoviesPostertable = "";
    var zeeMundoMoviesPosterTableContainer = "";

    for (i=0; i < zeeSchedule.length; i++) {


        date = zeeSchedule[i].date;
        month = date.substring(0, 4);
        dayNo = date.substring(3, 6);


        //Get Day
        // var dayGenre = new Array(7);
        // dayGenre[0] = "PELICULAS";
        // dayGenre[1] = "ACCION";
        // dayGenre[2] = "PELICULAS";
        // dayGenre[3] = "ROMANCE";
        // dayGenre[4] = "PELICULAS";
        // dayGenre[5] = "PELICULA DEL MES <br> y DE LA SEMANA";
        // dayGenre[6] = "FAMILIA";
        // var dayForWindow = new Date(date).toString("M/d/yyyy");
        // dayWeek = new Date(date);
        // function weekday(datablering) {
        //     return ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'][new Date(datablering).getDay()];
        // }
        // dayWeekName = weekday(dayForWindow);
        // dayWeekGenre = dayGenre[dayWeek.getDay()];




        dayName = zeeSchedule[i].dayName;
        dayGenre = zeeSchedule[i].dayGenre;
        time1 = zeeSchedule[i].time1[0];
        time1slot = zeeSchedule[i].time1[1];
        time1slotid = zeeSchedule[i].time1[2];
        time2 = zeeSchedule[i].time2[0];
        time2slot = zeeSchedule[i].time2[1];
        time2slotid = zeeSchedule[i].time2[2];
        time3 = zeeSchedule[i].time3[0];
        time3slot = zeeSchedule[i].time3[1];
        time3slotid = zeeSchedule[i].time3[2];
        time4 = zeeSchedule[i].time4[0];
        time4slot = zeeSchedule[i].time4[1];
        time4slotid = zeeSchedule[i].time4[2];
        time5 = zeeSchedule[i].time5[0];
        time5slot = zeeSchedule[i].time5[1];
        time5slotid = zeeSchedule[i].time5[2];
        time6 = zeeSchedule[i].time6[0];
        time6slot = zeeSchedule[i].time6[1];
        time6slotid = zeeSchedule[i].time6[2];
        time7 = zeeSchedule[i].time7[0];
        time7slot = zeeSchedule[i].time7[1];
        time7slotid = zeeSchedule[i].time7[2];
        time8 = zeeSchedule[i].time8[0];
        time8slot = zeeSchedule[i].time8[1];
        time8slotid = zeeSchedule[i].time8[2];
        time9 = zeeSchedule[i].time9[0];
        time9slot = zeeSchedule[i].time9[1];
        time9slotid = zeeSchedule[i].time9[2];
        time10 = zeeSchedule[i].time10[0];
        time10slot = zeeSchedule[i].time10[1];
        time10slotid = zeeSchedule[i].time10[2];
        time11 = zeeSchedule[i].time11[0];
        time11slot = zeeSchedule[i].time11[1];
        time11slotid = zeeSchedule[i].time11[2];
        time12 = zeeSchedule[i].time12[0];
        time12slot = zeeSchedule[i].time12[1];
        time12slotid = zeeSchedule[i].time12[2];




        zeeMundoMoviesPostertable = '<tr><td><p style="font-size: 50px;color: #8a8a8a;margin-left: -50px;margin-top: -16px;"><b>'+dayNo+'</b></p><span style="font-size: 17px;position: absolute;top: 6px;right: 20px;color: #8a8a8a;font-weight: 700;text-align: left"><b>'+month+'</b><br>'+dayName+'</span><p style="font-size: 11px;color: #8a8a8a;font-weight: 700;font-family:museo-sans;width: 122px;margin-top: -15px;">'+dayGenre+'</p></td> <td colspan="'+time1slot+'"><a data-toggle="modal"  href=".'+time1slotid+'table"><span>'+time1+'</span></a></td> <td colspan="'+time2slot+'"><a data-toggle="modal"  href=".'+time2slotid+'table"><span>'+time2+'</span></a></td> <td colspan="'+time3slot+'"><a data-toggle="modal"  href=".'+time3slotid+'table"><span>'+time3+'</span></a></td> <td colspan="'+time4slot+'"><a data-toggle="modal"  href=".'+time4slotid+'table"><span>'+time4+'</span></a></td> <td colspan="'+time5slot+'"><a data-toggle="modal"  href=".'+time5slotid+'table"><span>'+time5+'</span></a></td> <td colspan="'+time6slot+'"><a data-toggle="modal"  href=".'+time6slotid+'table"><span>'+time6+'</span></a></td> <td colspan="'+time7slot+'"><a data-toggle="modal"  href=".'+time7slotid+'table"><span>'+time7+'</span></a></td> <td colspan="'+time8slot+'"><a data-toggle="modal"  href=".'+time8slotid+'table"><span>'+time8+'</span></a></td> <td colspan="'+time9slot+'"><a data-toggle="modal"  href=".'+time9slotid+'table"><span>'+time9+'</span></a></td> <td colspan="'+time10slot+'"><a data-toggle="modal"  href=".'+time10slotid+'table"><span>'+time10+'</span></a></td> <td colspan="'+time11slot+'"><a data-toggle="modal"  href=".'+time11slotid+'table"><span>'+time11+'</span></a></td> <td colspan="'+time12slot+'"><a data-toggle="modal"  href=".'+time12slotid+'table"><span>'+time12+'</span></a></td> </tr>';

//Keep on adding info
        zeeMundoMoviesPosterTableContainer += zeeMundoMoviesPostertable;
        var zeeMundoMoviesPosterTableContainerDiv = document.getElementById('zeeMundoMoviesPosterTableContainer');
        zeeMundoMoviesPosterTableContainerDiv.innerHTML = zeeMundoMoviesPosterTableContainer;
    }
//Movies table End
});
