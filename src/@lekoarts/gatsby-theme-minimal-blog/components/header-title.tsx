import * as React from 'react';
import OriginalHeaderTitle from '@lekoarts/gatsby-theme-minimal-blog/src/components/header-title';
import { Flex } from '@theme-ui/components';

const HeaderTitle = (props: React.ComponentProps<any>) => {
	return (
		<Flex sx={{ alignItems: 'center' }}>
			<OriginalHeaderTitle {...props} />
		</Flex>
	);
};

export default HeaderTitle;
