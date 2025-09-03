// src/components/Sidebar.tsx
import React from 'react';

export type Page = 'landing' | 'upload' | 'analysis' | 'history';

interface NavItemProps {
  label: string;
  page: Page;
  current: Page;
  onClick: (p: Page) => void;
  children: React.ReactNode;
}

const NavItem = ({ label, page, current, onClick, children }: NavItemProps) => (
  <div
    className={`nav-item ${current === page ? 'active' : ''}`}
    data-page={page}
    onClick={() => onClick(page)}
  >
    {children}
    <span className="nav-text">{label}</span>
  </div>
);

export const Sidebar = ({
  current,
  setPage,
}: {
  current: Page;
  setPage: (p: Page) => void;
}) => (
  <nav className="sidebar">
    <NavItem label="Dashboard" page="landing" current={current} onClick={setPage}>
      <svg className="nav-icon" viewBox="0 0 24 24">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    </NavItem>
    <NavItem label="Upload" page="upload" current={current} onClick={setPage}>
      <svg className="nav-icon" viewBox="0 0 24 24">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
      </svg>
    </NavItem>
    <NavItem label="Analysis" page="analysis" current={current} onClick={setPage}>
      <svg className="nav-icon" viewBox="0 0 24 24">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 8.12,16.5 8.91,15.77L10.32,17.18C9.75,17.96 9.33,18.84 9.07,19.77C8.41,19.26 7.69,18.68 7.07,18.28M6.54,9.64C6.8,8.59 7.24,7.59 7.81,6.67C8.04,6.95 8.27,7.24 8.5,7.54C8.17,8.26 7.93,9 7.8,9.75L6.54,9.64M7.07,5.72C7.69,5.32 8.41,4.74 9.07,4.23C9.33,5.16 9.75,6.04 10.32,6.82L8.91,8.23C8.12,7.5 7.5,6.62 7.07,5.72M12,6.8C11.22,6.8 10.5,7 9.85,7.35L8.5,7.54C8.27,7.24 8.04,6.95 7.81,6.67C9.59,5.64 10.74,5.09 12,5.09V6.8M12,17.2V18.91C10.74,18.91 9.59,18.36 7.81,17.33C8.04,17.05 8.27,16.76 8.5,16.46L9.85,16.65C10.5,17 11.22,17.2 12,17.2M16.93,18.28C16.31,18.68 15.59,19.26 14.93,19.77C14.67,18.84 14.25,17.96 13.68,17.18L15.09,15.77C15.88,16.5 16.5,17.38 16.93,18.28M17.46,14.36C17.2,15.41 16.76,16.41 16.19,17.33C15.96,17.05 15.73,16.76 15.5,16.46C15.83,15.74 16.07,15 16.2,14.25L17.46,14.36M16.93,5.72C16.5,6.62 15.88,7.5 15.09,8.23L13.68,6.82C14.25,6.04 14.67,5.16 14.93,4.23C15.59,4.74 16.31,5.32 16.93,5.72M12,17.2C12.78,17.2 13.5,17 14.15,16.65L15.5,16.46C15.73,16.76 15.96,17.05 16.19,17.33C14.41,18.36 13.26,18.91 12,18.91V17.2M12,6.8V5.09C13.26,5.09 14.41,5.64 16.19,6.67C15.96,6.95 15.73,7.24 15.5,7.54L14.15,7.35C13.5,7 12.78,6.8 12,6.8Z" />
      </svg>
    </NavItem>
    <NavItem label="History" page="history" current={current} onClick={setPage}>
      <svg className="nav-icon" viewBox="0 0 24 24">
        <path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" />
      </svg>
    </NavItem>
  </nav>
);
