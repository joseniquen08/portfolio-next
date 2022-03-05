import { firestore } from '../../../lib/firebase/admin';

const getProjectById = (req, res) => {
  const { query } = req;
  const { id } = query;

  firestore.collection('projects').doc(id).get()
    .then(doc => {
      res.json(doc.data());
    })
    .catch(() => {
      res.status(404).end();
    })
}

export default getProjectById;