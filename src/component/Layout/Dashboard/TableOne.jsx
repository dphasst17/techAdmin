import BrandOne from './brand/brand-01.svg';
import BrandTwo from './brand/brand-02.svg';
import BrandThree from './brand/brand-03.svg';
import BrandFour from './brand/brand-04.svg';
import BrandFive from './brand/brand-05.svg';

const TableOne = ({props}) => {
  return (
    <div className={`table w-full xl:w-[44%] rounded-[10px] border border-stroke ${props.dark === true ? 'bg-slate-500':'bg-slate-100'} px-5 pt-6 pb-2.5`}>
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className={`text-sm ${props.dark === true ? 'text-slate-100' :'text-slate-800'} font-medium uppercase xsm:text-base`}>
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className={`text-sm ${props.dark === true ? 'text-slate-100' :'text-slate-800'} font-medium uppercase xsm:text-base`}>
              Visitors
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className={`text-sm ${props.dark === true ? 'text-slate-100' :'text-slate-800'} font-medium uppercase xsm:text-base`}>
              Revenues
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className={`text-sm ${props.dark === true ? 'text-slate-100' :'text-slate-800'} font-medium uppercase xsm:text-base`}>
              Sales
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className={`text-sm ${props.dark === true ? 'text-slate-100' :'text-slate-800'} font-medium uppercase xsm:text-base`}>
              Conversion
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={BrandOne} alt="Brand" />
            </div>
            <p className={`hidden ${props.dark === true ? 'text-slate-100' :'text-slate-800'} sm:block`}>
              Google
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'}`}>3.5K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'} text-meta-3`}>$5,768</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'}`}>590</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'} text-meta-5`}>4.8%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={BrandTwo} alt="Brand" />
            </div>
            <p className={`hidden ${props.dark === true ? 'text-slate-100' :'text-slate-800'} sm:block`}>
              Twitter
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'}`}>2.2K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'} text-meta-3`}>$4,635</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'}`}>467</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'} text-meta-5`}>4.3%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={BrandThree} alt="Brand" />
            </div>
            <p className={`hidden ${props.dark === true ? 'text-slate-100' :'text-slate-800'} sm:block`}>
              Github
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'}`}>2.1K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'} text-meta-3`}>$4,290</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'}`}>420</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'} text-meta-5`}>3.7%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={BrandFour} alt="Brand" />
            </div>
            <p className={`hidden ${props.dark === true ? 'text-slate-100' :'text-slate-800'} sm:block`}>
              Vimeo
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'}`}>1.5K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'} text-meta-3`}>$3,580</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'}`}>389</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'} text-meta-5`}>2.5%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={BrandFive} alt="Brand" />
            </div>
            <p className={`hidden ${props.dark === true ? 'text-slate-100' :'text-slate-800'} sm:block`}>
              Facebook
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'}`}>1.2K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'} text-meta-3`}>$2,740</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'}`}>230</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`${props.dark === true ? 'text-slate-100' :'text-slate-800'} text-meta-5`}>1.9%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
