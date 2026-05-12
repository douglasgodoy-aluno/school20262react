export default function Banner(){
    return (
        <div className="md:grid grid-cols-2 items-center">
        <div >
            <img src="/img/banner.svg" alt=""/>
        </div>
        <div className="text-center text-white">
            <h2>UTFPRTEC</h2>
            <h3>MELHOR ESCOLA DE INFORMÁTICA</h3>
            <button className="bg-green-500 px-4 py-2 rounded-lg hover:text-black m-4 " >Informações</button>

        </div>
    </div>
    )
}