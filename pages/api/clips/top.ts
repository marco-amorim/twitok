import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		const skip =
			req.query.skip && /^\d+$/.test(req.query.skip.toString())
				? Number(req.query.skip)
				: 0;

		const clips = await db
			.collection('clips')
			.find()
			.skip(skip)
			.limit(2)
			.sort({ likesCount: -1 })
			.toArray();

		res.status(200);
		res.send({ data: clips });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to fetch Top Clips', error });
	}
};
