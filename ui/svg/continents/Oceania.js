import * as React from "react";
import Svg, { Mask, Path, Defs, LinearGradient, Stop } from "react-native-svg";

function Oceania({ style }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={144}
      height={31}
      viewBox="0 0 144 31"
      fill="none"
      style={style}
    >
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={-1}
        y={-1}
        width={146}
        height={33}
        fill="#000"
      >
        <Path fill="#fff" d="M-1 -1H145V32H-1z" />
        <Path d="M24.469 15.117v1.348c0 2.161-.293 4.101-.88 5.82-.585 1.719-1.412 3.184-2.48 4.395a10.753 10.753 0 01-3.828 2.754c-1.471.638-3.105.957-4.902.957-1.784 0-3.418-.32-4.902-.957a10.987 10.987 0 01-3.829-2.754c-1.08-1.211-1.92-2.676-2.52-4.395-.585-1.719-.878-3.659-.878-5.82v-1.348c0-2.174.293-4.114.879-5.82.586-1.719 1.413-3.184 2.48-4.395A10.877 10.877 0 017.438 2.13c1.484-.638 3.118-.957 4.902-.957 1.797 0 3.43.319 4.902.957a10.647 10.647 0 013.828 2.773c1.081 1.211 1.914 2.676 2.5 4.395.6 1.706.899 3.646.899 5.82zm-5.918 1.348v-1.387c0-1.51-.137-2.838-.41-3.984-.274-1.146-.677-2.11-1.211-2.89-.534-.782-1.185-1.368-1.953-1.759-.769-.403-1.648-.605-2.637-.605-.99 0-1.869.202-2.637.605-.755.39-1.4.977-1.933 1.758-.521.781-.918 1.745-1.192 2.89-.273 1.147-.41 2.475-.41 3.985v1.387c0 1.497.137 2.825.41 3.984.274 1.146.677 2.116 1.211 2.91.534.782 1.185 1.374 1.953 1.778.768.403 1.647.605 2.637.605s1.868-.202 2.637-.605c.768-.404 1.412-.996 1.933-1.778.521-.794.918-1.764 1.192-2.91.273-1.159.41-2.487.41-3.984zm18.515 9.531c.69 0 1.302-.13 1.836-.39a3.1 3.1 0 001.25-1.133c.313-.495.476-1.075.489-1.739h5.293c-.013 1.485-.41 2.806-1.192 3.965-.781 1.146-1.83 2.051-3.144 2.715-1.315.651-2.787.977-4.414.977-1.641 0-3.073-.274-4.297-.82-1.211-.548-2.22-1.303-3.028-2.266-.807-.977-1.412-2.11-1.816-3.399-.404-1.302-.605-2.695-.605-4.18v-.566c0-1.497.201-2.89.605-4.18.404-1.302 1.01-2.434 1.816-3.398.808-.977 1.817-1.738 3.028-2.285 1.21-.547 2.63-.82 4.258-.82 1.731 0 3.248.332 4.55.996a7.42 7.42 0 013.086 2.851c.755 1.224 1.14 2.676 1.153 4.356H40.64a4.406 4.406 0 00-.45-1.914 3.24 3.24 0 00-1.21-1.368c-.521-.351-1.166-.527-1.934-.527-.82 0-1.491.176-2.012.527-.52.339-.924.808-1.21 1.407a7.004 7.004 0 00-.606 2.011 16.86 16.86 0 00-.157 2.344v.567c0 .82.053 1.608.157 2.363.104.755.3 1.426.586 2.012.3.585.71 1.048 1.23 1.386.521.339 1.198.508 2.031.508zm21.856 4.395c-1.64 0-3.112-.26-4.414-.782-1.302-.534-2.409-1.27-3.32-2.207a9.808 9.808 0 01-2.07-3.261 10.982 10.982 0 01-.724-3.985v-.781c0-1.602.228-3.066.684-4.395.456-1.328 1.107-2.48 1.953-3.457a8.58 8.58 0 013.125-2.246c1.224-.534 2.604-.8 4.14-.8 1.498 0 2.826.247 3.985.742 1.16.495 2.13 1.198 2.91 2.11.795.91 1.394 2.004 1.797 3.28.404 1.263.606 2.67.606 4.22v2.343H50.797v-3.75h11.27v-.43c0-.781-.144-1.478-.43-2.09a3.317 3.317 0 00-1.25-1.484c-.56-.365-1.276-.547-2.149-.547-.742 0-1.38.163-1.914.488-.534.326-.97.782-1.308 1.368-.326.585-.573 1.276-.743 2.07-.156.781-.234 1.64-.234 2.578v.781c0 .847.117 1.628.352 2.344a5.71 5.71 0 001.035 1.855c.456.521 1.002.925 1.64 1.211.651.287 1.387.43 2.207.43a6.85 6.85 0 002.832-.586 6.132 6.132 0 002.286-1.816l2.734 2.968c-.443.639-1.048 1.25-1.816 1.836-.756.586-1.667 1.068-2.735 1.446-1.067.364-2.285.547-3.652.547zm23.281-5.157V15.82c0-.677-.11-1.256-.332-1.738a2.471 2.471 0 00-1.035-1.152c-.456-.274-1.048-.41-1.777-.41-.625 0-1.166.11-1.621.332a2.347 2.347 0 00-1.055.918c-.248.39-.371.852-.371 1.386h-5.625c0-.898.208-1.751.625-2.558.416-.808 1.022-1.517 1.816-2.13.794-.624 1.738-1.113 2.832-1.464 1.107-.352 2.344-.527 3.711-.527 1.64 0 3.1.273 4.375.82 1.276.547 2.279 1.367 3.008 2.46.742 1.095 1.113 2.462 1.113 4.102v9.043c0 1.16.072 2.11.215 2.852.143.73.352 1.367.625 1.914V30h-5.684c-.273-.573-.481-1.29-.625-2.148a17.707 17.707 0 01-.195-2.618zm.742-8.105l.04 3.183H79.84c-.742 0-1.387.085-1.934.254-.547.17-.996.41-1.347.723-.352.3-.612.651-.782 1.055a3.65 3.65 0 00-.234 1.328c0 .482.11.918.332 1.308.221.378.54.678.957.899.417.208.905.312 1.465.312.846 0 1.582-.169 2.207-.507.625-.339 1.107-.756 1.445-1.25.352-.495.534-.964.547-1.407l1.485 2.383a9.653 9.653 0 01-.86 1.66 7.754 7.754 0 01-1.348 1.621 6.95 6.95 0 01-1.972 1.23c-.768.313-1.68.47-2.735.47-1.34 0-2.558-.267-3.652-.801-1.08-.547-1.94-1.296-2.578-2.246-.625-.964-.938-2.058-.938-3.282 0-1.106.209-2.09.625-2.949a5.754 5.754 0 011.836-2.168c.82-.599 1.843-1.048 3.067-1.347 1.224-.313 2.643-.47 4.258-.47h3.261zm14.766-3.75V30h-5.625V8.867h5.273l.352 4.512zm-.82 5.312h-1.524c0-1.562.202-2.968.606-4.218.403-1.263.97-2.338 1.699-3.223a7.297 7.297 0 012.598-2.05c1.015-.483 2.148-.723 3.398-.723.99 0 1.894.143 2.715.43.82.286 1.523.741 2.109 1.366.599.625 1.055 1.452 1.367 2.48.326 1.03.489 2.286.489 3.77V30h-5.664V16.504c0-.938-.131-1.667-.391-2.188-.26-.52-.645-.885-1.152-1.093-.495-.222-1.107-.332-1.836-.332-.756 0-1.413.15-1.973.449-.547.3-1.003.716-1.367 1.25-.352.52-.619 1.133-.8 1.836a9.002 9.002 0 00-.274 2.265zm23.671-9.824V30h-5.644V8.867h5.644zm-5.996-5.508c0-.82.287-1.497.86-2.03.573-.535 1.341-.802 2.304-.802.951 0 1.713.267 2.286.801.586.534.879 1.211.879 2.031 0 .82-.293 1.498-.879 2.032-.573.533-1.335.8-2.286.8-.963 0-1.731-.267-2.304-.8-.573-.534-.86-1.211-.86-2.032zm22.051 21.875V15.82c0-.677-.11-1.256-.332-1.738a2.468 2.468 0 00-1.035-1.152c-.456-.274-1.048-.41-1.777-.41-.625 0-1.166.11-1.621.332a2.344 2.344 0 00-1.055.918c-.248.39-.371.852-.371 1.386h-5.625c0-.898.208-1.751.625-2.558.416-.808 1.022-1.517 1.816-2.13.794-.624 1.738-1.113 2.832-1.464 1.107-.352 2.344-.527 3.711-.527 1.641 0 3.099.273 4.375.82 1.276.547 2.279 1.367 3.008 2.46.742 1.095 1.113 2.462 1.113 4.102v9.043c0 1.16.072 2.11.215 2.852.143.73.352 1.367.625 1.914V30h-5.683c-.274-.573-.482-1.29-.626-2.148a17.734 17.734 0 01-.195-2.618zm.742-8.105l.039 3.183h-3.144c-.742 0-1.387.085-1.934.254-.547.17-.996.41-1.347.723-.352.3-.612.651-.782 1.055a3.654 3.654 0 00-.234 1.328c0 .482.111.918.332 1.308.221.378.54.678.957.899.417.208.905.312 1.465.312.846 0 1.582-.169 2.207-.507.625-.339 1.107-.756 1.445-1.25.352-.495.534-.964.547-1.407l1.485 2.383a9.672 9.672 0 01-.86 1.66 7.76 7.76 0 01-1.347 1.621 6.958 6.958 0 01-1.973 1.23c-.768.313-1.68.47-2.735.47-1.341 0-2.558-.267-3.652-.801-1.081-.547-1.94-1.296-2.578-2.246-.625-.964-.938-2.058-.938-3.282 0-1.106.209-2.09.626-2.949a5.748 5.748 0 011.835-2.168c.821-.599 1.843-1.048 3.067-1.347 1.224-.313 2.643-.47 4.258-.47h3.261z" />
      </Mask>
      <Path
        d="M24.469 15.117v1.348c0 2.161-.293 4.101-.88 5.82-.585 1.719-1.412 3.184-2.48 4.395a10.753 10.753 0 01-3.828 2.754c-1.471.638-3.105.957-4.902.957-1.784 0-3.418-.32-4.902-.957a10.987 10.987 0 01-3.829-2.754c-1.08-1.211-1.92-2.676-2.52-4.395-.585-1.719-.878-3.659-.878-5.82v-1.348c0-2.174.293-4.114.879-5.82.586-1.719 1.413-3.184 2.48-4.395A10.877 10.877 0 017.438 2.13c1.484-.638 3.118-.957 4.902-.957 1.797 0 3.43.319 4.902.957a10.647 10.647 0 013.828 2.773c1.081 1.211 1.914 2.676 2.5 4.395.6 1.706.899 3.646.899 5.82zm-5.918 1.348v-1.387c0-1.51-.137-2.838-.41-3.984-.274-1.146-.677-2.11-1.211-2.89-.534-.782-1.185-1.368-1.953-1.759-.769-.403-1.648-.605-2.637-.605-.99 0-1.869.202-2.637.605-.755.39-1.4.977-1.933 1.758-.521.781-.918 1.745-1.192 2.89-.273 1.147-.41 2.475-.41 3.985v1.387c0 1.497.137 2.825.41 3.984.274 1.146.677 2.116 1.211 2.91.534.782 1.185 1.374 1.953 1.778.768.403 1.647.605 2.637.605s1.868-.202 2.637-.605c.768-.404 1.412-.996 1.933-1.778.521-.794.918-1.764 1.192-2.91.273-1.159.41-2.487.41-3.984zm18.515 9.531c.69 0 1.302-.13 1.836-.39a3.1 3.1 0 001.25-1.133c.313-.495.476-1.075.489-1.739h5.293c-.013 1.485-.41 2.806-1.192 3.965-.781 1.146-1.83 2.051-3.144 2.715-1.315.651-2.787.977-4.414.977-1.641 0-3.073-.274-4.297-.82-1.211-.548-2.22-1.303-3.028-2.266-.807-.977-1.412-2.11-1.816-3.399-.404-1.302-.605-2.695-.605-4.18v-.566c0-1.497.201-2.89.605-4.18.404-1.302 1.01-2.434 1.816-3.398.808-.977 1.817-1.738 3.028-2.285 1.21-.547 2.63-.82 4.258-.82 1.731 0 3.248.332 4.55.996a7.42 7.42 0 013.086 2.851c.755 1.224 1.14 2.676 1.153 4.356H40.64a4.406 4.406 0 00-.45-1.914 3.24 3.24 0 00-1.21-1.368c-.521-.351-1.166-.527-1.934-.527-.82 0-1.491.176-2.012.527-.52.339-.924.808-1.21 1.407a7.004 7.004 0 00-.606 2.011 16.86 16.86 0 00-.157 2.344v.567c0 .82.053 1.608.157 2.363.104.755.3 1.426.586 2.012.3.585.71 1.048 1.23 1.386.521.339 1.198.508 2.031.508zm21.856 4.395c-1.64 0-3.112-.26-4.414-.782-1.302-.534-2.409-1.27-3.32-2.207a9.808 9.808 0 01-2.07-3.261 10.982 10.982 0 01-.724-3.985v-.781c0-1.602.228-3.066.684-4.395.456-1.328 1.107-2.48 1.953-3.457a8.58 8.58 0 013.125-2.246c1.224-.534 2.604-.8 4.14-.8 1.498 0 2.826.247 3.985.742 1.16.495 2.13 1.198 2.91 2.11.795.91 1.394 2.004 1.797 3.28.404 1.263.606 2.67.606 4.22v2.343H50.797v-3.75h11.27v-.43c0-.781-.144-1.478-.43-2.09a3.317 3.317 0 00-1.25-1.484c-.56-.365-1.276-.547-2.149-.547-.742 0-1.38.163-1.914.488-.534.326-.97.782-1.308 1.368-.326.585-.573 1.276-.743 2.07-.156.781-.234 1.64-.234 2.578v.781c0 .847.117 1.628.352 2.344a5.71 5.71 0 001.035 1.855c.456.521 1.002.925 1.64 1.211.651.287 1.387.43 2.207.43a6.85 6.85 0 002.832-.586 6.132 6.132 0 002.286-1.816l2.734 2.968c-.443.639-1.048 1.25-1.816 1.836-.756.586-1.667 1.068-2.735 1.446-1.067.364-2.285.547-3.652.547zm23.281-5.157V15.82c0-.677-.11-1.256-.332-1.738a2.471 2.471 0 00-1.035-1.152c-.456-.274-1.048-.41-1.777-.41-.625 0-1.166.11-1.621.332a2.347 2.347 0 00-1.055.918c-.248.39-.371.852-.371 1.386h-5.625c0-.898.208-1.751.625-2.558.416-.808 1.022-1.517 1.816-2.13.794-.624 1.738-1.113 2.832-1.464 1.107-.352 2.344-.527 3.711-.527 1.64 0 3.1.273 4.375.82 1.276.547 2.279 1.367 3.008 2.46.742 1.095 1.113 2.462 1.113 4.102v9.043c0 1.16.072 2.11.215 2.852.143.73.352 1.367.625 1.914V30h-5.684c-.273-.573-.481-1.29-.625-2.148a17.707 17.707 0 01-.195-2.618zm.742-8.105l.04 3.183H79.84c-.742 0-1.387.085-1.934.254-.547.17-.996.41-1.347.723-.352.3-.612.651-.782 1.055a3.65 3.65 0 00-.234 1.328c0 .482.11.918.332 1.308.221.378.54.678.957.899.417.208.905.312 1.465.312.846 0 1.582-.169 2.207-.507.625-.339 1.107-.756 1.445-1.25.352-.495.534-.964.547-1.407l1.485 2.383a9.653 9.653 0 01-.86 1.66 7.754 7.754 0 01-1.348 1.621 6.95 6.95 0 01-1.972 1.23c-.768.313-1.68.47-2.735.47-1.34 0-2.558-.267-3.652-.801-1.08-.547-1.94-1.296-2.578-2.246-.625-.964-.938-2.058-.938-3.282 0-1.106.209-2.09.625-2.949a5.754 5.754 0 011.836-2.168c.82-.599 1.843-1.048 3.067-1.347 1.224-.313 2.643-.47 4.258-.47h3.261zm14.766-3.75V30h-5.625V8.867h5.273l.352 4.512zm-.82 5.312h-1.524c0-1.562.202-2.968.606-4.218.403-1.263.97-2.338 1.699-3.223a7.297 7.297 0 012.598-2.05c1.015-.483 2.148-.723 3.398-.723.99 0 1.894.143 2.715.43.82.286 1.523.741 2.109 1.366.599.625 1.055 1.452 1.367 2.48.326 1.03.489 2.286.489 3.77V30h-5.664V16.504c0-.938-.131-1.667-.391-2.188-.26-.52-.645-.885-1.152-1.093-.495-.222-1.107-.332-1.836-.332-.756 0-1.413.15-1.973.449-.547.3-1.003.716-1.367 1.25-.352.52-.619 1.133-.8 1.836a9.002 9.002 0 00-.274 2.265zm23.671-9.824V30h-5.644V8.867h5.644zm-5.996-5.508c0-.82.287-1.497.86-2.03.573-.535 1.341-.802 2.304-.802.951 0 1.713.267 2.286.801.586.534.879 1.211.879 2.031 0 .82-.293 1.498-.879 2.032-.573.533-1.335.8-2.286.8-.963 0-1.731-.267-2.304-.8-.573-.534-.86-1.211-.86-2.032zm22.051 21.875V15.82c0-.677-.11-1.256-.332-1.738a2.468 2.468 0 00-1.035-1.152c-.456-.274-1.048-.41-1.777-.41-.625 0-1.166.11-1.621.332a2.344 2.344 0 00-1.055.918c-.248.39-.371.852-.371 1.386h-5.625c0-.898.208-1.751.625-2.558.416-.808 1.022-1.517 1.816-2.13.794-.624 1.738-1.113 2.832-1.464 1.107-.352 2.344-.527 3.711-.527 1.641 0 3.099.273 4.375.82 1.276.547 2.279 1.367 3.008 2.46.742 1.095 1.113 2.462 1.113 4.102v9.043c0 1.16.072 2.11.215 2.852.143.73.352 1.367.625 1.914V30h-5.683c-.274-.573-.482-1.29-.626-2.148a17.734 17.734 0 01-.195-2.618zm.742-8.105l.039 3.183h-3.144c-.742 0-1.387.085-1.934.254-.547.17-.996.41-1.347.723-.352.3-.612.651-.782 1.055a3.654 3.654 0 00-.234 1.328c0 .482.111.918.332 1.308.221.378.54.678.957.899.417.208.905.312 1.465.312.846 0 1.582-.169 2.207-.507.625-.339 1.107-.756 1.445-1.25.352-.495.534-.964.547-1.407l1.485 2.383a9.672 9.672 0 01-.86 1.66 7.76 7.76 0 01-1.347 1.621 6.958 6.958 0 01-1.973 1.23c-.768.313-1.68.47-2.735.47-1.341 0-2.558-.267-3.652-.801-1.081-.547-1.94-1.296-2.578-2.246-.625-.964-.938-2.058-.938-3.282 0-1.106.209-2.09.626-2.949a5.748 5.748 0 011.835-2.168c.821-.599 1.843-1.048 3.067-1.347 1.224-.313 2.643-.47 4.258-.47h3.261z"
        fill="#fff"
      />
      <Path
        d="M21.11 26.68l.746.665.003-.004-.75-.661zm-3.829 2.754l-.395-.92-.003.002.398.918zm-9.804 0l-.398.917.003.001.395-.918zM3.648 26.68l-.746.666.004.003.742-.67zm-2.52-4.395l-.946.323.003.006.944-.329zm0-12.988l.947.325V9.62l-.946-.323zM3.61 4.902l-.746-.666-.004.005.75.661zM7.438 2.13l-.395-.919-.003.001.397.918zm9.804 0l-.398.917.003.002.395-.92zm3.828 2.773l-.75.662.004.004.746-.666zm2.5 4.395l-.946.323.003.008.943-.331zm-5.43 1.797l-.972.232.973-.232zm-3.163-4.649l-.466.886.012.006.454-.892zm-5.274 0l.46.889.005-.003-.465-.886zM7.77 8.203l-.826-.564-.007.01.833.554zM6.578 20.45l-.973.23v.002l.973-.232zm1.211 2.91l-.83.558.004.007.826-.565zm1.953 1.778l-.465.885.465-.885zm5.274 0l.465.885-.465-.885zm1.933-1.778l.832.555.005-.006-.837-.549zm1.192-2.91l.972.232v-.002l-.972-.23zm5.328-5.332v1.348h2v-1.348h-2zm0 1.348c0 2.072-.281 3.9-.826 5.497l1.893.646c.628-1.84.933-3.892.933-6.143h-2zm-.826 5.497c-.548 1.61-1.313 2.956-2.284 4.056l1.5 1.323c1.165-1.321 2.054-2.905 2.677-4.733l-1.893-.646zm-2.28 4.052a9.754 9.754 0 01-3.477 2.5l.79 1.838a11.753 11.753 0 004.18-3.007l-1.493-1.33zm-3.48 2.502c-1.331.578-2.828.875-4.504.875v2c1.917 0 3.689-.341 5.3-1.04l-.796-1.835zm-4.504.875c-1.662 0-3.16-.297-4.508-.876l-.79 1.837c1.622.697 3.392 1.039 5.298 1.039v-2zm-4.505-.875a9.986 9.986 0 01-3.483-2.506l-1.485 1.34a11.987 11.987 0 004.173 3.001l.795-1.835zm-3.48-2.502c-.983-1.102-1.76-2.448-2.32-4.058l-1.89.658c.638 1.828 1.54 3.411 2.718 4.732l1.493-1.332zm-2.319-4.052c-.544-1.597-.825-3.425-.825-5.497h-2c0 2.25.305 4.303.932 6.143l1.893-.646zm-.825-5.497v-1.348h-2v1.348h2zm0-1.348c0-2.086.281-3.913.825-5.495l-1.892-.65c-.628 1.83-.933 3.882-.933 6.145h2zm.825-5.497c.55-1.61 1.314-2.956 2.284-4.056L2.86 4.24C1.694 5.562.806 7.146.182 8.974l1.893.646zm2.28-4.052a9.877 9.877 0 013.48-2.522L7.04 1.211c-1.606.697-3 1.708-4.177 3.025l1.492 1.332zm3.477-2.52c1.348-.58 2.846-.876 4.508-.876v-2c-1.906 0-3.676.341-5.297 1.038l.79 1.838zm4.508-.876c1.676 0 3.173.297 4.504.874l.796-1.835c-1.611-.698-3.383-1.04-5.3-1.04v2zm4.507.876a9.647 9.647 0 013.473 2.516l1.5-1.323a11.648 11.648 0 00-4.183-3.03l-.79 1.837zm3.477 2.52c.982 1.1 1.752 2.444 2.3 4.052l1.893-.646c-.624-1.83-1.52-3.416-2.7-4.738l-1.493 1.332zm2.303 4.06c.555 1.58.842 3.405.842 5.49h2c0-2.266-.312-4.321-.955-6.152l-1.887.662zm-3.076 6.837v-1.387h-2v1.387h2zm0-1.387c0-1.568-.142-2.977-.438-4.216l-1.945.464c.251 1.052.383 2.3.383 3.752h2zm-.438-4.216c-.295-1.237-.74-2.32-1.358-3.223l-1.651 1.128c.45.66.812 1.504 1.064 2.559l1.945-.464zm-1.358-3.223c-.619-.906-1.393-1.611-2.325-2.085l-.907 1.783c.605.307 1.132.774 1.581 1.43l1.651-1.128zM15.442 5.56c-.931-.489-1.973-.72-3.102-.72v2c.85 0 1.566.172 2.171.49l.93-1.77zm-3.102-.72c-1.129 0-2.171.231-3.102.72l.93 1.77c.606-.318 1.321-.49 2.172-.49v-2zm-3.096.717c-.919.475-1.684 1.18-2.3 2.082l1.651 1.128c.451-.66.975-1.127 1.567-1.433l-.918-1.777zM6.937 7.648c-.6.902-1.037 1.98-1.332 3.214l1.946.464c.253-1.06.61-1.907 1.05-2.568l-1.664-1.11zm-1.332 3.214c-.295 1.24-.437 2.648-.437 4.216h2c0-1.453.132-2.7.383-3.752l-1.946-.464zm-.437 4.216v1.387h2v-1.387h-2zm0 1.387c0 1.556.142 2.963.437 4.214l1.946-.46c-.251-1.067-.383-2.315-.383-3.754h-2zm.437 4.216c.295 1.236.74 2.323 1.354 3.236l1.66-1.116c-.454-.675-.816-1.528-1.068-2.584l-1.946.464zm1.358 3.243c.618.903 1.388 1.612 2.314 2.098l.93-1.77c-.61-.322-1.142-.798-1.592-1.457l-1.652 1.129zm2.314 2.098c.93.489 1.973.72 3.102.72v-2c-.85 0-1.566-.172-2.172-.49l-.93 1.77zm3.102.72c1.129 0 2.171-.231 3.102-.72l-.93-1.77c-.606.318-1.322.49-2.172.49v2zm3.102-.72c.928-.488 1.694-1.2 2.3-2.108l-1.664-1.11c-.436.655-.958 1.128-1.567 1.448l.93 1.77zm2.304-2.114c.598-.911 1.034-1.994 1.328-3.227l-1.945-.464c-.253 1.06-.61 1.917-1.055 2.594l1.672 1.097zm1.329-3.23c.295-1.25.437-2.657.437-4.213h-2c0 1.439-.132 2.687-.384 3.755l1.947.459zm19.788 4.927l.439.9a.705.705 0 00.017-.01l-.456-.89zm1.25-1.132l-.845-.534-.004.006.85.528zm.489-1.739v-1a1 1 0 00-1 .98l1 .02zm5.293 0l1 .01a1 1 0 00-1-1.01v1zM44.742 26.7l.826.564.003-.005-.829-.559zm-3.144 2.715l.443.896.007-.003-.45-.893zm-8.711.156l-.412.912.004.001.408-.913zm-3.028-2.265l-.77.637.004.005.766-.642zm-1.816-3.399l-.955.296v.003l.955-.299zm0-8.925l.954.298.001-.002-.955-.296zm1.816-3.399l.767.642.004-.005-.77-.637zm11.836-2.11l-.454.892.004.001.45-.892zm3.086 2.852l-.857.515.006.01.851-.525zm1.153 4.356v1a1 1 0 001-1.008l-1 .008zm-5.293 0l-1 .018a1 1 0 001 .982v-1zm-.45-1.914l-.902.43.008.017.894-.447zm-1.21-1.368l-.56.83.024.015.535-.845zm-3.946 0l.545.839.015-.01-.56-.829zm-1.21 1.407l.898.439.003-.008-.902-.431zm-.606 2.011l-.988-.153-.003.014.99.14zm.586 7.286l-.899.439.008.016.89-.455zm3.261 2.894c.818 0 1.584-.155 2.275-.492l-.877-1.797c-.377.183-.835.29-1.398.29v2zm2.292-.5A4.1 4.1 0 0041.002 25l-1.699-1.056a2.102 2.102 0 01-.856.77l.911 1.78zm1.64-1.49c.422-.668.626-1.43.642-2.252l-2-.04c-.01.508-.13.904-.333 1.225l1.69 1.068zm-.357-1.272h5.293v-2H40.64v2zm4.293-1.008c-.012 1.3-.356 2.428-1.021 3.414l1.658 1.118c.898-1.332 1.348-2.847 1.363-4.515l-2-.017zm-1.018 3.41c-.68.997-1.595 1.793-2.77 2.385l.902 1.786c1.457-.736 2.638-1.75 3.52-3.044l-1.652-1.127zm-2.762 2.382c-1.163.575-2.48.873-3.97.873v2c1.764 0 3.39-.354 4.857-1.08l-.887-1.793zm-3.97.873c-1.531 0-2.82-.255-3.89-.734l-.815 1.826c1.377.616 2.954.908 4.705.908v-2zm-3.886-.732c-1.082-.489-1.967-1.155-2.672-1.996l-1.533 1.284c.91 1.085 2.042 1.93 3.382 2.535l.823-1.823zm-2.668-1.991c-.72-.87-1.265-1.887-1.633-3.06l-1.908.597c.44 1.405 1.105 2.654 2 3.737l1.541-1.274zm-1.632-3.058c-.371-1.198-.56-2.49-.56-3.883h-2c0 1.575.214 3.07.65 4.475l1.91-.592zm-.56-3.883v-.567h-2v.567h2zm0-.567c0-1.407.189-2.698.56-3.88l-1.91-.598c-.436 1.395-.65 2.89-.65 4.478h2zm.56-3.883c.368-1.187.913-2.2 1.628-3.053l-1.533-1.284c-.9 1.073-1.566 2.326-2.005 3.744l1.91.593zm1.632-3.058c.705-.853 1.59-1.524 2.668-2.01l-.823-1.823c-1.343.606-2.477 1.459-3.386 2.559l1.541 1.274zm2.668-2.01c1.056-.478 2.33-.732 3.846-.732v-2c-1.738 0-3.303.292-4.669.909l.823 1.822zm3.846-.732c1.603 0 2.96.306 4.097.886l.909-1.781c-1.467-.748-3.145-1.105-5.005-1.105v2zm4.1.888a6.422 6.422 0 012.68 2.474l1.715-1.03a8.42 8.42 0 00-3.493-3.229l-.901 1.785zm2.686 2.484c.644 1.044.992 2.31 1.004 3.838l2-.015c-.015-1.831-.435-3.469-1.302-4.873l-1.702 1.05zm2.004 2.83H40.64v2h5.293v-2zm-4.293.982a5.407 5.407 0 00-.555-2.343l-1.789.895c.214.427.333.916.344 1.485l2-.037zm-.547-2.326a4.24 4.24 0 00-1.578-1.781l-1.071 1.689c.374.237.651.55.844.953l1.805-.861zM39.54 12.57c-.72-.486-1.57-.699-2.493-.699v2c.614 0 1.052.139 1.374.356l1.119-1.657zm-2.493-.699c-.96 0-1.841.206-2.571.699l1.119 1.657c.312-.21.77-.356 1.452-.356v-2zm-2.557.689a4.366 4.366 0 00-1.568 1.813l1.804.863c.213-.445.498-.768.854-1l-1.09-1.676zm-1.564 1.806a8 8 0 00-.695 2.297l1.976.307c.104-.673.28-1.244.516-1.726l-1.797-.878zm-.698 2.311c-.11.793-.166 1.62-.166 2.483h2c0-.778.05-1.512.147-2.205l-1.98-.278zm-.166 2.483v.567h2v-.567h-2zm0 .567c0 .862.055 1.696.166 2.5l1.981-.274a16.287 16.287 0 01-.147-2.226h-2zm.166 2.5c.116.843.338 1.618.678 2.314l1.797-.879c-.233-.476-.402-1.041-.494-1.709l-1.98.274zm.686 2.33c.374.732.9 1.33 1.576 1.77l1.09-1.677a2.537 2.537 0 01-.885-1.003l-1.78.91zm1.576 1.77c.73.474 1.614.67 2.576.67v-2c-.704 0-1.174-.144-1.486-.347l-1.09 1.677zm20.018 3.282l-.38.926.008.003.372-.929zm-3.32-2.207l-.723.692.005.005.718-.697zm-2.07-3.261l-.934.36.001.002.932-.362zm-.04-9.16l-.946-.325.946.324zm1.953-3.458l-.75-.66-.005.005.755.655zm3.125-2.246l.392.92.008-.003-.4-.917zm11.035 2.051l-.759.65.005.007.754-.657zm1.797 3.281l-.953.302v.003l.953-.305zm.606 6.563v1a1 1 0 001-1h-1zm-16.797 0h-1a1 1 0 001 1v-1zm0-3.75v-1a1 1 0 00-1 1h1zm11.27 0v1a1 1 0 001-1h-1zm-.43-2.52l-.916.401.01.023.906-.424zm-6.621-.175l-.866-.5a.69.69 0 00-.008.014l.874.486zm-.743 2.07l-.978-.209-.002.013.98.196zm.118 5.703l-.95.311c0 .005.003.01.004.015l.946-.326zm1.035 1.855l-.762.648.01.011.752-.659zm1.64 1.211l-.41.913.008.003.402-.916zm5.04-.156l.408.913.006-.003-.415-.91zm2.285-1.816l.735-.678a1 1 0 00-1.52.058l.785.62zm2.734 2.968l.822.57a1 1 0 00-.087-1.247l-.735.677zm-1.816 1.836l-.607-.795-.006.005.613.79zm-2.735 1.446l.323.946.01-.003-.333-.943zm-3.652-.453c-1.535 0-2.877-.244-4.043-.71l-.743 1.857c1.439.575 3.04.853 4.786.853v-2zm-4.035-.707c-1.185-.486-2.174-1.147-2.983-1.979L50.47 28.1c1.015 1.044 2.24 1.854 3.659 2.436l.758-1.85zM51.91 26.71a8.807 8.807 0 01-1.861-2.932l-1.864.726a10.806 10.806 0 002.28 3.59l1.444-1.384zm-1.86-2.929a9.982 9.982 0 01-.655-3.625h-2c0 1.523.26 2.974.79 4.344l1.865-.719zm-.655-3.625v-.781h-2v.781h2zm0-.781c0-1.506.214-2.86.629-4.07l-1.892-.65c-.496 1.447-.737 3.023-.737 4.72h2zm.629-4.07c.418-1.217 1.008-2.255 1.763-3.127l-1.511-1.31c-.938 1.082-1.65 2.349-2.144 3.788l1.892.649zm1.758-3.12a7.58 7.58 0 012.766-1.988l-.783-1.84a9.58 9.58 0 00-3.484 2.506l1.501 1.321zm2.774-1.991c1.08-.471 2.321-.717 3.74-.717v-2c-1.653 0-3.172.287-4.54.884l.8 1.833zm3.74-.717c1.388 0 2.579.229 3.593.661l.785-1.839c-1.304-.557-2.77-.822-4.377-.822v2zm3.593.661c1.024.438 1.867 1.052 2.543 1.84l1.519-1.3c-.886-1.035-1.984-1.827-3.277-2.379l-.785 1.84zm2.548 1.847c.695.798 1.231 1.767 1.598 2.926l1.907-.603c-.44-1.393-1.103-2.611-1.997-3.637l-1.507 1.314zm1.599 2.929c.367 1.15.558 2.451.558 3.914h2c0-1.636-.213-3.147-.653-4.523l-1.905.609zm.558 3.914v2.344h2v-2.344h-2zm1 1.344H50.797v2h16.797v-2zm-15.797 1v-3.75h-2v3.75h2zm-1-2.75h11.27v-2h-11.27v2zm12.27-1v-.43h-2v.43h2zm0-.43c0-.905-.167-1.75-.525-2.514l-1.811.848c.215.46.335 1.009.335 1.666h2zm-.514-2.49a4.317 4.317 0 00-1.62-1.922l-1.092 1.676c.393.256.683.597.88 1.047l1.832-.802zm-1.62-1.922c-.766-.498-1.687-.709-2.695-.709v2c.737 0 1.248.154 1.603.385l1.091-1.676zm-2.695-.709c-.89 0-1.716.197-2.434.635l1.04 1.707c.35-.213.801-.342 1.394-.342v-2zm-2.434.635a4.774 4.774 0 00-1.654 1.72l1.732 1c.261-.453.583-.782.963-1.013l-1.041-1.707zM54.14 14.24c-.382.689-.66 1.476-.846 2.347l1.956.417c.153-.717.37-1.31.639-1.793l-1.748-.971zm-.848 2.36a14.163 14.163 0 00-.254 2.774h2c0-.883.074-1.675.215-2.382l-1.961-.392zm-.254 2.774v.781h2v-.781h-2zm0 .781c0 .94.13 1.827.401 2.655l1.901-.622a6.501 6.501 0 01-.302-2.033h-2zm.406 2.67c.284.821.687 1.552 1.219 2.177l1.524-1.295a4.711 4.711 0 01-.852-1.534l-1.89.652zm1.228 2.188a5.726 5.726 0 001.984 1.465l.819-1.825a3.724 3.724 0 01-1.298-.957l-1.505 1.317zm1.99 1.468c.797.35 1.673.514 2.61.514v-2c-.702 0-1.298-.122-1.804-.345l-.805 1.83zm2.61.514a7.848 7.848 0 003.241-.673l-.817-1.826a5.85 5.85 0 01-2.424.5v2zm3.247-.676a7.132 7.132 0 002.655-2.106l-1.569-1.24a5.132 5.132 0 01-1.915 1.526l.83 1.82zm1.135-2.049l2.734 2.969 1.472-1.355-2.735-2.969-1.47 1.355zm2.648 1.721c-.37.535-.896 1.074-1.6 1.611l1.212 1.59c.832-.634 1.517-1.319 2.032-2.06l-1.644-1.14zm-1.607 1.616c-.657.51-1.47.945-2.455 1.293l.667 1.886c1.15-.407 2.16-.936 3.014-1.598l-1.226-1.58zm-2.445 1.29c-.944.322-2.05.493-3.33.493v2c1.456 0 2.785-.194 3.976-.6l-.646-1.894zm19.62-14.816l-.913.408.004.01.91-.418zm-1.035-1.152l-.515.857.011.006.504-.863zm-3.398-.078l.415.909a1 1 0 00.021-.01l-.436-.9zm-1.055.918l.845.535a.426.426 0 00.007-.013l-.852-.522zm-.371 1.386v1a1 1 0 001-1h-1zm-5.625 0h-1a1 1 0 001 1v-1zm.625-2.558l-.889-.459.889.459zm1.816-2.13l.61.793.008-.006-.618-.786zm2.832-1.464l-.303-.953h-.003l.306.953zm11.094 2.754l-.832.555.004.006.828-.561zm1.328 15.996l-.982.19v.003l.982-.193zm.625 1.914h1a1 1 0 00-.105-.447l-.895.447zm0 .332v1a1 1 0 001-1h-1zm-5.684 0l-.902.43a1 1 0 00.902.57v-1zm-.625-2.148l-.989.147.003.017.986-.164zm.547-10.723l1-.012a1 1 0 00-1-.988v1zm.04 3.183v1a1 1 0 001-1.012l-1 .012zm-6.426.977l.648.761.016-.014-.664-.747zm-.782 1.055l-.922-.387-.01.026.932.36zm.098 2.636l-.87.494.007.012.863-.506zm.957.899l-.47.883a.648.648 0 00.023.011l.447-.894zm5.117-1.445l-.815-.58-.01.015.825.565zm.547-1.407l.849-.528a1 1 0 00-1.849.499l1 .03zm1.485 2.383l.931.364a1 1 0 00-.083-.893l-.848.53zm-.86 1.66l-.844-.537-.008.014.852.523zm-1.348 1.621l.671.742.01-.009-.68-.733zm-1.972 1.23l.377.927a.753.753 0 00.013-.005l-.39-.921zm-6.387-.331l-.451.892.012.006.44-.898zm-2.578-2.246l-.839.544.009.013.83-.557zm1.523-8.399l.588.81.002-.002-.59-.808zm3.067-1.347l.237.971.01-.002-.247-.97zm7.777 7.636V15.82h-2v9.414h2zm0-9.414c0-.782-.127-1.512-.423-2.155l-1.818.835c.147.32.241.749.241 1.32h2zm-.42-2.146a3.47 3.47 0 00-1.443-1.608l-1.008 1.727c.289.169.49.394.626.697l1.826-.816zm-1.433-1.602c-.658-.395-1.446-.552-2.291-.552v2c.612 0 1.01.116 1.262.267l1.03-1.715zm-2.291-.552c-.742 0-1.438.13-2.058.432l.873 1.8c.292-.143.676-.232 1.185-.232v-2zm-2.037.422a3.345 3.345 0 00-1.492 1.305l1.705 1.045c.138-.224.332-.4.618-.531l-.831-1.819zm-1.484 1.293c-.364.574-.526 1.228-.526 1.921h2c0-.374.085-.644.216-.851l-1.69-1.07zm.474.921h-5.625v2h5.625v-2zm-4.625 1c0-.737.169-1.433.513-2.1l-1.777-.917a6.503 6.503 0 00-.736 3.017h2zm.513-2.1c.343-.664.848-1.263 1.538-1.795l-1.22-1.584c-.898.692-1.604 1.511-2.095 2.462l1.777.917zm1.546-1.801c.69-.543 1.524-.979 2.52-1.3l-.612-1.903c-1.192.383-2.245.923-3.144 1.63l1.237 1.573zm2.517-1.298c.993-.316 2.126-.48 3.408-.48v-2c-1.452 0-2.793.186-4.014.574l.606 1.906zm3.408-.48c1.53 0 2.85.254 3.981.739l.788-1.838c-1.421-.61-3.017-.901-4.769-.901v2zm3.981.739c1.108.475 1.954 1.173 2.57 2.097l1.664-1.11c-.843-1.264-2.002-2.206-3.446-2.825l-.788 1.838zm2.574 2.103c.606.892.941 2.051.941 3.54h2c0-1.792-.407-3.367-1.286-4.663l-1.655 1.123zm.941 3.54v9.043h2V15.86h-2zm0 9.043c0 1.193.073 2.213.233 3.041l1.964-.379c-.127-.656-.197-1.537-.197-2.662h-2zm.234 3.045c.157.799.39 1.526.712 2.168l1.788-.894c-.225-.451-.408-1-.538-1.66l-1.962.386zm.606 1.721V30h2v-.332h-2zm1-.668h-5.684v2h5.684v-2zm-4.781.57c-.221-.465-.408-1.084-.541-1.883l-1.973.329c.153.92.383 1.733.709 2.415l1.805-.862zm-.538-1.866a16.704 16.704 0 01-.185-2.47h-2c0 .923.069 1.844.206 2.765l1.978-.295zM81.945 17.14l.04 3.184 2-.025-.04-3.183-2 .024zm1.04 2.172H79.84v2h3.144v-2zm-3.145 0c-.815 0-1.563.092-2.23.298l.592 1.91c.427-.132.968-.209 1.638-.209v-2zm-2.23.298c-.654.203-1.237.505-1.716.93l1.329 1.495c.224-.199.54-.378.979-.514l-.591-1.91zm-1.7.917a3.794 3.794 0 00-1.055 1.429l1.844.773c.106-.25.27-.476.508-.68l-1.297-1.522zm-1.065 1.455a4.647 4.647 0 00-.302 1.689h2c0-.372.06-.691.167-.967l-1.865-.722zm-.302 1.689c0 .641.15 1.25.462 1.802l1.74-.986a1.61 1.61 0 01-.202-.816h-2zm.47 1.814c.322.55.783.975 1.35 1.276l.938-1.766a1.368 1.368 0 01-.563-.521l-1.726 1.011zm1.372 1.287c.58.29 1.228.418 1.912.418v-2c-.436 0-.765-.08-1.018-.206l-.894 1.788zm1.912.418c.98 0 1.886-.197 2.683-.628l-.952-1.759c-.454.246-1.02.387-1.731.387v2zm2.683-.628c.74-.4 1.351-.917 1.794-1.565l-1.65-1.13c-.234.342-.585.66-1.096.936l.952 1.759zm1.784-1.55c.425-.598.711-1.255.732-1.956l-2-.06c-.005.186-.084.466-.362.857l1.63 1.159zm-1.117-1.457l1.485 2.383 1.697-1.058-1.484-2.382-1.698 1.057zm1.402 1.49c-.181.464-.436.96-.772 1.487l1.688 1.074c.393-.618.711-1.23.947-1.833l-1.863-.727zm-.78 1.501c-.3.488-.689.959-1.176 1.412l1.36 1.465a8.75 8.75 0 001.52-1.83l-1.704-1.047zm-1.166 1.403A5.953 5.953 0 0179.41 29l.78 1.842a7.948 7.948 0 002.253-1.41l-1.341-1.483zm-1.679 1.046c-.62.252-1.398.395-2.358.395v2c1.15 0 2.196-.17 3.112-.543l-.754-1.852zm-2.358.395c-1.204 0-2.27-.24-3.213-.7l-.878 1.797c1.244.608 2.614.903 4.091.903v-2zm-3.2-.693c-.938-.475-1.663-1.112-2.2-1.912l-1.66 1.115c.739 1.101 1.732 1.962 2.957 2.581l.903-1.784zM71.675 26.8c-.513-.791-.777-1.693-.777-2.738h-2c0 1.404.362 2.69 1.099 3.826l1.678-1.088zm-.777-2.738c0-.98.184-1.81.525-2.512l-1.8-.873c-.492 1.015-.725 2.152-.725 3.386h2zm.525-2.512a4.754 4.754 0 011.524-1.795l-1.175-1.619a6.755 6.755 0 00-2.148 2.541l1.8.873zm1.526-1.797c.693-.506 1.588-.908 2.715-1.184l-.476-1.943c-1.321.324-2.47.82-3.418 1.512l1.18 1.615zm2.724-1.186c1.124-.288 2.458-.438 4.01-.438v-2c-1.676 0-3.181.162-4.505.5l.495 1.938zm4.01-.438h3.262v-2h-3.261v2zm18.028-4.75h1l-.003-.078-.997.078zm0 16.621v1a1 1 0 001-1h-1zm-5.625 0h-1a1 1 0 001 1v-1zm0-21.133v-1a1 1 0 00-1 1h1zm5.273 0l.997-.078a1 1 0 00-.997-.922v1zm-.468 9.824v1a1 1 0 001-1h-1zm-1.524 0h-1a1 1 0 001 1v-1zm.606-4.218l.951.307.001-.003-.952-.304zm1.699-3.223l.772.636.004-.006-.776-.63zm2.598-2.05l.423.905.005-.002-.428-.904zm8.222 1.073l-.729.684.007.008.722-.692zm1.367 2.48l-.957.292.004.01.953-.301zM110.348 30v1a1 1 0 001-1h-1zm-5.664 0h-1a1 1 0 001 1v-1zm-1.543-16.777l-.409.912.029.013.38-.925zm-3.809.117l-.472-.882-.008.005.48.877zm-1.367 1.25l-.826-.564-.003.004.829.56zm-1.254-1.211V30h2V13.379h-2zm1 15.621h-5.625v2h5.625v-2zm-4.625 1V8.867h-2V30h2zm-1-20.133h5.273v-2h-5.273v2zm4.276-.922l.352 4.512 1.994-.156-.352-4.511-1.994.155zm.529 8.746h-1.524v2h1.524v-2zm-.524 1c0-1.477.191-2.777.557-3.911l-1.903-.615c-.441 1.366-.654 2.879-.654 4.526h2zm.558-3.914c.371-1.16.882-2.118 1.519-2.891L96.9 10.614c-.822.998-1.444 2.189-1.88 3.554l1.905.61zm1.523-2.897a6.302 6.302 0 012.245-1.775l-.847-1.812a8.3 8.3 0 00-2.95 2.327l1.552 1.26zm2.25-1.777c.867-.412 1.851-.626 2.97-.626v-2c-1.382 0-2.663.267-3.827.819l.857 1.807zm2.97-.626c.893 0 1.684.129 2.385.373l.659-1.888c-.939-.328-1.958-.485-3.044-.485v2zm2.385.373c.67.234 1.236.602 1.71 1.107l1.459-1.368a6.194 6.194 0 00-2.51-1.627l-.659 1.888zm1.717 1.115c.467.488.855 1.166 1.133 2.08l1.913-.582c-.347-1.143-.871-2.119-1.602-2.881l-1.444 1.383zm1.136 2.09c.285.903.442 2.05.442 3.468h2c0-1.55-.17-2.916-.535-4.07l-1.907.603zm.442 3.468V30h2V16.523h-2zm1 12.477h-5.664v2h5.664v-2zm-4.664 1V16.504h-2V30h2zm0-13.496c0-1.009-.137-1.916-.497-2.635l-1.788.895c.161.322.285.873.285 1.74h2zm-.497-2.635c-.361-.723-.921-1.265-1.667-1.572l-.759 1.85c.27.111.478.298.638.617l1.788-.895zm-1.638-1.56c-.659-.294-1.42-.418-2.244-.418v2c.634 0 1.097.097 1.427.245l.817-1.826zm-2.244-.418c-.889 0-1.715.177-2.445.567l.944 1.764c.389-.209.879-.331 1.501-.331v-2zm-2.453.572a4.92 4.92 0 00-1.713 1.563l1.652 1.128c.279-.409.618-.716 1.021-.937l-.96-1.754zm-1.716 1.567a6.894 6.894 0 00-.94 2.145l1.936.502c.158-.61.383-1.114.662-1.528l-1.658-1.119zm-.94 2.145a9.999 9.999 0 00-.305 2.516h2c0-.732.082-1.402.241-2.014l-1.936-.502zm24.366-7.308h1a1 1 0 00-1-1v1zm0 21.133v1a1 1 0 001-1h-1zm-5.644 0h-1a1 1 0 001 1v-1zm0-21.133v-1a1 1 0 00-1 1h1zm.508-7.539l-.682-.731.682.731zm4.59 0l-.682.732.008.007.674-.739zm0 4.063l-.674-.74-.008.008.682.732zm-4.59 0l-.682.731.682-.731zm4.136 3.476V30h2V8.867h-2zm1 20.133h-5.644v2h5.644v-2zm-4.644 1V8.867h-2V30h2zm-1-20.133h5.644v-2h-5.644v2zm.648-6.508c0-.557.182-.964.542-1.3L114.744.598c-.786.732-1.178 1.68-1.178 2.762h2zm.542-1.3c.347-.323.851-.532 1.622-.532v-2c-1.155 0-2.188.326-2.986 1.07l1.364 1.463zm1.622-.532c.755 0 1.254.207 1.604.533l1.363-1.463c-.796-.742-1.82-1.07-2.967-1.07v2zm1.612.54c.37.337.553.742.553 1.292h2c0-1.09-.404-2.04-1.206-2.77l-1.347 1.478zm.553 1.292c0 .55-.183.955-.553 1.292l1.347 1.479c.802-.73 1.206-1.68 1.206-2.77h-2zm-.561 1.3c-.35.326-.849.532-1.604.532v2c1.147 0 2.171-.327 2.967-1.069l-1.363-1.463zm-1.604.532c-.771 0-1.275-.208-1.622-.532l-1.364 1.463c.798.744 1.831 1.07 2.986 1.07v-2zm-1.622-.532c-.36-.335-.542-.742-.542-1.3h-2c0 1.083.392 2.03 1.178 2.763l1.364-1.463zm20.177 9.423l-.913.408.004.01.909-.418zm-1.035-1.152l-.515.857.011.006.504-.863zm-3.398-.078l.415.909a.993.993 0 00.021-.01l-.436-.9zm-1.055.918l.845.535.007-.013-.852-.522zm-.371 1.386v1a1 1 0 001-1h-1zm-5.625 0h-1a1 1 0 001 1v-1zm.625-2.558l-.889-.459.889.459zm1.816-2.13l.611.793.008-.006-.619-.786zm2.832-1.464l-.303-.953h-.003l.306.953zm11.094 2.754l-.832.555.004.006.828-.561zm1.328 15.996l-.982.19.001.003.981-.193zm.625 1.914h1c0-.155-.036-.308-.105-.447l-.895.447zm0 .332v1a1 1 0 001-1h-1zm-5.683 0l-.903.43a1 1 0 00.903.57v-1zm-.626-2.148l-.989.147.003.017.986-.164zm.547-10.723l1-.012a1 1 0 00-1-.988v1zm.039 3.183v1a1 1 0 001-1.012l-1 .012zm-6.425.977l.648.761.016-.014-.664-.747zm-.782 1.055l-.922-.387-.01.026.932.36zm.098 2.636l-.87.494.007.012.863-.506zm.957.899l-.469.883.022.011.447-.894zm5.117-1.445l-.815-.58-.01.015.825.565zm.547-1.407l.849-.528a1 1 0 00-1.848.499l.999.03zm1.485 2.383l.931.364a.998.998 0 00-.083-.893l-.848.53zm-.86 1.66l-.844-.537a.099.099 0 01-.008.014l.852.523zm-1.347 1.621l.67.742.01-.009-.68-.733zm-1.973 1.23l.377.927.013-.005-.39-.921zm-6.387-.331l-.451.892.012.006.439-.898zm-2.578-2.246l-.839.544.009.013.83-.557zm1.523-8.399l.588.81.002-.002-.59-.808zm3.067-1.347l.238.971.009-.002-.247-.97zm7.777 7.636V15.82h-2v9.414h2zm0-9.414c0-.782-.127-1.512-.423-2.155l-1.818.835c.147.32.241.749.241 1.32h2zm-.419-2.146a3.472 3.472 0 00-1.444-1.608l-1.008 1.727c.289.169.49.394.626.697l1.826-.816zm-1.434-1.602c-.658-.395-1.446-.552-2.291-.552v2c.612 0 1.01.116 1.263.267l1.028-1.715zm-2.291-.552c-.742 0-1.438.13-2.058.432l.873 1.8c.292-.143.676-.232 1.185-.232v-2zm-2.037.422a3.346 3.346 0 00-1.492 1.305l1.705 1.045c.138-.224.332-.4.618-.531l-.831-1.819zm-1.484 1.293c-.364.574-.526 1.228-.526 1.921h2c0-.374.085-.644.216-.851l-1.69-1.07zm.474.921h-5.625v2h5.625v-2zm-4.625 1c0-.737.169-1.433.513-2.1l-1.777-.917a6.503 6.503 0 00-.736 3.017h2zm.513-2.1c.343-.664.848-1.263 1.539-1.795l-1.221-1.584c-.898.692-1.604 1.511-2.095 2.462l1.777.917zm1.547-1.801c.689-.543 1.523-.979 2.519-1.3l-.612-1.903c-1.191.383-2.245.923-3.144 1.63l1.237 1.573zm2.516-1.298c.993-.316 2.126-.48 3.408-.48v-2c-1.452 0-2.793.186-4.014.574l.606 1.906zm3.408-.48c1.53 0 2.85.254 3.981.739l.788-1.838c-1.421-.61-3.017-.901-4.769-.901v2zm3.981.739c1.108.475 1.955 1.173 2.57 2.097l1.664-1.11c-.843-1.264-2.002-2.206-3.446-2.825l-.788 1.838zm2.574 2.103c.606.892.941 2.051.941 3.54h2c0-1.792-.406-3.367-1.286-4.663l-1.655 1.123zm.941 3.54v9.043h2V15.86h-2zm0 9.043c0 1.193.073 2.213.233 3.041l1.964-.379c-.127-.656-.197-1.537-.197-2.662h-2zm.234 3.045c.157.799.39 1.526.712 2.168l1.789-.894c-.226-.451-.409-1-.539-1.66l-1.962.386zm.606 1.721V30h2v-.332h-2zm1-.668h-5.683v2h5.683v-2zm-4.781.57c-.221-.465-.408-1.084-.541-1.883l-1.973.329c.153.92.383 1.733.709 2.415l1.805-.862zm-.538-1.866a16.705 16.705 0 01-.185-2.47h-2c0 .923.069 1.844.206 2.765l1.979-.295zm-1.443-10.563l.04 3.184 1.999-.025-.039-3.183-2 .024zm1.039 2.172h-3.144v2h3.144v-2zm-3.144 0c-.815 0-1.563.092-2.229.298l.591 1.91c.428-.132.968-.209 1.638-.209v-2zm-2.229.298c-.655.203-1.238.505-1.717.93l1.329 1.495c.224-.199.539-.378.979-.514l-.591-1.91zm-1.701.917a3.791 3.791 0 00-1.055 1.429l1.845.773a1.79 1.79 0 01.507-.68l-1.297-1.522zm-1.065 1.455a4.639 4.639 0 00-.302 1.689h2c0-.372.06-.691.167-.967l-1.865-.722zm-.302 1.689c0 .641.149 1.25.462 1.802l1.74-.986a1.609 1.609 0 01-.202-.816h-2zm.469 1.814c.323.55.784.975 1.351 1.276l.938-1.766a1.365 1.365 0 01-.563-.521l-1.726 1.011zm1.373 1.287c.581.29 1.228.418 1.912.418v-2c-.436 0-.765-.08-1.018-.206l-.894 1.788zm1.912.418c.981 0 1.886-.197 2.683-.628l-.952-1.759c-.454.246-1.019.387-1.731.387v2zm2.683-.628c.739-.4 1.351-.917 1.795-1.565l-1.651-1.13c-.234.342-.585.66-1.096.936l.952 1.759zm1.784-1.55c.425-.598.711-1.255.732-1.956l-1.999-.06c-.006.186-.085.466-.363.857l1.63 1.159zm-1.117-1.457l1.485 2.383 1.697-1.058-1.484-2.382-1.698 1.057zm1.402 1.49a8.66 8.66 0 01-.772 1.487l1.688 1.074c.393-.618.711-1.23.947-1.833l-1.863-.727zm-.78 1.501a6.738 6.738 0 01-1.176 1.412l1.361 1.465a8.726 8.726 0 001.519-1.83l-1.704-1.047zm-1.166 1.403A5.966 5.966 0 01133.825 29l.78 1.842a7.931 7.931 0 002.253-1.41l-1.341-1.483zm-1.679 1.046c-.621.252-1.398.395-2.358.395v2c1.151 0 2.196-.17 3.112-.543l-.754-1.852zm-2.358.395c-1.204 0-2.27-.24-3.213-.7l-.878 1.797c1.244.608 2.614.903 4.091.903v-2zm-3.2-.693c-.937-.475-1.663-1.112-2.2-1.912l-1.66 1.115c.739 1.101 1.732 1.962 2.957 2.581l.903-1.784zm-2.191-1.898c-.513-.791-.777-1.693-.777-2.738h-2c0 1.404.362 2.69 1.099 3.826l1.678-1.088zm-.777-2.738c0-.98.184-1.81.525-2.512l-1.799-.873c-.493 1.015-.726 2.152-.726 3.386h2zm.525-2.512a4.761 4.761 0 011.524-1.795l-1.175-1.619a6.75 6.75 0 00-2.148 2.541l1.799.873zm1.526-1.797c.693-.506 1.588-.908 2.715-1.184l-.476-1.943c-1.321.324-2.47.82-3.418 1.512l1.179 1.615zm2.724-1.186c1.125-.288 2.458-.438 4.011-.438v-2c-1.676 0-3.182.162-4.506.5l.495 1.938zm4.011-.438h3.261v-2h-3.261v2z"
        fill="url(#paint0_linear_64_876)"
        mask="url(#a)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_64_876"
          x1={71.5}
          y1={-30.5209}
          x2={67.4173}
          y2={50.3458}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.330361} stopColor="#921717" />
          <Stop offset={0.51983} stopColor="#D81B1B" />
          <Stop offset={0.73797} stopColor="red" stopOpacity={0.82} />
          <Stop offset={0.902343} stopColor="red" stopOpacity={0.31} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Oceania;