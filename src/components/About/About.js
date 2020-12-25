import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';
import styles from '../About/About.module.css';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		bio:'',
		name:'',
		isError: false,
		errorValue:'',
		

	}

    componentDidMount(){
    	octokit.repos.listForUser({
    		username: 'oxyrud'
    	}).then(({data}) => {
    		this.setState({
                repoList: data,
                isLoading: false,
                
                
    		})
    		console.log(data)
    	})
    	.catch(e => 
    		this.setState({
    	        isError: true,
    	        isLoading: false,
                errorValue: e.name
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
    	        isLoading: false,
    	        errorValue: e.name
    	    }),
    	   
    	)

    }

	render() {
		const {isLoading, repoList,name,bio,isError,errorValue} = this.state;

		return (
			<h2> {!isError ?
            <CardContent>
                /* ошибка
                {<div> {isLoading ? <CircularProgress /> : <img scr= {repoList.map(repo =>{repo.avatar_url})}></img>} </div>}
                */
                <h1> {isLoading ? <CircularProgress /> : name} </h1>
                <h2> {isLoading ? <CircularProgress /> : bio} </h2>
	            <h2> { isLoading ? <CircularProgress /> : 'My  repos'}</h2>
                {!isLoading &&<ol>{repoList.map(repo => (<li key = {repo.id}>
                		<a href={repo.html_url}>{repo.name}</a>
                	</li>))}
                	</ol>}
	        </CardContent> 
	        : errorValue} </h2>       
	    );
	}    
}

export default About;
