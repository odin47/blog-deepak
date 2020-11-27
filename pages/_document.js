import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
	static render() {
		return (
			<Html>
				<Head>
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
