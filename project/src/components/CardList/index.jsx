import React from 'react';
import CardItem from '../Card/CardItem';
import Loader from '../Loader/index';

export default class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            isLoading: false,
            error:null,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('/api/words')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                this.setState({
                    words: response,
                    isLoading: false,
                })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        const { words, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p><Loader/></p>;
        }
        return(
            <section className="card-box">
                {
                words.map((word) => <CardItem key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected}></CardItem>)
                }
            </section>

        )
    }
}

// export default function CardList(props) {
//     return(
//         <section className="card-box">
//             {
//             words.map((word) => <CardItem key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected}></CardItem>)
//             }
//         </section>
//     );
// }