import Image from "next/image"
import Link from "next/link"

type CardProps = {
    title: string;
    desc: string;
    year: string;
    role: string;
}

const ProjectCard = ({ title, desc, year, role }: CardProps) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="img-section">
                    <Image src="/work.png" alt="" height={345} width={480}></Image>
                </div>
                <div className="desc-section">
                    <div className="project-title">{title}</div>
                    <div className="project-desc">{desc}</div>
                    <div className="project-info">PROJECT INFO</div>
                    <div className="project-info"><div>Year</div> <div>{year}</div></div>
                    <div className="project-info"><div>Role</div> <div>{role}</div></div>
                    <div className="project-links">
                        <Link href="">View Project <Image src="/arrow.png" alt="" height={24} width={24}></Image></Link>
                        <Link href="">Github <Image src="/github.png" alt="" height={22} width={22}></Image></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard