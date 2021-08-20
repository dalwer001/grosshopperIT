import React, { useEffect, useState } from 'react';
import icon1 from '../../../images/pricingtable/icon1.png';
import icon2 from '../../../images/pricingtable/icon2.png';
import icon3 from '../../../images/pricingtable/icon3.png';
import './Plan.css';

const planData = [
    {
        "id":1,
        "title":"Basic Plan",
        "img":icon1,
        "price":49,
        "service1":"Graphic Design",
        "service2":"Web Design",
        "service3":"UI/UX",
        "service4":"HTML/CSS",
        "service5":"SEO Marketing",
        "service6":"Business Analysis"
    },
    {
        "id":2,
        "title":"Standard Plan",
        "img":icon2,
        "price":99,
        "service1":"Graphic Design",
        "service2":"Web Design",
        "service3":"UI/UX",
        "service4":"HTML/CSS",
        "service5":"SEO Marketing",
        "service6":"Business Analysis"
    },
    {
        "id":1,
        "title":"Premium Plan",
        "img":icon3,
        "price":149,
        "service1":"Graphic Design",
        "service2":"Web Design",
        "service3":"UI/UX",
        "service4":"HTML/CSS",
        "service5":"SEO Marketing",
        "service6":"Business Analysis"
    }
] 


const Plan = () => {
    const [plan, setPlan] = useState([]);
    useEffect(() => {
        setPlan(planData);
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <div className="row mb-5">
                {plan.map(plan=>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-5 mt-5 d-flex justify-content-center">
                    <div class="border-0 plan-card p-5" style={{ width: '22rem' }}>
                        <h2 className="text-center plan-title fw-bolder mt-5">{plan.title}</h2>
                        <div className="card-img-top text-center">
                            <img src={plan.img} class="w-75 img-fluid card-img-top" alt="..." />
                        </div>
                        <div class="card-body text-center mb-4">
                            <h4 class="plan-price mb-4">${plan.price}<span className="fw-light">/Month</span></h4>
                            <p class="plan-text">{plan.service1}</p>
                            <p class="plan-text">{plan.service2}</p>
                            <p class="plan-text">{plan.service3}</p>
                            <p class="plan-text">{plan.service4}</p>
                            <p class="plan-text">{plan.service5}</p>
                            <p class="plan-text mb-5">{plan.service6}</p>
                            <button class="plan-btn fw-bold">Start Now</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default Plan;