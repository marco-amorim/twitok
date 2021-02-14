import { ObjectID } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		const { userId, clipId, isDisliked, isLiked } = req.body;

		if (isLiked) {
			db.collection('clips').updateOne(
				{
					_id: new ObjectID(clipId),
					likedBy: new ObjectID(userId),
				},
				{
					$inc: { likesCount: -1 },
					$pull: { likedBy: new ObjectID(userId) },
				}
			);
		}

		if (!isDisliked) {
			db.collection('clips').updateOne(
				{
					_id: new ObjectID(clipId),
					dislikedBy: { $ne: new ObjectID(userId) },
				},
				{
					$inc: { dislikesCount: 1 },
					$push: { dislikedBy: new ObjectID(userId) },
				}
			);
		}

		if (isDisliked) {
			db.collection('clips').updateOne(
				{
					_id: new ObjectID(clipId),
					dislikedBy: new ObjectID(userId),
				},
				{
					$inc: { dislikesCount: -1 },
					$pull: { dislikedBy: new ObjectID(userId) },
				}
			);
		}

		res.status(200);
		res.send({ message: 'Updated dislike state successfully' });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to dislike Clip', error });
	}
};
