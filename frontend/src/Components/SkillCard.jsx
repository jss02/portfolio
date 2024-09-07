import ScrollAnimator from "./ScrollAnimator"

export default function SkillCard({ img, name}) {
    const style = {
        background: 'radial-gradient(ellipse at top, #00ff1b, transparent), radial-gradient(ellipse at bottom, #001bff, transparent)'
    } 
    return (
        <ScrollAnimator animation="slide-up" threshold={0.1}>
            <div className="p-1 relative rounded-lg hover:bg-green" style={style}>
                <div className="py-3 px-6 bg-gray-50 rounded-md flex items-center gap-4 text-black w-52">
                    <img src={img} alt="card logo" className="size-14"/>
                    <div>{name}</div>
                </div>
            </div>
        </ScrollAnimator>
    )   
}