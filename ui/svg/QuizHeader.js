import * as React from "react";
import Svg, { Mask, Path, Defs, LinearGradient, Stop } from "react-native-svg";

function QuizHeader(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={39}
      viewBox="0 0 100 39"
      fill="none"
      {...props}
    >
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={-1}
        y={-1}
        width={102}
        height={41}
        fill="#000"
      >
        <Path fill="#fff" d="M-1 -1H101V40H-1z" />
        <Path d="M16.941 25.781l7.696 6.094-3.692 3.203-7.578-6.094 3.574-3.203zm7.891-10.664v1.348c0 2.161-.293 4.101-.879 5.82-.573 1.719-1.4 3.184-2.48 4.395a10.988 10.988 0 01-3.828 2.754c-1.472.638-3.106.957-4.903.957-1.784 0-3.418-.32-4.902-.957a10.942 10.942 0 01-3.848-2.754c-1.08-1.211-1.92-2.676-2.52-4.395-.585-1.719-.878-3.659-.878-5.82v-1.348c0-2.174.293-4.114.879-5.82.599-1.719 1.432-3.184 2.5-4.395A10.648 10.648 0 017.8 2.13c1.484-.638 3.118-.957 4.902-.957 1.797 0 3.431.319 4.902.957a10.832 10.832 0 013.848 2.773c1.08 1.211 1.914 2.676 2.5 4.395.586 1.706.879 3.646.879 5.82zm-5.918 1.348v-1.387c0-1.51-.143-2.838-.43-3.984-.273-1.146-.677-2.11-1.21-2.89-.521-.782-1.166-1.368-1.934-1.759-.768-.403-1.647-.605-2.637-.605s-1.868.202-2.637.605c-.768.39-1.412.977-1.933 1.758-.521.781-.918 1.745-1.192 2.89-.273 1.147-.41 2.475-.41 3.985v1.387c0 1.497.137 2.825.41 3.984.274 1.146.671 2.116 1.192 2.91.534.782 1.185 1.374 1.953 1.778.781.403 1.667.605 2.656.605.99 0 1.862-.202 2.617-.605.769-.404 1.413-.996 1.934-1.778.534-.794.938-1.764 1.21-2.91.274-1.159.411-2.487.411-3.984zM41.22 24.94V8.867h5.625V30H41.55l-.332-5.059zm.625-4.335l1.66-.04c0 1.407-.163 2.715-.488 3.926-.326 1.198-.814 2.24-1.465 3.125a6.845 6.845 0 01-2.461 2.051c-.99.482-2.155.723-3.496.723-1.029 0-1.98-.144-2.852-.43a5.804 5.804 0 01-2.226-1.387c-.612-.638-1.094-1.452-1.446-2.441-.338-1.003-.508-2.207-.508-3.613V8.867h5.625V22.56c0 .625.072 1.152.215 1.582.157.43.371.78.645 1.054.273.274.592.47.957.586.378.117.794.176 1.25.176 1.159 0 2.07-.234 2.734-.703a3.709 3.709 0 001.426-1.914c.286-.82.43-1.732.43-2.735zM57.078 8.866V30h-5.644V8.867h5.644zM51.082 3.36c0-.82.286-1.497.86-2.03.572-.535 1.34-.802 2.304-.802.95 0 1.712.267 2.285.801.586.534.88 1.211.88 2.031 0 .82-.294 1.498-.88 2.032-.573.533-1.334.8-2.285.8-.963 0-1.732-.267-2.305-.8-.573-.534-.859-1.211-.859-2.032zm27.461 22.246V30H62.488v-4.395h16.055zM78.23 12.11L64.755 30h-3.77v-3.34L74.402 8.867h3.829v3.242zm-1.992-3.242v4.414H61.297V8.867h14.941zm12.11 18.75l5.605-18.75h6.035l-8.496 24.317c-.182.533-.43 1.106-.742 1.718a6.96 6.96 0 01-1.23 1.739c-.508.56-1.153 1.015-1.934 1.367-.768.351-1.712.527-2.832.527-.534 0-.97-.032-1.309-.097a23.14 23.14 0 01-1.21-.274v-4.121h.449c.156.013.306.02.449.02.742 0 1.348-.085 1.816-.254.469-.17.847-.43 1.133-.782.287-.338.514-.78.684-1.328l1.582-4.082zm-2.344-18.75l4.59 15.313.8 5.957-3.828.41-7.597-21.68h6.035z" />
      </Mask>
      <Path
        d="M16.941 25.781l7.696 6.094-3.692 3.203-7.578-6.094 3.574-3.203zm7.891-10.664v1.348c0 2.161-.293 4.101-.879 5.82-.573 1.719-1.4 3.184-2.48 4.395a10.988 10.988 0 01-3.828 2.754c-1.472.638-3.106.957-4.903.957-1.784 0-3.418-.32-4.902-.957a10.942 10.942 0 01-3.848-2.754c-1.08-1.211-1.92-2.676-2.52-4.395-.585-1.719-.878-3.659-.878-5.82v-1.348c0-2.174.293-4.114.879-5.82.599-1.719 1.432-3.184 2.5-4.395A10.648 10.648 0 017.8 2.13c1.484-.638 3.118-.957 4.902-.957 1.797 0 3.431.319 4.902.957a10.832 10.832 0 013.848 2.773c1.08 1.211 1.914 2.676 2.5 4.395.586 1.706.879 3.646.879 5.82zm-5.918 1.348v-1.387c0-1.51-.143-2.838-.43-3.984-.273-1.146-.677-2.11-1.21-2.89-.521-.782-1.166-1.368-1.934-1.759-.768-.403-1.647-.605-2.637-.605s-1.868.202-2.637.605c-.768.39-1.412.977-1.933 1.758-.521.781-.918 1.745-1.192 2.89-.273 1.147-.41 2.475-.41 3.985v1.387c0 1.497.137 2.825.41 3.984.274 1.146.671 2.116 1.192 2.91.534.782 1.185 1.374 1.953 1.778.781.403 1.667.605 2.656.605.99 0 1.862-.202 2.617-.605.769-.404 1.413-.996 1.934-1.778.534-.794.938-1.764 1.21-2.91.274-1.159.411-2.487.411-3.984zM41.22 24.94V8.867h5.625V30H41.55l-.332-5.059zm.625-4.335l1.66-.04c0 1.407-.163 2.715-.488 3.926-.326 1.198-.814 2.24-1.465 3.125a6.845 6.845 0 01-2.461 2.051c-.99.482-2.155.723-3.496.723-1.029 0-1.98-.144-2.852-.43a5.804 5.804 0 01-2.226-1.387c-.612-.638-1.094-1.452-1.446-2.441-.338-1.003-.508-2.207-.508-3.613V8.867h5.625V22.56c0 .625.072 1.152.215 1.582.157.43.371.78.645 1.054.273.274.592.47.957.586.378.117.794.176 1.25.176 1.159 0 2.07-.234 2.734-.703a3.709 3.709 0 001.426-1.914c.286-.82.43-1.732.43-2.735zM57.078 8.866V30h-5.644V8.867h5.644zM51.082 3.36c0-.82.286-1.497.86-2.03.572-.535 1.34-.802 2.304-.802.95 0 1.712.267 2.285.801.586.534.88 1.211.88 2.031 0 .82-.294 1.498-.88 2.032-.573.533-1.334.8-2.285.8-.963 0-1.732-.267-2.305-.8-.573-.534-.859-1.211-.859-2.032zm27.461 22.246V30H62.488v-4.395h16.055zM78.23 12.11L64.755 30h-3.77v-3.34L74.402 8.867h3.829v3.242zm-1.992-3.242v4.414H61.297V8.867h14.941zm12.11 18.75l5.605-18.75h6.035l-8.496 24.317c-.182.533-.43 1.106-.742 1.718a6.96 6.96 0 01-1.23 1.739c-.508.56-1.153 1.015-1.934 1.367-.768.351-1.712.527-2.832.527-.534 0-.97-.032-1.309-.097a23.14 23.14 0 01-1.21-.274v-4.121h.449c.156.013.306.02.449.02.742 0 1.348-.085 1.816-.254.469-.17.847-.43 1.133-.782.287-.338.514-.78.684-1.328l1.582-4.082zm-2.344-18.75l4.59 15.313.8 5.957-3.828.41-7.597-21.68h6.035z"
        fill="#fff"
      />
      <Path
        d="M16.941 25.781l.621-.784a1 1 0 00-1.288.04l.667.744zm7.696 6.094l.655.755a1 1 0 00-.035-1.539l-.62.784zm-3.692 3.203l-.626.78a1 1 0 001.282-.025l-.656-.755zm-7.578-6.094l-.667-.744a1 1 0 00.04 1.524l.627-.78zm10.586-6.699l-.946-.323-.003.007.95.316zm-2.48 4.395l.742.67.004-.005-.746-.665zm-3.828 2.754l.397.917-.398-.917zM3.992 26.68l-.746.666.004.003.742-.67zm-2.52-4.395l-.946.323.002.006.945-.329zm0-12.988l-.944-.33-.001.005.946.325zm2.5-4.395l-.75-.661.75.661zM17.606 2.13l-.397.917.003.002.395-.92zm6.348 7.168l-.946.323v.002l.946-.325zm-5.469 1.797l-.972.232.002.01.97-.242zm-1.21-2.89l-.833.554.007.01.825-.565zM15.34 6.444l-.465.886.012.006.453-.892zm-5.274 0l.454.892.011-.006-.465-.886zM6.941 20.45l-.973.23v.002l.973-.232zm1.192 2.91l-.836.549.01.016.826-.565zm1.953 1.778l-.465.885.006.003.459-.888zm5.273 0l-.465-.886-.006.004.471.882zm1.934-1.778l-.83-.558-.002.004.832.554zm1.21-2.91l.974.232v-.002l-.973-.23zm-2.182 6.116l7.695 6.094 1.242-1.568-7.696-6.094-1.241 1.568zm7.66 4.555l-3.691 3.203 1.31 1.51 3.692-3.203-1.31-1.51zm-2.409 3.179l-7.578-6.094-1.253 1.559 7.578 6.093 1.253-1.558zm-7.537-4.57l3.574-3.203-1.335-1.49L12.7 28.24l1.335 1.49zm9.797-14.612v1.348h2v-1.348h-2zm0 1.348c0 2.072-.28 3.9-.825 5.497l1.893.646c.627-1.84.932-3.892.932-6.143h-2zm-.828 5.504c-.534 1.605-1.297 2.947-2.277 4.045l1.492 1.332c1.181-1.324 2.072-2.912 2.683-4.745l-1.898-.632zm-2.274 4.04a9.986 9.986 0 01-3.483 2.507l.795 1.835a11.987 11.987 0 004.173-3.002l-1.485-1.34zm-3.483 2.507c-1.332.578-2.828.875-4.505.875v2c1.917 0 3.69-.341 5.3-1.04l-.795-1.835zm-4.505.875c-1.662 0-3.16-.297-4.507-.876l-.79 1.837c1.621.697 3.392 1.039 5.297 1.039v-2zm-4.507-.876a9.942 9.942 0 01-3.5-2.505L3.25 27.35a11.94 11.94 0 004.195 3.002l.79-1.837zm-3.497-2.501c-.983-1.102-1.76-2.448-2.321-4.058l-1.889.658c.637 1.828 1.54 3.411 2.718 4.732l1.492-1.332zM2.42 21.962c-.544-1.597-.825-3.425-.825-5.497h-2c0 2.25.305 4.303.932 6.143l1.893-.646zm-.825-5.497v-1.348h-2v1.348h2zm0-1.348c0-2.086.28-3.913.824-5.495l-1.891-.65c-.628 1.83-.933 3.882-.933 6.145h2zm.823-5.491c.562-1.612 1.334-2.96 2.306-4.062l-1.5-1.323C2.059 5.561 1.165 7.142.528 8.968l1.889.658zm2.306-4.062a9.648 9.648 0 013.473-2.516l-.79-1.838a11.648 11.648 0 00-4.183 3.031l1.5 1.323zm3.473-2.516c1.347-.58 2.845-.876 4.507-.876v-2c-1.905 0-3.676.341-5.297 1.038l.79 1.838zm4.507-.876c1.677 0 3.173.297 4.505.874l.795-1.835c-1.61-.698-3.383-1.04-5.3-1.04v2zm4.508.876a9.831 9.831 0 013.496 2.52l1.492-1.332A11.832 11.832 0 0018 1.21l-.79 1.838zm3.496 2.52c.982 1.1 1.752 2.444 2.3 4.052l1.893-.646c-.624-1.83-1.521-3.416-2.7-4.738l-1.493 1.332zm2.3 4.054c.544 1.582.825 3.41.825 5.495h2c0-2.263-.305-4.316-.933-6.145l-1.892.65zm-3.093 6.843v-1.387h-2v1.387h2zm0-1.387c0-1.57-.149-2.983-.46-4.227l-1.94.485c.262 1.048.4 2.292.4 3.742h2zm-.457-4.216c-.295-1.237-.74-2.32-1.358-3.223l-1.651 1.128c.45.66.812 1.504 1.064 2.559l1.945-.464zm-1.352-3.214c-.607-.91-1.377-1.619-2.312-2.094l-.906 1.783c.601.306 1.12.77 1.554 1.42l1.665-1.109zm-2.3-2.088c-.93-.489-1.973-.72-3.102-.72v2c.85 0 1.566.172 2.172.49l.93-1.77zm-3.102-.72c-1.129 0-2.171.231-3.102.72l.93 1.77c.606-.318 1.322-.49 2.172-.49v-2zm-3.09.714c-.935.475-1.705 1.183-2.312 2.094l1.664 1.11c.434-.652.953-1.115 1.555-1.421l-.907-1.783zM7.301 7.648c-.601.902-1.038 1.98-1.332 3.214l1.945.464c.253-1.06.61-1.907 1.05-2.568l-1.663-1.11zm-1.332 3.214c-.296 1.24-.438 2.648-.438 4.216h2c0-1.453.132-2.7.383-3.752l-1.945-.464zm-.438 4.216v1.387h2v-1.387h-2zm0 1.387c0 1.556.142 2.963.437 4.214l1.947-.46c-.252-1.067-.384-2.315-.384-3.754h-2zm.438 4.216c.294 1.233.73 2.316 1.328 3.227l1.672-1.097c-.444-.677-.802-1.535-1.055-2.594l-1.945.464zm1.338 3.243c.618.903 1.388 1.612 2.314 2.098l.93-1.77c-.61-.322-1.142-.798-1.593-1.457l-1.65 1.129zm2.32 2.101c.94.486 1.986.717 3.115.717v-2c-.85 0-1.575-.172-2.197-.494l-.918 1.777zm3.115.717c1.128 0 2.167-.23 3.089-.723l-.943-1.764c-.59.315-1.295.487-2.146.487v2zm3.082-.72c.929-.488 1.695-1.2 2.301-2.108l-1.664-1.11c-.436.655-.958 1.128-1.567 1.448l.93 1.77zm2.299-2.105c.614-.913 1.059-2 1.354-3.236l-1.946-.464c-.252 1.056-.614 1.91-1.068 2.585l1.66 1.115zm1.354-3.238c.295-1.25.437-2.658.437-4.214h-2c0 1.439-.132 2.687-.383 3.755l1.946.459zM41.22 24.94h-1c0 .022 0 .044.002.066l.998-.066zm0-16.074v-1a1 1 0 00-1 1h1zm5.625 0h1a1 1 0 00-1-1v1zm0 21.133v1a1 1 0 001-1h-1zm-5.293 0l-.998.066a1 1 0 00.998.934v-1zm.293-9.395l-.024-1a1 1 0 00-.976 1h1zm1.66-.039h1a1 1 0 00-1.024-1l.024 1zm-.488 3.926l.965.262v-.002l-.965-.26zm-1.465 3.125l.801.598.004-.005-.805-.593zm-2.461 2.051l.438.9.01-.006-.448-.894zm-6.348.293l-.329.944a.574.574 0 00.017.006l.312-.95zm-2.226-1.387l-.722.692.014.015.708-.707zm-1.446-2.441l-.947.32.005.015.942-.335zm-.508-17.266v-1a1 1 0 00-1 1h1zm5.625 0h1a1 1 0 00-1-1v1zm.215 15.274l-.948.316a.859.859 0 00.009.025l.94-.341zm1.602 1.64l-.306.952.01.003.296-.955zm3.984-.527l-.569-.822-.007.005.576.817zm1.426-1.914l-.944-.33-.003.009.947.32zm.805 1.601V8.867h-2v16.074h2zm-1-15.074h5.625v-2h-5.625v2zm4.625-1V30h2V8.867h-2zm1 20.133H41.55v2h5.293v-2zm-4.295.934l-.332-5.058-1.996.13.332 5.06 1.996-.131zm-.682-8.329l1.66-.039-.047-2-1.66.04.047 2zm.637-1.039c0 1.33-.154 2.55-.454 3.667l1.931.519c.351-1.305.523-2.702.523-4.186h-2zm-.453 3.664c-.298 1.094-.737 2.02-1.306 2.795l1.611 1.185c.733-.997 1.27-2.154 1.625-3.456l-1.93-.524zm-1.302 2.79a5.843 5.843 0 01-2.106 1.753l.894 1.79a7.845 7.845 0 002.815-2.348L40.75 27.02zm-2.097 1.749c-.827.402-1.836.622-3.058.622v2c1.46 0 2.781-.263 3.934-.824l-.876-1.798zm-3.058.622c-.936 0-1.78-.13-2.54-.38l-.624 1.9c.985.323 2.042.48 3.164.48v-2zm-2.523-.374a4.805 4.805 0 01-1.848-1.15l-1.415 1.414a6.804 6.804 0 002.605 1.624l.658-1.888zm-1.834-1.135c-.497-.519-.911-1.203-1.224-2.084l-1.885.67c.39 1.098.94 2.04 1.666 2.798l1.443-1.384zm-1.22-2.07c-.294-.871-.454-1.962-.454-3.293h-2c0 1.482.177 2.8.56 3.934l1.895-.64zm-.454-3.293V8.868h-2V22.52h2zm-1-12.652h5.625v-2h-5.626v2zm4.625-1V22.56h2V8.867h-2zm0 13.692c0 .694.078 1.336.266 1.898l1.897-.633c-.099-.297-.163-.71-.163-1.265h-2zm.275 1.923a3.83 3.83 0 00.877 1.42l1.414-1.414a1.844 1.844 0 01-.412-.69l-1.88.684zm.877 1.42c.384.385.84.665 1.358.831l.612-1.904a1.355 1.355 0 01-.556-.34l-1.414 1.413zm1.367.834a5.2 5.2 0 001.547.221v-2a3.21 3.21 0 01-.954-.13l-.592 1.91zm1.547.221c1.28 0 2.42-.257 3.311-.886l-1.153-1.634c-.438.309-1.121.52-2.158.52v2zm3.303-.88a4.708 4.708 0 001.804-2.416l-1.894-.642a2.71 2.71 0 01-1.048 1.413l1.139 1.644zm1.801-2.408c.329-.94.486-1.966.486-3.064h-2c0 .908-.13 1.706-.374 2.405l1.888.66zm14.72-14.802h1a1 1 0 00-1-1v1zm0 21.133v1a1 1 0 001-1h-1zm-5.644 0h-1a1 1 0 001 1v-1zm0-21.133v-1a1 1 0 00-1 1h1zm.507-7.539L51.26.597l.681.731zm4.59 0l-.681.732.008.007.673-.739zm0 4.063l-.673-.74-.008.008.681.732zm-4.59 0l-.681.731.681-.731zm4.137 3.476V30h2V8.867h-2zm1 20.133h-5.644v2h5.644v-2zm-4.644 1V8.867h-2V30h2zm-1-20.133h5.644v-2h-5.644v2zm.648-6.508c0-.557.182-.964.541-1.3L51.26.598c-.787.732-1.178 1.68-1.178 2.762h2zm.541-1.3c.348-.323.851-.532 1.623-.532v-2c-1.155 0-2.188.326-2.986 1.07l1.363 1.463zm1.623-.532c.755 0 1.254.207 1.603.533L57.213.597c-.796-.742-1.82-1.07-2.967-1.07v2zm1.612.54c.37.337.552.742.552 1.292h2c0-1.09-.403-2.04-1.205-2.77l-1.347 1.478zm.552 1.292c0 .55-.182.955-.552 1.292l1.347 1.479c.802-.73 1.205-1.68 1.205-2.77h-2zm-.56 1.3c-.35.326-.85.532-1.604.532v2c1.147 0 2.171-.327 2.967-1.069L55.849 4.66zm-1.604.532c-.772 0-1.276-.208-1.623-.532L51.26 6.122c.798.744 1.83 1.07 2.986 1.07v-2zm-1.623-.532c-.36-.335-.541-.742-.541-1.3h-2c0 1.083.391 2.03 1.178 2.763l1.363-1.463zm25.92 20.947h1a1 1 0 00-1-1v1zm0 4.394v1a1 1 0 001-1h-1zm-16.055 0h-1a1 1 0 001 1v-1zm0-4.395v-1a1 1 0 00-1 1h1zM78.231 12.11l.798.602a1 1 0 00.202-.602h-1zM64.754 30v1a1 1 0 00.799-.398l-.8-.602zm-3.77 0h-1a1 1 0 001 1v-1zm0-3.34l-.798-.602a1 1 0 00-.202.602h1zM74.402 8.867v-1a1 1 0 00-.798.398l.798.602zm3.829 0h1a1 1 0 00-1-1v1zm-1.993 0h1a1 1 0 00-1-1v1zm0 4.414v1a1 1 0 001-1h-1zm-14.941 0h-1a1 1 0 001 1v-1zm0-4.414v-1a1 1 0 00-1 1h1zm16.246 16.738V30h2v-4.395h-2zm1 3.395H62.488v2h16.055v-2zm-15.055 1v-4.395h-2V30h2zm-1-3.395h16.055v-2H62.488v2zm14.944-15.097l-13.477 17.89 1.598 1.204L79.029 12.71l-1.597-1.203zM64.754 29h-3.77v2h3.77v-2zm-2.77 1v-3.34h-2V30h2zm-.201-2.738L75.2 9.47l-1.597-1.204-13.418 17.793 1.597 1.204zm12.62-17.395h3.828v-2h-3.829v2zm2.828-1v3.242h2V8.867h-2zm-1.993 0v4.414h2V8.867h-2zm1 3.414H61.297v2h14.941v-2zm-13.941 1V8.867h-2v4.414h2zm-1-3.414h14.941v-2H61.297v2zm27.05 17.75l.933.362c.01-.025.018-.05.026-.075l-.958-.287zm5.606-18.75v-1a1 1 0 00-.958.714l.958.286zm6.035 0l.944.33a1.001 1.001 0 00-.944-1.33v1zm-8.496 24.317l-.944-.33-.002.006.946.324zm-.742 1.718l-.89-.454a.718.718 0 00-.008.015l.898.44zm-1.23 1.739l-.725-.69-.016.018.74.672zm-1.934 1.367l-.41-.912-.006.003.416.909zm-5.352.156h-1a1 1 0 00.758.97l.242-.97zm0-4.121v-1a1 1 0 00-1 1h1zm.45 0l.083-.997a1 1 0 00-.083-.003v1zm3.398-1.016l-.763-.646-.012.015.775.631zm.684-1.328l-.933-.361a1.043 1.043 0 00-.023.066l.956.295zm-.762-22.832l.958-.287a1 1 0 00-.958-.713v1zm4.59 15.313l.99-.133a.997.997 0 00-.032-.154l-.958.287zm.8 5.957l.107.994a1 1 0 00.885-1.128l-.992.134zm-3.828.41l-.943.33a1 1 0 001.05.664l-.107-.994zM79.97 8.867v-1a1 1 0 00-.944 1.33l.944-.33zm9.337 19.037l5.605-18.75-1.916-.573-5.605 18.75 1.916.573zm4.647-18.037h6.035v-2h-6.035v2zm5.091-1.33l-8.496 24.317 1.888.66 8.496-24.317-1.888-.66zM90.546 32.86c-.164.48-.391 1.01-.687 1.588l1.782.91c.33-.646.597-1.264.797-1.851l-1.892-.647zm-.694 1.603a5.968 5.968 0 01-1.057 1.488l1.449 1.38a7.962 7.962 0 001.404-1.99l-1.796-.878zm-1.073 1.506c-.404.445-.93.824-1.603 1.127l.82 1.824c.89-.4 1.652-.933 2.264-1.608L88.78 35.97zm-1.61 1.13c-.602.275-1.394.436-2.415.436v2c1.219 0 2.314-.19 3.248-.618l-.832-1.819zm-2.415.436c-.501 0-.868-.031-1.12-.08l-.377 1.965c.424.081.93.115 1.497.115v-2zm-1.12-.08c-.315-.06-.7-.147-1.157-.261l-.485 1.94c.48.12.902.216 1.264.285l.378-1.963zm-.4.71v-4.122h-2v4.121h2zm-1-3.122H82.683v-2h-.001-.001-.001-.005-.001-.001-.001-.001-.001-.005-.002-.001-.001-.001-.001-.005-.001-.001-.001-.001-.001-.005-.002-.001-.001-.001-.005-.001-.001-.001-.001-.001-.005-.001-.001-.001-.001-.005-.001-.001-.001-.001-.001-.005-.001-.001-.001-.001-.005-.001-.001-.001-.001-.005-.001-.001-.001-.001-.005-.001-.001-.001-.001-.005-.001-.001-.001-.001-.003-.001-.001-.001-.001-.001-.005-.001-.001-.001-.001-.003-.002-.001-.001-.001-.005-.001-.001-.001-.005-.001-.001-.001-.005-.001-.001-.001-.005-.001-.001-.001-.003-.001-.001-.001-.001-.001-.003-.001-.001-.001-.001-.005-.001-.001-.001-.003-.001-.001-.001-.001-.005-.001-.001-.001-.003-.001-.001-.001-.001-.003-.001-.001-.001-.001-.003-.002-.001-.001-.004-.001-.001-.001-.004-.001-.001-.001-.005-.001-.001-.003-.001-.001-.001-.001-.003-.002-.001-.001-.003-.002-.001-.005-.001-.001-.003-.001-.001-.001-.005-.001-.001-.003-.002-.001-.005-.001-.001-.003-.001-.001-.001-.003-.001-.001-.001-.003-.001-.001-.001-.001-.003-.001-.001-.001-.003-.001-.001-.001-.003-.001-.001-.001-.003-.001-.001-.001-.003-.001-.001-.001-.003-.001-.001-.001-.003-.001-.001-.003-.001-.001-.001-.003-.001-.001-.001-.003-.001-.001-.001-.003-.001-.001-.003-.002-.001-.003-.001-.001-.003-.002-.001-.003-.001-.001-.003-.001-.001-.001-.003-.001-.001-.003-.001-.001-.001-.003-.001-.001-.003-.001-.001-.003-.001-.001-.003v2zm.367-.004c.18.016.358.023.532.023v-2a4.39 4.39 0 01-.366-.016L82.6 35.04zm.532.023c.807 0 1.539-.09 2.156-.313l-.68-1.881c-.32.116-.799.194-1.476.194v2zm2.156-.313a3.534 3.534 0 001.568-1.09l-1.55-1.263c-.161.197-.382.358-.697.472l.679 1.881zm1.556-1.076c.395-.466.678-1.038.876-1.678l-1.91-.591c-.141.454-.314.767-.492.977l1.526 1.292zm.853-1.612l1.582-4.082-1.865-.723-1.582 4.082 1.865.723zM85.046 9.154l4.59 15.313 1.916-.574-4.59-15.313-1.916.574zm4.557 15.159l.8 5.957 1.983-.267-.801-5.956-1.982.266zm1.685 4.83l-3.828.41.213 1.988 3.828-.41-.213-1.989zm-2.778 1.073l-7.598-21.68-1.887.662 7.598 21.68 1.887-.662zM79.97 9.867h6.035v-2h-6.035v2z"
        fill="url(#paint0_linear_23_425)"
        mask="url(#a)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_23_425"
          x1={49.5}
          y1={-20.8791}
          x2={47.2749}
          y2={42.6294}
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

export default QuizHeader;
