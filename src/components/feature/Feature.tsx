import './feature.css';

const Feature = ({ title, text }: any) => (
  <div className="abc_market__features-container__feature">
    <div className="abc_market__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="abc_market__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
