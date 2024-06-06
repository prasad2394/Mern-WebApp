import PropTypes from 'prop-types';
import SiteTitle from './SiteTitle';
import { Link } from 'react-router-dom';
function Blog({blog}) {
    return (
        <div className="bg-slate-50 py-16 sm:py-16">
            <SiteTitle title="Blogs" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {blog?.map((post) => (
                    <article key={post.id} className="bg-white p-6 rounded-md shadow-md flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                        </time>
                        <Link to={`/blog/${post.id}`}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                        {post.category.title}
                        </Link>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to={`/blog/${post.id}`}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </Link>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <Link to={`/blog/${post.id}`}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                            </Link>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                        </div>
                    </div>
                    </article>
                ))}
                </div>
            </div>
        </div>
    )
}

Blog.propTypes = {
    blog : PropTypes.array.isRequired,
}

export default Blog