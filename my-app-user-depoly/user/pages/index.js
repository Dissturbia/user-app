import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';


export default class User extends React.Component {
    state = {
        username : null,
        user : null,
    }
    handleSubmit = e => {
        e.preventDefault()

        const {username} = this.state

        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(user => this.setState({user}))
        .catch(err => console.error(err))
    }
    render(){
        const {user} =  this.state
        return (
            <div className="main-container">
            <Head>
          <link href="https://fonts.googleapis.com/css?family=Michroma" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Gaegu" rel="stylesheet"/>
            <title>Github</title>
          </Head>

                {user &&(
                    <div>
                        <img className = "avatar" src = {user.avatar_url} alt={user.login} width={50}/>
                        <h3>{user.name}</h3>
                        <p>{user.bio}</p>
                        </div>

                )}
                <form onSubmit= {this.handleSubmit}>
                <input 
                type="text"
                placeholder="Type your Github user..."
                onChange={e=> this.setState({username:e.target.value})} />
                <button type = "submit">Go!❤</button>
                </form>

                <img src= '/static/octo1.png' alt ='imagen'/>
                <img src= '/static/octo3.png' alt ='imagen'/>
                <img src= '/static/octo4.png' alt ='imagen'/>
                <img src= '/static/octo5.png' alt ='imagen'/>

                
                <h5>Hecho con ❤ by Gise</h5> 

                <style jsx>{`

                      h5 {
                          text-align:center;
                          font-family: 'Gaegu', cursive;
                          color: #F0A4E0;
                          
                          
                      }

                      

                    .main-container {
                        display:inline-block;
                        justify-content: center;
                        align-items: center;
                        margin-left: 200px;
                        height:400px;
                        padding : 80px;
                        background-image: url(/static/wallpaper.jpg);
                        background-position: center; 
                        }

                    img {
                        width: 70px;
                        height: 70px; 
                        margin-right: -16px;

                        
                        
                   
                    }

                    h3 {
                        font-family : 'Michroma', sans-serif;
                        color :#BAF5EF ;
                        text-align: center;
                    }

                    p {
                        font-family : 'Michroma', sans-serif;
                        color : #A6ECE5;
                        text-align: center;

                    }

                    .avatar {

                        margin-left: 70px;
                        



                    }

                    
                    

                `}</style>
                   
                 <style global jsx>{`
                         body {
                            background:#B9D5D2 ;
                                }
                `}</style> 
                               
                    
                </div>
        )
    }
}