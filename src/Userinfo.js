import React from 'react'

class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.nameField = React.createRef();
        this.ratingField = React.createRef();
        this.form = React.createRef();
        this.state={
            act:0,
            index:'',
            datas:[]
        }
    }

    addMovie = (e)=>{
        e.preventDefault();
        let datas = this.state.datas;
        let name = this.nameField.current.value;
        let ratings = this.ratingField.current.value;
        
        if(name !== '' && ratings !== '' && this.state.act === 0){            
            let data={
                name,ratings
            }
            datas.push(data)
        }else{
            let index = this.state.index;
            datas[index].name = name;
            datas[index].ratings = ratings;
        }

        this.setState({
            datas:datas,
            act:0
        })
        this.form.current.reset()
    }
    editMovie = (i)=>{
        let data = this.state.datas[i];
        this.nameField.current.value = data.name;
        this.ratingField.current.value = data.ratings
        this.setState({act:1,index:i})
    }
    removeMovie = (i)=>{
        let datas = this.state.datas;
        datas.splice(i,1)
        this.setState({
            datas:datas
        })
        this.form.current.reset()
    }

    render(){
       let datas = this.state.datas
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form ref={this.form}>
                            <input type="text" ref={this.nameField} className="form-control" placeholder="Movie name..."/>
                            <input type="text" ref={this.ratingField} className="form-control" placeholder="Ratings"/>
                            <button className="btn btn-success" onClick={(e)=>this.addMovie(e)}>Add user</button>
                        </form>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Ratings</th>
                                <th>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            {datas.map((movie,i) =><tr key={i+1}>
                                <td>{i+1}</td>
                                <td>{movie.name}</td>
                                <td>{movie.ratings}</td>
                                <td>
                                <button className="btn btn-warning" onClick={(e)=>this.editMovie(i)}>Edit</button>
                                <button className="btn btn-danger ml-2" onClick={()=>this.removeMovie(i)}>Delete</button>
                                </td>
                            </tr>)}
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;