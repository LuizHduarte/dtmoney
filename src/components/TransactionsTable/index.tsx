import { Container } from "./styles"



export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="title"> Desenvolvimento website</td>
            <td className="deposit"> R$12.000</td>
            <td> Desenvoolvimento</td>
            <td> 20/02/2021</td>
          </tr>

          <tr>
            <td> Aluguel</td>
            <td className="withdraw"> - R$1.100</td>
            <td> Casa</td>
            <td> 17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )

}