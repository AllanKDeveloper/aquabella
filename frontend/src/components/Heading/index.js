import Head from 'next/head';

export function Heading(seo) {
	return (
		<Head>
			<title>{seo?.seo?.metaTitle || 'Aquabella | Home'}</title>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
			/>
			{/* Google Specific */}
			<meta name="description" content={seo?.seo?.metaDescription || ''} />
			<meta name="keywords" content={seo?.seo?.keywords} />
			<meta name="author" content="Aquabella" />
			<link rel="canonical" href="https://beallankehl.vercel.app" />
			<meta property="og:image" content="/aquabella.png" />
			{/* Facebook */}
			<meta property="og:locale" content="pt_BR" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="/aquabella.png" />
			<meta
				property="og:title"
				content={seo?.seo?.metaTitle || 'Aquabella | Home'}
			/>
			<meta
				property="og:description"
				content={seo?.seo?.metaDescription || ''}
			/>
			<meta property="og:url" content="https://beallankehl.vercel.app" />
			<meta property="og:site_name" content="Aquabella" />
			{/* Twitter */}
			<meta name="twitter:card" content="summary" />
			<meta
				name="twitter:description"
				content={seo?.seo?.metaDescription || ''}
			/>
			<meta
				name="twitter:title"
				content={seo?.seo?.metaTitle || 'Aquabella | Home'}
			/>
			<meta name="twitter:site" content="@allankehl" />
			<meta name="twitter:creator" content="@allankehl" />
			<meta name="twitter:image" content="/aquabella.png" />
		</Head>
	);
}
