import { useState, useEffect } from 'react';
import RepositoryItem from '../RepositoryItem/Index';
import './style.scss';

export function RepositoryList() {
	const [ repositories, setRepositories ] = useState<Repository[]>([]);

	useEffect(() => {
		fetch('https://api.github.com/orgs/rocketseat/repos')
			.then((response) => response.json())
			.then((data) => setRepositories(data));
	}, []);

	return (
		<section className="repository-list">
			<h1>Lista de Repositórios</h1>
			<ul>
				{repositories.map((repository) => <RepositoryItem key={repository.name} Repository={repository} />)}
			</ul>
		</section>
	);
}
