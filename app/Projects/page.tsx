'use client';

import { useEffect } from 'react';

export default function ProjectsPage() {
  const projectsList = [
    { id: 1, title: 'مدار آلارم 555', image: '/proteus-1.jpg', type: 'image' },
    { id: 2, title: 'Coming Soon...', image: '', type: 'text' },
    { id: 3, title: 'Coming Soon...', image: '', type: 'text' },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 900;
    if (isMobile) {
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

      <div style={{ padding: '120px 20px 40px', maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#ffce00', marginBottom: '40px' }}>
          پروژه‌های من
        </h1>
        
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card">
              {project.type === 'image' ? (
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.85' }} />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#888', fontSize: '1.2rem', fontWeight: 'bold', background: 'rgba(255,255,255,0.03)' }}>
                  {project.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}