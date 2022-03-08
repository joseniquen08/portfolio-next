export const getProjects = async () => {
  const projects = await fetch(`http://localhost:3000/api/projects`);
  return await projects.json();
}

export const getProjectById = async (id) => {
  const project = await fetch(`http://localhost:3000/api/projects/${id}`);
  return await project.json();
}