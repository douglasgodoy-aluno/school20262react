interface CourseCardProps {
    href: string;
    image: string;
    title: string;
    description: string;
}

export default function CourseCard(props: CourseCardProps) {
    
    return (
        <div className="bg-[#4d4d4d] rounded-lg pb-2">
            <a href={props.href}>
                <div>
                        <img src={props.image} alt="" />
                    </div>
                    <div className="text-center text-white">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                </a>
            </div>

    )
}