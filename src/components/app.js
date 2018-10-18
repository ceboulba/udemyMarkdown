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

class App extends React.Component {

    state = {
        text: sampleText
    };

    editText = (event) => {
        const text = event.target.value;
        this.setState({text})
    }

    renderText = (text) => {
        const renderText = Marked(text, {sanitize: true});
        return { __html: renderText }
    };

    render() {
        return (
            <div className="container" style={myBorders}>
                <h1 className="title is-1 has-text-centered">The Markdown</h1>
                <div className="columns is-mobile">
                    <div className="column is-half">
                        <h2 className="title is-3 has-text-centered">Les entrées</h2>
                        <textarea value={this.state.text} rows="25" className="textarea" onChange={(e) => this.editText(e)} />

                        </textarea>
                    </div>
                    <div className="column is-half" style={borderLeft}>
                        <h2 className="title is-3 has-text-centered">Resultats
                        </h2>
                        <p dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App