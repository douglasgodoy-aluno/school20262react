
export default function Header(){
    return (
        <header className="text-center text-white bg-[#4d4d4d] py-8 md:flex justify-between "  >
        <div className="mb-2">
            <h2>🏫ESCOLA DE INFORMÁTICA📕</h2>
        </div>

        <nav className="space-x-2">
            <a href="">Home</a>
            <a href="">Curso HTML</a>
            <a href="">Curso CSS</a>
            <a href="">Curso JS</a>
            <a href="">Contato</a>
        </nav>
    </header>
    )
}