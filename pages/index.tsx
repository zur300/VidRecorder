// imports:


import Link from "next/link"
import React,{useEffect, useRef, useState} from "react"
  
 function Home() {

    const [name,setName] = useState ('')
    const [password,setPassword] = useState('')

   const nameref= useRef();
   const passwordref = useRef();

    // const nameref = useRef()
    // const passwordref = useRef()

    useEffect(()=>{
        if((nameref.current.value === 'admin') && (passwordref.current.value === 'admin')){
              setName('admin')
        }else if((nameref.current.value === 'user') && (passwordref.current.value === 'user')){
            setName('user')
      }else{
        setName('guest')
        }   
    },[name,password])

    return (
            <div className="index-div">
            <h1>Register</h1>
            <input type='text' placeholder='Username' ref={nameref} onChange={(e)=>{setName(e.target.value)}}/>
            <input type='password' placeholder='Password'  ref={passwordref}onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
                    <button >
                    <section>
            <Link 
            href={{
                pathname: '/Record',
                query: {
                    search: name
                    }
                    }}
                    > Enter
                        </Link>
                        </section>
                    </button>
            <p>No account? <Link href='/Record' style={{color:'blue'}}>Create one!</Link></p>
            </div>
    );
}

export default Home;
