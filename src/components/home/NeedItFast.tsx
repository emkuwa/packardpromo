"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const fastOptions = [
  {
    title: "Same Day Printing",
    description: "Urgent jobs completed within hours, not days",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    highlight: true
  },
  {
    title: "Express Delivery",
    description: "Get your order delivered today in Dar es Salaam & Zanzibar",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Rush Orders Accepted",
    description: "We prioritize urgent projects without compromising quality",
    icon: "M5 10l7-7m0 0l7 7m-7-7v18"
  }
];

export default function NeedItFast() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-r from-promo-600 via-accent-500 to-orange-500 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
              ⚡ Rush Orders Available
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Need It Fast?
              <br />
              <span className="text-yellow-200">We've Got You Covered!</span>
            </h2>
            <p className="mt-4 text-white/90 text-lg max-w-xl">
              Tight deadline? No problem. Our express printing and delivery services ensure you get quality results on time.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/quote"
                onClick={() => trackEvent("quote_click", { label: "need_it_fast" })}
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-promo-600 font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Get Express Quote
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Link>
              <a
                href="tel:+255716002790"
                onClick={() => trackEvent("phone_click", { label: "need_it_fast" })}
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right Features Cards */}
          <div className="space-y-4">
            {fastOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group p-5 rounded-xl ${
                  option.highlight 
                    ? 'bg-white shadow-2xl scale-105' 
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                } transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    option.highlight ? 'bg-promo-500' : 'bg-white/20'
                  }`}>
                    <svg className={`w-6 h-6 ${option.highlight ? 'text-white' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={option.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${option.highlight ? 'text-neutral-900' : 'text-white'}`}>
                      {option.title}
                    </h3>
                    <p className={`text-sm mt-1 ${option.highlight ? 'text-gray-600' : 'text-white/80'}`}>
                      {option.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}