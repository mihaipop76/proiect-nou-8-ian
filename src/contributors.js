import {useEffect, useState} from "react";

export function Contributors(){
    const[contributorsList, setContributorList] = useState(false)
    useEffect(()=>{
        fetch("contributers.json")
            .then((response)=>{
                return response.json()
            })
            .then((response)=>{
                setContributorList(response)
            })
    },[])
    // console.log(contributorsList)
    if(!contributorsList){
        return(
            <div>
                Incarcare date!
            </div>
        )
    }
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            {
                contributorsList.map((contributor)=>{
                    return(
                        <tr key={contributor.id}>
                            <th scope="row">{contributor.id}</th>
                            <td>{contributor.name}</td>
                            <td>{contributor.surname}</td>
                            <td>{contributor.contact}</td>
                        </tr>
                    )
                })
            }

            </tbody>
        </table>
    )
}
