console.log("hi");

require([
    "esri/config",
    "esri/Map", 
    "esri/views/MapView"], function (esriConfig, Map, MapView) {
        esriConfig.apiKey = "AAPK833ad96c59e34e648bc05fc4bc61a735FwVyklRMIi9QTPgZAw6c4bH4Vs-cQZrW1iUrUkHn1nANrZC3_R1Y00kg8IiHNcH2"
    const map = new Map({
      basemap: "dark-gray-vector"
    });
  
    const view = new MapView({
      container: "viewDiv", // Reference to the DOM node that will contain the view
      map: map, // References the map object created in step 3
      extent:{
          xmin: -118.98364392089809,
          ymin: 33.64236255586565,
          xmax: -117.5073560791019,
          ymax: 34.4638389963474,
          spatialReference: 4326
      }
    });
  });
