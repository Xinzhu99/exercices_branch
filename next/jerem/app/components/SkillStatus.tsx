import { SKILL_STATUS_VALUES } from "@/lib/db/schema"
export default function SkillStatus () {
    return (
        <>
            {SKILL_STATUS_VALUES.map((status)=>
            <option value={status} key={status}>{status}</option>)}
        </>
    )
}