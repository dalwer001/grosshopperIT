import React, { useEffect } from 'react';
import { useState } from 'react';
import img1 from '../../../images/blog/default/thum1.jpg';
import img2 from '../../../images/blog/default/thum2.jpg';
import img3 from '../../../images/blog/default/thum3.jpg';
import img4 from '../../../images/blog/default/thum4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faClock, faComment, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import ReactTooltip from "react-tooltip";
import './Blog.css';

const blogData = [
    {
        "id": 1,
        "title": "Vestibulum massa arcu, consectetu pellentesque scelerisque.",
        "description": "Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.",
        "date": '7 March, 2020',
        "img": img1,
        "message": 15
    },
    {
        "id": 2,
        "title": "Vestibulum massa arcu, consectetu pellentesque scelerisque.",
        "description": "Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.",
        "date": '7 March, 2020',
        "img": img2,
        "message": 15
    },
    {
        "id": 3,
        "title": "Vestibulum massa arcu, consectetu pellentesque scelerisque.",
        "description": "Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.",
        "date": '7 March, 2020',
        "img": img3,
        "message": 15
    },
    {
        "id": 4,
        "title": "Vestibulum massa arcu, consectetu pellentesque scelerisque.",
        "description": "Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.",
        "date": '7 March, 2020',
        "img": img4,
        "message": 15
    }

]

const Blog = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        setNews(blogData);
    }, [])

    return (
        <section className="mb-5">
            <div className="container">
                <h1 className="section-header text-center">Our Blog & News</h1>
                <div className="d-flex justify-content-center mt-3">
                    <div className="short-underLine">
                    </div>
                    <div className="long-underLine">
                    </div>
                </div>
                <div className="row">
                    {news.map(blog =>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div class="blog-card mb-3" style={{ maxWidth: "540px" }}>
                                <div class="row g-0 p-3">
                                    <div class="col-md-4 d-flex align-items-center">
                                        <img src={blog.img} class="blog-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <a href class="blog-title text-decoration-none">{blog.title}</a>
                                            <p class="blog-text">{blog.description}</p>
                                            <div className="d-flex">
                                                <p><small class="blog-footer fw"><FontAwesomeIcon icon={faClock} className="mx-2 blog-date" />{blog.date}</small></p>
                                                <p><FontAwesomeIcon icon={faComment} className="blog-date ms-5" /><small className="blog-footer mx-2">{blog.message}</small></p>
                                                <p data-tip data-for="share">
                                                    <FontAwesomeIcon icon={faShareAlt} className="blog-date mx-2" />
                                                </p>
                                                <ReactTooltip id="share" place="left" effect="solid" clickable={true} backgroundColor="#F01F75">
                                                    <div className="d-flex font-bg">
                                                        <a href=""><FontAwesomeIcon icon={faFacebookF} className="text-light blog-date mx-2 " /></a>
                                                        <a href=""><FontAwesomeIcon icon={faTwitter} className="text-light blog-date mx-2" /></a>
                                                        <a href=""><FontAwesomeIcon icon={faLinkedinIn} className="text-light blog-date mx-2" /></a>
                                                    </div>
                                                </ReactTooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;