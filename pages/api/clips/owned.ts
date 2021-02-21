import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		const skip =
			req.query.skip && /^\d+$/.test(req.query.skip.toString())
				? Number(req.query.skip)
				: 0;

		const userId = req.query.userId;

		const clips = await db
			.collection('clips')
			.find({ 'user.id': userId })
			.skip(skip)
			.limit(5)
			.sort({ createdAt: -1 })
			.toArray();

		res.status(200);
		res.send({ data: clips });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to fetch User Clips', error });
	}
};
