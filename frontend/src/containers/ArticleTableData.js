import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/article';
import ReactTable from '../components/Table'

class ShowAllArticles extends Component {

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     let title = this.title.value;
    //     let content = this.content.value;
    //     let article = {title, content};
    //     this.props.addArticle(article);
    // };

    componentDidMount() {
        console.log('ShowAllArticles: ', 22);
        // const {user,logout} = this.props;

        this.props.getAllArticles();
    }

    render() {
        console.log('this.props', this.props);
        const {error} = this.props;
        const columns = [
            {
                Header: 'header',
                accessor: 'name',
                width: '15%',
                // Cell: node => DealNameCell(node, redirectToDeal),
                filterable: false,
            },
            {
                Header: 'title',
                accessor: 'title',
                width: '15%',
                filterable: false,
            },
        ]

        const data = [
            {
                name: 'data-name',
                title: 'doc'
            },{
                name: 'data-name',
                title: 'doc'
            }
        ]

        return (
            <Fragment>
                <ReactTable columns={columns} data={data}>

                </ReactTable>
            </Fragment>
        )
    }
}

export default connect(
    state => state.article,
    actions
)(ShowAllArticles);
