import { ObjectID } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		const { clipId } = req.body;

		db.collection('clips').updateOne(
			{
				_id: new ObjectID(clipId),
			},
			{
				$inc: { commentsCount: -1 },
				// TODO: I need to create a comment ID in some way, so I can tell which comment should be deleted
				$pull: { comments: 'Comment ID goes here' },
			}
		);

		res.status(200);
		res.send({ message: 'Updated dislike state successfully' });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to dislike Clip', error });
	}
};
