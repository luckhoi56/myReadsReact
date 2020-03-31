import React, {Component} from "react";

class Dashboard extends Component{
    
    render(){
        const {movies,users,m_list_g} = this.props;
        const temp = Object.keys(movies).map(id=>{
          if(m_list_g[id-1].length > 0 )
            return (
                <div>
                    <h2>{movies[id].name}</h2>
                    <p>Liked By:</p>
                    {
                        <ul>
                        {m_list_g[id-1].map(temp=>{
                             return <li>{users[`${temp}`].name}</li>
                        })}
                        </ul>
                    }
                </div>
                
            )
            else
                return (
                <div>
                    <h2>{movies[id].name}</h2>
                    <p>None of the current users liked this movie</p>
                </div>
                    )
        })
        return temp
    }
}

export default Dashboard;