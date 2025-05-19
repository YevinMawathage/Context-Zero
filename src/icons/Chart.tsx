type SvgChart = React.SVGAttributes<SVGSVGElement>;

const SvgChart: React.FC<SvgChart> = (props) => {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-280h80v-280h-80zm160 0h80v-400h-80zm160 0h80v-160h-80zM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120zm0-80h560v-560H200zm0-560v560z" />
  </svg>
);
};
export default SvgChart;
