
export default function Home({tasks}) {
  return (
    <div>
      <ul>
        {tasks.map((task, i) => {
          return (
        <li>
          <h3>{tasks.name}</h3>
        </li>

          )
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {

  const tasks = await fetch('http://localhost:3000/api/tasks')
  .then(res => res.json())
  .then(data => data)
  
  return {
    props: {
      tasks
    }
  }
}

