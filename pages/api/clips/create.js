import { connect } from '../../../utils/database';

export default async (req, res) => {
	try {
		const { db } = await connect();

		const { clipId, user } = req.body;

		const newClip = {
			clipId,
			user,
			likesCount: 0,
			likedBy: [],
			dislikesCount: 0,
			dislikedBy: [],
			commentsCount: 0,
			comments: [],
			createdAt: new Date(),
		};

		const result = await db.collection('clips').insertOne(newClip);

		res.status(201);
		res.send({ clip: result.ops[0] });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to create Clip', error });
	}
};
