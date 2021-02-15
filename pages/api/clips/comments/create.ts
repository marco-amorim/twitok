import { ObjectID } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		const { comment, clipId } = req.body;

		db.collection('clips').updateOne(
			{
				_id: new ObjectID(clipId),
			},
			{
				$inc: { commentsCount: 1 },
				$push: { comments: comment },
			}
		);

		console.log(comment);
		console.log(clipId);

		res.status(201);
		res.send({ message: 'Comment created successfully' });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to create Comment', error });
	}
};
