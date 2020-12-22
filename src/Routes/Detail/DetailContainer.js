import React from 'react';
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        const {location: {pathname}} = props;
        this.state = {
            results: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/"),
            pathname: pathname
        }
    }

    async componentDidMount(){
        const {
            match: {params: {id}},
            history: {push}
        } = this.props;
        const {isMovie} = this.state;
        const parsedId = parseInt(id);

        if( isNaN(parsedId) ) {
            return push("/");
        }

        let results = "";

        try{
            if( isMovie ) {
                results = await moviesApi.movieDetail(parsedId);
            } else {
                results = await tvApi.showDetail(parsedId);
            }
            results = results.data;

        }catch{
            this.setState({
                error: "Can't find anything"
            })
        }finally{
            this.setState({
                loading: false,
                results
            })
        }


    }

    render() {
        const { results, error, loading, isMovie, pathname } = this.state;
        return (
            <DetailPresenter
                results={results}
                error={error}
                loading={loading}
                isMovie={isMovie}
                pathname={pathname}
            />
        )
    }
}
export default DetailContainer;