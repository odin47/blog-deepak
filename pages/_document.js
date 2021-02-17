import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
	static render() {
		return (
			<Html>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<link href="/fonts/fonts.css" rel="stylesheet" />
				</Head>
				<body>
					<Main />
				</body>
				<NextScript />
			</Html>
		);
	}
}
