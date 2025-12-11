// import progress from "../../../assets/progress.PNG";

const ProgressImage = ({progressImage}) => {
  return (
    <div className="w-full border-2">
      <img src={progressImage} className="w-full" alt="" />
    </div>
  );
};

export default ProgressImage;
