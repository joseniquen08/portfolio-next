
export const getProjects = async () => {
  const projects = await fetch(`https://portfolio-next-beta-gold.vercel.app/api/projects`)
  .then(response => response.json());
  console.log(projects);
  return await projects.json();
}

export const getProjectById = async (id) => {
  const project = await fetch(`https://portfolio-next-beta-gold.vercel.app/api/projects/${id}`)
  .then(response => response.json());
  return await project.json();
}