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
                <button class="filter-btn active">All Courses</button>
                <button class="filter-btn">Technology</button>
                <button class="filter-btn">Healthcare</button>
                <button class="filter-btn">Agriculture</button>
                <button class="filter-btn">Business</button>
                <button class="filter-btn">Manufacturing</button>
            </div>
            <div class="course-grid">
                {/* <!-- Course cards will be dynamically populated by JavaScript --> */}
            </div>
        </section>
    </div>
  )
}


