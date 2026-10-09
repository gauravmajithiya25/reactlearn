import { useState, useEffect } from 'react'

function ApiExample() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                console.log("gaurav2222");
                const res = await fetch('https://api.restful-api.dev/objects')
                console.log("gaurav");
                console.log(res);
                if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
                const data = await res.json()
                setItems(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [])



    return (
        <>

            <ul>
                {items.map((item) => (
                    <li>{item.name}</li>

                ))}
            </ul>
        </>
    )
}

export default ApiExample