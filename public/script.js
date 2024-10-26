const loadGoogleMaps = () => {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCkOq-z3_iDiZ1K-CdTlsXPrFtEaGq2DII&libraries=places`;
  script.async = true;
  script.defer = true;
  script.addEventListener("load", initializeMap);
  document.body.appendChild(script);
};
