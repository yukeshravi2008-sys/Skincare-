"use client";
import { useState, useEffect } from "react";
import { blogPosts } from "@/lib/data/blog";

const featured = blogPosts[0];
const others = blogPosts.slice(1);

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  useEffect(() => {
    if (activeArticle !== null) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "contain";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    };
  }, [activeArticle]);

  return (
    <section className="py-28 bg-[#F7F3EF]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Skin Insights</span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#2E2E2E]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Helpful tips and expert advice
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Article Card */}
          <div 
            onClick={() => setActiveArticle(0)}
            className="bg-white border border-[#E4DFE8] rounded-[40px] overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div className="w-full h-52 overflow-hidden">
              <img src="/images/blog/featured.svg" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#8E5C8F] border border-[#E4DFE8] rounded-full px-3 py-1">
                  {featured.category}
                </span>
                <span className="text-xs text-[#6B6570]">{featured.date}</span>
              </div>
              <h3
                className="text-2xl text-[#2E2E2E] leading-snug mb-6 group-hover:text-[#5A2A5D] transition-colors duration-300"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                {featured.title}
              </h3>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-[#2E2E2E] border border-[#E4DFE8] rounded-full px-5 py-2 hover:bg-[#5A2A5D] hover:text-white hover:border-[#5A2A5D] transition-all duration-300 cursor-pointer">
                Read article →
              </button>
            </div>
          </div>

          {/* Sidebar Articles Column */}
          <div className="flex flex-col gap-4">
            {others.map((post, i) => (
              <div
                key={i}
                onClick={() => setActiveArticle(i + 1)}
                className="group bg-white border border-[#E4DFE8] rounded-[32px] p-6 hover:border-[#8E5C8F] hover:shadow-md transition-all duration-300 flex items-center gap-4 cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <div className="w-16 h-16 rounded-2xl flex-shrink-0 overflow-hidden">
                  <img src={`/images/blog/blog-${i + 1}.svg`} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-[#8E5C8F] border border-[#E4DFE8] rounded-full px-2.5 py-0.5">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-[#6B6570]">{post.date}</span>
                  </div>
                  <h3
                    className="text-sm text-[#2E2E2E] group-hover:text-[#5A2A5D] transition-colors duration-300 leading-snug"
                    style={{ fontFamily: "var(--font-dm-serif), serif" }}
                  >
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Immersive Popup Article Reader Modal */}
      {activeArticle !== null && (
        <div 
          className="fixed inset-0 bg-[#2E2E2E]/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4 md:p-6"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className="bg-[#FBF8F5] rounded-[32px] md:rounded-[40px] max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative border border-[#E4DFE8] transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button 
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/80 hover:bg-[#5A2A5D] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md text-lg z-50 cursor-pointer border border-[#E4DFE8]/50"
              aria-label="Close article"
            >
              ✕
            </button>

            {/* Hero Image */}
            <div className="w-full h-56 md:h-72 overflow-hidden relative">
              <img 
                src={blogPosts[activeArticle].featured ? "/images/blog/featured.svg" : `/images/blog/blog-${activeArticle}.svg`} 
                alt={blogPosts[activeArticle].title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FBF8F5] via-transparent to-transparent" />
            </div>

            {/* Content Container */}
            <div className="px-6 pb-12 md:px-10 md:pb-16 -mt-8 relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5A2A5D] bg-[#F2EAF3] rounded-full px-3 py-1">
                  {blogPosts[activeArticle].category}
                </span>
                <span className="text-xs text-[#6B6570] font-medium">{blogPosts[activeArticle].date}</span>
              </div>

              <h2 
                className="text-3xl md:text-4xl text-[#2E2E2E] leading-snug mb-6"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                {blogPosts[activeArticle].title}
              </h2>

              {/* Intro */}
              <p className="text-[#2E2E2E] text-base md:text-lg leading-relaxed mb-8 font-medium border-l-2 border-[#8E5C8F] pl-4 italic">
                {blogPosts[activeArticle].introduction}
              </p>

              {/* Sections */}
              <div className="space-y-8 mb-10">
                {blogPosts[activeArticle].sections.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 
                      className="text-xl font-semibold text-[#2E2E2E] font-serif"
                      style={{ fontFamily: "var(--font-dm-serif), serif" }}
                    >
                      {section.title}
                    </h3>
                    <p className="text-[#6B6570] text-sm md:text-base leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Callout / Conclusion */}
              <div className="bg-[#F2EAF3] text-[#5A2A5D] p-6 rounded-2xl border-l-4 border-[#5A2A5D] mb-8 shadow-sm">
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">Expert Takeaway</p>
                <p className="text-sm md:text-base leading-relaxed">
                  {blogPosts[activeArticle].conclusion}
                </p>
              </div>

              {/* Author Footer */}
              <div className="border-t border-[#E4DFE8] pt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5A2A5D] flex items-center justify-center text-white text-base font-bold flex-shrink-0 shadow-md">
                  SP
                </div>
                <div>
                  <p className="text-xs text-[#8E5C8F] font-semibold uppercase tracking-widest">Written & Reviewed By</p>
                  <p className="text-sm md:text-base font-bold text-[#2E2E2E] mt-0.5">Dr. Shruthi Pavana Janardhanan</p>
                  <p className="text-[10px] md:text-xs text-[#6B6570] font-medium">Founder & Lead Dermatologist · MBBS, MD.DVL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}