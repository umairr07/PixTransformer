const Loader = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-2 justify-center">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center text-[#DC2626]">
          If it takes long time, please refresh the page or Try something else
        </h1>
      </div>
    </div>
  );
};

export default Loader;
