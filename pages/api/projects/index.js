import { firestore } from '../../../lib/firebase/admin';

const getProjects = (_req, res) => {
  firestore.collection('projects').get()
    .then(data => {
      let projects = [];
      data.forEach(project => {
        projects.push({ id: project.id, ...project.data()});
      });
      res.status(200).json({ projects });
    })
    .catch(() => {
      res.status(404).end();
    })
}

export default getProjects;