import { ObjectID } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		const { clipId } = req.query;

		const commentsList = await db
			.collection('clips')
			.findOne({ _id: new ObjectID(clipId.toString()) })
			.then((doc) => {
				return doc.comments;
			});

		console.log(commentsList);

		res.status(200);
		res.send({ comments: commentsList });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to fetch Comments', error });
	}
};
