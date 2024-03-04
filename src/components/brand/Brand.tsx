import { bnbchain, greenfield, aimintelligence } from './imports';
import './brand.css';

const Brand = () => (
  <div className="abc_market__brand section__padding">
    <div>
      <img src={bnbchain} />
    </div>
    <div>
      <img src={greenfield} className='w-[140px] h-[30px]'/>
    </div>
    <div>
      <img src={aimintelligence} />
    </div>
  </div>
);

export default Brand;
