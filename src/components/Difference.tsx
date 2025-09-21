const Difference = () => {
  return (
    <div className="px-2.5 sm:px-5 md:px-10 lg:px-24 py-10 md:grid md:grid-cols-2 md:gap-10 lg:py-16">
        <div>
            <h1 className='text-3xl font-bold text-blue-950 text-center md:text-left'>What’s different about Manage?</h1>
            <p className='text-gray-400 lg:max-w-[350px] text-center mt-5 md:text-left'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
        </div>
        <div className="mt-10 flex flex-col gap-10 md:mt-0">
           <article>
                <div className="flex items-center gap-2 bg-orange-100 rounded-l-3xl md:bg-white">
                    <span className="bg-[#f25f3a] text-white py-0.5 px-4 rounded-3xl font-bold">01</span>
                    <h2 className="text-blue-950 font-semibold">Track company-wide progress</h2>
                </div>
                <p className="text-gray-400 mt-5 md:pl-16">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
           </article>
           <article>
                <div className="flex items-center gap-2 bg-orange-100 rounded-l-3xl md:bg-white">
                    <span className="bg-[#f25f3a] text-white py-0.5 px-4 rounded-3xl font-bold">02</span>
                    <h2 className="text-blue-950 font-semibold">Advanced built-in reports</h2>
                </div>
                <p className="text-gray-400 mt-5 md:pl-16">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
           </article>
           <article>
                <div className="flex items-center gap-2 bg-orange-100 rounded-l-3xl md:bg-white">
                    <span className="bg-[#f25f3a] text-white py-0.5 px-4 rounded-3xl font-bold">03</span>
                    <h2 className="text-blue-950 font-semibold">Everything you need in one place</h2>
                </div>
                <p className="text-gray-400 mt-5 md:pl-16">Everything you need in one place Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
           </article>
        </div>
    </div>
  )
}

export default Difference