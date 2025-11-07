import { useMemo, useState } from 'react';
import { Activity, Loader2 } from 'lucide-react';

const options = {
  gender: ['Male', 'Female', 'Other'],
  yesno: ['No', 'Yes'],
  workType: ['Private', 'Govt', 'Self-employed', 'Children', 'Never Worked'],
  residence: ['Urban', 'Rural'],
  smoking: ['Formerly Smoked', 'Never Smoked', 'Smokes'],
};

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

export default function PredictionForm() {
  const [form, setForm] = useState({
    gender: 'Female',
    age: '',
    hypertension: 'No',
    heart_disease: 'No',
    ever_married: 'No',
    work_type: 'Private',
    Residence_type: 'Urban',
    avg_glucose_level: '',
    bmi: '',
    smoking_status: 'Never Smoked',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const backend = useMemo(() => import.meta.env.VITE_BACKEND_URL, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      if (!backend) {
        setResult({ notice: 'No backend configured. Set VITE_BACKEND_URL to enable live predictions.' });
      } else {
        const res = await fetch(`${backend}/predict`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            gender: form.gender,
            age: Number(form.age),
            hypertension: form.hypertension === 'Yes' ? 1 : 0,
            heart_disease: form.heart_disease === 'Yes' ? 1 : 0,
            ever_married: form.ever_married === 'Yes' ? 1 : 0,
            work_type: form.work_type,
            residence_type: form.Residence_type,
            avg_glucose_level: Number(form.avg_glucose_level),
            bmi: Number(form.bmi),
            smoking_status: form.smoking_status,
          }),
        });
        const data = await res.json();
        setResult(data);
      }
    } catch (err) {
      setResult({ error: 'Unable to connect to the server. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="predict" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Check your stroke risk</h2>
            <p className="mt-2 text-slate-600">Enter your information below. We use an AI model to estimate your risk. This tool is educational and not a diagnosis.</p>
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white p-6 rounded-xl shadow">
              <Field label="Gender">
                <select name="gender" value={form.gender} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  {options.gender.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <Field label="Age">
                <input type="number" name="age" min="0" max="120" value={form.age} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" required />
              </Field>

              <Field label="Hypertension">
                <select name="hypertension" value={form.hypertension} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  {options.yesno.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <Field label="Heart Disease">
                <select name="heart_disease" value={form.heart_disease} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  {options.yesno.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <Field label="Ever Married">
                <select name="ever_married" value={form.ever_married} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  {options.yesno.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <Field label="Work Type">
                <select name="work_type" value={form.work_type} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  {options.workType.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <Field label="Residence Type">
                <select name="Residence_type" value={form.Residence_type} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  {options.residence.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <Field label="Average Glucose Level">
                <input type="number" step="0.1" name="avg_glucose_level" value={form.avg_glucose_level} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" required />
              </Field>

              <Field label="BMI">
                <input type="number" step="0.1" name="bmi" value={form.bmi} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" required />
              </Field>

              <Field label="Smoking Status">
                <select name="smoking_status" value={form.smoking_status} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  {options.smoking.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <div className="sm:col-span-2">
                <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 disabled:opacity-70">
                  {loading ? <Loader2 className="animate-spin" size={16} /> : <Activity size={16} />}
                  Predict
                </button>
              </div>
            </form>

            {result && (
              <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
                {result.notice && (
                  <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded p-3">{result.notice}</p>
                )}
                {result.error && (
                  <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded p-3">{result.error}</p>
                )}
                {result.risk && (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-wide text-slate-500">Prediction</p>
                      <p className={`mt-1 text-2xl font-bold ${result.risk === 'high' ? 'text-red-600' : 'text-green-600'}`}>
                        {result.risk === 'high' ? '🔴 High Risk of Stroke' : '🟢 Low Risk of Stroke'}
                      </p>
                      {typeof result.probability === 'number' && (
                        <p className="mt-1 text-slate-600">Probability: {(result.probability * 100).toFixed(1)}%</p>
                      )}
                    </div>
                  </div>
                )}
                {Array.isArray(result?.tips) && result.tips.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-slate-700">Lifestyle suggestions</p>
                    <ul className="mt-2 list-disc pl-5 text-slate-600 space-y-1">
                      {result.tips.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </div>
                )}
                <p className="mt-4 text-xs text-slate-500">Disclaimer: This tool is educational and does not replace professional medical advice.</p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-slate-900">What influences stroke risk?</h3>
            <p className="mt-2 text-sm text-slate-600">Below is a simplified view of common risk drivers. Managing blood pressure, glucose, and lifestyle choices can lower risk.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[{label:'Age', value:72, color:'bg-blue-500'}, {label:'Hypertension', value:64, color:'bg-rose-500'}, {label:'Glucose', value:58, color:'bg-emerald-500'}, {label:'BMI', value:44, color:'bg-amber-500'}].map((b)=> (
                <div key={b.label} className="rounded-lg border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-700">{b.label}</p>
                    <span className="text-xs text-slate-500">{b.value}%</span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded bg-slate-100">
                    <div className={`h-2 rounded ${b.color}`} style={{ width: `${b.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
