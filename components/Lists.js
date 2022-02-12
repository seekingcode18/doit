import List from "./List"

export default function Lists({lists}) {
  return (
    <>
      <ul>
        {lists.map(list => (
          // <li key={list.id}>{list.id}</li>
          <List key={list.id} list={list} />
        ))}
      </ul>
    </>
  )
}
