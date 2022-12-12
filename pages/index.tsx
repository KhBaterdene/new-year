import { useRef, useState } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Products from '../components/products';

export default function Home() {
  const slideTwo = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollData, setScrollData] = useState<any>();

  const goToSlideTwo = () =>
    slideTwo.current &&
    slideTwo.current.scrollIntoView({
      behavior: 'smooth',
    });

  const onScroll = (e: any) => {
    const { scrollTop: scrollTp, clientHeight } = e.target;
    setScrollTop(
      scrollTp - clientHeight >= -200 ? clientHeight - 100 : scrollTp
    );
    setScrollData({ clientHeight, scroll: scrollTp });
  };
  return (
    <div
      className="overflow-y-auto h-screen bg-gradient-to-r from-purple-500 to-pink-500"
      onScroll={onScroll}
    >
      <Header
        goToSlideTwo={goToSlideTwo}
        scrollTop={scrollTop}
        scrollData={scrollData}
      />
      <div className=" min-h-screen  p-8 flex items-stretch" ref={slideTwo}>
        <div className="relative p-8 mt-20 rounded-3xl overflow-hidden max-w-6xl mx-auto">
          <Image src={'/video-bg.png'} fill alt="hi" className="object-cover" />
          <div className="relative ">
            <h1 className="font-bold pb-8">Introduction</h1>
            <div>
              <div className="aspect-w-16 aspect-h-9 relative">
                <iframe
                  src="https://www.youtube.com/embed/T8-0B5Ixlcg"
                  title="Glass Animals - Heat Waves (Official Video)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            </div>
            <div className="pt-8">
              Virtual reality (VR) is a simulated experience that employs pose
              tracking and 3D near-eye displays to give the user an immersive
              feel of a virtual world. Applications of virtual reality include
              entertainment (particularly video games), education (such as
              medical or military training) and business (such as virtual
              meetings). Other distinct types of VR-style technology include
              augmented reality and mixed reality, sometimes referred to as
              extended reality or XR, although definitions are currently
              changing due to the nascence of the industry.
            </div>
          </div>
        </div>
      </div>
      <Products />
      <footer className="bg-black p-6">footer</footer>
    </div>
  );
}
