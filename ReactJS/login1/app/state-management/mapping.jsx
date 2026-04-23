

const classname = [
    {id: 1, name: "jide"},
    {id: 2, name: "work1"},
    {id: 3, name: "work2"},
    {id: 4, name: "work3"},
    {id: 5, name: "work4"}
]

//const classname = ["jide", "pluto", "white", "mario", "praise", "freedom"]


export default function Mapping(){
    return(
        <div>
            {classname.map((name, index)=> (<p key={index}>{name}</p>))}
        </div>
    )
}