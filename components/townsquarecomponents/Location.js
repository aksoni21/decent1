import React, { Component } from "react";
import { useGeolocated } from "react-geolocated";
import { Flex, Text } from "@chakra-ui/react";

function Location() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  return !isGeolocationAvailable ? (
    <Flex>Your browser does not support Geolocation</Flex>
  ) : !isGeolocationEnabled ? (
    <Flex>Geolocation is not enabled</Flex>
  ) : coords ? (
    <table>
      <tbody>
        <tr>
          <td>latitude</td>
          <td>{coords.latitude}</td>
        </tr>
        <tr>
          <td>longitude</td>
          <td>{coords.longitude}</td>
        </tr>
        <tr>
          <td>altitude</td>
          <td>{coords.altitude}</td>
        </tr>
        <tr>
          <td>heading</td>
          <td>{coords.heading}</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>{coords.speed}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <Flex>Getting the location data&hellip; </Flex>
  );
}

export default Location;
