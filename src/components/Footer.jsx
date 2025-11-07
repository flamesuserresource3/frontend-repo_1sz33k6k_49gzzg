import { HeartHandshake, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                <HeartHandshake size={18} />
              </span>
              <span className="text-lg">StrokeSense</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Educational tool to raise awareness on stroke risk using AI. Not a medical device.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="https://www.who.int/health-topics/stroke" target="_blank" rel="noreferrer">WHO: Stroke</a></li>
              <li><a className="hover:text-slate-900" href="https://www.stroke.org/en/about-stroke" target="_blank" rel="noreferrer">AHA: About Stroke</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="inline-flex items-center gap-2"><Mail size={16}/> support@strokesense.app</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Links</p>
            <div className="mt-3 flex items-center gap-3 text-slate-600">
              <a className="hover:text-slate-900" href="#about">About</a>
              <a className="hover:text-slate-900" href="#predict">Predict</a>
              <a className="hover:text-slate-900" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} StrokeSense. For education only.</div>
      </div>
    </footer>
  );
}
