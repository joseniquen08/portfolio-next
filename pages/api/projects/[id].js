import { firestore } from '../../../lib/firebase/admin';

export default async function getProjectById (req, res) {
  const { query } = req;
  const { id } = query;

  const data = await firestore.collection('projects').doc(id).get();

  if (!data) res.status(404).json({});

  return res.status(200).json(data.data());
}
