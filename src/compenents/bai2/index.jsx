import React,{useState} from 'react'
import './styles.css'
const Ex2 = () => {
  const [Name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPass,setConfirmPass]=useState('')
  const [text1,setText]=useState('')
  function changeName(e){
    setName(e.target.value)
  }
  function changePassword(e){
    setPassword(e.target.value)
  }
  function confirmPassword(e){
    setConfirmPass(e.target.value)
  }
  function submit(e){
    e.preventDefault()
     if(Name==''||password==''||confirmPass==''){
      setText('hidden')
       alert('yeu cau nhap lai')
    }
     else if(password!=confirmPass){
      setText('hidden')
       alert('yêu cầu nhập lại mật khẩu')
      } else setText(Name)
  }
  return (
    <div>
        <form action="" onSubmit={submit}>
        <input type="text" placeholder='userName' onChange={changeName}/>
        <input type="password" name="" id="" placeholder='password' onChange={changePassword}/>
        <input type="password" name="" id="" placeholder='confirm password' onChange={confirmPassword}/>
        <input type="submit" value="Submit" />
        </form>
        {text1&&<h1 className={text1}>WELCOME,{text1}</h1>}
    </div>
  )
}

export default Ex2