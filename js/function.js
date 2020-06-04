window.onload = function() {

    /* MOBILE MENU */

    var menu_icon = $('nav.mobile-menu');
    var menu_ul = $('nav.mobile-menu ul');

    function abrirMenuM() {
        menu_icon.click(function() {
            $(this).find('ul').slideToggle();
        })

        $('.mobile-menu ul').click(function(e) {
            e.stopPropagation();
        })
    };

    abrirMenuM();

    /* MOBILE MENU END */

    /* GOOGLE MAPS */

    var map;

    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(-27.648598, -48.577423),
            scrollWhell: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);

    }

    function addMarker(lat, lng, icon, content, click) {
        var latLng = { 'lat': lat, 'lng': lng };

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0, 20)
        });

        if (click == true) {
            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.open(map, marker);
            });
        } else if (click == false) {
            infoWindow.open(map, marker);
        }

    }

    initialize();

    var conteudo = '<p style="color: black;">Meu endereço</p>'
    addMarker(-27.616637, -48.5923228, '', conteudo, true);

    /* GOOGLE MAPS END */
}