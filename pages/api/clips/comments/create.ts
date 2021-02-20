import { ObjectID } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		db.listenerCount;

		const { comment, clipId } = req.body;

		const newComment = {
			_id: new ObjectID(),
			...comment,
		};

		db.collection('clips').updateOne(
			{
				_id: new ObjectID(clipId),
			},
			{
				$push: { comments: newComment },
				$inc: { commentsCount: 1 },
			}
		);

		res.status(201);
		res.send({ message: 'Comment created successfully' });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to create Comment', error });
	}
};
