/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react"
import Client from "../components/Client"
import EditorComponent from "../components/EditorComponent"
import {initSocket} from '../../socket'
import ACTIONS from "../../Action";

export default function Editor(){

  const socketRef = useRef(null);

  useEffect(()=>{
    const init = async()=>{
      socketRef.current = await initSocket();
      //socketRef.current.emit(ACTIONS.JOIN);
    }
    init();
  },[])


  const [clientList, setClientList] = useState([
    {socketID:1, username:"Rakes"},
    {socketID:2, username:"Ramesh"},
    {socketID:3, username:"he"},

  ])
    return <div id="mainwrap" className="flex h-screen gap-0">
      <div id="aside" className="p-3 bg-[#747bff] flex flex-col w-2/6">


        <div id="asideInsider" className="flex-1">
        <div id="logo" className="border-b-2 border-b-[#424242] pb-3">
        <img className="rounded-full h-20 w-20 border-b-white-5" src="https://w7.pngwing.com/pngs/129/262/png-transparent-computer-icons-organization-symbol-internet-blog-sync-blue-trademark-logo-thumbnail.png"/>    
        </div> 

        <h3>Connected</h3>
        
        <div id="clientList" className="flex  flex-wrap items-center gap-3">
            {clientList.map(client=>{
                return <Client key={client.socketID} username={client.username} />
            })}
        </div>
        </div>


        <button type="button" className="text-white w-full cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Copy RoomID</button>
        <button type="button" className="text-white w-full cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Leave</button>

      </div>

      <div id="editorWrap" className="w-full h-full ">
        <EditorComponent />
      </div>
    </div>
}