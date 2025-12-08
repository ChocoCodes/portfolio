import { ProjectsSection } from "@/components/projects/projects-section";

export const metadata = {
  title: "Projects",
  description: "Showcasing featured projects by John Octavio, including web development and embedded system works."
};


export default function Projects() {
	return (
    <>
      <p className="text-start text-2xl font-semibold font-sora w-3/5 text-default">Featured Projects</p>
      <ProjectsSection />
    </>
	)
}