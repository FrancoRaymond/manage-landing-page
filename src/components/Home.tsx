import intro from '../assets/images/illustration-intro.svg'

const Home = () => {
  return (
    <div className="homeSection px-2.5 sm:px-5 md:px-10 lg:px-24 py-6 flex flex-col-reverse md:items-center gap-5 sm:py-10 sm:grid sm:grid-cols-2 lg:py-14">
      <section className='text-center flex flex-col gap-5 sm:text-left lg:gap-10'>
        <h1 className='text-4xl font-bold text-blue-950 lg:text-5xl'>Bring everyone<br /> together to build<br /> better products</h1>
        <p className='text-gray-400 lg:max-w-[350px]'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the team goals in view.</p>
        <button className='text-sm mx-auto sm:mx-0 text-white rounded-3xl py-2 px-4 bg-[#f25f3a] w-fit'>Get Statrted</button>
      </section>
      <img src={intro} alt="" className='shadow'/>
  </div>
  )
}

export default Home
