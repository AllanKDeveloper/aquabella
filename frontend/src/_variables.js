const size = {
	ss: '375px',
	sm: '541px',
	md: '768px',
	xl: '1024px',
	xxl: '1440px',
};

const device = {
	ss: `(max-width: ${size.ss})`,
	sm: `(max-width: ${size.sm})`,
	md: `(max-width: ${size.md})`,
	xl: `(max-width: ${size.xl})`,
	xxl: `(max-width: ${size.xxl})`,
};

export default { size, device };
