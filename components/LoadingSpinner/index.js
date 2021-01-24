import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { LoadingContainer } from './styles';

const LoadingSpinner = ({ width, height }) => {
	return (
		<LoadingContainer>
			<CircularProgress
				style={{
					color: 'var(--white)',
					textAlign: 'center',
					height: height,
					width: width,
				}}
			/>
		</LoadingContainer>
	);
};

export default LoadingSpinner;
