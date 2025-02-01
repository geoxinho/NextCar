import {
  SiFerrari,
  SiBmw,
  SiLamborghini,
  SiBentley,
  SiMercedes,
  SiFord,
} from "react-icons/si";

function Partner() {
  const cars = [SiFerrari, SiBentley, SiBmw, SiLamborghini, SiMercedes, SiFord];

  return (
    <div>
      <div
        data-aos="fade-up"
        className="flex-row items-center content-center justify-between hidden px-5 align-middle md:flex place-content-center py-7 bg-color4"
      >
        {cars.map((CarDisplay, index) => (
          <div key={index} className="w-full px-2 mb-4">
            <div className="w-full mx-auto md:w-24">
              <CarDisplay className="w-16 h-16" />
            </div>
          </div>
        ))}
      </div>
      <div className="justify-between align-middle bg-color4 md:hidden">
        <div className="flex flex-row text-[35px] g-1 w-full content-center justify-between px-10 py-5 font-extrabold">
          <SiBmw />
          <SiBentley />
          <SiFerrari />
        </div>
        <div className="flex flex-row g-4 w-full text-[35px] px-10 content-center justify-between py-5 ">
          <SiFord />
          <SiLamborghini />
          <SiMercedes />
        </div>
      </div>
    </div>
  );
}

export default Partner;
