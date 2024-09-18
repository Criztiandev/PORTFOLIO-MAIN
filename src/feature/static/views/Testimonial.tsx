import { Card } from "@/components/ui/card";

const Testimonial = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-12">
      Bento box
      <div className="">
        <h2 className="text-center text-[32px] font-holiday">Words from</h2>
        <h1 className="text-[48px] font-lovelo">Happy Clients</h1>
      </div>
      <div>
        <Card className="w-[270px] max-w-[300] max-h-[800px] h-[300px]"></Card>
      </div>
    </section>
  );
};

export default Testimonial;
