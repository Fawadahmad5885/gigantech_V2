"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Sparkles,
  Cpu,
  Eye,
  Cloud,
  Blocks,
  CheckCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback } from "react";

const images = {
  aiBg: "/assets/images/ai-technologies-images/ai-background.png",
  mlBg: "/assets/images/ai-technologies-images/machine-learning-bg.png",
  genaiBg: "/assets/images/ai-technologies-images/generative-ai-bg.png",
  cvBg: "/assets/images/ai-technologies-images/computer-vision-bg.png",
  iotBg: "/assets/images/ai-technologies-images/iot-bg.png",
  bcBg: "/assets/images/ai-technologies-images/blockchain-bg.png",
};
const icons = {
  aiIcon: "/assets/images/ai-technologies-images/predctive-analytics-icon.png",
  mlIcon: "/assets/images/ai-technologies-images/ml-icon.png",
  edgeIcon: "/assets/images/ai-technologies-images/edge-ai.png",
  genaiIcon: "/assets/images/ai-technologies-images/generative-ai-icon.png",
  cvIcon: "/assets/images/ai-technologies-images/computer-vision-icon.png",
  iotIcon: "/assets/images/ai-technologies-images/iot-icon.png",
  bcIcon: "/assets/images/ai-technologies-images/blockchain-icon.png",
};

const technologies = [
  {
    id: "predictive-analytics",
    name: "Predictive Analytics",
    icon: icons.aiIcon,
    image: images.aiBg,
    description:
      "We develop predictive models that help organizations anticipate events, detect anomalies, and extract valuable insights — even in challenging environments.",
    services: [
      "Anomaly detection in audio signals, including beep/bell monitoring at train grade crossings.",
      "Robotic arm anomaly prediction and proactive alerting using near real-time data streams in remote areas and production floors.",
      "Multilingual extraction of action items, requirements, and ideas from meeting transcripts for seamless project tracking.",
      "Predictive modeling for anomaly detection and event forecasting in sensor networks.",
    ],
  },
  {
    id: "edge-AI",
    name: "Edge AI",
    icon: icons.edgeIcon,
    image: images.mlBg,
    description:
      "Our Edge AI offerings bring intelligence closer to the source, enabling secure, real-time, and multilingual processing on mobile and offline devices.",
    services: [
      "Multilingual on-device meeting apps with offline transcription, summarization, and task extraction in over 90 languages.",
      "Mobile-deployed AI tools for private, secure, and real-time processing of multimodal data.",
      "Edge-optimized inference for custom neural networks and vision AI models with low latency.",
      "Online and offline multilingual document-based chatbots with private knowledge bases, supporting diverse file types (Word, PDF, Excel sheets, transcripts, etc.) as well as online resources (websites, Google Docs/Sheets, etc.)."
    ],
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    icon: icons.genaiIcon,
    image: images.genaiBg,
    description:
      "Our Generative AI solutions are built with multilingual capabilities by design, enabling seamless interaction across diverse audiences and industries.",
    services: [
      "Multimodal chatbot integrating text, audio, and images across web, SMS, WhatsApp, and Telegram.",
      "AI-based qualitative assessment and auto-grading for various exam formats — long/short answers, essays, and case studies.",
      "Meeting intelligence agents that generate structured outputs such as tasks, ideas, and requirements from raw conversations.",
"Actionable role-specific insights and recommendations from transcripts, documents, and events."
    ],
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: icons.mlIcon,
    image: images.mlBg,
    description:
      "We design and optimize machine learning models that power intelligent systems across industries.",
    services: [
      "Custom neural network design, training, and deployment for specialized applications.",
      "Fine-tuning and optimization of LLMs using production-grade VLLM frameworks.",
      "Data-driven feature engineering and model building across structured and unstructured datasets.",
      "Adaptive ML pipelines supporting diverse industry use cases with continuous improvement."
    ],
  },

  {
    id: "computer-vision",
    name: "Computer Vision",
    icon: icons.cvIcon,
    image: images.cvBg,
    description:
      "Our computer vision expertise enables automated monitoring, recognition, and anomaly detection in complex real-world scenarios.",
    services: [
      "Vision AI–based anomaly detection and tracking (e.g., YOLO, custom CNNs).",
      "Near real-time video analytics for safety monitoring at critical infrastructure.",
      "Human tracking and face recognition in near real time for security and operational insights.",
      "Integration of multi-sensor inputs (video, lidar, radar) for robust scene understanding.",
      "Advanced computer vision pipelines optimized for edge devices and low-latency applications."
    ],
  },
  {
    id: "iot",
    name: "IoT & Industry 4.0",
    icon: icons.iotIcon,
    image: images.iotBg,
    description:
      "We build intelligent IoT ecosystems aligned with Industry 4.0, combining connectivity, automation, and AI-driven insights.",
    services: [
      "Connected crossing monitoring using audio, video, light, and motion sensors.",
      "Fusion of LiDAR, RADAR, and image sensors for enhanced situational awareness.",
      "Near real-time IoT telemetry integration with AI models for predictive safety applications.",
      "Scalable IoT architectures linking edge devices with cloud-based AI dashboards.",
      "Industry 4.0–enabled IoT solutions driving automation, connectivity, and smart analytics."
    ],
  },
  
];

export default function AiTechnologiesSection({aiTechnologies}) {
  const [activeTechId, setActiveTechId] = useState("machine-learning");
  const activeIndex = useMemo(
    () =>
      Math.max(
        0,
        technologies.findIndex((t) => t.id === activeTechId)
      ),
    [activeTechId]
  );
  const activeTech = technologies[activeIndex];

  // Keyboard navigation for accessibility (Left/Right arrows)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        setActiveTechId(
          technologies[(activeIndex + 1) % technologies.length].id
        );
      } else if (e.key === "ArrowLeft") {
        setActiveTechId(
          technologies[
            (activeIndex - 1 + technologies.length) % technologies.length
          ].id
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  // Parallax + spotlight interactions
  const cardRef = useRef(null);
  const bgParallaxRef = useRef(null);

  return (
    <section className="py-16 md:py-24 shadow-md bg-gradient-to-l from-white to-backgroundColor">
      <div className="container mx-auto px-4 md:px-8 font-poppins text-center">
        <h2 className="heading-text text-textColor ">
          Our AI Expertise at a Glance
        </h2>
        <p className="section-description">
          AI tailored to your needs — scalable, reliable, multilingual






        </p>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="AI Technologies"
          className="flex flex-row flex-wrap justify-start xl:justify-between border-b-2 mt-10 lg:grid-cols-6   mb-10"
        >
          {technologies.map((tech) => {
            const isActive = tech.id === activeTechId;
            return (
              <button
                key={tech.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tech.id}`}
                onClick={() => setActiveTechId(tech.id)}
                className={`relative flex items-center justify-center   gap-2 md:gap-3 rounded-md p-3 md:p-4 font-poppins text-sm md:text-lg font-medium transition-all duration-300 
        ${isActive ? "bg-white services-card " : "text-gray-800 "}
      `}
              >
                <div className={`w-6 h-6 md:w-8 md:h-8 relative `}>
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="whitespace-nowrap">{tech.name}</span>
              </button>
            );
          })}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.id}
              ref={cardRef}
              role="tabpanel"
              id={`panel-${activeTech.id}`}
              aria-labelledby={activeTech.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-xl shadow-xl mx-auto min-h-[520px] md:min-h-[560px] text-left"
              style={{
                // Subtle mouse spotlight
                background:
                  "radial-gradient(220px circle at var(--spot-x) var(--spot-y), rgba(255,255,255,0.10), transparent 60%)",
              }}
            >
              {/* Background image with parallax and Ken Burns entrance */}
              <motion.div
                ref={bgParallaxRef}
                className="absolute inset-0 will-change-transform"
                initial={{ scale: 1.08, opacity: 0.85 }}
                animate={{ scale: 1.05, opacity: 0.95 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image
                  src={activeTech.image || "/placeholder.svg"}
                  alt={`${activeTech.name} background`}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </motion.div>

              {/* Dark gradient overlays for readability */}
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-12 flex h-full transform-gpu will-change-transform">
                <div className="w-full  self-center">
                  <motion.h3
                    className="text-2xl md:text-3xl xl:text-4xl font-medium tracking-wide font-poppins text-white mb-4"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.35 }}
                  >
                    {activeTech.name}
                  </motion.h3>

                  <motion.p
                    className="text-white/90 text-base md:text-lg leading-relaxed tracking-wide mb-6"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.35 }}
                  >
                    {activeTech.description}
                  </motion.p>

                  <motion.ul
                    className="space-y-3 mb-8"
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                      show: { transition: { staggerChildren: 0.08 } },
                    }}
                  >
                    {activeTech.services.map((service, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center text-white text-base md:text-lg"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          show: { opacity: 1, x: 0 },
                        }}
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {service}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
