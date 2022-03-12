
export const getProjects = async () => {
  const projects = await fetch(`https://portfolio-next-beta-gold.vercel.app/api/projects`);
  return await projects.json();
}

export const getProjectById = async (id) => {
  const project = await fetch(`https://portfolio-next-beta-gold.vercel.app/api/projects/${id}`);
  return await project.json();
}