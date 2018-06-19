import React, { Component } from 'react';

const RepoItem = (props) => {
    const repo = props.repo
    return (
        <div className="repo-item">
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <a href={repo.html_url} target="_blank">
        <small>{repo.html_url}</small></a>
        </div>
    )
}

class RepoList extends Component {
    constructor(props) {
        super(props)
        console.log('RepoList: constructor')
        this.state = {
            repos: []
        }
    }

    fetchRepos () {
           // Fetch
           const url = `https://api.github.com/users/${this.props.user}/repos`
           fetch(url).then(
               response => response.json()
           ).then ((repos) => {
               this.setState({repos: repos})
           })
    }
    // Depracated shortly
    componentWillMount() {
        console.log('RepoList: willMount')
    }
    // Will only be called once
    componentDidMount() {
     this.fetchRepos()
    }

    componentWillReceiveProps(nextprops) {
        console.log('RepoList: willRecieveProps')   
    }
    
    // Will always return boolean - true = update / false = dont
    shouldComponentUpdate(nextProps, nextState) {
        console.log('RepoList: shouldComponentUpdate')
        return true
    }

    // NOT SAFE
    componentWillUpdate() {
        console.log('RepoList: WillUpdate')
    }
    componentDidUpdate(prevProps, prevState) {
       if (this.props.user !== prevProps.user) {
        this.fetchRepos()
       }
        console.log('RepoList: DidUpdate')
    }

    //Cleanup - close db connection/port/network disconnect, destroy event handlers
    componentWillUnmount() {
        console.log('RepoList: willUnmount')
    }
    render () {
        console.log('RepoList: render')
        console.log(this.state.repos)
        return (
            <div>
            <h2>Repolist for user {this.props.user}</h2>
            { this.state.repos.map((repo, index) => {
                return <RepoItem key={repo.id} repo={repo} />              
            })}
        </div>)
    }
}

export default RepoList