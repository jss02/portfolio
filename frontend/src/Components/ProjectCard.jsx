import ScrollAnimator from './ScrollAnimator'

export default function ProjectCard( {title, description, dotPoints, languages, libraries, link, date, img} ) {
    return (
        <ScrollAnimator animation="expand" threshold={0.1}>
        <div className="my-10 flex flex-row justify-between p-5 shadow-lg dark:shadow-slate-950 rounded-lg text-l">
            <div>
                <h5 className="text-2xl font-bold">{title}</h5>
                <p className="text-xl">{description}</p>
                {link && <div>🔗<a href={link} target="_blank" rel='noreferrer' className="underline text-blue-600 visited:text-purple-600">{link}</a></div>}
                {languages.length > 0 && <p>Languages: {languages.join(', ')}</p>}
                {libraries.length > 0 && <p>Libraries: {libraries.join(', ')}</p>}
                {dotPoints && dotPoints.length > 0 && (
                    <ul className="marker:text-blue-500 list-disc pl-6">
                        {dotPoints.map((point, index) => (<li key={index}>{point}</li>))}
                    </ul>
                )}
            </div>
            <div className="flex flex-row text-xl gap-5 items-center">
                <div className="flex flex-col items-center">
                    {date && <div>{date}</div>}
                </div>
                <div>
                    {img && <img className="size-32" src={img} alt='Project logo'></img>}
                </div>
            </div>
        </div>
        </ScrollAnimator>
    )
}