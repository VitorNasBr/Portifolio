interface SkillsProps {
    img: string;
    alt: string;
    name?: string;
}

export function Skills( { img, alt } : SkillsProps ) {
    return(
        <div className="lg:w-20 lg:h-20 w-16 h-16 p-5 rounded-md bg-zinc-900 flex items-center justify-center">
            <img src={img} alt={alt} />
        </div>
    )
}