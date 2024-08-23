export interface GridProps {}

export default function Grid({}: GridProps) {
  const mockData = [
    { name: 'Luke Skywalker', description: 'A Jedi Knight.' },
    { name: 'Darth Vader', description: 'The Sith Lord.' },
    { name: 'Leia Organa', description: 'Princess of Alderaan.' },
    { name: 'Han Solo', description: 'A smuggler and pilot.' },
    { name: 'Yoda', description: 'A wise Jedi Master.' },
    { name: 'Obi-Wan Kenobi', description: 'A mentor to Luke Skywalker.' },
  ];

  return (
    <section className='p-10'>
      <ul className='grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6'>
        {mockData.map((item, index) => (
          <li key={index} className='list-none rounded-lg border p-4'>
            <h3 className='font-bold'>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
