export default async (req, res) => {
	try {
		const { clipId, userId } = req.body;

		const newClip = {
			clipId,
			userId,
			likesCount: 0,
			likedBy: [],
			commentsCount: 0,
			comments: [],
		};

		console.log(newClip);

		res.status(201);
		res.send({ message: 'Clip created succesfully' });
	} catch (error) {
		res.status(500);
		res.send({ message: 'Error trying to create Clip', error });
	}
};
