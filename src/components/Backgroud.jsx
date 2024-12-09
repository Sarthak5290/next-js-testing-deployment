const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 min-h-[200vh] min-w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_center,#d5c5ff,transparent)]"></div>
    </div>
  );
};

export default Background;
