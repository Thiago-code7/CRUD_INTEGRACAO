import { useEffect, useState } from "react"; // importas os hooks do react
import AlunoService from "../../services/alunoService";

function AlunoForm(){
    const[matricula, setMatricula] = useState('');
    const[nome, setNome] = useState('');
    const[cod_curso, setCod_curso] = useState('');

    //Função para criar um curso
    const handleSubmit = async(e) =>{
        e.preventDefault(); //Evita o recarregamento da página
        const data = await AlunoService.criar({matricula, nome, cod_curso})
        console.log(data);
        setNome('');
        setMatricula('');
        setCod_curso('')
    };
    const codCursoPattern = "^[A-Z][0-9]{3}$";
    const matriculaPattern = "^[A-Z][0-9]{4}$";
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" // código do curso
                    placeholder="Código do Aluno (ex:A1234)"
                    value={matricula}//linkando a variavel de estado
                    pattern={matriculaPattern} //validando com o regex
                    onChange={(e) => setMatricula(e.target.value)} //Atualiza o estado
                    maxLength={5}
                    minLength={5}
                    required //campo obrigatorio
                />
                 <input
                    type="text" // nome do curso
                    placeholder="Informe o nome do aluno"
                    value={nome}//linkando a variavel de estado
                    onChange={(e) => setNome(e.target.value)} //Atualiza o estado
                    required //campo obrigatorio
                />
                  <input
                type="text"
                placeholder="Código do curso (ex: C101)"
                value={cod_curso}
                onChange={(e) => setCod_curso(e.target.value)}
                pattern={codCursoPattern}
                maxLength={4}
                minLength={4}
                required
            />
                <button type="submit">Cadastrar</button>
            </form>
        
        </>
    )

}
export default AlunoForm;

