import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		bio:'',
		name:'',
		isError: false
	}

    componentDidMount(){
    	octokit.repos.listForUser({
    		username: 'oxyrud'
    	}).then(({data}) => {
    		this.setState({
                repoList: data,
                isLoading: false
    		})
    	})
    	.catch(e => 
    		this.setState({
    	        isError: true,
    	        isLoading: false
    	    })
    	)
    	
        octokit.users.getByUsername({
            username:'oxyrud'
        }).then(({data}) => {
        	this.setState({
        		bio: data.bio,
        		name: data.name
        	})
        })
        .catch(e => 
    		this.setState({
    	        isError: true,
    	        isLoading: false
    	    })
    	)

    }

	render() {
		const {isLoading, repoList,name,bio,isError} = this.state;

		return (
			<h2> {!isError ?
            <CardContent>
                <h1> {isLoading ? <CircularProgress /> : name} </h1>
                <h2> {isLoading ? <CircularProgress /> : bio} </h2>
	            <h2> { isLoading ? <CircularProgress /> : 'My  repos'}</h2>
                {!isLoading &&<ol>{repoList.map(repo => (<li key = {repo.id}>
                		<a href={repo.html_url}>{repo.name}</a>
                	</li>))}
                	</ol>}
	        </CardContent> 
	        : 'Error'} </h2>       
	    );
	}    
}

export default About;
