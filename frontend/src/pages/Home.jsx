import Banner from "../components/Banner";
import { RectangleGroupIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import SiteTitle from "../components/SiteTitle";
import Blog from "../components/Blog";

const Home = () => {

  const features = [
    {
      name: 'PWAs.',
      description:
        'Transform your web presence with our expertise in Single Page Applications (SPA) and Progressive Web Apps (PWA), delivering fast, responsive, and engaging user experiences.',
      icon: RectangleGroupIcon,
    },
    {
      name: 'WP.',
      description: 'Boost your business with our professional WordPress development services, crafting custom themes and plugins to meet your unique needs.',
      icon: LockClosedIcon,
    },
    {
      name: 'AI.',
      description: 'AI Onliner is your premier destination for cutting-edge artificial intelligence solutions designed to transform your business operations.',
      icon: ServerIcon,
    },
  ]

  const whyChoose = [
    {
      icon : RectangleGroupIcon,
      title : 'Research & Development',
      description : 'A workshop to answer critical questions, plan the features of your product and reduce the risk.',
    },
    {
      icon : RectangleGroupIcon,
      title : 'Unique Design',
      description : 'A workshop to answer critical questions, plan the features of your product and reduce the risk.',
    },
    {
      icon : RectangleGroupIcon,
      title : '24 X 7 Support',
      description : 'A workshop to answer critical questions, plan the features of your product and reduce the risk.',
    }

  ]

  const clients = [
    {
        alt : "reactjs",
        img : "/src/assets/images/react.png",
    },
    {
      alt : "angular",
      img : "/src/assets/images/shape.png",
    },
    {
      alt : "javascript",
      img : "/src/assets/images/java-script.png",
    },
    {
      alt : "php",
      img : "/src/assets/images/web.png",
    },
    {
      alt : "wordpress",
      img : "/src/assets/images/wordpress.png",
    }
  ]

  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Boost your React Knowledge',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 31, 2023',
      datetime: '2023-05-31',
      category: { title: 'Tech', href: '#' },
      author: {
        name: 'Mark',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]

  return (
    <>
      <div className="bg-slate-100 py-20">
        <div className="container mx-auto flex justify-between items-center">
        <Banner
          title="Hello, I am Prasad Tulshigiri"
          description="I am a Web App Developer with 7+ years of Experience₹, I work on web app development, website development using Varius platforms like ReactJs, Angular, Wordpress, PHP."
          imageUrl="/src/assets/logo/web-development.svg"
        />
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Transform your web presence with our expertise in SPAs, PWAs, and WordPress development, designed to boost your business and elevate your digital footprint.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="/src/assets/images/about-banner.webp"
              alt="Product screenshot"
              className="w-[48rem] max-w-none"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      <div className="whychoose py-24 bg-slate-100">
          <SiteTitle title="Why Choose us" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-1">
              {whyChoose.map((whyChoose) => (
                <div key={whyChoose.title} >
                    <div className="relative">
                      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 hover:bg-blue-600">
                          {/* <span className="absolute top-10 z-0  transition-all duration-300 group-hover:scale-[10]"></span> */}
                          <div className="relative z-10 mx-auto max-w-md">
                              <whyChoose.icon className="p-2 h-14 w-14 rounded-md place-items-center text-blue-600 transition-all duration-30 group-hover:bg-blue-400 group-hover:text-white"/>
                              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                  <h3>{whyChoose.title}</h3>
                                  <p>{whyChoose.description}</p>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
              ))} 
            </div>
          </div>  
      </div>

      <div className="platforms py-28 ">
          <SiteTitle title="Platforms We Work" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-5 gap-2">
                  {clients.map((logo) => (
                  <div key={logo.alt}>
                      <div className="client_image align-middle text-center">
                          <img src={logo.img} className="h-20 my-4 mx-auto"/>
                          <h5 className="capitalize">{logo.alt}</h5>
                      </div>
                  </div>
                   ))}
              </div>
          </div>
      </div>

      <Blog blog={posts} />
    </>
  );
}

export default Home;