import { prisma } from "@/libs/prisma";


async function loadTasks() {
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTasks();

  // cada elemento que se recorre en react tiene q tener un key unico, en este caso task.id
  return (
  <section className="container mx-auto">
    <div className="grid grid-cols-3 gap-3 mt-10">
    {tasks.map(task => (
      <div key={task.id} className="bg-slate-900 p-3 rounded hover:bg-slate-800 hover::cursor-pointer">
        <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
        <p>{task.description}</p>
        <hr/>
        <p>creado el: {new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
    ))}
  </div>
  </section>
  )
}

export default HomePage;
