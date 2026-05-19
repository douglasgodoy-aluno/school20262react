import Header from "../components/Header";
import MyButton from "../components/MyButton";

export default function page() {

    return (
        <div>
           
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Sobre o Curso de HTML</h1>
                <p className="mb-4">
                    Este curso de HTML é ideal para iniciantes que desejam aprender os fundamentos da linguagem de marcação utilizada para criar páginas web. Você aprenderá a estruturar conteúdo, criar links, inserir imagens e muito mais.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Detalhes do Curso</h2>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Preço:</strong> R$ 299,00</li>
                    <li><strong>Período:</strong> 4 semanas</li>
                    <li><strong>Forma de Matrícula:</strong> Através do nosso site, preenchendo o formulário online disponível na página inicial.</li>
                </ul>

                 <MyButton> <strong>Comprar</strong>  </MyButton>
                
                 <MyButton bgColor="bg-red-500"> <strong>Excluir</strong>  </MyButton>
               
            </div>
        </div>
    )
}