/* eslint-disable react/prop-types */
import Avatar from "react-avatar";

export default function Client({username}){
    return <div className="flex flex-col items-center">
        <Avatar name={username} size="50px" round='14px'/>
        <span className="font-bold mt-1">{username}</span>
    </div>
}