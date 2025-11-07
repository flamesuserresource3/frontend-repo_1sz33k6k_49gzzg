import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[520px] w-full overflow-hidden rounded-none">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl text-white drop-shadow-lg px-4">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase">AI-powered screening</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
              Detect Early. Act Fast. Save Lives.
            </h1>
            <p className="mt-4 text-slate-100/90 text-base sm:text-lg">
              StrokeSense helps you estimate your stroke risk using key health data and evidence-based machine learning. This is an educational tool—not a medical diagnosis.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#predict" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700">
                Check Risk Now
                <ArrowRight size={16} />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-md bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-white">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
