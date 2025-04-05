import React from 'react'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div>
        <section id="dashboard" class="dashboard">
        <div class="section-header">
            <h2>Your Learning Dashboard</h2>
            <p>Track your progress and manage your learning journey</p>
        </div>
        <div class="dashboard-stats">
            <div class="stat-card">
                <h3>Courses Enrolled</h3>
                <div class="stat-value">3</div>
                <div class="stat-change">+1 from last month</div>
            </div>
            <div class="stat-card">
                <h3>Certificates Earned</h3>
                <div class="stat-value">2</div>
                <div class="stat-change">+1 from last month</div>
            </div>
            <div class="stat-card">
                <h3>Learning Hours</h3>
                <div class="stat-value">47.5</div>
                <div class="stat-change">+12.5 from last month</div>
            </div>
        </div>
    </section>
    </div>
  )
}

