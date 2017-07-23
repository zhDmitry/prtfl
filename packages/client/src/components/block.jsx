import React, { Component } from 'react';
import Slider from 'react-slick';

var settings = {
  dots: true,
  adaptiveHeight: true,
};

class Block extends Component {
  render() {
    const {
      images,
      video,
      comments = [],
      features = [],
      info: {
        title = 'Default',
        subtitle = 'default',
        description 
      } = {}
    } = this.props;
    return (
      <div className="container" >
        <section className="section container">
          <p className="title is-2 has-text-centered">
            {title}
          </p>
          <p className="subtitle is-3 has-text-centered">
            {subtitle}
          </p>
          <nav className="level is-mobile">
            {features.map((el, i) =>
              <div key={i} className="level-item has-text-centered">
                <div>
                  <p className="heading">
                    {el.heading}
                  </p>
                  <p className="title">
                    {el.title}
                  </p>
                </div>
              </div>
            )}
          </nav>
          {images &&
            <Slider {...settings}>
              {images.map((el, i) =>
                <div style={{minHeight:600}}>
                  <p className="title is-6 has-text-centered">
                    {comments[i]}
                  </p>
                  <img src={el} key={i} />
                </div>
              )}
            </Slider>}
          {video && <div className="container"><video  src={video} controls={true} /> </div>}
        </section>
        {description &&
          <div className="section center container flex">
            <div className="box center" style={{ width: '70%' }}>
              {description}
            </div>
          </div>}
      </div>
    );
  }
}

export default Block;
