// import React from 'react'
// import axios from 'axios'
// import { Form } from 'semantic-ui-react'

// class Api extends React.Component{

//     constructor(){
//         super()
//         this.state = {
//             lists: [],
//             title: "",
//             description: "",
//             status: "",
//             createdAt: "",
//         }
//     }
//     componentWillMount(){
//         const apiUrl = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'
//         axios.get(apiUrl)
//         .then(lists => {
//             console.log(lists.data)
//             this.setState({
//                 lists: lists.data
//             })
//         })
//     }

//     saveDataToApi(e){
//         debugger
//         e.preventDefault();
//         const apiUrl = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'
//         const dataList = {
//             id: this.state.id,
//             title: this.state.title,
//             description: this.state.description,
//             status: this.state.status,
//             createdAt: this.state.createdAt
//         }
//         axios.post(apiUrl, dataList) 
//     }
//     render(){
//         const {lists} = this.state
//         return(
//             <div>
//                 <div className="header">
//                     <h3>Todo List</h3>
//                 </div>

//                 <div className="add">
//                 { lists.length < 1 && <div></div>} 
//                 <pre>debug title: {this.state.title}</pre>
//                 <pre>debug description: {this.state.description}</pre>
//                 <pre>debug status: {this.state.status}</pre>
//                 <h3>Add List</h3>
//                 <form method="post" onSubmit={ (e) => this.saveDataToApi(e)}>
//                     <label>Title:</label>
//                     <input type="text" name="title" 
//                     onChange={(e) => {
//                         this.setState({title: e.target.value})
//                     }}
//                     />
//                     <br/>
//                     <label>Description:</label>
//                     <input type="text" name="description"
//                     onChange={(e) => {
//                         this.setState({description: e.target.value})
//                     }}
//                     />
//                     <br/>
//                     <label>Status:</label>
//                     <select onChange={(e) => {
//                         this.setState({status: e.target.value})
//                     }}>
//                         <option>0</option>
//                         <option>1</option>
//                     </select>
//                     <br/>
//                     <button type="submit">Add</button> 
//                 </form>
//                 <h3>List</h3>
//                 <ul> 
//                 {this.state.lists.map( (list, idx) => {
//                     return (
//                         <div key={idx}>
//                             Title= {list.title}
//                             Description= {list.description}
//                             Status= {list.status}
//                         </div>
                        
//                     )
//                 })}
//                 </ul>
//                 </div>
//             </div>
//         )
//     }

// }

// export default Api;