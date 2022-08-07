var data = {
    Egypt: {
      Cairo: ["Maadi", "Old Cairo", "Shiekh Zaied"],
      Alexandria: ["Raml Station", "Misr Station", "Miami"],
    },
    Usa: {
      California: ["USA 1", "USA 2"],
      NewYork: ["USA 3", "USA 4"],
    },
  };
  window.onload = function () {
    var countyselect = document.getElementById("countyselect"),
      governmentselect = document.getElementById("governmentselect"),
      cityselect = document.getElementById("cityselect");
    for (var country in data) {
      countyselect.options[countyselect.options.length] = new Option(country,country);
    }
    countyselect.onchange = function () {
      governmentselect.length = 1;// remove all options bar first
      cityselect.length = 1;// remove all options bar first
      if (this.selectedIndex < 1) return;  // done
      for (var government in data[this.value]) {
        governmentselect.options[governmentselect.options.length] = new Option(government, government);
      }
    };
    countyselect.onchange(); // reset in case page is reloaded
    governmentselect.onchange = function () {
      cityselect.length = 1; // remove all options bar first
      if (this.selectedIndex < 1) return; // done
      var city = data[countyselect.value][this.value];
      for (var i = 0; i < city.length; i++) {
        cityselect.options[cityselect.options.length] = new Option(city[i],city[i]);
      }
    };
  };
