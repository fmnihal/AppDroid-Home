import React from 'react';

const Home = () => {
    return (
        <div>
            <div id='banner' className='my-20 bg-purple text-white'>
                <h1>We Build <span>Productive</span> Apps</h1>
                <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <img src="../assets/hero.png" alt="" />
                <div className='bg-purple p-20'>
                    <h1 className='mb-10'>Trusted by Millions, Built for You</h1>
                    <div>
                        <div>
                            <p>Total Downloads</p>
                            <h1>209.6M</h1>
                            <p>21% More Than Last Month</p>
                        </div>
                        <div>
                            <p>Total Reviews</p>
                            <h1>906K</h1>
                            <p>46% More Than Last Month</p>
                        </div>
                        <div>
                            <p>Active Apps</p>
                            <h1>132+</h1>
                            <p>31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;