import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import AppLayout from "../../../components/AppLayout/AppLayout";
import SectionHeading from "../../../components/SectionHeading";
import IMAGES from "../../../assets/images";
import { FaCartPlus } from "react-icons/fa"

export default function Shop() {
  const data = [
    {
      label: "Personalized Mask Mail",
      value: "personalized",
      items: [
        {
          image: IMAGES.SHOP_1,
          name: "Mask Set A",
          desc: "A set of personalized masks for everyday use.",
          price: "$24.99",
          link: "/cart/personalized/set-a", 
        },
        {
          image: IMAGES.SHOP_2,
          name: "Mask Set B",
          desc: "Another set of personalized masks with unique designs.",
          price: "$29.99",
          link: "/cart/personalized/set-b", 
        },
        {
          image: IMAGES.SHOP_3,
          name: "Mask Set B",
          desc: "Another set of personalized masks with unique designs.",
          price: "$29.99",
          link: "/cart/personalized/set-b", 
        },
        {
          image: IMAGES.SHOP_4,
          name: "Mask Set B",
          desc: "Another set of personalized masks with unique designs.",
          price: "$29.99",
          link: "/cart/personalized/set-b", 
        },
        {
          image: IMAGES.SHOP_5,
          name: "Mask Set A",
          desc: "A set of personalized masks for everyday use.",
          price: "$24.99",
          link: "/cart/personalized/set-a", 
        },
        {
          image: IMAGES.SHOP_6,
          name: "Mask Set B",
          desc: "Another set of personalized masks with unique designs.",
          price: "$29.99",
          link: "/cart/personalized/set-b", 
        },
        {
          image: IMAGES.SHOP_7,
          name: "Mask Set B",
          desc: "Another set of personalized masks with unique designs.",
          price: "$29.99",
          link: "/cart/personalized/set-b", 
        },
        {
          image: IMAGES.SHOP_8,
          name: "Mask Set B",
          desc: "Another set of personalized masks with unique designs.",
          price: "$29.99",
          link: "/cart/personalized/set-b", 
        },
        
      ],
    },
    {
      label: "Pre-Curated Mask Mail",
      value: "precurated",
      items: [
        {
          image: IMAGES.SHOP_9,
          name: "Curated Collection 1",
          desc: "A collection of pre-curated masks for different occasions.",
          price: "$19.99",
          link: "/cart/precurated/collection-1", 
        },
        {
          image: IMAGES.SHOP_10,
          name: "Curated Collection 2",
          desc: "Another collection of pre-curated masks with unique styles.",
          price: "$22.99",
          link: "/cart/precurated/collection-2", 
        },
        {
          image: IMAGES.SHOP_5,
          name: "Mask Set A",
          desc: "A set of personalized masks for everyday use.",
          price: "$24.99",
          link: "/cart/personalized/set-a", 
        },
        {
          image: IMAGES.SHOP_6,
          name: "Mask Set B",
          desc: "Another set of personalized masks with unique designs.",
          price: "$29.99",
          link: "/cart/personalized/set-b", 
        },
        {
          image: IMAGES.SHOP_11,
          name: "Curated Collection 1",
          desc: "A collection of pre-curated masks for different occasions.",
          price: "$19.99",
          link: "/cart/precurated/collection-1", 
        },
        {
          image: IMAGES.SHOP_12,
          name: "Curated Collection 2",
          desc: "Another collection of pre-curated masks with unique styles.",
          price: "$22.99",
          link: "/cart/precurated/collection-2", 
        },
        
      ],
    },
    {
      label: "Tools & Accessories",
      value: "tools",
      items: [
        {
          image: IMAGES.SHOP_5,
          name: "Mask Set A",
          desc: "A set of personalized masks for everyday use.",
          price: "$24.99",
          link: "/cart/personalized/set-a", 
        },
        {
          image: IMAGES.SHOP_6,
          name: "Mask Set B",
          desc: "Another set of personalized masks with unique designs.",
          price: "$29.99",
          link: "/cart/personalized/set-b", 
        },
        {
          image: IMAGES.SHOP_7,
          name: "Mask Set B",
          desc: "Another set of personalized masks with unique designs.",
          price: "$29.99",
          link: "/cart/personalized/set-b", 
        },
        {
          image: IMAGES.SHOP_8,
          name: "Mask Set B",
          desc: "Another set of personalized masks with unique designs.",
          price: "$29.99",
          link: "/cart/personalized/set-b", 
        },
        {
          image: IMAGES.SHOP_10,
          name: "Curated Collection 2",
          desc: "Another collection of pre-curated masks with unique styles.",
          price: "$22.99",
          link: "/cart/precurated/collection-2", 
        },
        {
          image: IMAGES.SHOP_11,
          name: "Curated Collection 1",
          desc: "A collection of pre-curated masks for different occasions.",
          price: "$19.99",
          link: "/cart/precurated/collection-1", 
        },
        
      ],
    },
  ];

  return (
    <AppLayout>
      <div className="shop-banner flex items-center justify-center">
        <div className="relative z-10 text-center">
          <SectionHeading
            textColor="text-white"
            title="Elevate Your Elegance: Shop Beauty with Confidence!"
          />
          <a href="#tabs">
            <Button
              size="lg"
              className="w-72 bg-[#e78956] hover:bg-[#74322c] focus:bg-[#74322c] primary-btn"
            >
              Get Started
            </Button>
          </a>
        </div>
      </div>

      <div className="bg-pink-50 min-h-screen">
        <div className="flex flex-col justify-between min-h-screen">
          <div className="pt-16">
            <div className="container mx-auto">
              <Tabs className="h-full" id="tabs" value="personalized">
                <TabsHeader className="bg-pink-400 sm:mx-0 mx-4">
                  {data.map(({ label, value }) => (
                    <Tab key={value} value={value} className="">
                      <div className="text-[#74322c] font-semibold md:text-lg sm:text-base text-sm">{label}</div>
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody>
                  {data.map(({ value, items }) => (
                    <TabPanel className="sm:px-0" key={value} value={value}>
                      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {items.map((item, index) => (

                          // Card Item
                          <div key={index} className="p-4 relative bg-gray-50 hover:shadow-xl transition duration-500 ease-in-out rounded-lg">
                            <img
                              src={item.image}
                              alt={`Item ${index}`}
                              className="mb-4 rounded-t-lg rounded-br-lg"
                            />
                            <div className="flex flex-col justify-between">
                              <div>
                                <h2 className="text-xl font-semibold">{item.name}</h2>
                                <p className="text-gray-600">{item.desc}</p>
                                <p className="text-white text-xl rounded-tl-lg px-3 py-1.5 hover:shadow-xl bg-[#74322c] ml-4 mt-4 absolute top-0 left-0">{item.price}</p>
                              </div>
                              <div>
                                <Button size="sm" color="pink" variant="gradient" className="w-full mt-2 gap-4 flex items-center justify-center text-white"
                                // href={item.link}
                                >
                                  <FaCartPlus className="text-xl" /> Add to Cart
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
