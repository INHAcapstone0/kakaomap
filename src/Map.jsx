/* global kakao */
import React, { useEffect } from "react";

function Map() {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    // if (navigator.geolocation) {
    //   console.log("aa");
    //   navigator.geolocation.getCurrentPosition(
    //     function (position) {
    //       const container = document.getElementById("myMap");
    //       const options = {
    //         center: new window.kakao.maps.LatLng(
    //           position.coords.latitude,
    //           position.coords.longitude
    //         ),
    //         level: 3,
    //       };
    //       const map = new window.kakao.maps.Map(container, options);
    //       //마커가 표시 될 위치
    //       let markerPosition = new window.kakao.maps.LatLng(
    //         position.coords.latitude,
    //         position.coords.longitude
    //       );
    //       // 마커를 생성
    //       let marker = new window.kakao.maps.Marker({
    //         position: markerPosition,
    //       });
    //       // 마커를 지도 위에 표시
    //       marker.setMap(map);
    //     },
    //     function (error) {
    //       console.error(error);
    //     },
    //     {
    //       enableHighAccuracy: false,
    //       maximumAge: 0,
    //       timeout: Infinity,
    //     }
    //   );
    // } else {
    //   alert("GPS를 지원하지 않습니다");
    //   return;
    // }
  }, []);
  return (
    <div
      id="myMap"
      style={{
        width: "100%",
        height: "1000px",
      }}
    ></div>
  );
}

export default Map;
