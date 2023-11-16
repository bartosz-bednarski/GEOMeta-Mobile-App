import * as React from "react";
import Svg, {
  G,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function GeoMetaIconM(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={171}
      height={58}
      viewBox="0 0 171 58"
      fill="none"
      {...props}
    >
      <G filter="url(#filter0_d_21_423)">
        <Mask
          id="a"
          maskUnits="userSpaceOnUse"
          x={8}
          y={12}
          width={155}
          height={33}
          fill="#000"
        >
          <Path fill="#fff" d="M8 12H163V45H8z" />
          <Path d="M31.799 27.922v9.773c-.363.48-.932 1.008-1.705 1.582-.762.563-1.776 1.05-3.041 1.46-1.266.41-2.842.615-4.729.615-1.605 0-3.076-.27-4.412-.809a9.665 9.665 0 01-3.463-2.408c-.96-1.055-1.705-2.338-2.232-3.85-.527-1.523-.791-3.258-.791-5.203v-1.775c0-1.934.24-3.657.72-5.168.493-1.524 1.196-2.813 2.11-3.867a8.816 8.816 0 013.305-2.391c1.3-.55 2.771-.826 4.412-.826 2.097 0 3.832.351 5.203 1.054 1.383.692 2.449 1.653 3.199 2.883s1.225 2.637 1.424 4.219h-4.324c-.141-.89-.416-1.688-.827-2.39a4.185 4.185 0 00-1.722-1.653c-.738-.41-1.7-.615-2.883-.615-1.02 0-1.916.193-2.69.58a5.083 5.083 0 00-1.933 1.705c-.504.75-.885 1.664-1.143 2.742s-.386 2.309-.386 3.692v1.81c0 1.406.146 2.654.44 3.744.304 1.09.737 2.01 1.3 2.76a5.635 5.635 0 002.092 1.705c.82.375 1.746.563 2.777.563 1.008 0 1.834-.082 2.479-.247.644-.175 1.154-.38 1.529-.615.387-.246.685-.48.896-.703v-5.08h-5.326v-3.287h9.72zm21.639 9.58V41H39.85v-3.498h13.587zm-12.34-22.096V41h-4.413V15.406h4.413zm10.564 10.688v3.445H39.85v-3.445h11.812zm1.688-10.688v3.516h-13.5v-3.516h13.5zM77.45 27.5v1.406c0 1.934-.253 3.668-.757 5.203-.504 1.535-1.224 2.842-2.162 3.92a9.296 9.296 0 01-3.34 2.479c-1.3.562-2.742.844-4.324.844-1.57 0-3.006-.282-4.307-.844a9.674 9.674 0 01-3.357-2.479c-.95-1.078-1.687-2.385-2.215-3.92-.515-1.535-.773-3.27-.773-5.203V27.5c0-1.934.258-3.662.773-5.186.516-1.535 1.242-2.841 2.18-3.92a9.389 9.389 0 013.357-2.478c1.301-.574 2.737-.861 4.307-.861 1.582 0 3.024.287 4.324.861a9.19 9.19 0 013.358 2.479c.937 1.078 1.658 2.384 2.162 3.92.515 1.523.773 3.251.773 5.185zm-4.413 1.406v-1.441c0-1.43-.14-2.69-.422-3.78-.27-1.101-.674-2.02-1.213-2.76-.527-.75-1.177-1.312-1.95-1.687-.774-.386-1.647-.58-2.62-.58-.973 0-1.84.194-2.601.58-.762.375-1.413.938-1.952 1.688-.527.738-.931 1.658-1.213 2.76-.28 1.09-.422 2.35-.422 3.779v1.441c0 1.43.141 2.696.422 3.797.282 1.102.692 2.033 1.23 2.795.552.75 1.208 1.318 1.97 1.705.761.375 1.628.563 2.601.563.985 0 1.858-.188 2.62-.563.761-.387 1.406-.955 1.933-1.705.527-.762.926-1.693 1.195-2.795.282-1.101.422-2.367.422-3.797zm10.617-13.5h3.938l7.4 19.74 7.383-19.74h3.937L96.539 41H93.41l-9.756-25.594zm-1.793 0h3.745l.65 17.086V41H81.86V15.406zm22.5 0h3.762V41h-4.412v-8.508l.65-17.086zm16.963 25.946c-1.406 0-2.678-.229-3.814-.686a8.422 8.422 0 01-2.883-1.951 8.655 8.655 0 01-1.811-2.936c-.421-1.125-.632-2.338-.632-3.638v-.703c0-1.489.216-2.836.65-4.043.434-1.207 1.037-2.239 1.811-3.094a7.772 7.772 0 012.742-1.986c1.054-.458 2.197-.686 3.427-.686 1.36 0 2.549.228 3.569.685a6.711 6.711 0 012.531 1.934c.68.82 1.184 1.799 1.512 2.936.34 1.136.51 2.39.51 3.761v1.81H114.24v-3.04h10.512v-.334a5.945 5.945 0 00-.457-2.145 3.652 3.652 0 00-1.248-1.617c-.563-.41-1.313-.615-2.25-.615-.703 0-1.33.152-1.881.457-.539.293-.99.72-1.354 1.283-.363.563-.644 1.242-.843 2.04-.188.784-.281 1.67-.281 2.654v.703c0 .832.111 1.605.333 2.32a5.562 5.562 0 001.02 1.846c.445.527.984.943 1.617 1.248.633.293 1.354.44 2.162.44 1.02 0 1.928-.206 2.725-.616a6.242 6.242 0 002.074-1.74l2.233 2.162c-.411.597-.944 1.172-1.6 1.722-.656.54-1.459.979-2.408 1.319-.938.34-2.028.51-3.27.51zm19.635-19.371v3.093h-10.723V21.98h10.723zm-7.629-4.659h4.236v18.422c0 .586.082 1.037.246 1.354.176.304.417.51.721.615a3.28 3.28 0 001.072.158c.293 0 .575-.018.844-.053.27-.035.487-.07.651-.105l.017 3.234c-.351.106-.762.2-1.23.281a9.044 9.044 0 01-1.582.124c-.973 0-1.834-.17-2.584-.51-.75-.352-1.336-.92-1.758-1.705-.422-.785-.633-1.828-.633-3.13V17.323zm21.621 19.863v-9.07c0-.68-.123-1.265-.369-1.758a2.584 2.584 0 00-1.125-1.142c-.492-.27-1.113-.404-1.863-.404-.692 0-1.289.117-1.793.351-.504.235-.897.55-1.178.95-.281.398-.422.849-.422 1.353h-4.219c0-.75.182-1.477.545-2.18.364-.703.891-1.33 1.582-1.88.692-.552 1.518-.985 2.479-1.302.961-.316 2.039-.474 3.234-.474 1.43 0 2.696.24 3.797.72 1.113.481 1.986 1.208 2.619 2.18.645.961.967 2.168.967 3.621v8.456c0 .867.059 1.646.176 2.337.129.68.31 1.272.545 1.776V41h-4.342c-.199-.457-.357-1.037-.475-1.74a14.277 14.277 0 01-.158-2.075zm.615-7.751l.036 2.619h-3.041c-.786 0-1.477.076-2.075.228-.597.14-1.095.352-1.494.633a2.748 2.748 0 00-.896 1.02c-.2.398-.299.85-.299 1.353 0 .504.117.967.351 1.389.235.41.575.732 1.02.967.457.234 1.008.351 1.652.351.868 0 1.623-.176 2.268-.527.656-.364 1.172-.803 1.547-1.319.375-.527.574-1.025.597-1.494l1.372 1.881c-.141.48-.381.996-.721 1.547a7.491 7.491 0 01-1.336 1.582c-.539.492-1.19.896-1.951 1.213-.75.316-1.617.475-2.602.475-1.242 0-2.349-.246-3.322-.739-.973-.504-1.734-1.178-2.285-2.021-.551-.856-.826-1.822-.826-2.9 0-1.008.187-1.899.562-2.672a5.234 5.234 0 011.688-1.97c.75-.527 1.664-.925 2.742-1.195 1.078-.28 2.308-.421 3.691-.421h3.322z" />
        </Mask>
        <Path
          d="M31.799 27.922v9.773c-.363.48-.932 1.008-1.705 1.582-.762.563-1.776 1.05-3.041 1.46-1.266.41-2.842.615-4.729.615-1.605 0-3.076-.27-4.412-.809a9.665 9.665 0 01-3.463-2.408c-.96-1.055-1.705-2.338-2.232-3.85-.527-1.523-.791-3.258-.791-5.203v-1.775c0-1.934.24-3.657.72-5.168.493-1.524 1.196-2.813 2.11-3.867a8.816 8.816 0 013.305-2.391c1.3-.55 2.771-.826 4.412-.826 2.097 0 3.832.351 5.203 1.054 1.383.692 2.449 1.653 3.199 2.883s1.225 2.637 1.424 4.219h-4.324c-.141-.89-.416-1.688-.827-2.39a4.185 4.185 0 00-1.722-1.653c-.738-.41-1.7-.615-2.883-.615-1.02 0-1.916.193-2.69.58a5.083 5.083 0 00-1.933 1.705c-.504.75-.885 1.664-1.143 2.742s-.386 2.309-.386 3.692v1.81c0 1.406.146 2.654.44 3.744.304 1.09.737 2.01 1.3 2.76a5.635 5.635 0 002.092 1.705c.82.375 1.746.563 2.777.563 1.008 0 1.834-.082 2.479-.247.644-.175 1.154-.38 1.529-.615.387-.246.685-.48.896-.703v-5.08h-5.326v-3.287h9.72zm21.639 9.58V41H39.85v-3.498h13.587zm-12.34-22.096V41h-4.413V15.406h4.413zm10.564 10.688v3.445H39.85v-3.445h11.812zm1.688-10.688v3.516h-13.5v-3.516h13.5zM77.45 27.5v1.406c0 1.934-.253 3.668-.757 5.203-.504 1.535-1.224 2.842-2.162 3.92a9.296 9.296 0 01-3.34 2.479c-1.3.562-2.742.844-4.324.844-1.57 0-3.006-.282-4.307-.844a9.674 9.674 0 01-3.357-2.479c-.95-1.078-1.687-2.385-2.215-3.92-.515-1.535-.773-3.27-.773-5.203V27.5c0-1.934.258-3.662.773-5.186.516-1.535 1.242-2.841 2.18-3.92a9.389 9.389 0 013.357-2.478c1.301-.574 2.737-.861 4.307-.861 1.582 0 3.024.287 4.324.861a9.19 9.19 0 013.358 2.479c.937 1.078 1.658 2.384 2.162 3.92.515 1.523.773 3.251.773 5.185zm-4.413 1.406v-1.441c0-1.43-.14-2.69-.422-3.78-.27-1.101-.674-2.02-1.213-2.76-.527-.75-1.177-1.312-1.95-1.687-.774-.386-1.647-.58-2.62-.58-.973 0-1.84.194-2.601.58-.762.375-1.413.938-1.952 1.688-.527.738-.931 1.658-1.213 2.76-.28 1.09-.422 2.35-.422 3.779v1.441c0 1.43.141 2.696.422 3.797.282 1.102.692 2.033 1.23 2.795.552.75 1.208 1.318 1.97 1.705.761.375 1.628.563 2.601.563.985 0 1.858-.188 2.62-.563.761-.387 1.406-.955 1.933-1.705.527-.762.926-1.693 1.195-2.795.282-1.101.422-2.367.422-3.797zm10.617-13.5h3.938l7.4 19.74 7.383-19.74h3.937L96.539 41H93.41l-9.756-25.594zm-1.793 0h3.745l.65 17.086V41H81.86V15.406zm22.5 0h3.762V41h-4.412v-8.508l.65-17.086zm16.963 25.946c-1.406 0-2.678-.229-3.814-.686a8.422 8.422 0 01-2.883-1.951 8.655 8.655 0 01-1.811-2.936c-.421-1.125-.632-2.338-.632-3.638v-.703c0-1.489.216-2.836.65-4.043.434-1.207 1.037-2.239 1.811-3.094a7.772 7.772 0 012.742-1.986c1.054-.458 2.197-.686 3.427-.686 1.36 0 2.549.228 3.569.685a6.711 6.711 0 012.531 1.934c.68.82 1.184 1.799 1.512 2.936.34 1.136.51 2.39.51 3.761v1.81H114.24v-3.04h10.512v-.334a5.945 5.945 0 00-.457-2.145 3.652 3.652 0 00-1.248-1.617c-.563-.41-1.313-.615-2.25-.615-.703 0-1.33.152-1.881.457-.539.293-.99.72-1.354 1.283-.363.563-.644 1.242-.843 2.04-.188.784-.281 1.67-.281 2.654v.703c0 .832.111 1.605.333 2.32a5.562 5.562 0 001.02 1.846c.445.527.984.943 1.617 1.248.633.293 1.354.44 2.162.44 1.02 0 1.928-.206 2.725-.616a6.242 6.242 0 002.074-1.74l2.233 2.162c-.411.597-.944 1.172-1.6 1.722-.656.54-1.459.979-2.408 1.319-.938.34-2.028.51-3.27.51zm19.635-19.371v3.093h-10.723V21.98h10.723zm-7.629-4.659h4.236v18.422c0 .586.082 1.037.246 1.354.176.304.417.51.721.615a3.28 3.28 0 001.072.158c.293 0 .575-.018.844-.053.27-.035.487-.07.651-.105l.017 3.234c-.351.106-.762.2-1.23.281a9.044 9.044 0 01-1.582.124c-.973 0-1.834-.17-2.584-.51-.75-.352-1.336-.92-1.758-1.705-.422-.785-.633-1.828-.633-3.13V17.323zm21.621 19.863v-9.07c0-.68-.123-1.265-.369-1.758a2.584 2.584 0 00-1.125-1.142c-.492-.27-1.113-.404-1.863-.404-.692 0-1.289.117-1.793.351-.504.235-.897.55-1.178.95-.281.398-.422.849-.422 1.353h-4.219c0-.75.182-1.477.545-2.18.364-.703.891-1.33 1.582-1.88.692-.552 1.518-.985 2.479-1.302.961-.316 2.039-.474 3.234-.474 1.43 0 2.696.24 3.797.72 1.113.481 1.986 1.208 2.619 2.18.645.961.967 2.168.967 3.621v8.456c0 .867.059 1.646.176 2.337.129.68.31 1.272.545 1.776V41h-4.342c-.199-.457-.357-1.037-.475-1.74a14.277 14.277 0 01-.158-2.075zm.615-7.751l.036 2.619h-3.041c-.786 0-1.477.076-2.075.228-.597.14-1.095.352-1.494.633a2.748 2.748 0 00-.896 1.02c-.2.398-.299.85-.299 1.353 0 .504.117.967.351 1.389.235.41.575.732 1.02.967.457.234 1.008.351 1.652.351.868 0 1.623-.176 2.268-.527.656-.364 1.172-.803 1.547-1.319.375-.527.574-1.025.597-1.494l1.372 1.881c-.141.48-.381.996-.721 1.547a7.491 7.491 0 01-1.336 1.582c-.539.492-1.19.896-1.951 1.213-.75.316-1.617.475-2.602.475-1.242 0-2.349-.246-3.322-.739-.973-.504-1.734-1.178-2.285-2.021-.551-.856-.826-1.822-.826-2.9 0-1.008.187-1.899.562-2.672a5.234 5.234 0 011.688-1.97c.75-.527 1.664-.925 2.742-1.195 1.078-.28 2.308-.421 3.691-.421h3.322z"
          fill="#fff"
          shapeRendering="crispEdges"
        />
        <Path
          d="M31.799 27.922h3a3 3 0 00-3-3v3zm0 9.773l2.393 1.81a3 3 0 00.607-1.81h-3zm-1.705 1.582l1.782 2.414.006-.005-1.788-2.409zm-12.182 1.266l-1.143 2.773.02.009 1.123-2.782zm-3.463-2.408l-2.217 2.02.012.014 2.205-2.034zm-2.232-3.85l-2.835.982.002.006 2.833-.988zm-.07-12.146l-2.855-.923a1.373 1.373 0 00-.005.014l2.86.909zm5.414-6.258l1.157 2.768.012-.006-1.17-2.762zm9.615.228l-1.37 2.67.028.014 1.342-2.684zm4.623 7.102v3a3 3 0 002.976-3.375l-2.976.375zm-4.324 0l-2.964.468a3 3 0 002.964 2.532v-3zm-.827-2.39l-2.61 1.478.02.033 2.59-1.512zm-1.722-1.653l-1.457 2.622c.016.01.033.018.05.027l1.407-2.649zm-7.506 1.67l-2.472-1.7a2.068 2.068 0 00-.018.027l2.49 1.673zm-1.09 11.988l-2.897.779.008.029 2.89-.808zm1.3 2.76l-2.4 1.8.019.024 2.382-1.824zm2.093 1.705l-1.28 2.714.032.014 1.248-2.728zm5.256.316l.74 2.908.049-.013-.79-2.895zm1.529-.615l1.59 2.544.02-.013-1.61-2.53zm.896-.703l2.178 2.063a3 3 0 00.822-2.063h-3zm0-5.08h3a3 3 0 00-3-3v3zm-5.326 0h-3a3 3 0 003 3v-3zm0-3.287v-3a3 3 0 00-3 3h3zm6.72 0v9.773h6v-9.773h-6zm.608 7.964c-.12.159-.437.49-1.1.983l3.576 4.817c.883-.655 1.703-1.38 2.31-2.181l-4.786-3.619zm-1.094.978c-.42.31-1.112.67-2.184 1.019l1.85 5.707c1.458-.473 2.794-1.084 3.898-1.9l-3.564-4.826zm-2.184 1.019c-.87.282-2.11.469-3.804.469v6c2.08 0 3.993-.224 5.654-.762l-1.85-5.708zm-3.804.469c-1.265 0-2.349-.212-3.29-.591l-2.244 5.564c1.73.699 3.588 1.027 5.534 1.027v-6zm-3.268-.583a6.663 6.663 0 01-2.401-1.668l-4.411 4.068a12.663 12.663 0 004.525 3.148l2.287-5.548zm-2.39-1.655c-.656-.72-1.206-1.64-1.617-2.817l-5.665 1.976c.644 1.847 1.583 3.494 2.848 4.882l4.435-4.04zm-1.614-2.81c-.398-1.15-.626-2.544-.626-4.222h-6c0 2.212.3 4.288.956 6.184l5.67-1.962zm-.626-4.222v-1.775h-6v1.775h6zm0-1.775c0-1.69.21-3.098.58-4.26L9.287 21.23c-.591 1.862-.861 3.9-.861 6.077h6zM15 23.06c.387-1.196.908-2.116 1.522-2.825l-4.534-3.93c-1.214 1.401-2.1 3.06-2.697 4.91l5.71 1.845zm1.522-2.825a5.818 5.818 0 012.195-1.587l-2.315-5.536a11.817 11.817 0 00-4.414 3.194l4.534 3.93zm2.207-1.593c.876-.37 1.94-.588 3.243-.588v-6c-1.979 0-3.857.333-5.582 1.063l2.34 5.525zm3.243-.588c1.785 0 3.011.302 3.834.724l2.738-5.34c-1.92-.983-4.162-1.384-6.572-1.384v6zm3.861.738c.917.458 1.544 1.047 1.98 1.76l5.123-3.122c-1.065-1.747-2.571-3.08-4.42-4.005l-2.683 5.367zm1.98 1.76c.506.832.856 1.826 1.008 3.033l5.953-.75c-.246-1.957-.845-3.776-1.838-5.405l-5.124 3.123zm3.985-.342h-4.324v6h4.324v-6zm-1.361 2.532c-.193-1.219-.581-2.377-1.198-3.434l-5.183 3.023c.203.348.366.785.454 1.347l5.927-.936zm-1.18-3.402a7.184 7.184 0 00-2.925-2.822l-2.815 5.298c.273.145.418.302.52.482l5.22-2.958zm-2.875-2.796c-1.328-.737-2.84-.992-4.34-.992v6c.867 0 1.277.154 1.426.237l2.914-5.244zm-4.34-.992c-1.402 0-2.773.267-4.031.896l2.683 5.367c.289-.144.711-.263 1.348-.263v-6zm-4.031.896a8.082 8.082 0 00-3.064 2.69l4.944 3.399c.244-.355.508-.574.803-.722l-2.683-5.366zm-3.082 2.716c-.743 1.106-1.248 2.367-1.57 3.717l5.835 1.396c.193-.807.45-1.373.715-1.767l-4.98-3.346zm-1.57 3.717c-.324 1.355-.47 2.827-.47 4.39h6c0-1.203.113-2.193.305-2.994l-5.835-1.396zm-.47 4.39v1.81h6v-1.81h-6zm0 1.81c0 1.608.167 3.126.543 4.523l5.794-1.558c-.21-.782-.336-1.76-.336-2.965h-6zm.55 4.552c.386 1.376.964 2.65 1.79 3.752l4.8-3.6c-.297-.398-.586-.964-.81-1.768l-5.78 1.616zm1.809 3.776a8.635 8.635 0 003.194 2.595l2.559-5.428a2.638 2.638 0 01-.99-.815L15.25 37.41zm3.226 2.61c1.264.577 2.625.833 4.025.833v-6c-.662 0-1.154-.118-1.53-.29l-2.495 5.456zm4.025.833c1.143 0 2.242-.09 3.219-.338l-1.48-5.815c-.313.08-.867.153-1.739.153v6zm3.268-.351c.798-.218 1.614-.519 2.33-.966l-3.18-5.088c-.035.022-.238.131-.729.265l1.579 5.789zm2.35-.979c.503-.32 1.023-.705 1.464-1.17l-4.356-4.127c.017-.017.004-.001-.055.045s-.147.11-.274.19l3.221 5.062zm2.286-3.234v-5.08h-6v5.08h6zm-3-8.08h-5.326v6h5.326v-6zm-2.326 3v-3.287h-6v3.287h6zm-3-.287h9.72v-6h-9.72v6zm31.36 6.58h3a3 3 0 00-3-3v3zm0 3.498v3a3 3 0 003-3h-3zM39.85 41h-3a3 3 0 003 3v-3zm0-3.498v-3a3 3 0 00-3 3h3zm1.248-22.096h3a3 3 0 00-3-3v3zm0 25.594v3a3 3 0 003-3h-3zm-4.413 0h-3a3 3 0 003 3v-3zm0-25.594v-3a3 3 0 00-3 3h3zm14.977 10.688h3a3 3 0 00-3-3v3zm0 3.445v3a3 3 0 003-3h-3zm-11.812 0h-3a3 3 0 003 3v-3zm0-3.445v-3a3 3 0 00-3 3h3zm13.5-10.688h3a3 3 0 00-3-3v3zm0 3.516v3a3 3 0 003-3h-3zm-13.5 0h-3a3 3 0 003 3v-3zm0-3.516v-3a3 3 0 00-3 3h3zm10.587 22.096V41h6v-3.498h-6zm3 .498H39.85v6h13.587v-6zM42.85 41v-3.498h-6V41h6zm-3-.498h13.587v-6H39.85v6zm-1.752-25.096V41h6V15.406h-6zm3 22.594h-4.413v6h4.413v-6zm-1.413 3V15.406h-6V41h6zm-3-22.594h4.413v-6h-4.413v6zm11.977 7.688v3.445h6v-3.445h-6zm3 .445H39.85v6h11.812v-6zm-8.812 3v-3.445h-6v3.445h6zm-3-.445h11.812v-6H39.85v6zm10.5-13.688v3.516h6v-3.516h-6zm3 .516h-13.5v6h13.5v-6zm-10.5 3v-3.516h-6v3.516h6zm-3-.516h13.5v-6h-13.5v6zM74.53 38.03l-2.264-1.968-.012.014 2.276 1.954zm-3.34 2.479l1.191 2.753.02-.009-1.21-2.744zm-8.63 0l-1.221 2.74.03.013 1.19-2.753zm-5.573-6.399l-2.844.956.007.019 2.837-.975zm0-11.795l2.842.962.002-.006-2.844-.956zm2.18-3.92l-2.262-1.97-.002.002 2.264 1.969zm3.357-2.478l1.2 2.75.012-.006-1.212-2.744zm8.631 0l-1.211 2.744.02.01 1.191-2.754zm3.358 2.479l-2.275 1.956a.57.57 0 00.01.012l2.265-1.968zm2.162 3.92l-2.85.935.008.026 2.842-.962zm-4.06 1.37L69.7 24.4l.01.036 2.904-.75zm-1.214-2.76l-2.454 1.726c.01.015.02.03.032.044l2.422-1.77zm-1.95-1.687l-1.343 2.684.033.016 1.31-2.7zm-5.221 0l1.325 2.692.032-.017-1.357-2.675zm-1.952 1.688l-2.436-1.751-.005.007 2.441 1.744zm-1.213 2.76l2.905.75.002-.008-2.907-.742zm1.23 11.812l-2.448 1.733.03.043 2.419-1.776zm1.97 1.705l-1.359 2.675.034.017 1.325-2.692zm5.22 0l1.325 2.692.033-.017-1.358-2.675zm1.934-1.705l2.454 1.726.013-.018-2.467-1.708zm1.195-2.795l-2.906-.742-.008.03 2.914.712zM74.45 27.5v1.406h6V27.5h-6zm0 1.406c0 1.677-.218 3.087-.606 4.268l5.7 1.871c.621-1.89.906-3.948.906-6.139h-6zm-.606 4.268c-.395 1.205-.933 2.147-1.576 2.887l4.528 3.937c1.232-1.417 2.136-3.087 2.749-4.953l-5.701-1.871zm-1.588 2.9a6.297 6.297 0 01-2.275 1.69l2.423 5.488a12.297 12.297 0 004.404-3.268l-4.552-3.91zm-2.254 1.68c-.884.382-1.914.598-3.134.598v6c1.944 0 3.797-.348 5.515-1.09l-2.381-5.508zm-3.134.598c-1.205 0-2.23-.215-3.116-.598l-2.381 5.507c1.715.742 3.562 1.09 5.497 1.09v-6zm-3.086-.585a6.674 6.674 0 01-2.326-1.72l-4.503 3.965a12.673 12.673 0 004.388 3.236l2.441-5.48zm-2.326-1.72c-.659-.748-1.213-1.7-1.63-2.912l-5.674 1.949c.638 1.858 1.56 3.52 2.8 4.928l4.504-3.965zm-1.623-2.893c-.394-1.174-.617-2.578-.617-4.248h-6c0 2.197.293 4.263.93 6.159l5.687-1.91zm-.617-4.248V27.5h-6v1.406h6zm0-1.406c0-1.67.223-3.066.615-4.224l-5.683-1.923c-.64 1.888-.932 3.95-.932 6.147h6zm.617-4.23c.407-1.212.952-2.162 1.6-2.907l-4.528-3.937c-1.227 1.412-2.136 3.075-2.76 4.933l5.688 1.91zm1.598-2.905a6.39 6.39 0 012.295-1.7l-2.4-5.499a12.389 12.389 0 00-4.42 3.258l4.525 3.94zm2.307-1.704c.88-.39 1.898-.606 3.095-.606v-6c-1.944 0-3.797.357-5.518 1.117l2.423 5.488zm3.095-.606c1.212 0 2.235.218 3.113.605l2.423-5.489c-1.724-.76-3.584-1.116-5.536-1.116v6zm3.134.615c.877.38 1.628.93 2.273 1.68l4.549-3.912a12.191 12.191 0 00-4.441-3.276l-2.381 5.508zm2.284 1.693c.643.74 1.18 1.682 1.575 2.887l5.701-1.871c-.612-1.866-1.516-3.536-2.748-4.953l-4.528 3.937zm1.584 2.913c.392 1.159.615 2.553.615 4.224h6c0-2.197-.292-4.259-.932-6.147l-5.683 1.923zm2.203 5.63v-1.441h-6v1.441h6zm0-1.441c0-1.618-.158-3.139-.517-4.53l-5.81 1.5c.204.79.327 1.789.327 3.03h6zm-.508-4.492c-.34-1.394-.885-2.695-1.704-3.816l-4.846 3.538c.26.355.524.894.722 1.704l5.828-1.427zM73.856 19.2c-.8-1.138-1.834-2.05-3.096-2.661l-2.618 5.399c.285.138.552.351.806.713l4.908-3.45zm-3.063-2.645c-1.24-.62-2.581-.897-3.961-.897v6c.566 0 .97.11 1.278.264l2.683-5.367zm-3.961-.897c-1.379 0-2.722.277-3.96.905l2.716 5.35c.286-.145.678-.255 1.244-.255v-6zm-3.927.889c-1.241.611-2.261 1.514-3.062 2.628l4.872 3.502c.278-.386.559-.608.84-.747l-2.65-5.383zm-3.067 2.635c-.79 1.106-1.328 2.388-1.678 3.761l5.813 1.485c.212-.83.483-1.388.748-1.759l-4.883-3.487zm-1.676 3.754c-.36 1.39-.517 2.91-.517 4.529h6c0-1.241.122-2.24.326-3.03l-5.81-1.5zm-.517 4.529v1.441h6v-1.441h-6zm0 1.441c0 1.62.158 3.142.515 4.54l5.813-1.485c-.206-.806-.328-1.814-.328-3.055h-6zm.515 4.54c.352 1.381.896 2.666 1.688 3.785l4.898-3.466c-.287-.405-.563-.983-.773-1.804l-5.813 1.484zm1.719 3.828c.803 1.094 1.812 1.986 3.029 2.604l2.716-5.35c-.307-.155-.611-.4-.91-.806l-4.835 3.552zm3.062 2.62c1.23.606 2.561.872 3.926.872v-6c-.58 0-.983-.11-1.276-.254l-2.65 5.383zm3.926.872c1.37 0 2.71-.263 3.944-.871l-2.65-5.383c-.288.142-.696.254-1.294.254v6zm3.977-.888c1.231-.625 2.242-1.533 3.03-2.654l-4.908-3.451c-.266.378-.545.607-.838.755l2.716 5.35zm3.043-2.672c.776-1.123 1.305-2.41 1.642-3.79l-5.828-1.426c-.201.823-.47 1.4-.748 1.8l4.933 3.416zm1.635-3.76c.357-1.398.515-2.92.515-4.54h-6c0 1.24-.123 2.249-.329 3.055l5.814 1.484zm8.132-18.04v-3a3 3 0 00-2.803 4.069l2.803-1.069zm3.938 0l2.809-1.053a3 3 0 00-2.81-1.947v3zm7.4 19.74L92.183 36.2a3 3 0 005.62-.003l-2.81-1.05zm7.383-19.74v-3a3 3 0 00-2.81 1.95l2.81 1.05zm3.937 0l2.803 1.07a3 3 0 00-2.803-4.07v3zM96.539 41v3a3 3 0 002.803-1.93L96.539 41zm-3.129 0l-2.803 1.069A3 3 0 0093.41 44v-3zM81.861 15.406v-3a3 3 0 00-3 3h3zm3.745 0l2.997-.114a3 3 0 00-2.997-2.886v3zm.65 17.086h3c0-.038 0-.076-.002-.114l-2.998.114zm0 8.508v3a3 3 0 003-3h-3zm-4.395 0h-3a3 3 0 003 3v-3zm22.5-25.594v-3a3 3 0 00-2.998 2.886l2.998.114zm3.762 0h3a3 3 0 00-3-3v3zm0 25.594v3a3 3 0 003-3h-3zm-4.412 0h-3a3 3 0 003 3v-3zm0-8.508l-2.998-.114-.002.114h3zM83.654 18.406h3.938v-6h-3.938v6zm1.129-1.947l7.4 19.74 5.618-2.106-7.4-19.74-5.618 2.106zm13.02 19.738l7.382-19.74-5.62-2.102-7.383 19.74 5.62 2.102zm4.572-17.79h3.937v-6h-3.937v6zm1.135-4.071L93.737 39.93l5.605 2.14 9.773-25.593-5.605-2.141zM96.54 38h-3.13v6h3.13v-6zm-.327 1.931l-9.755-25.593-5.607 2.137 9.756 25.593 5.606-2.136zM81.861 18.407h3.745v-6H81.86v6zm.747-2.886l.65 17.086 5.996-.228-.65-17.086-5.996.228zm.648 16.972V41h6v-8.508h-6zm3 5.508H81.86v6h4.395v-6zm-1.395 3V15.406h-6V41h6zm19.5-22.594h3.762v-6h-3.762v6zm.762-3V41h6V15.406h-6zm3 22.594h-4.412v6h4.412v-6zm-1.412 3v-8.508h-6V41h6zm-.002-8.394l.65-17.086-5.996-.228-.65 17.086 5.996.228zm10.801 8.06l-1.154 2.77.035.014 1.119-2.784zm-2.883-1.951l-2.182 2.059.015.016 2.167-2.075zm.018-14.414l2.225 2.012.013-.015-2.238-1.997zm12.269-.053l-2.339 1.878a.788.788 0 00.029.036l2.31-1.914zm1.512 2.936l-2.883.832.008.027 2.875-.86zm.51 5.572v3a3 3 0 003-3h-3zm-14.696 0h-3a3 3 0 003 3v-3zm0-3.041v-3a3 3 0 00-3 3h3zm10.512 0v3a3 3 0 003-3h-3zm0-.334h3l-.001-.092-2.999.092zm-.457-2.145l-2.782 1.123a.699.699 0 00.017.041l2.765-1.164zm-5.379-1.775l1.433 2.636.019-.011-1.452-2.625zm-2.197 3.322l-2.911-.727-.007.03 2.918.697zm.052 5.678l-2.864.892.018.057 2.846-.95zm2.637 3.094l-1.301 2.703.041.02 1.26-2.723zm6.961-1.916l2.087-2.155a3 3 0 00-4.451.308l2.364 1.847zm2.233 2.162l2.473 1.697a3 3 0 00-.386-3.852l-2.087 2.155zm-1.6 1.722l1.904 2.319a.625.625 0 01.025-.02l-1.929-2.299zm-2.408 1.319l-1.011-2.825-.012.004 1.023 2.82zm-3.27-2.49c-1.079 0-1.963-.175-2.695-.47l-2.238 5.568c1.541.62 3.2.902 4.933.902v-6zm-2.66-.455a5.417 5.417 0 01-1.87-1.257l-4.334 4.15a11.43 11.43 0 003.896 2.645l2.308-5.538zm-1.855-1.241a5.649 5.649 0 01-1.184-1.93l-5.618 2.107a11.647 11.647 0 002.438 3.94l4.364-4.117zm-1.184-1.93c-.285-.761-.441-1.614-.441-2.585h-6c0 1.63.265 3.203.823 4.692l5.618-2.107zm-.441-2.585v-.703h-6v.703h6zm0-.703c0-1.197.174-2.195.473-3.03l-5.646-2.028c-.568 1.58-.827 3.278-.827 5.058h6zm.473-3.03c.316-.88.73-1.561 1.213-2.095l-4.451-4.024c-1.064 1.177-1.857 2.557-2.408 4.091l5.646 2.029zm1.226-2.11a4.783 4.783 0 011.697-1.23l-2.386-5.506a10.776 10.776 0 00-3.788 2.742l4.477 3.994zm1.697-1.23c.652-.284 1.385-.44 2.234-.44v-6c-1.611 0-3.163.302-4.62.934l2.386 5.505zm2.234-.44c1.027 0 1.782.173 2.342.424l2.454-5.475c-1.48-.663-3.103-.948-4.796-.948v6zm2.342.424c.607.272 1.062.63 1.419 1.074l4.678-3.756a9.702 9.702 0 00-3.643-2.793l-2.454 5.475zm1.448 1.11c.389.47.713 1.07.939 1.854l5.765-1.664c-.43-1.49-1.113-2.847-2.084-4.018l-4.62 3.828zm.947 1.88c.245.82.385 1.779.385 2.903h6c0-1.618-.201-3.166-.636-4.62l-5.749 1.718zm.385 2.903v1.81h6v-1.81h-6zm3-1.19H114.24v6h14.696v-6zm-11.696 3v-3.04h-6v3.04h6zm-3-.04h10.512v-6H114.24v6zm13.512-3v-.334h-6v.334h6zm-.001-.426a8.979 8.979 0 00-.691-3.217l-5.53 2.329c.131.31.211.66.223 1.072l5.998-.184zm-.674-3.175a6.646 6.646 0 00-2.263-2.919l-3.535 4.848a.65.65 0 01.234.316l5.564-2.245zm-2.263-2.919c-1.227-.895-2.662-1.191-4.017-1.191v6c.519 0 .585.114.482.04l3.535-4.849zm-4.017-1.191c-1.151 0-2.288.253-3.333.832l2.904 5.25c.056-.031.173-.082.429-.082v-6zm-3.314.821a6.73 6.73 0 00-2.441 2.292l5.041 3.255c.116-.18.207-.244.266-.275l-2.866-5.272zm-2.441 2.292c-.577.893-.972 1.892-1.234 2.939l5.821 1.455c.137-.547.304-.908.454-1.14l-5.041-3.254zm-1.241 2.97c-.253 1.056-.363 2.18-.363 3.35h6c0-.798.076-1.443.199-1.957l-5.836-1.394zm-.363 3.35v.704h6v-.703h-6zm0 .704c0 1.1.147 2.178.469 3.212l5.729-1.784a4.754 4.754 0 01-.198-1.428h-6zm.487 3.269a8.54 8.54 0 001.574 2.832l4.584-3.87a2.536 2.536 0 01-.465-.86l-5.693 1.898zm1.574 2.832a7.836 7.836 0 002.608 2.016l2.603-5.406a1.844 1.844 0 01-.627-.48l-4.584 3.87zm2.649 2.035c1.086.503 2.248.717 3.422.717v-6c-.442 0-.722-.079-.901-.162l-2.521 5.445zm3.422.717c1.431 0 2.821-.29 4.098-.948l-2.746-5.334c-.317.163-.744.282-1.352.282v6zm4.098-.948a9.242 9.242 0 003.065-2.56l-4.728-3.694c-.336.43-.696.72-1.083.92l2.746 5.334zm-1.386-2.252l2.232 2.162 4.175-4.31-2.233-2.162-4.174 4.31zm1.846-1.69c-.232.337-.57.715-1.055 1.121l3.858 4.596c.827-.694 1.555-1.465 2.144-2.323l-4.947-3.395zm-1.03 1.101c-.346.284-.832.568-1.515.812l2.022 5.65c1.215-.436 2.334-1.03 3.301-1.825l-3.808-4.637zm-1.527.816c-.54.196-1.271.33-2.247.33v6c1.509 0 2.958-.205 4.292-.689l-2.045-5.64zm17.388-16.04h3a3 3 0 00-3-3v3zm0 3.093v3a3 3 0 003-3h-3zm-10.723 0h-3a3 3 0 003 3v-3zm0-3.094v-3a3 3 0 00-3 3h3zm3.094-4.658v-3a3 3 0 00-3 3h3zm4.236 0h3a3 3 0 00-3-3v3zm.246 19.776l-2.663 1.38c.021.04.042.08.065.119l2.598-1.5zm3.288.615l3-.016a3 3 0 00-3.629-2.918l.629 2.934zm.017 3.234l.862 2.874a3 3 0 002.138-2.89l-3 .016zm-1.23.281l-.517-2.955-.013.003.53 2.952zm-4.166-.386l-1.274 2.716.036.016 1.238-2.732zm2.238-18.861v3.093h6V21.98h-6zm3 .093h-10.723v6h10.723v-6zm-7.723 3V21.98h-6v3.094h6zm-3-.094h10.723v-6h-10.723v6zm3.094-4.658h4.236v-6h-4.236v6zm1.236-3v18.422h6V17.322h-6zm0 18.422c0 .793.099 1.801.583 2.735l5.327-2.762c.045.088.072.158.086.202.014.044.018.068.018.066a.496.496 0 01-.008-.063 2.458 2.458 0 01-.006-.178h-6zm.648 2.853a4.313 4.313 0 002.338 1.95l1.963-5.67c.194.068.387.176.557.321.168.143.275.29.339.4l-5.197 2.999zm2.338 1.95c.693.24 1.396.324 2.053.324v-6a1 1 0 01-.137-.007c-.016-.003.003-.001.047.014l-1.963 5.67zm2.053.324c.413 0 .825-.025 1.232-.078l-.776-5.95a3.526 3.526 0 01-.456.028v6zm1.232-.078c.308-.04.614-.087.891-.147l-1.257-5.867a5.699 5.699 0 01-.41.065l.776 5.95zM138.1 37.73l.017 3.235 6-.033-.017-3.234-6 .032zm2.155.345a7.88 7.88 0 01-.885.2l1.034 5.91a13.762 13.762 0 001.575-.363l-1.724-5.747zm-.898.202a6.103 6.103 0 01-1.052.076v6c.727 0 1.438-.05 2.112-.17l-1.06-5.906zm-1.052.076c-.622 0-1.049-.108-1.346-.243l-2.476 5.465c1.203.546 2.498.778 3.822.778v-6zm-1.311-.227c-.121-.056-.247-.145-.388-.408l-5.286 2.84c.703 1.307 1.748 2.355 3.127 3.001l2.547-5.433zm-.388-.408c-.105-.194-.276-.692-.276-1.71h-6c0 1.585.251 3.173.99 4.55l5.286-2.84zm-.276-1.71V17.323h-6v18.686h6zm17.127-10.792l-1.441 2.631.026.014 1.415-2.645zm-5.256 2.25v3a3 3 0 003-3h-3zm-4.219 0h-3a3 3 0 003 3v-3zm11.637-5.115l-1.199 2.75.01.004 1.189-2.754zm2.619 2.18l-2.514 1.635a.62.62 0 00.023.035l2.491-1.67zm1.143 14.413l-2.958.502.01.057 2.948-.559zm.545 1.776h3c0-.437-.096-.87-.28-1.265l-2.72 1.265zm0 .281v3a3 3 0 003-3h-3zm-4.342 0l-2.75 1.199a3 3 0 002.75 1.801v-3zm-.475-1.74l-2.967.438.008.055 2.959-.493zm.457-9.826l3-.04a3 3 0 00-3-2.96v3zm.036 2.619v3a3 3 0 002.999-3.04l-2.999.04zm-5.116.228l.687 2.92.054-.013-.741-2.907zm-2.338 4.395l-2.622 1.457.018.031 2.604-1.488zm1.02.967l-1.397 2.654.028.015 1.369-2.67zm3.92-.176l1.436 2.633.017-.008-1.453-2.625zm1.547-1.319l2.426 1.765a.428.428 0 01.019-.026l-2.445-1.739zm.597-1.494l2.425-1.767a3 3 0 00-5.421 1.617l2.996.15zm1.372 1.881l2.879.843a3.003 3.003 0 00-.455-2.61l-2.424 1.767zm-2.057 3.13l2.023 2.215.002-.003-2.025-2.213zm-1.951 1.212l-1.151-2.77-.015.006 1.166 2.764zm-5.924-.264l-1.38 2.664.025.013 1.355-2.677zm-2.285-2.021l-2.523 1.624.011.016 2.512-1.64zm-.264-5.572l-2.691-1.326a.121.121 0 00-.008.017l2.699 1.309zm1.688-1.97l-1.726-2.453-.018.013 1.744 2.44zm2.742-1.195l.727 2.91.03-.007-.757-2.903zm9.398 7.33v-9.07h-6v9.07h6zm0-9.07c0-1.038-.188-2.104-.686-3.1l-5.366 2.684c-.006-.01.052.095.052.416h6zm-.686-3.1a5.583 5.583 0 00-2.393-2.445l-2.83 5.29c.004.002-.025-.013-.063-.053a.432.432 0 01-.08-.108l5.366-2.683zm-2.367-2.431c-1.058-.58-2.214-.773-3.304-.773v6c.409 0 .495.075.422.035l2.882-5.262zm-3.304-.773c-1.025 0-2.074.173-3.058.63l2.53 5.441c.023-.01.17-.072.528-.072v-6zm-3.058.63c-.912.425-1.74 1.057-2.364 1.94l4.902 3.46a.44.44 0 01-.036.045l-.027.025c-.011.01.001-.004.055-.029l-2.53-5.44zm-2.364 1.94a5.289 5.289 0 00-.971 3.084h6a.74.74 0 01-.127.377l-4.902-3.46zm2.029.084h-4.219v6h4.219v-6zm-1.219 3c0-.244.055-.501.211-.803l-5.331-2.754a7.688 7.688 0 00-.88 3.557h6zm.211-.803c.147-.286.386-.593.786-.911l-3.739-4.693c-.983.783-1.799 1.73-2.378 2.85l5.331 2.754zm.786-.911c.376-.3.876-.577 1.547-.798l-1.876-5.699c-1.251.412-2.403 1.002-3.41 1.804l3.739 4.693zm1.547-.798c.609-.2 1.363-.324 2.296-.324v-6c-1.457 0-2.859.193-4.172.625l1.876 5.699zm2.296-.324c1.094 0 1.939.183 2.598.47l2.399-5.5c-1.545-.673-3.231-.97-4.997-.97v6zm2.608.475c.597.258.998.607 1.294 1.061l5.029-3.272c-.97-1.49-2.315-2.594-3.945-3.298l-2.378 5.509zm1.317 1.096c.237.354.458.94.458 1.95h6c0-1.895-.423-3.724-1.475-5.292l-4.983 3.342zm.458 1.95v8.456h6V28.15h-6zm0 8.456c0 .997.067 1.948.218 2.839l5.916-1.003c-.084-.492-.134-1.1-.134-1.837h-6zm.228 2.896c.165.867.412 1.706.773 2.482l5.44-2.53c-.108-.232-.224-.577-.318-1.07l-5.895 1.118zm.493 1.217V41h6v-.281h-6zm3-2.719h-4.342v6h4.342v-6zm-1.592 1.801c-.069-.157-.173-.48-.265-1.034l-5.919.986c.142.851.354 1.69.684 2.446l5.5-2.398zm-.257-.98a11.188 11.188 0 01-.126-1.636h-6c0 .826.065 1.664.191 2.513l5.935-.876zm-5.51-9.347l.035 2.619 5.999-.08-.035-2.62-5.999.08zm3.035-.421h-3.041v6h3.041v-6zm-3.041 0c-.971 0-1.921.093-2.816.321l1.482 5.814c.301-.076.734-.135 1.334-.135v-6zm-2.762.308c-.879.207-1.754.55-2.537 1.102l3.46 4.902c.015-.01.135-.089.451-.163l-1.374-5.841zm-2.537 1.102a5.76 5.76 0 00-1.85 2.129l5.367 2.683a.438.438 0 01-.057.086c-.017.02-.022.02 0 .004l-3.46-4.902zm-1.85 2.129a5.985 5.985 0 00-.615 2.695h6c0-.054.005-.074.004-.07l-.006.02a.34.34 0 01-.016.038l-5.367-2.683zm-.615 2.695c0 .99.236 1.958.729 2.846l5.245-2.914a.51.51 0 01.012.025l.01.032c.006.022.004.028.004.011h-6zm.747 2.877a5.46 5.46 0 002.227 2.133l2.794-5.31a.614.614 0 01.188.2l-5.209 2.977zm2.255 2.148c.975.5 2.019.682 3.021.682v-6c-.287 0-.344-.052-.283-.02l-2.738 5.338zm3.021.682c1.278 0 2.546-.261 3.704-.894l-2.873-5.267c-.13.071-.374.161-.831.161v6zm3.721-.902c.972-.539 1.846-1.252 2.52-2.179l-4.852-3.53c-.076.105-.234.27-.574.46l2.906 5.248zm2.539-2.205c.585-.823 1.088-1.865 1.149-3.083l-5.993-.3a.788.788 0 01.044-.239c.005-.011-.013.037-.09.145l4.89 3.477zm-4.272-1.465l1.371 1.88 4.849-3.534-1.371-1.88-4.849 3.534zm.916-.73c-.047.16-.157.43-.394.815l5.106 3.15c.442-.716.812-1.478 1.047-2.28l-5.759-1.684zm-.394.815c-.174.282-.431.599-.808.944l4.05 4.426c.725-.663 1.358-1.4 1.864-2.22l-5.106-3.15zm-.806.942c-.252.23-.597.457-1.079.657l2.302 5.541a9.637 9.637 0 002.823-1.767l-4.046-4.431zm-1.094.664c-.313.132-.77.239-1.436.239v6c1.303 0 2.58-.21 3.768-.711l-2.332-5.528zm-1.436.239c-.838 0-1.47-.164-1.968-.415l-2.709 5.353c1.448.733 3.03 1.062 4.677 1.062v-6zm-1.942-.402c-.555-.288-.909-.625-1.153-.998l-5.024 3.28c.857 1.314 2.026 2.325 3.417 3.045l2.76-5.328zm-1.143-.982c-.22-.342-.348-.738-.348-1.277h-6c0 1.618.422 3.156 1.303 4.525l5.045-3.248zm-.348-1.277c0-.632.116-1.062.261-1.363l-5.398-2.617c-.605 1.246-.863 2.597-.863 3.98h6zm.253-1.346c.16-.324.39-.603.74-.853l-3.487-4.882a8.238 8.238 0 00-2.635 3.084l5.382 2.651zm.722-.84c.392-.276.95-.54 1.744-.74l-1.455-5.82c-1.362.34-2.632.872-3.74 1.652l3.451 4.908zm1.774-.747c.78-.203 1.748-.324 2.934-.324v-6c-1.58 0-3.072.16-4.449.519l1.515 5.805zm2.934-.324h3.322v-6h-3.322v6z"
          fill="url(#paint0_linear_21_423)"
          mask="url(#a)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_21_423"
          x1={85.5}
          y1={-24.4747}
          x2={80.2849}
          y2={67.4297}
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

export default GeoMetaIconM;