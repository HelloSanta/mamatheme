(function($) {
    Drupal.color = {
        logoChanged: false,
        callback: function(context, settings, form, farb, height, width) {
            // Change the logo to be the real one.
            if (!this.logoChanged) {
                $('#preview #preview-logo img').attr('src', Drupal.settings.color.logo);
                this.logoChanged = true;
            }
            // Remove the logo if the setting is toggled off. 
            if (Drupal.settings.color.logo == null) {
                $('div').remove('#preview-logo');
            }


            //background

            // body background.
            $('#preview-body').css('backgroundColor', $('#palette input[name="palette[BodyBg]"]', form).val());

            //page  background
            $('#preview-page').css('backgroundColor', $('#palette input[name="palette[PageBg]"]', form).val());

            //header background
            $('#preview-header').css('backgroundColor', $('#palette input[name="palette[HeaderBg]"]', form).val());

            //content background
            $('#preview-content').css('backgroundColor', $('#palette input[name="palette[ContentBg]"]', form).val());



            //color

            //h1 color
            $('h1,h1 a').css('color', $('#palette input[name="palette[H1Font]"]', form).val());

            //h2 color
            $('h2,h2 a').css('color', $('#palette input[name="palette[H2Font]"]', form).val());

            //menu link
            $('#menu li a').css('color', $('#palette input[name="palette[MenuLink]"]', form).val());

            //contnet font
            $('.body p').css('color', $('#palette input[name="palette[ContentFont]"]', form).val());

            //content link
            $('.more a').css('color', $('#palette input[name="palette[ContentLink]"]', form).val());

            //footer font
            $('.banner-footer p').css('color', $('#palette input[name="palette[FooterFont]"]', form).val());

            //footer link
            $('.banner-footer a,#footer-block a').css('color', $('#palette input[name="palette[FooterLink]"]', form).val());




            //hover

            //menu link hover
            $('#menu  a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[MenuHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[MenuLink]"]', form).val());
                }
            );


            //content link hover
            $('.more a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[ContentHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[ContentLink]"]', form).val());
                }
            );

            //footer link hover
            $('.banner-footer a,#footer-block a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[FooterHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[FooterLink]"]', form).val());
                }
            );

        }
    };
})(jQuery);
