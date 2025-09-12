"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { scroller } from "react-scroll";
import Contact from "@/app/components/contact/Contact";
import CustomButton from "@/app/components/about-page-components/CustomButton";
import { Calendar, User} from "lucide-react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/api";

const NewsDetailClient = ({
  newsArticle,
  contactSectionHeader,
  contactForm,
}) => {
const imageUrl = 
    newsArticle.image?.data?.attributes?.url ||  // Strapi v4 format
    newsArticle.image?.url ||                    // Local data format
    newsArticle.featuredImage?.data?.attributes?.url ||
    newsArticle.featuredImage?.url;

  const fullImageUrl = imageUrl ? getStrapiMedia(imageUrl) : null;

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: 500,
      offset: -85,
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="">
      <div
        className="relative w-full h-[95vh] mt-[5vh] min-h-[340px] bg-cover bg-center bg-no-repeat"
      >
          {fullImageUrl && (
          <Image
            src={fullImageUrl}
            alt={newsArticle.title || "News article"}
            fill
            className="object-cover "
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full max-sm:px-4 flex items-center">
          <div className="component-width mx-auto w-full">
            <div className="mt-16">
              <h1 className="text-[44px] align-text-top lg:text-[72px] lg:w-[70%] !leading-tight mb-[8px] md:text-6xl text-white font-normal">
                {newsArticle.title || "Title not available"}
              </h1>

              {/* Optional subtitle or excerpt */}
              <div className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12 drop-shadow-md">
                {newsArticle.description || "No descripton available"}
              </div>
              <CustomButton
                      className=" border  border-white text-white hover:bg-gray-100 hover:text-textColor duration-300   transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                {"Get Started"}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-100">
        <div className="component-width mx-auto max-sm:px-4 py-12">
          {/* Meta Information Cards */}

          <div className="flex flex-row gap-6 mb-4 items-center">
            <div>
              {newsArticle.type === "blog" && (
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{newsArticle.author}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 " />
              <p className="">{formatDate(newsArticle.date)}</p>
            </div>
            <div>
              {newsArticle.type === "blog" && (
                <div className="flex items-center gap-1">
                  <span>{newsArticle.readminutes}</span>
                  <span>min read</span>
                </div>
              )}
            </div>
          </div>
          <div>
            {newsArticle.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8 ">
                {newsArticle.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full "
                  >
                    #{tag.tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg">
              <ReactMarkdown>{newsArticle.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <Contact
        id="contact"
        headerData={contactSectionHeader}
        contactForm={contactForm}
      />
    </div>
  );
};

export default NewsDetailClient;
