import React, { useEffect } from "react";
import "../css/userdashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequests } from "../../features/requests/requestSlice";
import { fetchNews } from "../../features/news/newsSlice";
import { fetchProfiles } from "../../features/profiles/profileSlice";

const UserDashboard = () => {
    const dispatch = useDispatch();
    const { requests } = useSelector((state) => state.requests);
    const { news } = useSelector((state) => state.news);
    const { profiles } = useSelector((state) => state.profiles);

    useEffect(() => {
        dispatch(fetchRequests());
        dispatch(fetchNews());
        dispatch(fetchProfiles());
    }, [dispatch]);

    const pendingRequests = requests.filter((req) => req.status === "Pending");
    const resolvedRequests = requests.filter((req) => req.status === "Resolved");

    return (
        <section className="user-dashboard-section">
            <div className="user-dashboard-container">

                {/* Top Navigation */}
                <div className="top-nav">
                    <div className="topbar-left">User Dashboard</div>
                    <div className="topbar-right">
                        <div className="search-box">🔍</div>
                        <div className="notif-icon">🔔</div>
                        <div className="profile-icon">👤</div>
                    </div>
                </div>

                {/* Header Section */}
                <div className="resource-header">
                    <div className="resource-info">
                        <div className="resource-icon">
                            <img src="https://i.imgur.com/qkdpN.jpg" alt="resource" />
                        </div>
                        <div>
                            <div className="resource-title-small">Live Response</div>
                            <div className="resource-title-large">Disaster Resources</div>
                        </div>
                    </div>
                    <div className="topbar-actions">
                        <button className="btn btn-new-request">New Request</button>
                        <button className="btn btn-new-resource">New Resource</button>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="content-wrapper summary-cards">
                    <div className="summary-card">
                        <h3>Total Requests</h3>
                        <p>{requests.length}</p>
                    </div>
                    <div className="summary-card">
                        <h3>Pending</h3>
                        <p>{pendingRequests.length}</p>
                    </div>
                    <div className="summary-card">
                        <h3>Resolved</h3>
                        <p>{resolvedRequests.length}</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="content-wrapper quick-actions">
                    <div className="action-card">📋 View All Requests</div>
                    <div className="action-card">📰 Add News</div>
                    <div className="action-card">👥 Manage Profiles</div>
                </div>

                {/* Requests */}
                <div className="content-wrapper">
                    <h2 className="section-title">Recent Requests</h2>
                    <div className="requests-container">
                        {pendingRequests.map((req, index) => (
                            <div className="request-card" key={index}>
                                <h3>{req.title}</h3>
                                <p>{req.description}</p>
                                <p>{req.location}</p>
                                <p><small>{new Date(req.date).toLocaleDateString()}</small></p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* News */}
                <div className="content-wrapper news-section">
                    <h2 className="section-title">Latest News</h2>
                    <div className="news-scroll">
                        {news.map((article, index) => (
                            <div className="news-card" key={index}>
                                <img src={article.image} alt={article.title} />
                                <div className="news-info">
                                    <h3 className="news-title">{article.title}</h3>
                                    <p className="news-date">{new Date(article.date).toDateString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Announcements */}
                <div className="content-wrapper announcements-section">
                    <h2 className="section-title">Announcements</h2>
                    <div className="news-scroll">
                        {news.slice(0, 3).map((item, idx) => (
                            <div className="news-card announcement-card" key={idx}>
                                <h3>{item.title}</h3>
                                <p>{item.description.slice(0, 60)}...</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Profiles */}
                <div className="content-wrapper">
                    <h2 className="section-title">Profiles</h2>
                    <div className="profiles-scroll">
                        {profiles.map((profile) => (
                            <div className="profile-card" key={profile.id}>
                                <img src={profile.avatar} alt="avatar" />
                                <div className="profile-role">{profile.role}</div>
                                <div className="profile-date">{new Date(profile.submittedDate).toDateString()}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserDashboard;
