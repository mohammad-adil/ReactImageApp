import React from 'react'

class searchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            onChange={(e) => this.setState({ term: e.target.value })}
                            value={this.state.term}
                        />
                    </div>

                </form>


            </div>
        );
    };
};

export default searchBar