/// <reference types="react-scripts" />
interface RepositoryItemProps {
  Repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

interface Repository {
  name: string;
  description: string;
  html_url: string;
}
