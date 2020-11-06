const main = document.getElementById("main");

function getBusRoute() {    // Your code here
  let busRoute = document.getElementById("busroute").value ;

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {    // Your code here
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute;

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {        // YOUR CODE HERE
        sessionStorage.setItem('title', route.title);
        sessionStorage.setItem('lat_max',route.lat_max);
        sessionStorage.setItem('lat_min',route.lat_min);
        sessionStorage.setItem('lon_max',route.lon_max);
        sessionStorage.setItem('lon_min',route.lon_min);
        main.innerHTML = "Session Saved";
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
