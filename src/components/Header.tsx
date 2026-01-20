// src/components/Header.tsx
export type Page = 'landing' | 'upload' | 'analysis' | 'about' | 'contact' | 'auth';

export const Header = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <header className="app-header">
      <nav className="header-nav">
        <a href="#" className="header-link" onClick={(e) => { e.preventDefault(); setPage('landing'); }}>
          Home
        </a>
        <a href="#" className="header-link" onClick={(e) => { e.preventDefault(); setPage('about'); }}>
          About
        </a>
        <a href="#" className="header-link" onClick={(e) => { e.preventDefault(); setPage('contact'); }}>
          Contact
        </a>
        <a href="#" className="header-link header-link-login" onClick={(e) => { e.preventDefault(); setPage('auth'); }}>
          Login
        </a>
      </nav>
    </header>
  );
};