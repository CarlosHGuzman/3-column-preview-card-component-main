import { useEffect, useState } from "react"

const useTextCard = (text) =>{
    const [articleT, setArticleT] = useState()
    const title = text.split(" ")[0]
    const description = text.slice(title.length + 1, text.length -1)
    const objText = {
        title: title,
        description: description
    }
    useEffect(() => {
        setArticleT(objText)
    }, [false])

    return [objText.title, objText.description]
}

export default useTextCard