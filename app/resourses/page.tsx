'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  // لیست هوشمند پروژه‌ها
  const [projectsList] = useState([
    { id: 1, title: 'مدار آلارم 555', image: '/proteus-1.jpg' }, // عکس 1
    { id: 2, title: 'شبیه‌سازی پروتئوس ۲', image: '/proteus-2.jpg' }, // عکس 2
    { id: 3, title: 'طراحی مدار پروتئوس ۳', image: '/proteus-3.jpg' }, // عکس 3
  ]);
  const [articlesList] = useState<string[]>([]);
  const [coursesList] = useState<string[]>([]);
  const [currentAcademicYear] = useState<number>(3);

  useEffect(() => {
    const isMobile = window.innerWidth < 900;

    if (isMobile) {
      // حالت موبایل: انیمیشن چرخشی خودکار نور
      let angle = 0;
      const interval = setInterval(() => {
        angle = (angle + 0.5) % 360;
        const x = 50 + 35 * Math.cos(angle * Math.PI / 180);
        const y = 50 + 35 * Math.sin(angle * Math.PI / 180);
        document.body.style.setProperty('--mouse-x', x + '%');
        document.body.style.setProperty('--mouse-y', y + '%');
      }, 50);
      return () => clearInterval(interval);
    } else {
      // حالت دسکتاپ: حرکت با موس
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.body.style.setProperty('--mouse-x', x + '%');
        document.body.style.setProperty('--mouse-y', y + '%');
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div>
      {/* لایه‌های بک‌گراند مدار */}
      <div className="circuit-lines"></div>
      <div className="circuit-icons">
        <div className="circuit-icon-item icon-1">⚡</div>
        <div className="circuit-icon-item icon-2">🔌</div>
        <div className="circuit-icon-item icon-3">💻</div>
        <div className="circuit-icon-item icon-4">📡</div>
        <div className="circuit-icon-item icon-5">🛠️</div>
        <div className="circuit-icon-item icon-6">🔋</div>
        <div className="circuit-icon-item icon-7">⚙️</div>
        <div className="circuit-icon-item icon-8">🤖</div>
      </div>

      <header>
        <div className="logo">
          {/* لوگوی شما با mixBlendMode برای حذف هر گونه پس‌زمینه باقی‌مانده */}
          <img 
            src="/logo.png" 
            alt="" 
            style={{
              height: '35px',
              width: 'auto',
              mixBlendMode: 'screen'
            }} 
          />
          <span style={{color: '#ffce00', fontWeight: 'bold', fontSize: '1.5rem'}}>AFFAF</span>
        </div>
        <ul className="nav-links">
          <li><a href="/" style={{color:'#ffce00'}}>خانه</a></li>
          <li><a href="/contact">درباره من</a></li>
          <li><a href="/projects">پروژه‌ها</a></li>
          <li><a href="/articles">مقالات</a></li>
          <li><a href="/courses">دوره‌ها</a></li>
          <li><a href="/resources">منابع</a></li>
        </ul>
        <button className="header-btn">دانلود رزومه ⬇</button>
      </header>

      <section className="hero">
        <h1>مهندس برق و علاقه‌مند<br /><span>به هوش مصنوعی و تکنولوژی</span></h1>
        <p>اینجا جاییه که پروژه‌ها، مقالات و تجربیاتم در حوزه مهندسی برق، هوش مصنوعی و تکنولوژی رو به اشتراک می‌ذارم.</p>
        <div style={{display:'flex', gap:'15px'}}>
          <button className="btn-primary">مشاهده پروژه‌ها</button>
          <button className="btn-secondary">درباره من</button>
        </div>
      </section>

      <section className="stats-container">
        <div className="stat-card"><div className="stat-number">{projectsList.length}</div><div className="stat-label">پروژه انجام شده</div></div>
        <div className="stat-card"><div className="stat-number">{articlesList.length}</div><div className="stat-label">مقاله تخصصی</div></div>
        <div className="stat-card"><div className="stat-number">{coursesList.length}</div><div className="stat-label">دوره</div></div>
        <div className="stat-card"><div className="stat-number">{currentAcademicYear}</div><div className="stat-label">سال تحصیلی</div></div>
      </section>

      <div className="hide-on-mobile">
        <h2 className="section-title">دسته‌بندی‌ها</h2>
        <section className="categories-grid">
          <div className="cat-card"><div className="cat-icon">🔌</div><div className="cat-title">پروژه‌های پروتئوس</div><div className="cat-desc">شبیه‌سازی مدارهای الکترونیکی با Proteus</div><a href="/projects" className="cat-link">مشاهده پروژه‌ها &lt;</a></div>
          <div className="cat-card"><div className="cat-icon">📊</div><div className="cat-title">پروژه‌های متلب</div><div className="cat-desc">تحلیل و شبیه‌سازی با MATLAB</div><a href="/projects" className="cat-link">مشاهده پروژه‌ها &lt;</a></div>
          <div className="cat-card"><div className="cat-icon">📐</div><div className="cat-title">آلتیم دیزاینر</div><div className="cat-desc">طراحی بردهای الکترونیکی با Altium Designer</div><a href="/projects" className="cat-link">مشاهده پروژه‌ها &lt;</a></div>
          <div className="cat-card"><div className="cat-icon">🧠</div><div className="cat-title">هوش مصنوعی</div><div className="cat-desc">پروژه‌ها و مقالات مرتبط با AI</div><a href="/projects" className="cat-link">مشاهده پروژه‌ها &lt;</a></div>
        </section>
      </div>

      <div className="hide-on-mobile">
        <section className="projects-section">
          <div className="projects-header"><h2>آخرین پروژه‌ها</h2><a href="/projects">مشاهده همه &gt;</a></div>
          <div className="projects-grid">
            {projectsList.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <nav className="mobile-nav">
        <a href="/" className="mobile-nav-item active"><span>🏠</span><span>خانه</span></a>
        <a href="/projects" className="mobile-nav-item"><span>⚡</span><span>پروژه‌ها</span></a>
        <a href="/articles" className="mobile-nav-item"><span>📄</span><span>مقالات</span></a>
        <a href="/courses" className="mobile-nav-item"><span>🎥</span><span>دوره‌ها</span></a>
        <a href="/resources" className="mobile-nav-item"><span>📚</span><span>منابع</span></a>
      </nav>
    </div>
  );
}