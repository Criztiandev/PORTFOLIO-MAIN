import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/layout/container/Wrapper";
import { Badge } from "@/components/ui/badge";
import YStack from "@/components/layout/container/YStack";
import { Card } from "@/components/ui/card";
import Xstack from "@/components/layout/container/Xstack";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <div className="min-h-screen max-w-screen-xl  mx-auto">
      <div className="grid grid-cols-[40%_auto]">
        <Wrapper className="h-full border-r">
          <div className=" flex justify-center items-center flex-col gap-4 pr-[48px] ">
            <Avatar className="size-[200px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-[48px] font-lovelo">About me</h2>
            <Separator />
            <p>
              By binding methods or using arrow functions, you ensure that this
              points to the correct context, preventing this from being
              undefined at runtime. This should address the error. By binding
              methods or using arrow functions, you ensure that this points to
              the corre.
            </p>
          </div>
        </Wrapper>

        <div className="px-[32px] space-y-[48px]">
          <YStack>
            <div>
              <h2 className="text-[48px] font-lovelo ">Experience</h2>
              <Separator />
            </div>
            <ul className="list-disc p-4 space-y-8">
              <li className="space-y-4">
                <Wrapper>
                  <h3 className="text-[18px] font-lovelo mb-2">
                    Jr Full Stack at Management Information Service
                  </h3>
                  <Badge>January 2024 - May 2024</Badge>
                </Wrapper>
                <p className="text-base">
                  By binding methods or using arrow functions, you ensure that
                  this points to the correct context, preventing this from being
                  undefined at runtime. This should address the error. By
                  binding methods or using arrow functions, you ensure that this
                  points to the corre.
                </p>
              </li>

              <li className="space-y-4">
                <Wrapper>
                  <h3 className="text-[18px] font-lovelo mb-2">
                    Jr Full Stack at Management Information Service
                  </h3>
                  <Badge>January 2024 - May 2024</Badge>
                </Wrapper>
                <p className="text-base">
                  By binding methods or using arrow functions, you ensure that
                  this points to the correct context, preventing this from being
                  undefined at runtime. This should address the error. By
                  binding methods or using arrow functions, you ensure that this
                  points to the corre.
                </p>
              </li>
            </ul>
          </YStack>

          <YStack>
            <div>
              <h2 className="text-[48px] font-lovelo ">Education</h2>
              <Separator />
            </div>
            <ul className="list-disc p-4 space-y-8">
              <li className="space-y-4">
                <Wrapper>
                  <h3 className="text-[18px] font-lovelo mb-2">
                    Jr Full Stack at Management Information Service
                  </h3>
                  <Badge>January 2024 - May 2024</Badge>
                </Wrapper>
                <p className="text-base">
                  By binding methods or using arrow functions, you ensure that
                  this points to the correct context, preventing this from being
                  undefined at runtime. This should address the error. By
                  binding methods or using arrow functions, you ensure that this
                  points to the corre.
                </p>
              </li>

              <li className="space-y-4">
                <Wrapper>
                  <h3 className="text-[18px] font-lovelo mb-2">
                    Jr Full Stack at Management Information Service
                  </h3>
                  <Badge>January 2024 - May 2024</Badge>
                </Wrapper>
                <p className="text-base">
                  By binding methods or using arrow functions, you ensure that
                  this points to the correct context, preventing this from being
                  undefined at runtime. This should address the error. By
                  binding methods or using arrow functions, you ensure that this
                  points to the corre.
                </p>
              </li>
            </ul>
          </YStack>

          <YStack>
            <div>
              <h2 className="text-[48px] font-lovelo ">Awards</h2>
              <Separator />
            </div>
            <ul className="list-disc p-4 space-y-8">
              <li className="space-y-4">
                <Wrapper>
                  <h3 className="text-[18px] font-lovelo mb-2">
                    Jr Full Stack at Management Information Service
                  </h3>
                  <Badge>January 2024 - May 2024</Badge>
                </Wrapper>
                <p className="text-base">
                  By binding methods or using arrow functions, you ensure that
                  this points to the correct context, preventing this from being
                  undefined at runtime. This should address the error. By
                  binding methods or using arrow functions, you ensure that this
                  points to the corre.
                </p>
              </li>

              <li className="space-y-4">
                <Wrapper>
                  <h3 className="text-[18px] font-lovelo mb-2">
                    Jr Full Stack at Management Information Service
                  </h3>
                  <Badge>January 2024 - May 2024</Badge>
                </Wrapper>
                <p className="text-base">
                  By binding methods or using arrow functions, you ensure that
                  this points to the correct context, preventing this from being
                  undefined at runtime. This should address the error. By
                  binding methods or using arrow functions, you ensure that this
                  points to the corre.
                </p>
              </li>
            </ul>
          </YStack>

          <YStack>
            <div>
              <h2 className="text-[48px] font-lovelo ">Awards</h2>
              <Separator />
            </div>
            <ul className="list-disc p-4 space-y-8">
              <li className="space-y-4">
                <Wrapper>
                  <h3 className="text-[18px] font-lovelo mb-2">
                    Jr Full Stack at Management Information Service
                  </h3>
                  <Badge>January 2024 - May 2024</Badge>
                </Wrapper>
                <p className="text-base">
                  By binding methods or using arrow functions, you ensure that
                  this points to the correct context, preventing this from being
                  undefined at runtime. This should address the error. By
                  binding methods or using arrow functions, you ensure that this
                  points to the corre.
                </p>
              </li>

              <li className="space-y-4">
                <Wrapper>
                  <h3 className="text-[18px] font-lovelo mb-2">
                    Jr Full Stack at Management Information Service
                  </h3>
                  <Badge>January 2024 - May 2024</Badge>
                </Wrapper>
                <p className="text-base">
                  By binding methods or using arrow functions, you ensure that
                  this points to the correct context, preventing this from being
                  undefined at runtime. This should address the error. By
                  binding methods or using arrow functions, you ensure that this
                  points to the corre.
                </p>
              </li>
            </ul>
          </YStack>

          <YStack>
            <div>
              <h2 className="text-[48px] font-lovelo ">Awards</h2>
              <Separator />
            </div>
            <ul className="list-disc p-4 space-y-8">
              <li className="space-y-4">
                <Wrapper>
                  <h3 className="text-[18px] font-lovelo mb-2">
                    Jr Full Stack at Management Information Service
                  </h3>
                  <Badge>January 2024 - May 2024</Badge>
                </Wrapper>
                <p className="text-base">
                  By binding methods or using arrow functions, you ensure that
                  this points to the correct context, preventing this from being
                  undefined at runtime. This should address the error. By
                  binding methods or using arrow functions, you ensure that this
                  points to the corre.
                </p>
              </li>

              <li className="space-y-4">
                <Wrapper>
                  <h3 className="text-[18px] font-lovelo mb-2">
                    Jr Full Stack at Management Information Service
                  </h3>
                  <Badge>January 2024 - May 2024</Badge>
                </Wrapper>
                <p className="text-base">
                  By binding methods or using arrow functions, you ensure that
                  this points to the correct context, preventing this from being
                  undefined at runtime. This should address the error. By
                  binding methods or using arrow functions, you ensure that this
                  points to the corre.
                </p>
              </li>
            </ul>
          </YStack>
        </div>
      </div>

      <div className=" mt-[200px]">
        <Card className="w-full h-[750px]"></Card>
        <Xstack className="justify-end gap-2 mt-4">
          <Button size="icon" className="rounded-full" variant="outline">
            <ChevronLeft />
          </Button>
          <Button size="icon" className="rounded-full" variant="outline">
            <ChevronRight />
          </Button>
        </Xstack>
      </div>
    </div>
  );
};

export default AboutSection;
