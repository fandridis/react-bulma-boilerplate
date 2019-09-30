import React from 'react';
import './Home.scss';

function Home() {
  return (
    <>
      <section className="hero has-background-info is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">Hero Image goes here</h1>
          </div>
        </div>
      </section>
      <section className="section has-background-primary">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-quarters">
              <h2 className="subtitle has-text-centered is-size-3-desktop">
                ModPod is a respite for those seeking to recharge, reconnect and relax in
                otherwise high density locations, inside or outside. Equipped with
                high-tech and ultra comfort, it is the most flexible small space
                available.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
