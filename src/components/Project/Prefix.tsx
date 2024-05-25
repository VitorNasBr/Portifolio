interface PrefixProps {
    img: string;
    alt: string;

}

export function Prefix(props: PrefixProps) {
    return(
        <img src={props.img} alt={props.alt} />
    )
}