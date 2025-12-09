

// const Title = ({ text, className = "" }) => {
//   return (
//     <h1
//       style={{ fontFamily: "Spectral, Arial, sans-serif" }}
//       className={`text-2xl md:text-5xl font-light mb-8 leading-tight transition-all duration-500 ${className}`}>
//       {text}
//     </h1>
//   );
// };

// export default Title;




const Title = ({ text, className = "", fontFamily = "Spectral, Arial, sans-serif" }) => {
  return (
    <h1
      style={{ fontFamily }}
      className={`text-2xl md:text-5xl font-light mb-8 leading-tight transition-all duration-500 ${className}`}
    >
      {text}
    </h1>
  );
};

export default Title;
