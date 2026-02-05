'use client';

import React from 'react';
import { 
  Globe, 
  Zap, 
  LineChart, 
  Share2,
} from 'lucide-react';
import DemandGrowthTile from './components/DemandGrowthTile';

export default function App() {
  return (
    <div className="bg-[#f6f8f8] dark:bg-[#102222] text-white overflow-x-hidden font-display min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#234848] px-10 py-3 bg-[#f6f8f8] dark:bg-[#102222]">
        <div className="flex items-center gap-4 text-white">
          <div className="size-6 text-[#11d4d4]">
            {/* Logo SVG from HTML */}
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-[#102222] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">DemandGrowthHero</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden lg:flex items-center gap-9">
            <a className="text-[#102222] dark:text-white hover:text-[#11d4d4] transition-colors text-sm font-medium leading-normal" href="#">Product</a>
            <a className="text-[#102222] dark:text-white hover:text-[#11d4d4] transition-colors text-sm font-medium leading-normal" href="#">Solutions</a>
            <a className="text-[#102222] dark:text-white hover:text-[#11d4d4] transition-colors text-sm font-medium leading-normal" href="#">Pricing</a>
            <a className="text-[#102222] dark:text-white hover:text-[#11d4d4] transition-colors text-sm font-medium leading-normal" href="#">Resources</a>
          </div>
          <div className="flex gap-2">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#11d4d4] text-[#112222] text-sm font-bold hover:bg-[#0ebcb9] transition-colors">
              <span>Get Started</span>
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#234848] text-white text-sm font-bold hover:bg-[#2c5a5a] transition-colors">
              <span>Log In</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col">
        {/* Hero with Visualization */}
        <section className="relative px-6 md:px-10 py-12 md:py-20 flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-[#11d4d4]/20 text-[#11d4d4] text-xs font-bold tracking-widest uppercase">
                  Enterprise Demand Gen
                </span>
                <h1 className="text-[#102222] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em] lg:text-6xl">
                  Supercharge Your <span className="text-[#11d4d4]">Enterprise</span> Pipeline
                </h1>
                <p className="text-[#4b6666] dark:text-[#92c9c9] text-lg font-normal leading-relaxed max-w-[500px]">
                  Sophisticated demand generation for B2B teams. Accelerate velocity and maximize growth with real-time data-driven insights.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-[#11d4d4] text-[#112222] text-base font-bold shadow-[0_0_20px_rgba(17,212,212,0.3)] hover:shadow-[0_0_30px_rgba(17,212,212,0.5)] transition-all">
                  <span>Get Started Now</span>
                </button>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-[#234848] text-white text-base font-bold border border-[#326767] hover:bg-[#2c5a5a] transition-all">
                  <span>Book a Demo</span>
                </button>
              </div>
            </div>

            {/* Visualization Component (Inserted Here) */}
            <div className="w-full flex justify-center">
              <DemandGrowthTile />
            </div>

          </div>
        </section>

        {/* Feature Stats Section */}
        <section className="bg-[#e0e8e8] dark:bg-[#193333] py-16 px-6 md:px-10">
          <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 p-8 bg-white/50 dark:bg-[#234848]/40 backdrop-blur-md rounded-xl border border-[#11d4d4]/10 dark:border-[#11d4d4]/20">
              <Globe className="text-[#11d4d4] w-10 h-10" />
              <h3 className="text-[#102222] dark:text-white text-xl font-bold">Multi-Channel Input</h3>
              <p className="text-[#4b6666] dark:text-[#92c9c9] text-sm leading-relaxed">
                Capture and convert leads across every touchpoint from organic to social media.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-8 bg-white/50 dark:bg-[#234848]/40 backdrop-blur-md rounded-xl border border-[#11d4d4]/10 dark:border-[#11d4d4]/20">
              <LineChart className="text-[#11d4d4] w-10 h-10" />
              <h3 className="text-[#102222] dark:text-white text-xl font-bold">Smart Insights</h3>
              <p className="text-[#4b6666] dark:text-[#92c9c9] text-sm leading-relaxed">
                Leverage predictive modeling to identify high-intent accounts before they search.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-8 bg-white/50 dark:bg-[#234848]/40 backdrop-blur-md rounded-xl border border-[#11d4d4]/10 dark:border-[#11d4d4]/20">
              <Zap className="text-[#11d4d4] w-10 h-10" />
              <h3 className="text-[#102222] dark:text-white text-xl font-bold">Revenue Velocity</h3>
              <p className="text-[#4b6666] dark:text-[#92c9c9] text-sm leading-relaxed">
                Shorten sales cycles by delivering hyper-personalized content to decision makers.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-6 px-10 py-12 text-center bg-[#f6f8f8] dark:bg-[#102222] border-t border-[#234848]">
        <div className="flex flex-wrap items-center justify-center gap-10">
          <a className="text-[#4b6666] dark:text-[#92c9c9] hover:text-[#11d4d4] dark:hover:text-white transition-colors text-base font-normal min-w-[120px]" href="#">Privacy Policy</a>
          <a className="text-[#4b6666] dark:text-[#92c9c9] hover:text-[#11d4d4] dark:hover:text-white transition-colors text-base font-normal min-w-[120px]" href="#">Terms of Service</a>
          <a className="text-[#4b6666] dark:text-[#92c9c9] hover:text-[#11d4d4] dark:hover:text-white transition-colors text-base font-normal min-w-[120px]" href="#">Contact Us</a>
        </div>
        <div className="flex justify-center gap-6">
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[#234848] text-white hover:bg-[#11d4d4] hover:text-[#102222] transition-all" href="#">
            <Share2 className="w-5 h-5" />
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[#234848] text-white hover:bg-[#11d4d4] hover:text-[#102222] transition-all" href="#">
            <Globe className="w-5 h-5" />
          </a>
        </div>
        <p className="text-[#4b6666] dark:text-[#92c9c9] text-sm font-normal">© 2024 DemandGrowthHero. All rights reserved.</p>
      </footer>
    </div>
  );
}