import React,{useState} from 'react'

function TodoInput(props) {
    const [inputText,setInputText]=useState('')
    const handlePressEnter=(e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
        
    }
    
    return (
    <div className="input-container">
        <input type="text" className="input-box-todo" placeholder='Enter you todo'
            value={inputText}
            onChange={e=>{
                setInputText(e.target.value)
            }}
           onKeyDown={handlePressEnter}
            //on adding any text this will take that text in value
        />
        <button className='add-btn'
        onClick={()=>{
           props.addList(inputText)
           setInputText("")
        }}
        >+</button>
    </div>
  )
}

export default TodoInput
