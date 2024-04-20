import Banner from "../components/Banner";
const Home = () => {
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

      <div className="py-20">
        <div className="container md:mx-auto">
          <div className="grid grid-cols-2 gap-2">
          <div className="">
            <h2 className="text-4xl font-bold mb-5">About Us</h2>
            <p className="text-slate-700 text-lg">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sem magna, sodales varius mi non, lacinia consequat quam. Proin quis massa tincidunt, interdum lorem tempus, varius turpis. Vestibulum eget arcu posuere, molestie purus sed, porta erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum rhoncus tellus ex, eu porttitor orci pretium id. Morbi eu porttitor augue. Sed posuere, risus nec vestibulum finibus, nunc nisi dignissim urna, eget tristique dolor lorem vel nunc. Nullam vitae pharetra ante. Proin gravida nunc tellus, a maximus ante pharetra id. Quisque bibendum nisl non tellus aliquam aliquet. Etiam ut venenatis quam. Suspendisse id dui eros.</p>
          </div>
          <div className="text-center">
              <img className="h-72 mx-auto w-auto" src="/src/assets/logo/computer-spider.png" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;