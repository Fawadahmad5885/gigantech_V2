"use client";
import { getStrapiMedia } from "@/lib/api";
import Image from "next/image";

function ServicesCard({ service }) {
  const imageUrl = getStrapiMedia(service.image?.url);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="group rounded-lg p-[30px] flex flex-row-reverse bg-white services-card hover:scale-105 transition-all duration-300 ease-in-out"
    >
      {/* Icon Container */}
      <div className="md:w-[120px] md:h-[120px] w-[70px] h-[70px] flex items-center justify-center ml-1  rounded-full overflow-hidden">
        <Image
          alt={service.title || "Service image"}
          src={imageUrl}
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col mr-auto gap-4 pb-4 w-4/6">
        <h2 className="text-start font-poppins text-lg font-medium group-hover:text-secondaryColor">
          {service.title}
        </h2>
        <p className="card-description font-normal">{service.description}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
