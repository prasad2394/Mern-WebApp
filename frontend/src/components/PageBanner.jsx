import PropTypes from 'prop-types';

const PageBanner = ({pagename}) => {
  return (
    <>
        <div className="py-10 bg-slate-100">
            <div className="text-center">
                <h1 className="text-5xl">{pagename}</h1>
            </div>
        </div>
    </>
  )
}

PageBanner.propTypes = {
    pagename: PropTypes.string.isRequired,
};

export default PageBanner;