/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Star, UserRound, Users } from "lucide-react";
import YStack from "../layout/container/YStack";
import Xstack from "../layout/container/Xstack";
import { Badge } from "../ui/badge";

const Items = [
  {
    id: 0,
    title: "Item 1",
    src: "https://images.pexels.com/photos/13089557/pexels-photo-13089557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    title: "Item 2",
    src: "https://images.pexels.com/photos/19117866/pexels-photo-19117866/free-photo-of-a-photo-of-a-fence-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Item 3",
    src: "https://images.pexels.com/photos/17963740/pexels-photo-17963740/free-photo-of-a-foggy-forest-with-trees-and-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Item 4",
    src: "https://images.pexels.com/photos/18092675/pexels-photo-18092675/free-photo-of-a-groundhog-is-hiding-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Item 5",
    src: "https://images.pexels.com/photos/18097258/pexels-photo-18097258/free-photo-of-a-small-animal-is-sitting-on-the-ground-near-some-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Item 6",
    src: "https://images.pexels.com/photos/18092675/pexels-photo-18092675/free-photo-of-a-groundhog-is-hiding-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Item 7",
    src: "https://images.pexels.com/photos/18092675/pexels-photo-18092675/free-photo-of-a-groundhog-is-hiding-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    title: "Item 8",
    src: "https://images.pexels.com/photos/17963740/pexels-photo-17963740/free-photo-of-a-foggy-forest-with-trees-and-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    title: "Item 9",
    src: "https://images.pexels.com/photos/17963740/pexels-photo-17963740/free-photo-of-a-foggy-forest-with-trees-and-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    title: "Item 10",
    src: "https://images.pexels.com/photos/17963740/pexels-photo-17963740/free-photo-of-a-foggy-forest-with-trees-and-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    title: "Item 11",
    src: "https://images.pexels.com/photos/17963740/pexels-photo-17963740/free-photo-of-a-foggy-forest-with-trees-and-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const CARD_SCALE = 50;
const IMAGE_SCALE = 1.1;

const InfiniteStackableCarousel = () => {
  const middleIndex = Math.floor(Items.length / 2);
  const [currentIndex, setCurrentIndex] = useState(middleIndex);

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [prevSelectedItem, setPrevSelectedItem] = useState<any>(null);
  const getCircularIndex = (index: number) => {
    return (index + Items.length) % Items.length;
  };

  const getVisibleItems = () => {
    return Items.map((item, index) => ({
      ...item,
      displayIndex: getCircularIndex(index - currentIndex + middleIndex),
    }));
  };

  const handleSelectCard = (index: number) => {
    setCurrentIndex(index);
    setSelectedItem(Items[index]);
  };

  useEffect(() => {
    if (prevSelectedItem === null) {
      setPrevSelectedItem(selectedItem);
      return;
    }

    if (prevSelectedItem?.id !== selectedItem?.id) {
      setPrevSelectedItem(selectedItem);
    }
  }, [selectedItem, prevSelectedItem]);

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">
      <div className="flex  w-full justify-center items-center h-[500px]">
        {getVisibleItems().map((item) => (
          <motion.div
            key={item.id}
            initial={{ flex: 1 }}
            animate={{
              filter:
                item.displayIndex === middleIndex
                  ? "grayscale(0)"
                  : "grayscale(1)",
              flex: item.displayIndex === middleIndex ? CARD_SCALE : 5,
            }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            className="h-full overflow-hidden cursor-pointer border border-white"
            onClick={() => handleSelectCard(item.id)}
          >
            <motion.img
              animate={{
                scale: item.displayIndex === middleIndex ? IMAGE_SCALE : 1,
              }}
              whileHover={{
                scale: IMAGE_SCALE,
                transition: {
                  type: "tween",
                  duration: 0.5,
                },
              }}
              src={item.src}
              alt={`Item ${item.id}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      <div className=" flex justify-center items-center mt-[48px]">
        <YStack className=" gap-4 justify-center items-center">
          <div className=" overflow-hidden">
            <motion.h3 className="font-lovelo text-[32px]">
              {selectedItem?.title || Items[middleIndex]?.title}
            </motion.h3>
          </div>
          <Xstack className="gap-3">
            <Xstack className="gap-2">
              <Calendar />
              <span>2010</span>
            </Xstack>

            <Xstack className="gap-2">
              <Users />
              <span>5,000</span>
            </Xstack>

            <Xstack className="gap-2">
              <Star />
              <span>0</span>
            </Xstack>

            <Xstack className="gap-2">
              <UserRound />
              <span>0</span>
            </Xstack>
          </Xstack>
          <Xstack className="gap-2">
            <Badge>MongDB</Badge>
            <Badge>ExpressJS</Badge>
            <Badge>ReactJS</Badge>
            <Badge>NodeJS</Badge>
          </Xstack>
        </YStack>
      </div>
    </div>
  );
};

export default InfiniteStackableCarousel;
