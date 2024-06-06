// eslint-disable-next-line react/prop-types
const SiteTitle = ({title}) => {
  return (
    <div className="mx-auto flex justify-center max-w-7xl mb-8 px-6 lg:px-8">
        <div className="text-center font-bold text-4xl text-slate-700">
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default SiteTitle