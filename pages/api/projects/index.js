import { firestore } from '../../../lib/firebase/admin';

export default async function getProjects (_req, res) {
  let projects = [];
  const data = await firestore.collection('projects').get();

  if (!data) {
    return res.status(404).json({});
  }

  data.forEach(project => {
    projects.push({ id: project.id, ...project.data()});
  });

  return res.status(200).json({ projects });
}
