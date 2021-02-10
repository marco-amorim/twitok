import { ObjectID } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();
		const { clipId } = req.body;

		db.collection('clips').deleteOne({ _id: new ObjectID(clipId) });

		res.status(200);
		res.send({ message: 'Clip successfully deleted' });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to delete Clip', error });
	}
};
