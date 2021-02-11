import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { LoadingContainer } from './styles';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ width, height, color }) => {
	return (
		<LoadingContainer>
			<CircularProgress
				style={{
					color: color,
					textAlign: 'center',
					width: width,
					height: height,
				}}
			/>
		</LoadingContainer>
	);
};

LoadingSpinner.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

export default LoadingSpinner;
