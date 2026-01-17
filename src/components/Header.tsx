// src/components/Header.tsx
import type { Page } from './Sidebar';

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
      </nav>
    </header>
  );
};