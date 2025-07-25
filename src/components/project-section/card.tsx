
import { div } from "framer-motion/client";
import Image from "next/image"
import Link from "next/link"

type CardProps = {
    img: string;
    title: string;
    desc: string;
    year: string;
    role: string;
    link?: string | "";
    repo?: string | "";
    frontendRepo?: string | "";
    backendRepo?: string | "";
}

const ProjectCard = ({ img, title, desc, year, role, link, repo, frontendRepo, backendRepo }: CardProps) => {
    return (
        <div className="card" >
            <div className="project-title">{title}</div>
            <div className="card-content">
                <div className="img-section">
                    <Image src={img || "/default.png"} alt="" height={340} width={480}></Image>
                </div>
                <div className="desc-section">
                    <div className="project-desc">{desc}</div>
                    {/* <div className="project-info">PROJECT INFO</div>
                    <div className="project-info"><div>Year</div> <div>{year}</div></div>
                    <div className="project-info"><div>Role</div> <div>{role}</div></div> */}
                    <div className="project-links">
                        {link && link !== "(in progress)" ? <Link href={link} target="_blank">View Project <Image src="/arrow.png" alt="" height={24} width={24}></Image></Link> : <div>In Progress</div>
                        }
                        {repo && <Link href={repo} target="_blank">Github <Image src="/github.png" alt="" height={22} width={22}></Image></Link>}
                        {frontendRepo && frontendRepo !== "(in progress)" ? <Link href={frontendRepo} target="_blank">Frontend Repo <Image src="/github.png" alt="" height={22} width={22}></Image></Link> : <div>In Progress</div>}
                        {backendRepo && backendRepo !== "(in progress)" ? <Link href={backendRepo} target="_blank">Backend Repo <Image src="/github.png" alt="" height={22} width={22}></Image></Link> : <div>In Progress</div>}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard