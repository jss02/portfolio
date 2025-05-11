import ScrollAnimator from "./ScrollAnimator"

export default function SkillCard({ img, name, level }) {
    const levelBar = {
        "Beginner": "bg-green-500 w-1/4",
        "Intermediate": "bg-blue-500 w-1/2",
        "Proficient": "bg-purple-500 w-3/4",
        "Expert": "bg-red-500 w-max" 
    }

    const levelText = {
        "Beginner": "text-green-500",
        "Intermediate": "text-blue-500",
        "Proficient": "text-purple-500",
        "Expert": "text-red-500" 
    }

    return (
        <ScrollAnimator animation="slide-up" threshold={0.1}>
            <div className="flex gap-4 items-center">
                <img src={img} alt="card logo" className="size-8"/>
                <div className="w-full">
                    <div className="flex justify-between mb-2">
                        <span className="text-white">{name}</span>
                        <span className={levelText[level]}>{level}</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-2">
                        <div className={levelBar[level] + " h-2 rounded-full"}></div>
                    </div>
                </div>
            </div>
        </ScrollAnimator>
    )   
}