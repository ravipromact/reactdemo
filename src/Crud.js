import React from 'react'
import IemList from './ItemList'
import AddItem from './AddItem'

const actors = [
    {name:'Allu Arjun', region:'South'},
    {name:'Jr. NTR', region:'South'},
    {name:'Emraan Hashmi', region:'Bollywood'}
]
localStorage.setItem('actors',JSON.stringify(actors))

class Crud extends React.Component{
    constructor(props){
        super(props)
        this.onAdd = this.onAdd.bind(this)
        this.onEditSubmit = this.onEditSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.state={
            actors:JSON.parse(localStorage.getItem('actors'))
        }
    
    }
    componentWillMount(){
        const actorsList = this.getActors()
        this.setState({actors:actorsList})
    }
    getActors(){
        return this.state.actors
    }
    onDelete(name){
        const actorsList = this.getActors()
        const filteredlist = actorsList.filter(actor=>{
            return actor.name !== name
        })
        this.setState({actors:filteredlist})
    }
    onAdd(name,region){
        const actorsList = this.getActors()
        actorsList.push({name,region})
        this.setState({
            actors:actorsList
        })
    }
    onEditSubmit(name,region,originalname){
        let actorsList = this.getActors()
        actorsList = actorsList.map(actor =>{
            if(actor.name === originalname){
                actor.name = name;
                actor.region = region
            }
            return actor
        })
        this.setState({actors:actorsList})
    }
    render(){
       
        return(
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                    <AddItem onAdd={this.onAdd}/>
                        <table className="table table-bordered mt-5">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Region</th>
                                    <th>Optiond</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                {this.state.actors.map(actor=>
                                {
                                    return(
                                        <IemList key={actor.name} {...actor} onEditSubmit={this.onEditSubmit} onDelete={this.onDelete}/>
                                    )
                                }
                                
                                )}
                                </tbody>
                        </table>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Crud;