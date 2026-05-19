import MyButton from "./MyButton";

export default function Banner(){
    return (
        <div className="md:grid grid-cols-2 items-center">
        <div >
            <img src="/img/banner.svg" alt=""/>
        </div>
        <div className="text-center text-white">
            <h2>UTFPRTEC</h2>
            <h3>MELHOR ESCOLA DE INFORMÁTICA</h3>
            <MyButton> Saiba Mais  </MyButton>
        </div>
    </div>
    )
}