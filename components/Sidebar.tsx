import React from 'react';

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <span className="logo">S</span>

        <div className="side-wrapper">
          <div className="side-title">MENU</div>
          <div className="side-menu">
            <a className="is-active text-foreground transition-colors hover:text-foreground/80" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z" />
              </svg>
                Dashboard
            </a>
            <a className="sidebar-link trending" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.835 12.007l.002.354c.012 1.404.096 2.657.242 3.451 0 .015.16.802.261 1.064.16.38.447.701.809.905a2 2 0 00.91.219c.249-.012.66-.137.954-.242l.244-.094c1.617-.642 4.707-2.74 5.891-4.024l.087-.09.39-.42c.245-.322.375-.715.375-1.138 0-.379-.116-.758-.347-1.064-.07-.099-.18-.226-.28-.334l-.379-.397c-1.305-1.321-4.129-3.175-5.593-3.79 0-.013-.91-.393-1.343-.407h-.057c-.665 0-1.286.379-1.603.991-.087.168-.17.496-.233.784l-.114.544c-.13.874-.216 2.216-.216 3.688zm-6.332-1.525C3.673 10.482 3 11.162 3 12a1.51 1.51 0 001.503 1.518l3.7-.328c.65 0 1.179-.532 1.179-1.19 0-.658-.528-1.191-1.18-1.191l-3.7.329zm9.67.375c-.16.28-.253.632-.253 1.066 0 .433.093.784.253 1.065l1.44.058c.234.939.61 1.942 1.042 3.128l-3.188.132c-.235 0-.381-.145-.409-.375l-.092-.813c-.172-1.074-.514-2.6-1.074-4.235l.087-.018.309-.064c.345-.069.855-.28 1.309-.509zm-2.45-3.09C12.76 8.408 13.108 8 13.5 8c.392 0 .74.408.74.91v3.18c0 .504-.348.911-.74.911-.391 0-.74-.407-.74-.91V8.91z" />
              </svg>
              All Tasks
            </a>
            <a className="sidebar-link subscriptions" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 2a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3H5zm14 16H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1zM8 6h8a1 1 0 010 2H8a1 1 0 010-2zm0 4h8a1 1 0 010 2H8a1 1 0 010-2zm0 4h8a1 1 0 010 2H8a1 1 0 010-2zm-3 2a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
              Reports
            </a>
          </div>
        </div>

        <div className="side-wrapper">
          <div className="side-title">CATEGORY</div>
          <div className="side-menu">
            <a className="sidebar-link music" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 17h-3v3h-2v-3H7v-2h3V7h2v3h3v2zm4-13H3a1 1 0 00-1 1v15a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 15H4V6h16v13z" />
              </svg>
              Todo
            </a>
            <a className="sidebar-link movies" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 4h3v4H5zm6 0h7v2h-7zm9 0h3v4h-3zM5 9h3v4H5zm6 0h7v2h-7zm9 0h3v4h-3zM5 14h3v4H5zm6 0h7v2h-7zm9 0h3v4h-3zM3 4h1v2H3zm0 3h1v2H3zm0 3h1v2H3zm0 3h1v2H3zm0 3h1v2H3zm1-9h15v11H4V7zm14 10V8h-4v1H9V8H5v9h14z" />
              </svg>
              In Progress
            </a>
            <a className="sidebar-link gaming" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 3h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zm2 2h-2V5h2zm-6 0H8V5h2zM4 9h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zm2 2h-2v-2h2zm-6 0H8v-2h2zM4 15h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zm2 2h-2v-2h2zm-6 0H8v-2h2zM4 21h4v-2H4zm6 0h4v-2h-4zm6 0h4v-2h-4zm2 2h-2v-2h2zm-6 0H8v-2h2z" />
              </svg>
              Completed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
