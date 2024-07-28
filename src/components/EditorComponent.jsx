/* eslint-disable no-unused-vars */
import {fromTextArea} from 'codemirror'
import { useEffect, useRef } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/dracula.css'
// import 'codemirror/addon/edit/closetag'
// import 'codemirror/addon/edit/closebrackets'


export default function EditorComponent(){
    const textAreaRef = useRef(null);
    useEffect(()=>{
        async function loadEditor(){
            
             var editor =   fromTextArea(textAreaRef.current, {
                    mode:{name:'javascript', json:true},
                    theme:'dracula',
                    autoCloseTags:true,
                    autoCloseBrackets:true,
                    lineNumbers:true,
                    indentWithTabs:true,
                    enterMode:"normal",
                    indentUnit:2,
                   });
                   editor.focus();
                   editor.setCursor({line:3, ch:5})
            editor.setSize("100%", "100%")
            
          
        }
         loadEditor()
        
    },[])

    return <textarea ref={textAreaRef} defaultValue={`function print(){console.log("hi there);}`}className='w-screen h-screen '></textarea>
}
