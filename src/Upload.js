import { useEffect, useState } from 'react';
import clienteAxios from './config/axios';


function Upload() {

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('Choose file');
  const [uploadedFile, setUploadedFile] = useState({});

  const consultarApi =  async () =>{
    console.log('entrando a consultar api');
    // const consulta = await clienteAxios.post('/upload');
    // console.log(consulta);
    // clienteAxios.post('/upload',1)
    //             .then(res => {console.log(res)});
    // console.log(clienteAxios.post('/upload'));
  }

  // useEffect(()=>{
  //   consultarApi();
  // });
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    console.log('adding file');
    try{
      const res = await clienteAxios.post('/upload',formData,{
        headers:{
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      });
      const fileName = res.data;
      console.log(res.data);
      console.log('test log');
    }
    catch(err){
      console.log(err);
    }
    consultarApi();
  }
  
  const addFile = e =>{

    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);

 
    
    // clienteAxios.post('/upload', file)
    //             .then(res =>{
    //               console.log(res);
    //             });
  }

  return (
    <div className="Upload container w-50">
        Upload your files here!
        <form onSubmit={onSubmit} method="post" encType="multipart/form-data">
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile" onChange={addFile}/>
          <label className="custom-file-label" for="customFile">{fileName}</label>
        </div>
        <button type="submit">Submit</button>
        </form>
       
    </div>
  );
}


export default Upload;
