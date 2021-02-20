import { ObjectID } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		const { clipId, commentId } = req.body;

		db.collection('clips').updateOne(
			{
				_id: new ObjectID(clipId),
				commentsCount: { $gt: 0 },
			},
			{
				$inc: { commentsCount: -1 },
				$pull: { comments: { _id: new ObjectID(commentId) } },
			}
		);

		res.status(200);
		res.send({ message: 'Comment deleted successfully' });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to delete Comment', error });
	}
};
