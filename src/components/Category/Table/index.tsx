import { Category } from "@/@types/categories";
import styles from "./styles.module.css";

type Props = {
  categories: Category[];
};

// example: https://codepen.io/Gustavo-Uliano/pen/NWZOKOP
export default function CategoryTable(props: Props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Descrição</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.categories.map((category) => (
          <tr key={category.id}>
            <td>#{category.id}</td>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td>Alterar/Excluir/Visualizar</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
