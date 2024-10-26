export interface DustbinLocation {
    id: number;
    position: {
      lat: number;
      lng: number;
    };
    type: 'General Waste' | 'Recyclable' | 'Organic';
    capacity?: number;
    lastEmptied?: string;
  }
  
  export interface LatLng {
    lat: number;
    lng: number;
  }