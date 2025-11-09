import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from './components/Layout'
import { Seo } from './components/Seo'
import { Home } from './pages/Home'

function ComingSoon({ title }) {
  return (
    <div className="space-y-6">
      <Seo title={title} />
      <div className="rounded-3xl border border-dashed border-primary/30 bg-white/70 p-10 text-center shadow-sm dark:border-primary/40 dark:bg-slate-900/70">
        <h1 className="text-3xl font-semibold text-secondary dark:text-slate-100">{title}</h1>
        <p className="mt-3 text-secondary/70 dark:text-slate-400">
          Detailed content for this section is in progress. Check back soon!
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<ComingSoon title="About" />} />
            <Route path="resume" element={<ComingSoon title="Resume" />} />
            <Route path="projects" element={<ComingSoon title="Projects" />} />
            <Route path="experience" element={<ComingSoon title="Experience & Education" />} />
            <Route path="skills" element={<ComingSoon title="Skills & Certifications" />} />
            <Route path="gallery" element={<ComingSoon title="Portfolio" />} />
            <Route path="blog" element={<ComingSoon title="Notes" />} />
            <Route path="testimonials" element={<ComingSoon title="Testimonials" />} />
            <Route path="contact" element={<ComingSoon title="Contact" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
