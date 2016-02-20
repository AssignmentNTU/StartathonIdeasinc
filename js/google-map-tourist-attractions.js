function initMap() {
    var map = new google.maps.Map(document.getElementById('map'));
    var input = /** @type {!HTMLInputElement} */(
        document.getElementById('pac-input'));

    var types = document.getElementById('type-selector');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

    var autocomplete = new google.maps.places.Autocomplete(input);
    var place;
    var infowindow = new google.maps.InfoWindow();
    var arrays     = ['ChIJKXYhbKwe2jER2-cFJDofywA',
    'ChIJzVHFNqkZ2jERboLN2YrltH8',
    'ChIJQ6MVplUZ2jERn1LmNH0DlDA',
    'ChIJxZfX_9gT2jERknwK8es7IHU',
    'ChIJr9wqENkT2jERkRs7pMj6FLQ',
    'ChIJ36zKZvob2jERcbaD0IJUd-o',
    'ChIJvWDbfRwa2jERgNnTOpAU3-o',
    'ChIJOVLiR10F2jERTB2-cCujA4o',
    'ChIJ0QX_Brki2jER-pZKNdqk_a8',
    'ChIJ8bEJcKwe2jERRhY5b25gluA'];
    var places     = [];
    var address    = [];
    var p = 0;
    var service = new google.maps.places.PlacesService(map);
    for(var i = 0 ; i < 10 ; i++){
        var request = {
            placeId: arrays[i] // change this with the place_id
        };

        service.getDetails(request, callback);

        var p = 0;
        function callback(place, status) {
            places.push(place.name);
            address.push(place.formatted_address);
            $('#Result').append("<div><h2 style='font-size:36px;'>"+place.name+"</h2>"+"<center><h3>"+place.formatted_address+"</h3></center></div>");
            var idBut = 'buttonRes'+p;
            p++;
            $('#Result').append("<button class='btn' style='display:block;' id="+idBut+">Add Place</button>");
            $('#Result').append("<hr>");
        }
    }

    $("#buttonRes0").live('click', function(){
        console.log("Add to calendar has been saved");
        //local storage
        var timeChoosen =  localStorage.getItem('key');
        var Schedule = Parse.Object.extend("Schedule");
        var sched = new Schedule();
        Parse.initialize("BDGyl4cvobyTGJ2pqSUMjMpol0sRfF6zuSAy8UpT", "QlSRwUtDnZsX1PoEEQqId4sCaYLSuBClzYCMwRL8");
        sched.set("Time",timeChoosen);
        sched.set("DataString",places[0]);
        sched.save(null, {
            success: function(object) {
                // Execute any logic that should take place after the object is saved.
                //alert('New object created with objectId: ' + object.id);
                //alert('No Event has ever created');
                alert(places[0]+" success");
            },
            error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    });


    $("#buttonRes1").live('click', function(){
        console.log("Add to calendar has been saved");
        //local storage
        var timeChoosen =  localStorage.getItem('key');
        var Schedule = Parse.Object.extend("Schedule");
        var sched = new Schedule();
        Parse.initialize("BDGyl4cvobyTGJ2pqSUMjMpol0sRfF6zuSAy8UpT", "QlSRwUtDnZsX1PoEEQqId4sCaYLSuBClzYCMwRL8");
        sched.set("Time",timeChoosen);
        sched.set("DataString",places[1]);
        sched.save(null, {
            success: function(object) {
                // Execute any logic that should take place after the object is saved.
                //alert('New object created with objectId: ' + object.id);
                //alert('No Event has ever created');
                alert(places[1]+" success");
            },
            error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    });



    $("#buttonRes2").live('click', function(){
        console.log("Add to calendar has been saved");
        //local storage
        var timeChoosen =  localStorage.getItem('key');
        var Schedule = Parse.Object.extend("Schedule");
        var sched = new Schedule();
        Parse.initialize("BDGyl4cvobyTGJ2pqSUMjMpol0sRfF6zuSAy8UpT", "QlSRwUtDnZsX1PoEEQqId4sCaYLSuBClzYCMwRL8");
        sched.set("Time",timeChoosen);
        sched.set("DataString",places[2]);
        sched.save(null, {
            success: function(object) {
                // Execute any logic that should take place after the object is saved.
                //alert('New object created with objectId: ' + object.id);
                //alert('No Event has ever created');
                alert(places[2]+" success");
            },
            error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    });



    $("#buttonRes3").live('click', function(){
        console.log("Add to calendar has been saved");
        //local storage
        var timeChoosen =  localStorage.getItem('key');
        var Schedule = Parse.Object.extend("Schedule");
        var sched = new Schedule();
        Parse.initialize("BDGyl4cvobyTGJ2pqSUMjMpol0sRfF6zuSAy8UpT", "QlSRwUtDnZsX1PoEEQqId4sCaYLSuBClzYCMwRL8");
        sched.set("Time",timeChoosen);
        sched.set("DataString",places[3]);
        sched.save(null, {
            success: function(object) {
                // Execute any logic that should take place after the object is saved.
                //alert('New object created with objectId: ' + object.id);
                //alert('No Event has ever created');
                alert(places[3]+" success");
            },
            error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    });



    $("#buttonRes4").live('click', function(){
        console.log("Add to calendar has been saved");
        //local storage
        var timeChoosen =  localStorage.getItem('key');
        var Schedule = Parse.Object.extend("Schedule");
        var sched = new Schedule();
        Parse.initialize("BDGyl4cvobyTGJ2pqSUMjMpol0sRfF6zuSAy8UpT", "QlSRwUtDnZsX1PoEEQqId4sCaYLSuBClzYCMwRL8");
        sched.set("Time",timeChoosen);
        sched.set("DataString",places[4]);
        sched.save(null, {
            success: function(object) {
                // Execute any logic that should take place after the object is saved.
                //alert('New object created with objectId: ' + object.id);
                //alert('No Event has ever created');
                alert(places[4]+" success");
            },
            error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    });



    $("#buttonRes5").live('click', function(){
        console.log("Add to calendar has been saved");
        //local storage
        var timeChoosen =  localStorage.getItem('key');
        var Schedule = Parse.Object.extend("Schedule");
        var sched = new Schedule();
        Parse.initialize("BDGyl4cvobyTGJ2pqSUMjMpol0sRfF6zuSAy8UpT", "QlSRwUtDnZsX1PoEEQqId4sCaYLSuBClzYCMwRL8");
        sched.set("Time",timeChoosen);
        sched.set("DataString",places[5]);
        sched.save(null, {
            success: function(object) {
                // Execute any logic that should take place after the object is saved.
                //alert('New object created with objectId: ' + object.id);
                //alert('No Event has ever created');
                alert(places[5]+" success");
            },
            error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    });


    $("#buttonRes6").live('click', function(){
        console.log("Add to calendar has been saved");
        //local storage
        var timeChoosen =  localStorage.getItem('key');
        var Schedule = Parse.Object.extend("Schedule");
        var sched = new Schedule();
        Parse.initialize("BDGyl4cvobyTGJ2pqSUMjMpol0sRfF6zuSAy8UpT", "QlSRwUtDnZsX1PoEEQqId4sCaYLSuBClzYCMwRL8");
        sched.set("Time",timeChoosen);
        sched.set("DataString",places[6]);
        sched.save(null, {
            success: function(object) {
                // Execute any logic that should take place after the object is saved.
                //alert('New object created with objectId: ' + object.id);
                //alert('No Event has ever created');
                alert(places[6]+" success");
            },
            error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    });



    $("#buttonRes7").live('click', function(){
        console.log("Add to calendar has been saved");
        //local storage
        var timeChoosen =  localStorage.getItem('key');
        var Schedule = Parse.Object.extend("Schedule");
        var sched = new Schedule();
        Parse.initialize("BDGyl4cvobyTGJ2pqSUMjMpol0sRfF6zuSAy8UpT", "QlSRwUtDnZsX1PoEEQqId4sCaYLSuBClzYCMwRL8");
        sched.set("Time",timeChoosen);
        sched.set("DataString",places[7]);
        sched.save(null, {
            success: function(object) {
                // Execute any logic that should take place after the object is saved.
                //alert('New object created with objectId: ' + object.id);
                //alert('No Event has ever created');
                alert(places[7]+" success");
            },
            error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    });


    $("#buttonRes8").live('click', function(){
        console.log("Add to calendar has been saved");
        //local storage
        var timeChoosen =  localStorage.getItem('key');
        var Schedule = Parse.Object.extend("Schedule");
        var sched = new Schedule();
        Parse.initialize("BDGyl4cvobyTGJ2pqSUMjMpol0sRfF6zuSAy8UpT", "QlSRwUtDnZsX1PoEEQqId4sCaYLSuBClzYCMwRL8");
        sched.set("Time",timeChoosen);
        sched.set("DataString",places[8]);
        sched.save(null, {
            success: function(object) {
                // Execute any logic that should take place after the object is saved.
                //alert('New object created with objectId: ' + object.id);
                //alert('No Event has ever created');
                alert(places[8]+" success");
            },
            error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    });


    $("#buttonRes9").live('click', function(){
        console.log("Add to calendar has been saved");
        //local storage
        var timeChoosen =  localStorage.getItem('key');
        var Schedule = Parse.Object.extend("Schedule");
        var sched = new Schedule();
        Parse.initialize("BDGyl4cvobyTGJ2pqSUMjMpol0sRfF6zuSAy8UpT", "QlSRwUtDnZsX1PoEEQqId4sCaYLSuBClzYCMwRL8");
        sched.set("Time",timeChoosen);
        sched.set("DataString",places[9]);
        sched.save(null, {
            success: function(object) {
                // Execute any logic that should take place after the object is saved.
                //alert('New object created with objectId: ' + object.id);
                //alert('No Event has ever created');
                alert(places[9]+" success");
            },
            error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    });

    autocomplete.addListener('place_changed', function() {

        infowindow.close();
        console.log("localStorage: "+localStorage.getItem('key'));
        place = autocomplete.getPlace(); // store the place details

        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    });
}