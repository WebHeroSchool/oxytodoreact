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
		avatar:'',
        language:'',
        updated:''
	}

    componentDidMount(){
    	octokit.repos.listForUser({
    		username: 'oxyrud'
    	}).then(({data}) => {
    		this.setState({
                repoList: data,
                isLoading: false
    		})
    		console.log(data);
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
        		name: data.name,
        		avatar: data.avatar_url
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
		const {isLoading, repoList,name,bio,isError,errorValue,avatar} = this.state;

		return (
			<div> {!isError ?
            <CardContent>
            <div className={styles.about_wrap}>
                <div className={styles.about_avatar}> {isLoading ? <CircularProgress /> : <img src= {avatar}></img>} </div>
                <div className={styles.about_me}>
                    <h1> {isLoading ? <CircularProgress /> : name} </h1>
                    <h2> {isLoading ? <CircularProgress /> : bio} </h2>
                </div>
            </div>
	            <h2> { isLoading ? <CircularProgress /> : 'My  repos'}</h2>
                {!isLoading &&<ol>{repoList.map(repo => (<li key = {repo.id}>
                		<a href={repo.html_url}>{repo.name}</a>
                		<div>{repo.language}{repo.updated_at}</div>
                	</li>))}
                	</ol>}
	        </CardContent> 
	        : errorValue} </div>       
	    );
	}    
}

export default About;
