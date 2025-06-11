import { useEffect, useState } from "react"; // importas os hooks do react
import AlunoService from "../../services/alunoService";

function ListarAlunos() {
    //Estado para armazenar os cursos
    const [alunos, setAlunos] = useState([]);

    //Função para carregar a lista de cursos 
    const carregar = async () => {
        const lista = await CursoService.listar();
        console.log(lista);
        // Atualiza o estado (cursos) com a lista recebida, caso não receba um array é setado um array vazio para o estado.
        setCursos(Array.isArray(lista) ? lista : []);
    }

    //Executa a função carregar ao montar o componente ([])
    useEffect(() => {
        carregar();
    }, []);


    return (
        <>
            <h1>Listagem de alunos</h1>
            {
                alunos.length === 0 ?
                    (
                        <p>Nenhum aluno cadastrado no sistema.</p>
                    )
                    :
                    (
                        <table>
                            <thead>
                                <tr>
                                    <th>matricula</th>
                                    <th>nome do aluno</th>
                                    <th>codigo do curso</th>
                                    <th>nome do curso</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alunos.map((a) => (
                                        <tr key={a.matricula}>
                                            <td>{a.matricula}</td>
                                            <td>{a.nome}</td>
                                            <td>{a.cod_curso}</td>
                                            <td>{a.curso.nome}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )

            }
        </>
    )
}

export default ListarAlunos;