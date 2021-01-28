export default async (req, res) => {
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
};
