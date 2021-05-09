import fs from 'fs';
import * as moment from 'moment';
import matter from 'gray-matter';
import path from 'path';
const getDirectoryPath = (directoryName) => {
	return path.join(process.cwd(), directoryName)
}

const getFileContentSync = (path, type = 'utf-8') => {
	return fs.readFileSync(path, type)
}

const getFileNameListSync = (path) => {
	return fs.readdirSync(path)
}


const getFormattedDate = (date, format="DD-MM-YYYY") => {
	return moment(date).format(format)
}

const getMarkdownContent = (fileContent) => {
	return matter(fileContent)
}

const flattenArray = (arr) => {
	return (
		[...new Set(arr.flat())]
	)
}

export {
	flattenArray,
	getDirectoryPath,
	getFileContentSync,
	getFileNameListSync,
	getFormattedDate,
	getMarkdownContent
}