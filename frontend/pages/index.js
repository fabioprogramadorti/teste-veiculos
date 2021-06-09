import Head from 'next/head'
import { Container } from 'react-bootstrap'

function Home({ veiculos }) {
  return (
    <Container>
      <Head>
        <title>Lista de Veículos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container'>
        <h1 className='text-center my-3'>
          Lista de Veículos
          </h1>

        <table className="table table-striped my-2">
          <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col">Placa</th>
              <th scope="col">Chassi</th>
              <th scope="col">Renavam</th>
              <th scope="col">Modelo</th>
              <th scope="col">Marca</th>
              <th scope="col">Ano</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map(veiculo => (
              <tr className="text-center" key={veiculo._id}>
                <td>{veiculo.placa}</td>
                <td>{veiculo.chassi}</td>
                <td>{veiculo.renavam}</td>
                <td>{veiculo.modelo}</td>
                <td>{veiculo.marca}</td>
                <td>{veiculo.ano}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}

import 'isomorphic-fetch'
import axios from 'axios'
const API_URL = process.env.API_URL || 'http://localhost:4000'

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(`${API_URL}/veiculos`)
  const veiculos = res.data.veiculos

  // Pass data to the page via props
  return { props: { veiculos } }
}

export default Home