import React from 'react'
import './Courses.css'

export default function Courses(){
  return (
    <div>
        <div class="course-details-content"></div>
        <section id="courses" class="courses">
            <div class="section-header">
                <h2>Explore Courses</h2>
                <p>Discover skills to advance your career and future</p>
            </div>
            <div class="course-filters">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1469&q=80" alt="courses" />
                <button class="filter-btn active">Technology</button>
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1470&q=80" alt="#" />
                <button class="filter-btn">Healthcare</button>
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1470&q=80" alt="#" />
                <button class="filter-btn">Agriculture</button>
            </div>
            <div class="course-grid">
                {/* <!-- Course cards will be dynamically populated by JavaScript --> */}
            </div>
        </section>
    </div>
  )
}


