export const SITE = {
	name: 'E Pluribus Unum Again',
	title: 'Make America E Pluribus Unum Again',
	description:
		'A civic art project bringing “E Pluribus Unum”—“Out of many, one”—back into everyday view.',
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
		timeZone: 'UTC',
	}).format(date);
}
