import PropTypes from 'prop-types';

const Banner = ({ title, description, imageUrl }) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-4 text-center">
      <div className="text-center">
        <img src={imageUrl} className="h-64 w-auto mt-0 mx-auto mb-10"/>
      </div>
      <h1 className="mx-auto max-w-7xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">{title}<br></br>
      <span className="text-5xl whitespace-nowrap text-blue-600">
        <span className="font-semibold">START YOUR BUSINESS NOW!!!</span></span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        {description}  
      </p>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};


export default Banner;
