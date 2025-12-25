import type React from "react"
import { useState } from "react"

interface Props {
    task: { id: string, name: string, completed: boolean },
    onToggle: (id: string) => void,
    onDelete: (id: string) => void
}
export default function task({ task, onToggle, onDelete }: Props) {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCompletedTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
        onToggle(task.id)
    }

    

    return (
        <li key={task.id}>
            <label className={isCompleted ? 'isChecked' : ""}>
                <input type="checkbox" checked={isCompleted} onChange={handleCompletedTask} />
                {task.name}
            </label>
            <button className={isCompleted ? `isCompleted` : ""} onClick={()=>{onDelete(task.id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
            </button>
        </li>
    )
}