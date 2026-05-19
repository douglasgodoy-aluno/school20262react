
let pessoa : {
    nome: string,
    idade: number,
    profissao: string
} = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
}
console.log(pessoa.nome) // João


export default function MyButton(props: {children: React.ReactNode, bgColor?: string} ) {
   
    return (
        <button className={`${props.bgColor || 'bg-green-500'} px-4 py-2 rounded-lg hover:text-black m-4 `}>{props.children}</button>
    )
}