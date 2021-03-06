import styled from 'styled-components';

export const UserMenuContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0px;
	right: 0px;
	z-index: 10;
	height: 45px;
	outline: none;

	@media (max-width: 767px) {
		position: unset;
		margin-bottom: 20px;
	}
`;

export const UserMenuImg = styled.img`
	border-radius: 50%;
	height: 35px;
	width: 35px;
`;
