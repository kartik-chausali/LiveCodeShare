/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Home(){

    const navigate = useNavigate();

    const[roomid, setRoomid] = useState('')
    const[username, setUsername] = useState('')

    const createNewRoom = (e)=>{
        e.preventDefault();
        const id = uuidv4();
        setRoomid(id);
        toast.success("Created new Room ");
    }

    const joinRoom = ()=>{
        if(!roomid || !username){
            toast.error("RoomID and Username is required");
            return;
        }

        navigate(`/editor/${roomid}`,{
            state:{
                username
            }
        });
    }

    const handleEnter = (e)=>{
        if(e.code == 'Enter'){
            joinRoom();
        }
    }

    return <div className="flex justify-center items-center h-screen ">
        <div className="bg-[#282a36] p-20 rounded-xl w-fit md:w-fit ">

            <div className="flex item-center mb-10">
            <div className="flex justify-center items-center ">
            <img className="mb-3 h-12 mr-0 rounded-full bg-transparent" src="https://w7.pngwing.com/pngs/129/262/png-transparent-computer-icons-organization-symbol-internet-blog-sync-blue-trademark-logo-thumbnail.png"/>
            <h2 className="text-[#747bff] ml-0 font-bold ml-2">Code Sync</h2>
            </div>
            
            </div>
            
        
           
            <h4 className="mb-5 mt-0">Paste the Room id</h4>
            <input type = "text" placeholder="Room Id" value={roomid} onChange={(e)=>setRoomid(e.target.value)} className="flex flex-col w-full mb-3 p-1 border rounded-md border-transparent focus:outline-none focus:ring hover:"/>
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} onKeyUp={handleEnter} className="flex flex-col w-full mb-3 p-1 border rounded-md border-transparent focus:outline-none focus:ring"/>
            <button type="button" onClick={joinRoom} onKeyUp={handleEnter}  className="text-white bg-gray-800 hover:bg-gray-900  cursor-pointer focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full h-fit">Join</button>
            <span className="ml-12">
                If you don't have roomId then create &nbsp;
                <a onClick={createNewRoom} href="" className="text-[#747bff]  border-b border-b-[#747bff] hover:cursor-pointer hover:border-b-black">create room</a>
            </span>
        </div>

        <footer className="bottom-0 fixed">
            <h4> Built by &nbsp;
                <a href="https://github.com/kartik-chausali" className="text-[#747bff] border-b-2 border-b-[#747bff] hover:border-b-black">kartik_chausali</a>
            </h4>
        </footer>
       
    </div>
}