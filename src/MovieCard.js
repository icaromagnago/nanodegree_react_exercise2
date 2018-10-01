import React, { Component } from 'react';
import ListUser from './ListUser';

class MovieCard extends Component {
	render() {
      	const { users, usersIdWhoLikedMovie, movieInfo } = this.props;
      
    	return (
         	<li key={movieInfo.id}>
				<h2>{movieInfo.name}</h2>
				<h3>Liked By:</h3>
						
				{!usersIdWhoLikedMovie || usersIdWhoLikedMovie.length === 0 ? (
                	<p>None of the current users liked this movie</p>) : (
                 		<ListUser users={users} usersIdWhoLikedMovie={usersIdWhoLikedMovie} />	
                 	)
				}
			</li>
        )
    }
}

export default MovieCard;