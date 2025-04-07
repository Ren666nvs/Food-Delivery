// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// const containerStyle = { width: "100%", height: "700px" };
// const ulaanbaatarCoordinates = { lat: 47.8864, lng: 106.9057 };

// function MyMap() {
//   const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
//     null
//   );
//   const [isLocationSelected, setIsLocationSelected] = useState(false);
//   const router = useRouter();

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: googleMapsApiKey || "",
//   });

//   useEffect(() => {
//     const savedLocation = localStorage.getItem("savedLocation");
//     if (savedLocation) {
//       try {
//         setLocation(JSON.parse(savedLocation));
//       } catch (error) {
//         console.error("Error parsing saved location:", error);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     if (location) {
//       localStorage.setItem("savedLocation", JSON.stringify(location));
//       toast.success("Location saved successfully");
//     }
//   }, [location]);

//   interface LatLng {
//     lat: number;
//     lng: number;
//   }

//   interface MapClickEvent {
//     latLng: {
//       lat: () => number;
//       lng: () => number;
//     } | null;
//   }

//   const handleMapClick = (e: MapClickEvent): void => {
//     if (!e.latLng) return;
//     const newLocation: LatLng = { lat: e.latLng.lat(), lng: e.latLng.lng() };
//     setLocation(newLocation);
//     setIsLocationSelected(true);
//   };

//   const handleConfirmLocation = () => {
//     if (location) {
//       localStorage.setItem("savedLocation", JSON.stringify(location));
//       toast.success("Location confirmed successfully");
//       router.push("/");
//     }
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div className="relative flex justify-center items-center min-h-screen">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={location || ulaanbaatarCoordinates}
//         zoom={12}
//         onClick={handleMapClick}
//       >
//         {location && <Marker position={location} />}
//       </GoogleMap>

//       {isLocationSelected && (
//         <button
//           onClick={handleConfirmLocation}
//           className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer"
//         >
//           Confirm Location
//         </button>
//       )}
//     </div>
//   );
// }

// export default MyMap;