import { clients } from "../constants"
const Clients = () => {
  return (
    <section id="clients" className=" flex  md:flex-row flex-wrap justify-around items-center ">
      {
        clients.map((client) => (
          <div key={client.id} className="  my-5  w-48">
            <img src={client.logo} alt="Client Logo" className=""/>
          </div>

        ))
      }
      

    </section>
  )
}

export default Clients