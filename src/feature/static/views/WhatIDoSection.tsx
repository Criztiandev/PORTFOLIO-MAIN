const WhatIDoSection = () => {
  return (
    <section className="min-h-screen relative cursor-default flex justify-center flex-col gap-4 ">
      <h2 className="text-[32px] font-holiday pl-[48px] ">What I do</h2>

      <div className="flex flex-col gap-4 border-t">
        <span className="pl-[48px]  text-[84px] font-bold font-lovelo border-b">
          Web Developement
        </span>
        <span className=" pl-[48px] text-[84px] font-bold font-lovelo border-b">
          Mobile Development
        </span>
        <span className="pl-[48px]  text-[84px] font-bold font-lovelo border-b">
          Game Development
        </span>
        <span className="pl-[48px]  text-[84px] font-bold font-lovelo border-b">
          Web Design
        </span>
        <span className="pl-[48px]  text-[84px] font-bold font-lovelo border-b">
          Maging Delulu
        </span>
      </div>
    </section>
  );
};

export default WhatIDoSection;
