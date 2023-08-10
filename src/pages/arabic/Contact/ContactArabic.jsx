import React from "react";
import {
  Card,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";
import AppLayout from "../../../components/AppLayoutArabic/AppLayoutArabic"
import SectionHeading from "../../../components/SectionHeading"

export default function Contact() {
  return (
    <AppLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container lg:w-1/2 md:w-2/3 sm:mx-auto mx-4 p-6 bg-white shadow-md rounded-lg">
          <SectionHeading title="ابقى على تواصل" />
          <Card color="transparent" shadow={false}>
            <form className="mt-8 mb-2">
              <div className="mb-4 flex flex-col gap-6">
                <Input color="pink" type="name" size="lg" label="اسم" />
                <Input color="pink" type="email" size="lg" label="بريد إلكتروني" />
                <Input color="pink" type="phone" size="lg" label="تليفون محمول" />
                <Textarea color="pink" type="text" size="lg" label="تليفون محمول" />
              </div>

              <Button fullWidth size='md' className="w-full bg-[#e78956] hover:bg-[#74322c] focus:bg-[#74322c] primary-btn">
              يُقدِّم
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
