import React from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


class Formhanlder extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedFile: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
        })
    }
    submit(){
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:3001/upload";

        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res);
        })
    }
    render(){
        return(
            <div className="row">
                <h3 className="text-white">Node file Upload</h3>
                <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                <div className="form-row">
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Formhanlder;

// const [selectedFile, setSelectedFile] = React.useState(null);

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const formData = new FormData();
//         formData.append("selectedFile", selectedFile);
//         try {
//             const response = await axios({
//                 method: 'post',
//                 url: 'http://localhost:3001/upload',
//                 data: formData,
//                 headers: {"Content-Type": "multipart/form-data"}
//             });
//         } catch(error){
//             console.log(error)
//         }
//     }
//     const handleFileSelect = (event) => {
//         setSelectedFile(event.target.files[0])
//     }
//     return (
//         <div>
//             <form type = 'file' onChange={handleSubmit}>
//                 <input type="file" onChange={handleFileSelect} />
//                 <input type="submit" value="Upload file" />
//             </form>
//         </div>
//     );
// }