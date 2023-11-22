import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

function EarthImage({ style }) {
  return (
    <Svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={style}>
      <Path
        d="M58.4 22.7l1.6 20C55.8 54 44.8 62 32 62 15.4 62 2 48.6 2 32S15.4 2 32 2c6 0 11.6 1.8 16.3 4.8z"
        fill="#7b41bb"
      />
      <G fill="#09c8e2b3">
        <Path d="M48.3 6.8c.3 1 .6 2.1-.4 1.6-1.7-.9-3.9-1.9-3.2-1.2s1 1.5-.1 1.4-3.1-.4-4 .9-2.1 1-2.4 1.5-.8 2.6-1.7 1.9c-.9-.6-2.7-2.9-1.2-2.3s3.2-.1 1.8-1.7-2.8-1-3.4-1.9-2.6-2-4.1.2c-1.4 2.2-2.7 5.1-3.5 5.7s-2.5 1.7-2.2 2.6c.2.9.3 3 1.2 2.4s1.4-.9 1.8-.3c.3.6.2 1.8.9 1.8 0 0 1.4-1 1.5-1.9s-1-1.4-.2-2.7 2.6-3.8 2.2-2.5c-.4 1.2-1.3 3-.6 3.8.6.8 4.1-.2 2.5.6s-2.4 1.4-2.7 2.4-.6 1.8-1.4 1.4-1.8-.2-2.2-.2-.6-1.8-1.3-1.4c-.6.4.2 1.7-.5 1.8s-.8.9-1.6 1.5-1.9 1.8-2.6 1.9 1.1 1 .8 1.8c-.3.9-1.9.8-2.5.9s-.1 1.3-.4 2 .3 1.4 1.3 1.4 2-.2 2.1-1.1 1-2.4 1.7-2.1c.6.3 2.1-.6 2.4-.1s2.2 2.2 2 2.4-1.3.7-.9.9c0 0 .3.5.5.4s.7-1.4 1-1.6.3-.9-.1-1.2c-.5-.3-2.2-1.5-1.8-2.1s1.3.7 1.7 1.1 1 .9 1 1.8.6.9.6 1.3c.1.5.3.6.8.6.5-.1.7-1.2.5-1.5-.3-.3-.3-.9.3-.9s1.3-.5 1.3-.8.6-2.1 1-2.1.7.7.8 1.1c.2.4 1.2-.3 1-.7s.1-.5.4-.5.1.8.3 1c.3.2 1.7 1.1 1.2 1.6s-1.2.2-1.7-.2-1.8-.2-2.2.2c-.3.4-.6.6-1.2.6s-.5 1.1 0 1.5c.5.5 1.2.1 1.7.4s1.3-.4 1.4.1-.1 2-.6 2.1-2.1.4-3.2-.1c-1.2-.5-2.3-.7-2.4-.2-.1.6-.1 1-.9.5s-1.5-.8-2-.8-.5-.9-.4-1.6-1.2-.5-2-.3-2.4.7-3.4.7-1.4.2-1.6.6-1.1.4-1.1 1.2.1 1-.7 1.4c-.9.3-1.1 1.9-1.5 2.3s.4 1.4 0 2c-.4.5-.8 1.9-.1 2.2s1.4 1.7 1.7 2.2 1.4 1 2.5.8 3.1-.8 4.2-.3 2.2.4 1.7 1.4c-.6 1 .3 2.3 1 3s.5 2.5.1 3c-.4.6-.3 1.6.1 2.1s.6 1.7.6 2.1c0 .5.8 1.4.9 2.3.1 1-.6 2.1.3 2.1s3.2.1 3.4-.3 2-2 2.5-2.7 1.5-1.9 1.2-2.6c-.6-.5-.2-1 .8-1.4s1-3.2.5-3.9.4-2.4 1.5-2.9 3.7-5.1 2.9-4.7c-.9.4-2.6.7-3.2.3s-4.1-6.4-3.6-6.8 3.3 5.5 3.8 6.2c.5.8 5.2-2.1 5.8-2.8.5-.7-.3-1.4-.6-1.4s-1.4-.7-1.7-.3-2.3-2.9-1.6-2.6 2.2 1.3 3.6 2.1 3-.5 3.9 1c1 1.5 1.6.5 1.5 1.2s1.2 3.6 1.7 4.5c.4.9 1.3-.4 1.4-1.4.1-1.1 2.2-2.8 3-3.4.7-.6 2.1.3 2.3 1.5s1.2-.2 1.2.7c0 1-.2 2.3.5 3.5 1.4-3.5 2.1-7 2.1-10.8 0-10.6-5.5-19.9-13.7-25.2m-31.9 3.8c-.6.2-1.2.9-2 .5s-2.5.2-1.4 1.1c1 1 .6 1.6 1.6 1.7s1.6-1.3 2.3-1.2.2-2.3-.5-2.1" />
        <Path d="M40.7 49.7c-.7.1-.5 1.5-1.3 1.7-.7.2-.1.8-.5 1.3-.3.5-.5 1.7 0 2.3.5.7.7.7 1.3-.4.6-1 2-5 .5-4.9M20.6 17.3c-.3 0-.6.2-.9.2-.3.1-.5.5-.5.9 0 .5.8.6.5.9s-1.9.6-1.7 1.1.5.9.2 1.4.3.6.9.4 1-.9.9-1.3c-.1-.5.9-.6.6-.2s-.8 1.4-.5 1.7-.8.8-.4 1 1.5-.8 2.1-.6.8-.2.9-.7c.1-.6-.8-1.3-1.1-2-.3-.8-.1-2.8-1-2.8" />
      </G>
    </Svg>
  );
}

export default EarthImage;
