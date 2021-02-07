import { ObjectID } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { db } = await connect();

		const { userId, clipId, isLiked } = req.body;

		if (!isLiked) {
			db.collection('clips').updateOne(
				{
					_id: new ObjectID(clipId),
					likedBy: { $ne: new ObjectID(userId) },
				},
				{
					$inc: { likesCount: 1 },
					$push: { likedBy: new ObjectID(userId) },
				}
			);
		}

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

		res.status(201);
		res.send({ message: 'Liked successfully' });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to like Clip', error });
	}
};
