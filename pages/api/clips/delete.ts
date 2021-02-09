import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		const { clipId } = req.body;

		res.status(201);
		res.send({ clip: 'clip goes here' });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to delete Clip', error });
	}
};
