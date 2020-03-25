import React from 'react'

class AddItem extends React.Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    
    }
    onSubmit(e){
        e.preventDefault()
        this.props.onAdd(this.nameInput.value,this.regionInput.value)
        this.nameInput.value = '';
        this.regionInput.value = '';
    }
    render(){
       
        return(
            <form onSubmit={this.onSubmit} >
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" ref={nameInput => this.nameInput = nameInput} />
                </div>
                <div className="form-group">
                    <label >Region</label>
                    <input type="text" className="form-control" ref={regionInput => this.regionInput = regionInput} />
                </div>
                <button className="btn btn-primary" >Add</button>
            </form>
        )
    }
}

export default AddItem;