import { Repo } from './Repo';

const getRepo = async (owner: string, name: string): Promise<Repo> => {
  const req = await fetch(`https://api.github.com/repos/${owner}/${name}`);
  const json = await req.json();

  return json as Repo;
};

export default getRepo;
