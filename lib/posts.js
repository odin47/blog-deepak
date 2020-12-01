import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

export const getSortedPosts = () => {
	//Reads all the files in the post directory
	const fileNames = fs.readdirSync(postDirectory);

	const allPostsData = fileNames.map((fileName) => {
		const slug = fileName.replace('.mdx', '');

		const fullPath = path.join(postDirectory, fileName);
		//Extracts contents of the MDX file
		const fileContents = fs.readFileSync(fullPath, 'utf-8');
		const { data } = matter(fileContents);

		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		const formattedDate = new Date(data.date).toLocaleDateString(
			'en-IN',
			options
		);
		const frontmatter = {
			...data,
			date: formattedDate,
		};
		return {
			slug,
			...frontmatter,
		};
	});

	return allPostsData.sort((a, b) => {
		if (new Date(a.date) < new Date(b.date)) {
			return 1;
		} else {
			return -1;
		}
	});
};
