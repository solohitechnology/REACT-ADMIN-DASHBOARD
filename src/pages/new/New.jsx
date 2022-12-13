import './new.scss';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { useState } from 'react';

const New = ({ inputs, title }) => {

    const [file, setfile] = useState(" ");

    console.log(file)
    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>;
                </div>
                <div className="bottom">
                    <div className="left">
                        {/* <img src={file ? URL.createObjectURL(file) : ''} alt="" /> */}
                    </div>
                    <div className="right">
                        <form>
                            <div className="forminput">
                                <label htmlFor='file'>
                                    Image: <DriveFolderUploadOutlined className='icon' />
                                </label>
                                <input type="file" id='file'
                                    onChange={e => setfile(e.target.files[0])}
                                    style={{ display: 'none' }} />

                                <input type="file" id='file' style={{ display: 'none' }} />
                            </div>
                            {inputs.map((input) => (

                                <div className="forminput" key={input.id}>
                                    <label>{input.lable}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>

                            ))}

                            <button>Send</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default New;