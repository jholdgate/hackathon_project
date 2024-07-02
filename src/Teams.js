import {useEffect, useState} from 'react'

export default function Teams({$ref}){
  const [data, setData] = useState({})
  const [logoUrl, setLogoUrl] = useState('')

  useEffect(() => {
    fetch($ref)
      .then(res => res.json())
      .then(data => {
        setData(data)

      if (data.team && data.team.$ref) {
        fetch(data.team.$ref)
          .then(res => res.json())
          .then(teamData => {

            if (teamData.logos && teamData.logos.length > 0) {
              setLogoUrl(teamData.logos[0].href)
            }
          })
        }
      })
  }, [$ref])

  if(Object.keys(data).length < 1){
    return <h1>Loading...</h1>
  }
  return(
    <div>
      <h1>{data.name}</h1>
      {logoUrl ? <img height="100px" alt={data.name} src={logoUrl} /> : <p>Loading Logo...</p>}
    </div>
  )
}