import React from 'react';
import Feature from '../feature/Feature';
import './whatABCMarket.css';

const Whatabc_market = () => (
  <div className="abc_market__whatabc_market section__margin" id="wabc_market">
    <div className="abc_market__whatabc_market-feature">
      <Feature
        title="What is ABC Market"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>
    <div className="abc_market__whatabc_market-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="abc_market__whatabc_market-container">
      <Feature
        title="Greenfield"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />
      <Feature
        title="BNB Smart Chain"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="AIM Intelligence"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
    </div>
  </div>
);

export default Whatabc_market;
