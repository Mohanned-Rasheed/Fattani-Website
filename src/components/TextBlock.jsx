const TextBlock = ({icon, title, text}) => {
  return (
    <>
      <div className="flex flex-col space-y-2 items-center">
        {icon}
        <div className="text-2xl">{title}</div>
        <div className="text-lg mx-10">
          {text}{" "}
        </div>
      </div>
    </>
  );
};
export default TextBlock;
