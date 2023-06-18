import React from 'react';
import Header from '@/components/Header';
import Board from '@/components/Board';
import Sidebar from '@/components/Sidebar';

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />

      <div className="wrapper">
        <div className="header">
          <Header />
        </div>

        {/* <div className="main-container">
          <div className="main-header anim">Discover</div>
          <div className="main-blogs">
            <div className="main-blog anim">
              <div className="main-blog__title">How to do Basic Jumping and how to landing safely</div>
              <div className="main-blog__author">
                <div className="author-img__wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <img className="author-img" src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
                </div>
                <div className="author-detail">
                  <div className="author-name">Thomas Hope</div>
                  <div className="author-info">53K views<span className="seperate"></span>2 weeks ago</div>
                </div>
              </div>
              <div className="main-blog__time">7 min</div>
            </div>

            <div className="main-blog anim">
              <div className="main-blog__title">Skateboard Tips You need to know</div>
              <div className="main-blog__author tips">
                <div className="main-blog__time">7 min</div>
                <div className="author-img__wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <img className="author-img" src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="author-detail">
                  <div className="author-name">Tony Andrew</div>
                  <div className="author-info">53K views<span></span>2 weeks ago</div>
                </div>
              </div>
            </div>
          </div>

         
        </div> */}
        <Board />
      </div>
    </div>
  );
}

export default Dashboard;
