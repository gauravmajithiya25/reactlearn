import { useState, useEffect } from 'react'

function ApiExample() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000))
                const res = await fetch('https://api.restful-api.dev/objects')
                if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
                const data = await res.json()
                setItems(data)
            } catch (err) {
                console.log(err.message)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [])
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

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