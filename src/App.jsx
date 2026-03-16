import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DesignServices from './pages/DesignServices'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Quote from './pages/Quote'
import About from './pages/About'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design" element={<DesignServices />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
