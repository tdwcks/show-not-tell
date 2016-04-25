 $( document ).ready(function() {
          fly();
      });

      mapboxgl.accessToken = 'pk.eyJ1IjoidGR3Y2tzIiwiYSI6IlhwMGlGR28ifQ.irq5Rbn1WvGb_VIwn1auNA';
        var start = [-0.1477, 51.5797];
        var end = [-0.1337, 51.5797];
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/tdwcks/cina5gtzn00jhcxnhutml4up4',
            // style: 'mapbox://styles/mapbox/streets-v8',
            attributionControl: false,
            center: start,
            zoom: 16,
            interactive: false,
            "layers": [ 
            {
              "geojson-marker": {
                'id': 'museums',
                'type': 'circle',
                'source': 'museums',
                'layout': {
                    'visibility': 'visible'
                },
                'paint': {
                    'circle-radius': 8,
                    'circle-color': 'rgba(55,148,179,1)'
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [-0.1537, 51.5797]
                }
              }
            }
          ]
        });

        var isAtStart = true;

        function fly() {
            var target = isAtStart ? end : start;
            isAtStart = !isAtStart;
            map.flyTo({
                center: target,
                zoom: 16,
                bearing: 0,
                speed: 0.01, 
                easing: function (t) {
                    return t;
                }
            });
        }