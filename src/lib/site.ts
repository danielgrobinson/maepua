export const SITE = {
	name: 'Maepua',
	title: 'Maepua — Work, images, and field notes',
	description: 'A warm editorial collection of projects, photographs, and articles.',
	email: 'hello@example.com',
};

export function route(path = '') {
	const base = import.meta.env.BASE_URL;
	const cleanPath = path.replace(/^\/+/, '');
	return cleanPath ? `${base}${cleanPath}` : base;
}

export function formatDate(date: Date) {
	return new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}).format(date);
}
