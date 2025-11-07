export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">How StrokeSense works</h2>
            <p className="mt-4 text-slate-700">We combine health data you provide with a trained machine learning model (like logistic regression or random forests) to estimate your likelihood of stroke. Key inputs include age, blood pressure history, glucose level, body mass index, and lifestyle factors.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Secure, client-to-server communication</li>
              <li>• Real-time prediction results</li>
              <li>• Actionable wellness suggestions</li>
            </ul>
            <p className="mt-6 text-sm text-slate-500">Note: This is not a medical diagnosis. Consult a healthcare professional for clinical decisions.</p>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="text-lg font-semibold text-slate-900">Why early detection matters</h3>
            <p className="mt-2 text-slate-600">Recognizing risk early enables lifestyle changes and timely medical evaluation, which can dramatically reduce the likelihood of severe outcomes.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[{title:'Awareness',desc:'Know your numbers: BP, glucose, BMI'},{title:'Prevention',desc:'Exercise, nutrition, smoke-free life'},{title:'Monitoring',desc:'Regular checkups and screenings'},{title:'Support',desc:'Talk to a clinician if unsure'}].map((c)=> (
                <div key={c.title} className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                  <p className="font-medium text-slate-900">{c.title}</p>
                  <p className="text-sm text-slate-600 mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
