import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner';

const InfiniteScroll = ({ loading, setLoading, data, amount, setAmount }) => {
	useEffect(() => {
		addScrollToWindow();

		return () => {
			resetScrollOnWindow();
		};
	});

	const handleScroll = () => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			if (amount != data.length) {
				setLoading(true);
				setAmount(data.length);
			}
		}
	};

	const addScrollToWindow = () => {
		window.addEventListener('scroll', handleScroll);
	};

	const resetScrollOnWindow = () => {
		window.removeEventListener('scroll', handleScroll);
	};

	return (
		<>
			{loading ? (
				<LoadingSpinner
					color="var(--purple-default)"
					height="50px"
					width="50px"
				/>
			) : null}
		</>
	);
};

InfiniteScroll.propTypes = {
	loading: PropTypes.bool.isRequired,
	setLoading: PropTypes.func.isRequired,
	amount: PropTypes.number.isRequired,
	setAmount: PropTypes.func.isRequired,
	data: PropTypes.array.isRequired,
};

export default InfiniteScroll;
