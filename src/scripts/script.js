import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// $ should be locally scoped

(function($) {

    /*
    var url = 'https://www.csa.cz/Umbraco/Api/DestinationCache/GetAllDestinations/?destinations_language=en';

    $.ajax({
        url: url,
        dataType: 'jsonp',
        succes: function( data ) {
            console.log( data );
        }
    });
    */

    // Destinace bych obdrzel pomoci ajaxu (viz kod nahore)
    // jenze se mi nepodarilo zjistit jak stahovat  data z cizich domen,
    // takze musim takhle cheatovat :)
    // Uvedomuji si, ze je to nepouzitelne pro realnou stranku,
    // protoze se dostupny letiste muzou menit atd...
    var destination = [ { "DestinationID": 5679417, "AirportCode": "LEI", "AirportCityName": "Almeria", "AirportName": "Almeria", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679400, "AirportCode": "AMS", "AirportCityName": "Amsterdam", "AirportName": "Schiphol", "AirportCountryCode": "NL", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679427, "AirportCode": "AYT", "AirportCityName": "Antalya", "AirportName": "Antalya", "AirportCountryCode": "TR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679423, "AirportCode": "BCN", "AirportCityName": "Barcelona", "AirportName": "Aeropuerto del Prat", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679390, "AirportCode": "BRI", "AirportCityName": "Bari", "AirportName": "Palese", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679354, "AirportCode": "PEK", "AirportCityName": "Beijing", "AirportName": "Capital Intl", "AirportCountryCode": "CN", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679397, "AirportCode": "BEY", "AirportCityName": "Beirut", "AirportName": "Rafic Hariri Intl", "AirportCountryCode": "LB", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679424, "AirportCode": "BIO", "AirportCityName": "Bilbao", "AirportName": "Bilbao Airport", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679431, "AirportCode": "BHX", "AirportCityName": "Birmingham", "AirportName": "Birmingham", "AirportCountryCode": "GB", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679395, "AirportCode": "BLQ", "AirportCityName": "Bologna", "AirportName": "Guglielmo Marconi", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679434, "AirportCode": "BOS", "AirportCityName": "Boston", "AirportName": "Logan International", "AirportCountryCode": "US", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679351, "AirportCode": "BOJ", "AirportCityName": "Bourgas", "AirportName": "Sarafovo Airport", "AirportCountryCode": "BG", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679386, "AirportCode": "BDS", "AirportCityName": "Brindisi", "AirportName": "Casale", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679350, "AirportCode": "BRU", "AirportCityName": "Brussels", "AirportName": "National", "AirportCountryCode": "BE", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679404, "AirportCode": "OTP", "AirportCityName": "Bucharest", "AirportName": "Otopeni/Henri Coanda", "AirportCountryCode": "RO", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679381, "AirportCode": "BUD", "AirportCityName": "Budapest", "AirportName": "Liszt Ferenc Intl.", "AirportCountryCode": "HU", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679384, "AirportCode": "CAG", "AirportCityName": "Cagliari", "AirportName": "Elmas", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679391, "AirportCode": "CTA", "AirportCityName": "Catania", "AirportName": "Fontanarossa Airport", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679380, "AirportCode": "CHQ", "AirportCityName": "Chania", "AirportName": "International Airport", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679360, "AirportCode": "CPH", "AirportCityName": "Copenhagen", "AirportName": "Kastrup", "AirportCountryCode": "DK", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679370, "AirportCode": "CFU", "AirportCityName": "Corfu", "AirportName": "Corfu International Airport", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679430, "AirportCode": "DXB", "AirportCityName": "Dubai", "AirportName": "International", "AirportCountryCode": "AE", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679356, "AirportCode": "DBV", "AirportCityName": "Dubrovnik", "AirportName": "Dubrovnik Airport", "AirportCountryCode": "HR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679366, "AirportCode": "DUS", "AirportCityName": "Düsseldorf", "AirportName": "Düsseldorf Intl. ", "AirportCountryCode": "DE", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679402, "AirportCode": "FAO", "AirportCityName": "Faro", "AirportName": "Faro Airport", "AirportCountryCode": "PT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679367, "AirportCode": "FRA", "AirportCityName": "Frankfurt", "AirportName": "International", "AirportCountryCode": "DE", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679419, "AirportCode": "FUE", "AirportCityName": "Fuerteventura", "AirportName": "Fuerteventura", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679403, "AirportCode": "FNC", "AirportCityName": "Funchal", "AirportName": "Madeira", "AirportCountryCode": "PT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679425, "AirportCode": "GOT", "AirportCityName": "Gothenburg", "AirportName": "Landvetter", "AirportCountryCode": "SE", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679369, "AirportCode": "HAM", "AirportCityName": "Hamburg", "AirportName": "Fuhlsbuettel", "AirportCountryCode": "DE", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679436, "AirportCode": "HAN", "AirportCityName": "Hanoi", "AirportName": "Noibai", "AirportCountryCode": "VN", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679363, "AirportCode": "HEL", "AirportCityName": "Helsinki", "AirportName": "Helsinki-Vantaa", "AirportCountryCode": "FI", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679373, "AirportCode": "HER", "AirportCityName": "Heraklion", "AirportName": "Nikos Kazantzakis", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679435, "AirportCode": "SGN", "AirportCityName": "Ho Chi Minh City", "AirportName": "Tan Son Nhat", "AirportCountryCode": "VN", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679361, "AirportCode": "HRG", "AirportCityName": "Hurghada", "AirportName": "International", "AirportCountryCode": "EG", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679378, "AirportCode": "AOK", "AirportCityName": "Karpathos", "AirportName": "Karpathos", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679406, "AirportCode": "KZN", "AirportCityName": "Kazan", "AirportName": "International", "AirportCountryCode": "RU", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679375, "AirportCode": "EFL", "AirportCityName": "Kefalonia", "AirportName": "Argostolion", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679429, "AirportCode": "KBP", "AirportCityName": "Kiev", "AirportName": "Borispol", "AirportCountryCode": "UA", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679379, "AirportCode": "KGS", "AirportCityName": "Kos", "AirportName": "International Airport", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679411, "AirportCode": "KSC", "AirportCityName": "Košice", "AirportName": "Barca", "AirportCountryCode": "SK", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679387, "AirportCode": "SUF", "AirportCityName": "Lamezia Terme", "AirportName": "S Eufemia", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679422, "AirportCode": "ACE", "AirportCityName": "Lanzarote", "AirportName": "Lanzarote", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679358, "AirportCode": "LCA", "AirportCityName": "Larnaca", "AirportName": "Larnaca", "AirportCountryCode": "CY", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679415, "AirportCode": "LPA", "AirportCityName": "Las Palmas", "AirportName": "Arpt De Gran Canaria", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679432, "AirportCode": "LGW", "AirportCityName": "London", "AirportName": "Gatwick", "AirportCountryCode": "GB", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679413, "AirportCode": "MAD", "AirportCityName": "Madrid", "AirportName": "Adolfo Suarez-Barajas", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679414, "AirportCode": "AGP", "AirportCityName": "Málaga", "AirportName": "Costa del Sol Airport", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679398, "AirportCode": "MLA", "AirportCityName": "Malta", "AirportName": "Luqa International", "AirportCountryCode": "MT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679362, "AirportCode": "RMF", "AirportCityName": "Marsa Alam", "AirportName": "International", "AirportCountryCode": "EG", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679416, "AirportCode": "MAH", "AirportCityName": "Menorca", "AirportName": "Menorca", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679399, "AirportCode": "MEX", "AirportCityName": "Mexico City", "AirportName": "Juarez International", "AirportCountryCode": "MX", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679394, "AirportCode": "MXP", "AirportCityName": "Milan", "AirportName": "Malpensa", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679349, "AirportCode": "MSQ", "AirportCityName": "Minsk", "AirportName": "Minsk International 2", "AirportCountryCode": "BY", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679407, "AirportCode": "SVO", "AirportCityName": "Moscow", "AirportName": "Sheremetyevo", "AirportCountryCode": "RU", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679388, "AirportCode": "NAP", "AirportCityName": "Naples", "AirportName": "Capodichino", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679433, "AirportCode": "JFK", "AirportCityName": "New York", "AirportName": "John F. Kennedy Intl", "AirportCountryCode": "US", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679365, "AirportCode": "NCE", "AirportCityName": "Nice", "AirportName": "Cote D`Azur", "AirportCountryCode": "FR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679428, "AirportCode": "ODS", "AirportCityName": "Odesa", "AirportName": "International", "AirportCountryCode": "UA", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679389, "AirportCode": "OLB", "AirportCityName": "Olbia", "AirportName": "Costa Smeralda", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679392, "AirportCode": "PMO", "AirportCityName": "Palermo", "AirportName": "Punta Raisi", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679418, "AirportCode": "PMI", "AirportCityName": "Palma Mallorca", "AirportName": "Palma Mallorca", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679364, "AirportCode": "CDG", "AirportCityName": "Paris", "AirportName": "Charles De Gaulle", "AirportCountryCode": "FR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679359, "AirportCode": "PRG", "AirportCityName": "Prague", "AirportName": "Ruzyne", "AirportCountryCode": "CZ", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679371, "AirportCode": "PVK", "AirportCityName": "Preveza", "AirportName": "Aktion", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679382, "AirportCode": "KEF", "AirportCityName": "Reykjavik", "AirportName": "Keflavik Intl", "AirportCountryCode": "IS", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679374, "AirportCode": "RHO", "AirportCityName": "Rhodes", "AirportName": "International Airport", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679396, "AirportCode": "RIX", "AirportCityName": "Riga", "AirportName": "International", "AirportCountryCode": "LV", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679393, "AirportCode": "FCO", "AirportCityName": "Rome", "AirportName": "Fiumicino", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679410, "AirportCode": "ROV", "AirportCityName": "Rostov on Don", "AirportName": "Platov", "AirportCountryCode": "RU", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679409, "AirportCode": "KUF", "AirportCityName": "Samara", "AirportName": "Kurumoch", "AirportCountryCode": "RU", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679372, "AirportCode": "SMI", "AirportCityName": "Samos", "AirportName": "Aristarchos of Samos", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679412, "AirportCode": "ICN", "AirportCityName": "Seoul", "AirportName": "Incheon Intl", "AirportCountryCode": "KR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679352, "AirportCode": "SOF", "AirportCityName": "Sofia", "AirportName": "Airport Vrazhdebna", "AirportCountryCode": "BG", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679355, "AirportCode": "SPU", "AirportCityName": "Split", "AirportName": "Split", "AirportCountryCode": "HR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679408, "AirportCode": "LED", "AirportCityName": "St. Petersburg", "AirportName": "Pulkovo", "AirportCountryCode": "RU", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679426, "AirportCode": "ARN", "AirportCityName": "Stockholm", "AirportName": "Arlanda", "AirportCountryCode": "SE", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679368, "AirportCode": "STR", "AirportCityName": "Stuttgart", "AirportName": "Stuttgart Airport", "AirportCountryCode": "DE", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679383, "AirportCode": "TLV", "AirportCityName": "Tel Aviv", "AirportName": "Ben Gurion Intl", "AirportCountryCode": "IL", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679420, "AirportCode": "TFS", "AirportCityName": "Tenerife", "AirportName": "Tenerife South Airport", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679376, "AirportCode": "SKG", "AirportCityName": "Thessaloniki", "AirportName": "Makedonia Apt.", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679348, "AirportCode": "TIA", "AirportCityName": "Tirana", "AirportName": "Nene Tereza Intl", "AirportCountryCode": "AL", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679421, "AirportCode": "VLC", "AirportCityName": "Valencia", "AirportName": "Valencia Airport", "AirportCountryCode": "ES", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679353, "AirportCode": "VAR", "AirportCityName": "Varna", "AirportName": "Varna", "AirportCountryCode": "BG", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679385, "AirportCode": "VCE", "AirportCityName": "Venice", "AirportName": "Marco Polo", "AirportCountryCode": "IT", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679401, "AirportCode": "WAW", "AirportCityName": "Warsaw", "AirportName": "Okecie", "AirportCountryCode": "PL", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679405, "AirportCode": "SVX", "AirportCityName": "Yekaterinburg", "AirportName": "Koltsovo", "AirportCountryCode": "RU", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679357, "AirportCode": "ZAG", "AirportCityName": "Zagreb", "AirportName": "Pleso", "AirportCountryCode": "HR", "LanguageCode": "en", "OfferCount": 0 }, { "DestinationID": 5679377, "AirportCode": "ZTH", "AirportCityName": "Zakynthos", "AirportName": "International Airport", "AirportCountryCode": "GR", "LanguageCode": "en", "OfferCount": 0 } ];

    //
    // Hide on load
    //

    $("#switch, .container__date, .container__table").hide();

    //
    // Display compoments after input
    //

    $("#from, #to").on("change", function() {
        if($("#from").val() !== null && $("#to").val() !== null) {
            $("#switch, .container__date").show();
        }
    });

    $("#date").on("change", function() {
        $(".container__table").show();
    });

    //
    // Load options, assign each option their corresponding ID
    //      
    
    for (var item in destination) {
        var val = destination[item].DestinationID,
            string = destination[item].AirportCityName + ", " + destination[item].AirportName + ", " + destination[item].AirportCountryCode 
            + ", (" + destination[item].AirportCode + ")";
        
        $('<option/>', {
            value: val,
            text: string
        }).appendTo("#from");

        $('<option/>', {
            value: val,
            text: string
        }).appendTo("#to");
    }


    //
    // Swap destinations
    //

    var $from = $("#from"),
        $to = $("#to"),
        $switch = $("#switch");

    $switch.on('click', function() {
        if ($from.val() !== null && $to.val() !== null ) {
            var x = $from.val(),
                y = $to.val();
            $to.val(x);
            $from.val(y);
        };
    });

    //
    // Create querystring
    //

    $("#from, #to, #date").on('change', function() {
        if ($("#from").val() !== null && $("#to").val() !== null && $("#date").val() !== "") {
            var departure = $("#from").val(),
                arrival = $("#to").val(),
                date = $("#date").val();
            var DEP,
                ARR,
                MONTH_SEL = date.slice(5,7) + '/' + date.slice(0,4),
                results;
            
            for (var item in destination) {
                if (destination[item].DestinationID == departure) {
                    DEP = destination[item].AirportCode;
                    break;
                }
            }
            for (var item in destination) {
                if (destination[item].DestinationID == arrival) {
                    ARR = destination[item].AirportCode;
                    break;
                }
            }            
           var querystring = 'https://www.csa.cz/Umbraco/Api/CalendarPricesCache/GetPrices/?DEP=' + DEP + '&ARR=' + ARR + '&MONTH_SEL=' + MONTH_SEL + '&SECTOR_ID=0&LANG=en&ID_LOCATION=cz';
           console.log(querystring);
           
           //
           // Stejne jako predtim. Nevim jak na to. Pouziju nejaka random data :)
           // Vybiram let z Prahy do Amsterdamu v srpnu 2019
           //

           /*$.ajax({
                url: querystring,
                dataType: 'jsonp',
                succes: function( data ) {
                    results = data; <--- Tady si nejsem jisty, nevim v jakym tvaru mi data prijdou. Mozna bych musel pouzit JSON.stringify nebo tak :)
                }
            });*/

            results = {"calendarPriceList":{"sid":"050018d95ff4bc157fd1375fcc026d55a4174,","sectorId":0,"depIata":"PRG","arrIata":"AMS","month":"08\/2019","saleLocation":"CZ","currency":"CZK","dayList":[{"date":"2019-08-01","status":"AVAILABLE","price":"1885","seats":"9","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-01 07:00:00","arrivalDateTime":"2019-08-01 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-02","status":"AVAILABLE","price":"1647","seats":"3","rbd":"W","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"3","rbd":"W","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-02 07:00:00","arrivalDateTime":"2019-08-02 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-03","status":"AVAILABLE","price":"1885","seats":"9","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-03 07:00:00","arrivalDateTime":"2019-08-03 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-04","status":"AVAILABLE","price":"1885","seats":"9","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-04 07:00:00","arrivalDateTime":"2019-08-04 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-05","status":"AVAILABLE","price":"1885","seats":"9","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-05 07:00:00","arrivalDateTime":"2019-08-05 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-06","status":"AVAILABLE","price":"1647","seats":"3","rbd":"W","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"3","rbd":"W","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-06 07:00:00","arrivalDateTime":"2019-08-06 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-07","status":"AVAILABLE","price":"1389","seats":"5","rbd":"R","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"5","rbd":"R","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-07 07:00:00","arrivalDateTime":"2019-08-07 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-08","status":"AVAILABLE","price":"2142","seats":"9","rbd":"N","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"N","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-08 07:00:00","arrivalDateTime":"2019-08-08 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-09","status":"AVAILABLE","price":"1885","seats":"4","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"4","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-09 07:00:00","arrivalDateTime":"2019-08-09 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-10","status":"AVAILABLE","price":"2405","seats":"9","rbd":"V","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"V","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-10 07:00:00","arrivalDateTime":"2019-08-10 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-11","status":"AVAILABLE","price":"2142","seats":"3","rbd":"N","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"3","rbd":"N","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-11 07:00:00","arrivalDateTime":"2019-08-11 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-12","status":"AVAILABLE","price":"2405","seats":"7","rbd":"V","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"7","rbd":"V","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-12 07:00:00","arrivalDateTime":"2019-08-12 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-13","status":"AVAILABLE","price":"1885","seats":"2","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"2","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-13 07:00:00","arrivalDateTime":"2019-08-13 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-14","status":"AVAILABLE","price":"1885","seats":"9","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-14 07:00:00","arrivalDateTime":"2019-08-14 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-15","status":"AVAILABLE","price":"1647","seats":"4","rbd":"W","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"4","rbd":"W","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-15 07:00:00","arrivalDateTime":"2019-08-15 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-16","status":"AVAILABLE","price":"2142","seats":"3","rbd":"N","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"3","rbd":"N","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-16 07:00:00","arrivalDateTime":"2019-08-16 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-17","status":"AVAILABLE","price":"2405","seats":"9","rbd":"V","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"V","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-17 07:00:00","arrivalDateTime":"2019-08-17 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-18","status":"AVAILABLE","price":"2405","seats":"9","rbd":"V","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"V","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-18 07:00:00","arrivalDateTime":"2019-08-18 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-19","status":"AVAILABLE","price":"2142","seats":"4","rbd":"N","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"4","rbd":"N","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-19 07:00:00","arrivalDateTime":"2019-08-19 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-20","status":"AVAILABLE","price":"1885","seats":"9","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-20 07:00:00","arrivalDateTime":"2019-08-20 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-21","status":"AVAILABLE","price":"2142","seats":"9","rbd":"N","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"N","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-21 07:00:00","arrivalDateTime":"2019-08-21 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-22","status":"AVAILABLE","price":"1885","seats":"2","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"2","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-22 07:00:00","arrivalDateTime":"2019-08-22 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-23","status":"AVAILABLE","price":"2142","seats":"9","rbd":"N","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"N","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-23 07:00:00","arrivalDateTime":"2019-08-23 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-24","status":"AVAILABLE","price":"2142","seats":"1","rbd":"N","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"1","rbd":"N","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-24 07:00:00","arrivalDateTime":"2019-08-24 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-25","status":"AVAILABLE","price":"2142","seats":"9","rbd":"N","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"N","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-25 07:00:00","arrivalDateTime":"2019-08-25 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-26","status":"AVAILABLE","price":"1885","seats":"9","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-26 07:00:00","arrivalDateTime":"2019-08-26 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-27","status":"AVAILABLE","price":"1647","seats":"4","rbd":"W","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"4","rbd":"W","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-27 07:00:00","arrivalDateTime":"2019-08-27 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-28","status":"AVAILABLE","price":"1885","seats":"8","rbd":"S","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"8","rbd":"S","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-28 07:00:00","arrivalDateTime":"2019-08-28 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-29","status":"AVAILABLE","price":"1389","seats":"9","rbd":"R","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"R","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-29 07:00:00","arrivalDateTime":"2019-08-29 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-30","status":"AVAILABLE","price":"1647","seats":"9","rbd":"W","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"9","rbd":"W","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-30 07:00:00","arrivalDateTime":"2019-08-30 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]},{"date":"2019-08-31","status":"AVAILABLE","price":"1647","seats":"2","rbd":"W","duration":"0135","flightsCount":1,"flights":[{"flightNumber":"0616","seats":"2","rbd":"W","depIata":"PRG","arrIata":"AMS","departureDateTime":"2019-08-31 07:00:00","arrivalDateTime":"2019-08-31 08:35:00","duration":"0135","mileage":"0","aircraftRef":"738"}]}]}};
        
            var res = results.calendarPriceList.dayList;

            for (var item in res) {
                if ( res[item].status === "AVAILABLE" ) {
                    
                    //
                    // Diky jaderce jsem nasel nejslozitejsi zpusob jak prevest cislo z decimalni soustavy na
                    // soustavu o zakladu 60 :D
                    //
                    function convertMinutes( time ) {
                        var hours = 0;
                        while ( time > 60 ) {
                            time = time - 60;
                            hours++;
                        }
                        return hours + ':' + time;
                    };
                    var date = res[item].date.slice(8,10) + '.' + res[item].date.slice(5,7) + '.' + res[item].date.slice(0,4),
                        price = res[item].price,
                        seats = res[item].seats,
                        duration = convertMinutes(parseInt(res[item].duration)),
                        string = string + "<tr><td>" + date + "</td><td>" + price + " CZK </td><td>" + seats + "</td><td>" + duration + "</td>";
                }
            }
            $("#result > tbody").children().first().siblings().remove();
            console.log($("#result > tbody"));
            $("#result > tbody").append(string);
        }
    });

}(jQuery));