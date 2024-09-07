import { Card } from "@/components/ui/card";

const Testimonial = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-12">
      <div className="">
        <h2 className="text-center text-[32px] font-holiday">Words from</h2>
        <h1 className="text-[48px] font-lovelo">Happy Clients</h1>
      </div>

      <div>
        <Card className="w-[270px] max-w-[300] max-h-[800px] h-[300px]"></Card>
      </div>

      {/* 
      <div className="h-[680px] flex justify-end items-end relative">
        <YStack className="absolute max-w-[500px] top-[24px] right-12">
          <h1 className="font-lovelo text-[48px]">
            “ He is good at some-thing and I fucking Hate it “
          </h1>
          <Separator className="my-2" />
          <YStack>
            <span className="uppercase font-bold text-[16px]">
              Criztian Jade Tuplano
            </span>
            <span className="uppercase italic opacity-50 text-[14px] font-semibold">
              student
            </span>
          </YStack>
        </YStack>

        <Xstack className="gap-4 justify-end items-end">
          <Card className="w-[270px] max-w-[300] max-h-[800px] h-[300px]"></Card>
          <Card className="w-[350px] max-w-[350px] max-h-[800px] h-[650px]"></Card>
          <Card className="w-[270px] max-w-[300] max-h-[800px] h-[300px]"></Card>
          <Card className="w-[270px] max-w-[300] max-h-[800px] h-[300px]"></Card>
        </Xstack>
      </div> */}
    </section>
  );
};

export default Testimonial;
