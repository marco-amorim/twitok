import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { data } = await axios.post(
			`https://id.twitch.tv/oauth2/token`,
			null,
			{
				params: {
					client_id: process.env.TWITCH_CLIENT_ID,
					client_secret: process.env.TWITCH_CLIENT_SECRET,
					grant_type: 'client_credentials',
				},
			}
		);
		res.send(data);
	} catch (error) {
		res.status(500);
		res.send({
			message: 'We are having trouble trying to reach the access token, sorry',
			error: error,
		});
	}
};
