import React from "react"

export default function Main(props) {
    return (
        <React.Fragment>
            <div>
                <h1>All Articles</h1>
            </div>

            {
                props.data.map(
                    each => {
                        return (
                            <React.Fragment key={each._id}>
                                        <h4 className="card-title">{each.title}</h4>
                                        <div className="card-text">
                                            <h5>Ingredients</h5>
                                            {/* <ul>
                                                {
                                                    each.instructions.map(
                                                       (instructions,index) => 
                                                        <li key={index}>{instructions}</li> 
                                                        
                                                    )
                                                }
                                            </ul> */}
                                        </div>
                            </React.Fragment>
                        )
                    })
            }

        </React.Fragment>
    )
}