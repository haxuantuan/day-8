import React,{useState} from 'react'
import './style.css'
const data=[
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      },
      {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
      },
      {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
      },
      {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
      },
      {
        "userId": 1,
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
      },
      {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
      },
      {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
      },
      {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true
      },
      {
        "userId": 1,
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true
      },
      {
        "userId": 1,
        "id": 16,
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true
      },
      {
        "userId": 1,
        "id": 17,
        "title": "quo laboriosam deleniti aut qui",
        "completed": true
      },
      {
        "userId": 1,
        "id": 18,
        "title": "dolorum est consequatur ea mollitia in culpa",
        "completed": false
      },
      {
        "userId": 1,
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true
      },
      {
        "userId": 1,
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": true
      }
]
function All({d,index,onClick}){
    return <>
        <div className='ex1' >
           <div>
             <div className='userID'>UserID :</div>
             <span>{d.userId}</span>
           </div>
           <div>
             <div className='Id'>ID :</div>
             <span>{d.id}</span>
           </div>
           <div>
             <div className='Completed'>Completed :</div>
             <span>{(d.completed)?'done':'not finished'}</span>
           </div>
           <button id={index} onClick={onClick}>Delete</button>
    </div>
        </>
}
let comp=data.filter((d)=>{
    return d.completed===true
})
let no_completed=data.filter((d)=>{
    return d.completed===false
})

const Ex1 = () => {
    const [datas,setDatas]=useState(data)
    function Btn(){
      return <>
        <div className='btn'>
      <button className='btn-completed' onClick={()=>setDatas(comp)}>Completed</button>
      <button className='btn-not-completed' onClick={()=>setDatas(no_completed)}>NOT Completed</button>
      <button className='btn-all' onClick={()=>setDatas(data)} >All</button>
        </div>
      </>
  }
    function deleteTodo(e){
      console.log(e.target.id)
      let deleteTodos=datas.filter((d,index)=>{
        return d.id!=e.target.id
      })
      setDatas(deleteTodos)
    }
  return (
    <div className='todolis'>
        <div>
            <Btn 
            />
        </div>
        {datas.map((data,index)=>{
            return <All
              index={data.id}
              onClick={deleteTodo}
              d={data}
            />
        })}
</div>
  )
}

export default Ex1