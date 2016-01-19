/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document, undefined) {


    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {

            // Place your code here.




            $(document).ready(function() {

                $(".not-logged-in").addClass("animated fadeIn");
                //$("#country-taiwan").html('<a class="language-link active" xml:lang="zh-hant" href="/zh-hant">繁體中文</a>');
                //$("#country-japan").html('<a class="language-link" xml:lang="ja" href="/jp">日本語</a>');

                // $(".menu-block-1 ul li:nth-last-child(2)").html('<a class="language-link active" xml:lang="zh-hant" href="/zh-hant">繁體中文/Traditional</a>');
                // $(".menu-block-1 ul li:nth-last-child(1)").html('<a class="language-link" xml:lang="ja" href="/jp">日本語/Japanese</a>');


                $(".menu-block-1 ul li:nth-last-child(2)").html($(".zh-hant").html());
                $(".menu-block-1 ul li:nth-last-child(1)").html($(".ja").html());

                $(".view-products .views-row ,.view-lastest-news .views-row").addClass("animated fadeIn");

                $(window).unload(function() {
                    $(".view-products .views-row ,.view-lastest-news .views-row").addClass("animated fadeOut");
                });
            });




            $('#edit-submitted-time').timepicker({
                'step': 15
            });
            $('#edit-submitted-time').timepicker({
                'step': function(i) {
                    return (i % 4) ? 15 : 15;
                }
            });
            //$('#edit-submitted-time').attr("readonly","readonly")




            //for sldeshow code

            jQuery('.pictures-demo').slippry({
                // general elements & wrapper
                slippryWrapper: '<div class="sy-box pictures-slider" />', // wrapper to wrap everything, including pager

                // options
                adaptiveHeight: false, // height of the sliders adapts to current slide
                captions: false, // Position: overlay, below, custom, false

                // pager
                pager: false,

                // controls
                controls: false,
                autoHover: false,

                // transitions
                transition: 'kenburns', // fade, horizontal, kenburns, false
                kenZoom: 140,
                speed: 2000 // time the transition takes (ms)
            });





            var wrapperclass = "#block-views-template-slideshow-block";
            var itemclass = ".views-row";

            $(wrapperclass + " " + itemclass).css({
                'height': $(window).height()
            });
            $("#block-views-template-slideshow-block .views-row img").css("opacity", "0");
            //$(wrapperclass + " " + "img").css("margin", "-500px");
            $(wrapperclass + " " + itemclass).css({
                "background-attachment": "fixed",
                "background-size": "cover",
                "backgroundPosition": "center",
            });

            //var n = $(wrapperclass + " " + itemclass).length;
            /*

                        for (i = 0; i < n; i++) {
                            //var v(i) = $("#block-views-template-slideshow-block .views-row-1 img").attr("src");
                            var v(i) = $(wrapperclass + " " + itemclass+":eq(i)"+" "+"img").attr("src");
                            $(wrapperclass + " " + itemclass+":eq(i)").css({
                                'background-image': 'url(' + v(i) + ')',
                            });


                        }*/


            var items = jQuery('.pictures-demo>li');
            for (var i = 0; i < items.length; ++i) {
                $(items[i]).css('background-image', 'url(' + $(items[i]).find('img').attr('src') + ')');
            }

            /* var v1 = $("#block-views-template-slideshow-block .views-row-1 img").attr("src");
            $("#block-views-template-slideshow-block .views-row-1").css({
                'background-image': 'url(' + v1 + ')',
            });

            var v2 = $("#block-views-template-slideshow-block .views-row-2 img").attr("src");
            $("#block-views-template-slideshow-block .views-row-2").css({
                'background-image': 'url(' + v2 + ')',
            });

            var v3 = $("#block-views-template-slideshow-block .views-row-3 img").attr("src");
            $("#block-views-template-slideshow-block .views-row-3").css({
                'background-image': 'url(' + v3 + ')',
            });

            var v4 = $("#block-views-template-slideshow-block .views-row-4 img").attr("src");
            $("#block-views-template-slideshow-block .views-row-4").css({
                'background-image': 'url(' + v4 + ')',
            });


*/


            //for 視差
            var vb = $("#block-imageblock-2 img").attr("src");
            $('#block-imageblock-2').parallax({
                imageSrc: vb
            });
            $("#block-imageblock-2 img").css("opacity", "0");




        }
    };







})(jQuery, Drupal, this, this.document);
