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
            <div className="img-section">
                <Image src="/work.png" alt="" height={345} width={480}></Image>
            </div>
            <div className="desc-section">
                <div className="project-title">{title}</div>
                <div className="project-desc">{desc}</div>
                <div className="project-info">
                    Project Info
                    <table>
                        <tbody><tr>
                            <th>Year</th>
                            <td>{year}</td>
                        </tr>
                            <tr>
                                <th>Role</th>
                                <td>{role}</td>
                            </tr></tbody>

                    </table>
                </div>
                <div className="project-links">
                    <Link href="">View Project</Link>
                    <Link href="">Github</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard