import { ProjectsSection } from "@/components/projects/projects-section";
export const generateMetadata = () => {
  return {
    title: `Projects | John Octavio`,
    description: `Projects Page of John Octavio's Personal Portfolio`
  };
}

export default function Projects() {
	return (
    <>
      <p className="text-start text-2xl font-semibold font-sora w-3/5 text-default">Featured Projects</p>
      <ProjectsSection />
    </>
	)
}