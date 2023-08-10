import React from 'react'
import AppLayout from "../../../components/AppLayoutArabic/AppLayoutArabic"
import { Button } from '@material-tailwind/react'
import IMAGES from '../../../assets/images'
import SectionHeading from "../../../components/SectionHeading"
import GiftSliderArabic from '../../../components/Slider/GiftSliderArabic'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <AppLayout>

      {/* Hero */}
      <section className='hero-section relative flex items-center justify-start'>
        <img className='rotate-45 absolute top-16 opacity-40 right-16 w-36' src={IMAGES.GLOWING_STICKER} alt="" />
        <img className='rotate-0 absolute top-2/5 opacity-40 -left-16 w-36' src={IMAGES.COOKIE_STICKER} alt="" />
        <img className='absolute opacity-50 bottom-12 right-1/2 w-36' src={IMAGES.STAR_STICKER} alt="" />
        <img className='absolute opacity-50 top-24 left-1/2 w-36' src={IMAGES.STAR_STICKER} alt="" />
        <img className='absolute opacity-50 bottom-2 right-32 w-36' src={IMAGES.STAR_STICKER} alt="" />
        <img className='absolute opacity-50 top-16 left-2/5 w-36' src={IMAGES.STAR_STICKER} alt="" />
        <div className='lg:w-1/2 hero-section-text flex flex-col items-start md:px-16 px-4 text-center sm:text-left'>
          <h2 className='sm:text-3xl text-xl md:text-4xl mb-4 uppercase text-white lg:text-[#74322c]'>تحول غير مسبوق للبشرة مع نتائج مخصصة</h2>
          <p className='text-white lg:text-[#74322c] sm:text-lg text-base mb-4 px-2 md:px-0'> الخاصة بنا نهجًا ثوريًا للعناية بالبشرة ، وتخصيص كل علاج لاحتياجات بشرتك الفريدة. من خلال التحليل المتقدم وإرشادات الخبراء ، نقوم بإنشاء نظام مخصص يستهدف مخاوف محددة ويطلق العنان لإمكانات بشرتك الحقيقية. جرب بشرة متألقة ومتغيرة بشكل لم يسبق له مثيل مع منتجاتنا المنسقة بعناية والعناية الشخصية. </p>

          <Link
            to="/arabic-quiz"
          >
            <Button size='lg' className="sm:w-56 w-full bg-[#e78956] hover:bg-[#74322c] focus:bg-[#74322c] primary-btn">
              ابدأ الاختبار
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}

      <section className="relative flex md:flex-row md:flex-wrap flex-col items-center py-16 md:px-6 px-0">
        <img className='warning absolute top-6 opacity-30 right-16 w-36' src={IMAGES.WARNING_STICKER} alt="" />
        <img className='absolute opacity-50 top-6 left-16 w-36' src={IMAGES.STAR_STICKER} alt="" />
        <img className='absolute opacity-50 bottom-20 left-24 w-36' src={IMAGES.STAR_STICKER} alt="" />
        <img className='absolute opacity-50 top-2/5 left-1/2 w-36' src={IMAGES.STAR_STICKER} alt="" />

        <SectionHeading textColor="text-[#74322c]" title={"اكتشف البريد المثالي لك"} />

        <div className='flex items-center lg:flex-row flex-col-reverse'>

          <div className="w-full lg:w-6/12 md:px-4 px-2 mr-auto ml-auto">
            <div className="justify-center flex flex-wrap relative">

              <div className="my-4 w-full md:w-6/12 px-4">

                <div className="shadow-lg group hover:bg-[#ee8bb9] rounded text-center p-4">
                  <div className='shadow-md rounded-full h-16 w-16 mx-auto p-2 bg-white flex justify-center items-center'>
                    <img className='feature_icon' src={IMAGES.FEATURE_ICON_1} alt="" />
                  </div>
                  <p className="text-lg mt-4 group-hover:text-white font-semibold text-[#ee8bb9]">
                    4 أقنعة مميزة شخصية
                  </p>
                  <p className="text-base group-hover:text-white mt-4 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae nobis cupiditate voluptatibus tempore corporis distinctio non debitis fuga libero.
                  </p>
                </div>


                <div className="shadow-lg group hover:bg-[#ee8bb9] rounded text-center p-4 mt-8">
                  <div className='shadow-md rounded-full h-16 w-16 mx-auto p-2 bg-white flex justify-center items-center'>
                    <img className='feature_icon' src={IMAGES.FEATURE_ICON_2} alt="" />
                  </div>
                  <p className="text-lg mt-4 group-hover:text-white font-semibold text-[#ee8bb9]">
                    أداة تجميل
                  </p>
                  <p className="text-base group-hover:text-white mt-4 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae nobis cupiditate voluptatibus tempore corporis distinctio non debitis fuga libero.
                  </p>
                </div>
              </div>

              <div className="my-4 w-full md:w-6/12 px-4 lg:mt-16">

                <div className="shadow-lg group hover:bg-[#ee8bb9] rounded text-center p-4">
                  <div className='shadow-md rounded-full h-16 w-16 mx-auto p-2 bg-white flex justify-center items-center'>
                    <img className='feature_icon w-11/12' src={IMAGES.FEATURE_ICON_3} alt="" />
                  </div>
                  <p className="text-lg mt-4 group-hover:text-white font-semibold text-[#ee8bb9]">
                    بطاقة الوجه الشخصية
                  </p>
                  <p className="text-base group-hover:text-white mt-4 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae nobis cupiditate voluptatibus tempore corporis distinctio non debitis fuga libero.
                  </p>
                </div>


                <div className="shadow-lg group hover:bg-[#ee8bb9] rounded text-center p-4 mt-8">
                  <div className='shadow-md rounded-full h-16 w-16 mx-auto p-2 bg-white flex justify-center items-center'>
                    <img className='feature_icon w-10/12' src={IMAGES.FEATURE_ICON_4} alt="" />
                  </div>
                  <p className="text-lg mt-4 group-hover:text-white font-semibold text-[#ee8bb9]">
                    قيمة مذهلة
                  </p>
                  <p className="text-base group-hover:text-white mt-4 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae nobis cupiditate voluptatibus tempore corporis distinctio non debitis fuga libero.
                  </p>
                </div>

              </div>
            </div>

            <div className='px-4 mt-4'>
              <Button size='lg' className="w-full bg-[#e78956] hover:bg-[#74322c] focus:bg-[#74322c] primary-btn">
                تسوق الآن
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-5/12 px-6 md:px-4 ml-auto mr-auto text-center md:text-left">
            <img className='w-full rounded' src={IMAGES.FEATURE_BG} alt="" />
          </div>
        </div>

      </section>

      {/* Work Process */}

      <section className="work-section relative py-12 md:py-16">
        <img className='absolute opacity-50 top-2 right-1/2 w-36' src={IMAGES.STAR_STICKER} alt="" />
        <img className='absolute opacity-50 top-32 left-24 w-36' src={IMAGES.STAR_STICKER} alt="" />
        <img className='absolute opacity-50 bottom-2 left-1/2 w-36' src={IMAGES.STAR_STICKER} alt="" />
        <img className='-rotate-45 absolute opacity-50 top-6 -left-20 w-56' src={IMAGES.RAINBOW_COOKIE} alt="" />
        <SectionHeading textColor="text-[#74322c]" title="كيف تعمل" />

        <div className=" md:text-4xl text-center flex justify-center">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-x-12 gap-y-8'>

            <div className='rounded-full shadow-xl text-white work-item relative sm:w-80 sm:h-80 w-72 h-72  bg-[#e78956] p-6 flex flex-col items-center justify-center'>
              <span className='absolute w-2/5 rounded -top-2 shadow bg-[#fae3d1]'>
                <h2 className='text-[#74322c] sm:text-2xl text-xl sm:text-3xl'>01</h2>
              </span>
              <img className='mb-3 sm:w-12 w-10' src={IMAGES.WORK_ICON_1} alt="" />
              <h3 className='sm:text-xl text-lg  mb-4'>خذ اختبار الجلد المدعوم بالعلوم</h3>
              <p className='sm:text-base text-xs mb-6'>سيستغرق الأمر دقيقتين فقط وستتلقى تحليلًا مجانيًا للبشرة.</p>
              <Button size='sm' color='white' variant="gradient">ابدأ اختبار الجلد</Button>
            </div>
            <div className='rounded-full shadow-xl text-white work-item relative sm:w-80 sm:h-80 w-72 h-72  bg-[#ee8bb9] p-6 flex flex-col items-center justify-center'>
              <span className='absolute w-2/5 rounded -top-2 shadow bg-[#fae3d1]'>
                <h2 className='text-[#74322c] sm:text-2xl text-xl sm:text-3xl'>02</h2>
              </span>
              <img className='mb-3 sm:w-12 w-10' src={IMAGES.WORK_ICON_2} alt="" />
              <h3 className='sm:text-xl text-lg  mb-4'>احصل على بريد قناع مخصص</h3>
              <p className='sm:text-base text-xs mb-6'>احصل على قناع بريد مخصص من قبل خبراء العناية بالبشرة لدينا بشكل فريد لبشرتك ، ويستهدف أهداف بشرتك.</p>
              <Button size='sm' color='white' variant="gradient">إضفاء الطابع الشخصي على البريد الخاص بك</Button>
            </div>
            <div className='rounded-full shadow-xl text-white work-item relative sm:w-80 sm:h-80 w-72 h-72  bg-[#74322c] p-6 flex flex-col items-center justify-center'>
              <span className='absolute w-2/5 rounded -top-2 shadow bg-[#fae3d1]'>
                <h2 className='text-[#74322c] sm:text-2xl text-xl sm:text-3xl'>03</h2>
              </span>
              <img className='mb-3 sm:w-12 w-10' src={IMAGES.WORK_ICON_3} alt="" />
              <h3 className='sm:text-xl text-lg  mb-4'>تلقي البريد الخاص بك</h3>
              <p className='sm:text-base text-xs mb-6'>يتم التوصيل إلى عتبة داركم كل شهر. يمكنك الإلغاء أو التخطي في أي وقت ، وخالية من المتاعب بنسبة 100٪.</p>
              <Button size='sm' color='white' variant="gradient">البدء</Button>
            </div>
          </div>
        </div>

      </section>

      {/* Stats Section*/}

      <section className="py-6 relative md:py-16 lg:h-96 bg-[#e78956] text-white">
        <img className='rotate-45 absolute top-2/5 opacity-10 right-16 w-72' src={IMAGES.COOKIE_STICKER} alt="" />
        <SectionHeading textColor="text-white" title="توهج الآية في الأرقام" />
        <div className="py-1 md:mx-28 mx-2 md:mt-16">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 text-center flex items-center">

            <div className="flex flex-col items-center justify-center py-8">
              <h1 className="font-bold text-5xl mb-2">1492</h1>
              <h3 className="font-medium text-xl uppercase">أقنعة موصى بها</h3>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <h1 className="font-bold text-5xl mb-2">746</h1>
              <h3 className="font-medium text-xl uppercase">تم إرسال تحليل الجلد</h3>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <h1 className="font-bold text-5xl mb-2">100%</h1>
              <h3 className="font-medium text-xl uppercase">الزبائن سعداء</h3>
            </div>

          </div>
        </div>
      </section>

      {/* Gift Section*/}

      <section className="py-12 md:py-16">
        <SectionHeading textColor="text-[#74322c]" title="هدايا مميزة لك" />

        <div className='relative'>
          <img className='absolute -rotate-45 opacity-50 -top-32 left-16 w-36' src={IMAGES.FRESH_STICKER} alt="" />
          <img className='absolute rotate-45 opacity-30 -bottom-8 right-16 w-24' src={IMAGES.COOKIE_STICKER} alt="" />
          <GiftSliderArabic />
        </div>
      </section>

    </AppLayout>
  )
}

export default Home