import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		const clips = await db.collection('clips').find().toArray();

		res.status(200);
		res.send({ clips: clips });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to fetch Clips', error });
	}
};