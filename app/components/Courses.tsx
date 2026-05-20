import CourseCard from "./CourseCard";

export default function Courses() {
    return (
        <main id="courses" className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            <CourseCard href="/coursehtml" image="/img/html.svg" title="Curso de HTML" description="Conheça o curso de HTML que é o melhor..." />
            <CourseCard href="/coursecss" image="/img/css.svg" title="Curso de CSS" description="Conheça o curso de CSS que é ..." />
            <CourseCard href="/coursejs" image="/img/js.svg" title="Curso de JavaScript" description="Conheça o curso de JavaScript que é..." />
            <CourseCard href="/coursegames" image="/img/games.svg" title="Curso de Games" description="Conheça o curso de Games que é..." />
            <CourseCard href="/coursedesing" image="/img/design.svg" title="Curso de Design" description="Conheça o curso de Python que é..." />
            <CourseCard href="/courserobot" image="/img/robot.svg" title="Curso de Robótica" description="Conheça o curso de Robótica que é..." /> 
        </main>
    )
}