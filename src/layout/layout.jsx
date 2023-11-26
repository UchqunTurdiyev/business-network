import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';

export default function Layout({ children }) {
	return (
		<Box>
			<Box>{children}</Box>
		</Box>
	);
}

export const withLayout = Component => {
	return function withLayoutComponent(props) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
