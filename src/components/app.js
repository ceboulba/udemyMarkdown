import React from 'react';
import { sampleText } from './sampleText';
import Marked from 'marked'

//un peu de style
const myBorders = {
    border: '4px solid black',
    padding: '1em'
}
const borderLeft = {
    borderLeft: "2px dotted grey"
}

const pad = {
    padding: "0 1em"
}

class App extends React.Component {

    state = {
        text: sampleText
    };

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('text', nextState.text)
    }

    componentWillMount() {
        const localStorageText = localStorage.getItem('text')

        if(localStorage) {
            this.setState( { text : localStorageText})
        }
    }

    editText = (event) => {
        const text = event.target.value;
        this.setState({ text })
    }

    renderText = (text) => {
        const renderText = Marked(text, { sanitize: true });
        return { __html: renderText }
    };

    render() {
        return (
            <div className="container" style={myBorders}>
                <div className="section">
                    <h1 className="title is-1 has-text-centered">The Markdown</h1>
                </div>
                <div className="section">
                    <div className="columns is-mobile">
                        <div className="column is-half">
                            <div className="title is-3 has-text-centered">Les entrées</div>
                            <div className="content"  style={pad}>
                                <textarea value={this.state.text} rows="20" className="textarea" onChange={(e) => this.editText(e)} />
                            </div>
                        </div>
                        <div className="column is-half" style={borderLeft}>
                            <h2 className="title is-3 has-text-centered">Resultats
                        </h2>
                        <div className="content">
                            <p dangerouslySetInnerHTML={this.renderText(this.state.text)}></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App