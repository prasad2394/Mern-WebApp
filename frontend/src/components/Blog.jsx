import PropTypes from 'prop-types';
import SiteTitle from './SiteTitle';
function Blog({blog}) {
    return (
        <>
        <SiteTitle title="Blogs" />
        <div className="bg-white pt-0 pb-10 sm:pt-0 sm:pb-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {blog?.map((post) => (
                    <article key={post.id} className="bg-slate-50 p-6 rounded-md shadow-md flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                        </time>
                        <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                        {post.category.title}
                        </a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                            </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                        </div>
                    </div>
                    </article>
                ))}
                </div>
            </div>
        </div>
        </>
    )
}

Blog.propTypes = {
    blog : PropTypes.array.isRequired,
}

export default Blog