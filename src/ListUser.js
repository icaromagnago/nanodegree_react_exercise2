import React, { Component } from 'react';

class ListUser extends Component {
	render() {
      	const { users, usersIdWhoLikedMovie} = this.props;
      
    	return (
        	<ul>
          		{usersIdWhoLikedMovie && usersIdWhoLikedMovie.map(userId => {
           			return (
           				<li key={userId}>
          					<p>{users[userId].name}</p>
						</li>
					)                        
				})}
			</ul>
        )
    }
}

export default ListUser;