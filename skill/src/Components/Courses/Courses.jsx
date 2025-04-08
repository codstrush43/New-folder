import React from 'react'
import { Link } from 'react-router-dom';
import './Courses.css'

export default function Courses(){
  return (
    <div>
        <div className="course-details-content"></div>
        <section id="courses" className="courses">
            <div className="section-header">
                <h2>Explore Courses</h2>
                <p>Discover skills to advance your career and future</p>
            </div>
            <div className="course-filters">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1469&q=80" alt="courses" />
            <Link to = "/technology">Technology</Link>
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1470&q=80" alt="#" />
                <button className="filter-btn">Healthcare</button>
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1470&q=80" alt="#" />
                <button className="filter-btn">Agriculture</button>
            </div>
            <div className="course-grid">
                {/* <!-- Course cards will be dynamically populated by JavaScript --> */}
            </div>
        </section>
    </div>
  )
}


