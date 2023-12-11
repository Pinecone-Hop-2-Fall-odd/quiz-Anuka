import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Index () {
    const router = useRouter()
    useEffect(() => {
const uid = localStorage.getItem("uid")
if(!uid) {
router.push("/main")
} else {
    router.push("/signup")
}
    }, [])
    return ( 
        <div>efiygkaudyg</div>
    )
}