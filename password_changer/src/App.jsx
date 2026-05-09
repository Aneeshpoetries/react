import { useCallback, useEffect, useState, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const[n_allow, setNumber]= useState(false)
  const[chara, setChara]=useState(false)
  const[pswd, setPswd]=useState("")
  const pdRef=useRef(null)
  const pswdGen= useCallback(()=>{
      let pd=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"

      if(n_allow){str+="0123456789"}
      if(chara){str+="!@#$%^&*()_+-={}[]|:;<>.,?/"}
      for(let i=1;i<=length;i++){
        let char=Math.floor(Math.random()*str.length+1)
        pd+=str.charAt(char);
      }
      setPswd(pd)

  },[length,n_allow,chara,setPswd])
  const copyPasswordToClipboard= useCallback(()=>{pdRef.current?.select(), pdRef.current?.setSelectionRange(0,101), window.navigator.clipboard.writeText(pswd)},[pswd])
  useEffect(()=>{pswdGen()},[length,n_allow,chara,pswdGen])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-gray-500 bg-gray-800'>
          <h2 className='text-white text-center my-3'>Password Generator</h2>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-gray-50'>
            <input type='text' value={pswd} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={pdRef} />
            <button className='hover:cursor-pointer text-white outline-none px-3 py-0.5 shrink -0 bg-blue-700' onClick={copyPasswordToClipboard}>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input type="range" min={6} max={100} value={length} className='cursor-pointer'onChange={(e)=>{setLength(e.target.value)}}/>
                <label className='text-m px-1 py-0.5 text-orange-800'>Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                      defaultChecked={n_allow}
                      id='numberInput'
                      onChange={()=>{setNumber((prev)=>!prev)}}
                      />
              <label htmlFor='numberInput'className='text-orange-800'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                      defaultChecked={n_allow}
                      id='charaInput'
                      onChange={()=>{setChara((prev)=>!prev)}}
                      />
              <label htmlFor='charaInput'className='text-orange-800'>Characters</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
