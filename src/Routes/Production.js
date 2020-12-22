import React from "react";
const Produection = ({production, countries}) => {
    return (
        <div>
            <h2>Production Countries</h2>
            <div style={{paddingBottom:'20px'}}>
            {
                countries.map( (country, index) => {
                    return (
                        <div key={index}>- {country.name}({country.iso_3166_1})</div>
                    )
                })
            }
            </div>
            <h2>Production Companies</h2>
            <div>
            {
                production.map((company) => {
                    return (
                        <div key={company.id}>
                            <div style={ {paddingBottom: '10px'} }>
                                {company.logo_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                    width="200px" alt={company.name} />
                                )}
                                <p>🔳{company.name}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}
export default Produection;