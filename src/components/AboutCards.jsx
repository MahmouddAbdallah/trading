
const AboutCards = () => {
    const cards = [
        {
            title: 'Mastery',
            desc: "We aim to provide and offer numerous educational courses that fully assist individuals in acquiring knowledge and achieving financial prosperity."
        },
        {
            title: 'Financial',
            desc: "We are committed to delivering our training courses in an advanced and distinguished manner, dynamically and profoundly."
        },
        {
            title: 'Skills',
            desc: "Developing distinguished scientific and practical cadres in various fields including digital currencies, foreign currencies, marketing."
        },
        {
            title: 'Knowledge',
            desc: "The academy aims for these cadres to be able to compete in financial markets through training with trainers in most fields"
        },
        {
            title: 'Success',
            desc: "providing an advanced and distinguished educational environment, and developing individuals' scientific and practical skills."
        },
        {
            title: 'Empowerment',
            desc: "making them capable of education, achieving financial income, and accomplishing the difficult equation."
        },
    ]
    return (
        <div className="grid grid-cols-12 gap-5">
            {cards.map((card, index) => (
                <div
                    className="col-span-12 sm:col-span-6 lg:col-span-4"
                    key={card.title}
                >
                    <div className={`py-3 px-3 rounded-xl space-y-3 h-full ${index % 2 == 0 ? 'card-services' : "border border-white"}`}>
                        <span className="text-[#448CAE] text-3xl font-medium relative block">
                            0{index + 1}
                            <div className={`w-11 h-6 rounded-t-full bg-[#448CAE]/10 absolute top-0 left-0 ${index % 2 == 0 ? 'rotate-45' : "-rotate-45 -left-3"}`} />
                        </span>
                        <div className="">
                            <h6 className="text-base md:text-xl font-medium">{card.title}</h6>
                            <p>{card.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AboutCards