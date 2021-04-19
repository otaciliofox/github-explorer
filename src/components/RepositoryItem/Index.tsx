export default function RepositoryItem({ Repository  }: RepositoryItemProps) {
	const { name, description, html_url } = Repository;
	return (
		<li>
			<strong>{name}</strong>
			<p>{description}</p>

			<a href={html_url}>Acessar Repositório</a>
		</li>
	);
}
