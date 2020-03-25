import React from 'react'

class ItemList extends React.Component{
    constructor(props){
        super(props)
        this.onEdit = this.onEdit.bind(this)
        this.onEditSubmit = this.onEditSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.state={
            isEdit:false
        }
    }
    onDelete(){
        const{name,onDelete} = this.props
        onDelete(name)
    }
    onEdit(){
        this.setState({isEdit:true})
    }
    onEditSubmit(e){
        e.preventDefault()
        this.props.onEditSubmit(this.nameInput.value,this.regionInput.value,this.props.name)
        this.setState({isEdit:false})
    }
    render(){
       const{name,region} = this.props
        return(
            <>
                {
                    this.state.isEdit
                    ?(
                        <tr key={name}>
                            <td colSpan='3'>
                                
                            <form onSubmit={this.onEditSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <input type="text" className="form-control" ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
                                    </div>
                                    <div className="form-group col-md-5">
                                        <input type="text" className="form-control" ref={regionInput => this.regionInput = regionInput} defaultValue={region} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <button className="btn btn-success">Save</button>
                                    </div>
                                </div>
                            </form>
                            </td>
                        </tr>
                    
                    ):(
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{region}</td>
                            <td>
                                <button className="btn btn-warning mr-3" onClick={this.onEdit}>Edit</button> 
                                <button className="btn btn-danger" onClick={this.onDelete}>Delete</button>
                            </td>
                        </tr> 
                    )
                }

            </>
            
        )
    }
}

export default ItemList;