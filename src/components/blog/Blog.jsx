import React from 'react';
import Article from '../../components/article/Article';
import { blog01, Blog02, Blog03, Blog04, Blog05 } from '../blog/imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    {/* <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Ready-Made Templates</h1>
    </div>
    <div className="gpt3__blog-container"> */}
 
      {/* <div className="gpt3__blog-container_groupB">
        <Article imgUrl={Blog02}  text="UpConstruction is a light and clean construction website template built with LCNC. The template is ideal for any construction company, architect, interior designer, exterior designer, builder website, and other construction-related services websites." />
        <Article imgUrl={Blog03} text="iPortfolio is a modern personal CV and portfolio HTML template. It’s creative, minimal and clean design. iPortfolio can be used for many purposes starting from minimal portfolios, freelancers and graphic designers." />
        <Article imgUrl={Blog04} text="Ninestars is modern one page for your business, agency, corporate or startup company. Ninestars is very easy to use and highly customizable. Create great and super fast websites with LCNC" />
        <Article imgUrl={Blog05} text="Yummy is a clean and lightweight restaurant website template created with LCNC. It’s designed specifically for restaurants, cafes, bakeries, bars, catering, or anyone working in the food industry and is an attractive and effective way to promote your food-related businesses." />
      </div> */}
    </div>
  // </div>
);

export default Blog;
