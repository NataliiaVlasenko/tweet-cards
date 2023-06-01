import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    
      <ThreeCircles
        height="100"
        width="100"
        color="#5736A3"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "90px",
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    
  );
};

export default Loader;
