import Projects from '@/components/sections/work/projects';
import { getProjects } from '@/functions/get';
import { Project } from '@/lib/interface';

export default async function Page() {
  const projects: Project[] = await getProjects();
  return (
    <>
      <Projects projects={projects} />
    </>
  );
}
