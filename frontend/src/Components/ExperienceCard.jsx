export default function ExperienceCard({title, description, dotPoints, type, img, startDate, endDate}) {
    return (
        <div className="my-10 flex flex-col md:flex-row justify-between gap-5 items-center md:items-start ">
            <div className="flex flex-col items-center md:block">
                <h5 className="text-3xl font-bold">{title}</h5>
                <p className="text-2xl">{description}</p>
                {dotPoints && dotPoints.length > 0 && (
                    <ul className="marker:text-blue-500 list-disc pl-6">
                        {dotPoints.map((point, index) => (<li key={index} className="text-xl">{point}</li>))}
                    </ul>
                )}
            </div>
            <div className="flex flex-row text-xl gap-5 items-center">
                <div className="flex flex-col items-center">
                    {(startDate || endDate) && (
                        <div className="">
                            {startDate && <span>{startDate}</span>}
                            {(startDate && endDate && <span> - </span>)}
                            {endDate && <span>{endDate}</span>}
                        </div>
                    )}
                    {type && <div>{type}</div>}
                </div>
                {img && <img className="size-32" src={img} alt='Institution logo'></img>}
            </div>
        </div>
    )
}