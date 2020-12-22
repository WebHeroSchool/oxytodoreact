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
		name:''
	}

    componentDidMount(){
    	octokit.repos.listForUser({
    		username: 'oxyrud'
    	}).then(({data}) => {
    		this.setState({
                repoList: data,
                isLoading: false
    		});
    	});

        octokit.users.getByUsername({
            username:'oxyrud'
        }).then(({data}) => {
        	this.setState({
        		bio: data,
        		name: data

        	});
        });

    }

	render() {
		const {isLoading, repoList} = this.state;

		return (
            <CardContent>
	            <h1> { isLoading ? <CircularProgress /> : 'Мои репозитории'}</h1>
                {!isLoading &&
                	<p>{name}</p>
                	<p>{bio}</p>
                	<ol>
                	{repoList.map(repo => (<li key = {repo.id}>
                		<a href={repo.html_url}>{repo.name}</a>
                	</li>))}
                	</ol>}
	        </CardContent>
	    );
	}    
}

export default About;
