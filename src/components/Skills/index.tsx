interface SkillsProps {
    img: string;
    alt: string;
    name?: string;
}

export function Skills( { img, alt } : SkillsProps ) {
    return(
        <div className="w-24 h-24 p-5 rounded-md bg-zinc-900 flex items-center justify-center">
            <img src={img} alt={alt} />
        </div>
    )
}